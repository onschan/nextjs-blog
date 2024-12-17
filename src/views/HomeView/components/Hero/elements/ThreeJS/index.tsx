import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as styles from "./styles";

export default function ThreeJS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationFrameId = useRef<number>();
  const clockRef = useRef<THREE.Clock>();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isUnmounted = false;
    let mixer: THREE.AnimationMixer | null = null;

    const initThreeJS = async () => {
      if (!containerRef.current || isUnmounted) return;

      try {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
          60,
          containerRef.current.clientWidth / containerRef.current.clientHeight,
          0.1,
          1000
        );

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: true,
        });

        rendererRef.current = renderer;
        clockRef.current = new THREE.Clock();

        renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setClearColor(0x000000, 0);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFShadowMap;

        containerRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1.2);
        pointLight.position.set(0, 75, 15);
        pointLight.castShadow = true;
        pointLight.shadow.mapSize.width = 4096;
        pointLight.shadow.mapSize.height = 4096;
        pointLight.shadow.radius = 16;
        scene.add(pointLight);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.screenSpacePanning = false;
        controls.minDistance = 3;
        controls.maxDistance = 10;
        controls.enableZoom = false;
        controls.target.set(0, 0, 0);

        const planeGeometry = new THREE.PlaneGeometry(32, 32);
        const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
        const shadow = new THREE.Mesh(planeGeometry, shadowMaterial);
        shadow.rotation.x = -Math.PI / 2;
        shadow.position.y = -1.15;
        shadow.receiveShadow = true;
        scene.add(shadow);

        camera.position.set(150, 100, 150);
        const initialFOV = 60;
        const targetCameraPosition = { x: 25, y: 5, z: 50 };
        const targetFOV = 25;
        const animationDuration = 2;

        // 모델 로딩
        return new Promise((resolve, reject) => {
          const loader = new GLTFLoader();
          loader.load(
            "/assets/models/hero.glb",
            gltf => {
              if (isUnmounted) {
                reject(new Error("Component unmounted"));
                return;
              }

              scene.add(gltf.scene);
              gltf.scene.scale.set(1, 1, 1);

              const box = new THREE.Box3().setFromObject(gltf.scene);
              const center = box.getCenter(new THREE.Vector3());
              gltf.scene.position.sub(center);

              gltf.scene.traverse(node => {
                if ((node as THREE.Mesh).isMesh) {
                  const mesh = node as THREE.Mesh;
                  mesh.castShadow = true;
                  mesh.receiveShadow = true;
                }
              });

              if (gltf.animations?.length) {
                mixer = new THREE.AnimationMixer(gltf.scene);
                gltf.animations.forEach(clip => {
                  const action = mixer!.clipAction(clip);
                  action.play();
                });
              }

              const animate = () => {
                if (isUnmounted || !clockRef.current) return;

                const deltaTime = clockRef.current.getDelta();
                const elapsedTime = clockRef.current.elapsedTime;

                if (elapsedTime < animationDuration) {
                  const progress = elapsedTime / animationDuration;
                  const easeProgress = 1 - Math.pow(1 - progress, 3);

                  camera.position.x = THREE.MathUtils.lerp(
                    150,
                    targetCameraPosition.x,
                    easeProgress
                  );
                  camera.position.y = THREE.MathUtils.lerp(
                    100,
                    targetCameraPosition.y,
                    easeProgress
                  );
                  camera.position.z = THREE.MathUtils.lerp(
                    150,
                    targetCameraPosition.z,
                    easeProgress
                  );

                  camera.fov = THREE.MathUtils.lerp(initialFOV, targetFOV, easeProgress);
                  camera.updateProjectionMatrix();
                }

                scene.rotation.y += 0.005;

                if (mixer) {
                  mixer.update(deltaTime);
                }

                controls.update();
                renderer.render(scene, camera);
                animationFrameId.current = requestAnimationFrame(animate);
              };

              const handleResize = () => {
                if (!containerRef.current || isUnmounted) return;

                camera.aspect =
                  containerRef.current.clientWidth / containerRef.current.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(
                  containerRef.current.clientWidth,
                  containerRef.current.clientHeight
                );
              };

              window.addEventListener("resize", handleResize);
              animate();
              resolve({ handleResize });
            },
            undefined,
            reject
          );
        });
      } catch (error) {
        console.error("ThreeJS initialization error:", error);
        throw error;
      }
    };

    // 약간의 지연 후 초기화
    const timer = setTimeout(() => {
      initThreeJS()
        .then(() => {
          if (!isUnmounted) {
            setIsLoading(false);
          }
        })
        .catch(error => {
          console.error("Failed to initialize ThreeJS:", error);
          if (!isUnmounted) {
            setHasError(true);
            setIsLoading(false);
          }
        });
    }, 100);

    return () => {
      isUnmounted = true;
      clearTimeout(timer);

      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }

      if (mixer) {
        mixer.stopAllAction();
      }

      if (rendererRef.current) {
        const gl = rendererRef.current.getContext();
        if (gl && gl.getExtension("WEBGL_lose_context")) {
          gl.getExtension("WEBGL_lose_context")?.loseContext();
        }

        rendererRef.current.dispose();
        rendererRef.current.forceContextLoss();

        if (rendererRef.current.domElement.parentElement) {
          rendererRef.current.domElement.parentElement.removeChild(rendererRef.current.domElement);
        }
      }

      rendererRef.current = null;
      clockRef.current = undefined;
    };
  }, []);

  return (
    <div ref={containerRef} css={styles.canvasContainer}>
      {isLoading && (
        <div css={styles.loadingSpinner}>
          <AiOutlineLoading3Quarters size={32} />
        </div>
      )}
      {hasError && !isLoading && (
        <div css={styles.errorContainer}>
          <p>Failed to load 3D model. Please refresh the page.</p>
        </div>
      )}
    </div>
  );
}
