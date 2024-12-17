import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as styles from "./styles";

export default function ThreeJS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!context) {
      console.error("WebGL is not supported in this browser.");
      setIsWebGLSupported(false);
      return;
    }

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
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);

    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(0, 75, 15);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.enableZoom = false;
    controls.target.set(0, 0, 0);

    let mixer: THREE.AnimationMixer | null = null;

    const loader = new GLTFLoader();
    loader.load(
      "/assets/models/hero.glb",
      gltf => {
        scene.add(gltf.scene);

        gltf.scene.scale.set(1, 1, 1);

        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        gltf.scene.position.sub(center);

        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(gltf.scene);
          gltf.animations.forEach(clip => {
            const action = mixer!.clipAction(clip);
            action.play();
          });
        }

        setIsLoading(false);
      },
      undefined,
      error => {
        console.error("Error loading GLB:", error);
        setIsLoading(false);
      }
    );

    camera.position.set(150, 100, 150);
    const initialFOV = 60;
    const targetCameraPosition = { x: 25, y: 5, z: 50 };
    const targetFOV = 25;
    const animationDuration = 2;

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const deltaTime = clock.getDelta();

      const elapsedTime = clock.elapsedTime;
      if (elapsedTime < animationDuration) {
        const progress = elapsedTime / animationDuration;
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        camera.position.x = THREE.MathUtils.lerp(150, targetCameraPosition.x, easeProgress);
        camera.position.y = THREE.MathUtils.lerp(100, targetCameraPosition.y, easeProgress);
        camera.position.z = THREE.MathUtils.lerp(150, targetCameraPosition.z, easeProgress);

        camera.fov = THREE.MathUtils.lerp(initialFOV, targetFOV, easeProgress);
        camera.updateProjectionMatrix();
      }

      scene.rotation.y += 0.005;

      if (mixer) {
        mixer.update(deltaTime);
      }

      controls.update();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!containerRef.current) return;

      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
      controls.dispose();
    };
  }, []);

  if (!isWebGLSupported) {
    return (
      <div>
        <p>WebGL is not supported in your browser. Please upgrade or try a different browser.</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} css={styles.canvasContainer}>
      {isLoading && (
        <div css={styles.loadingSpinner}>
          <AiOutlineLoading3Quarters size={32} />
        </div>
      )}
    </div>
  );
}
