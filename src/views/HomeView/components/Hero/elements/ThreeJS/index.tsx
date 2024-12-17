import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import * as styles from "./styles";

export default function ThreeJS() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene, Camera, Renderer 초기화
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({
      antialias: false, // 성능 개선
      alpha: true,
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 고해상도 제한
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    containerRef.current.appendChild(renderer.domElement);

    // 조명 설정
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(0, 50, 20);
    pointLight.castShadow = true;

    // ShadowMap 해상도 낮춤
    pointLight.shadow.mapSize.width = 1024;
    pointLight.shadow.mapSize.height = 1024;
    scene.add(pointLight);

    // OrbitControls 설정
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;

    // 그림자 평면 추가
    const planeGeometry = new THREE.PlaneGeometry(30, 30);
    const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const shadow = new THREE.Mesh(planeGeometry, shadowMaterial);
    shadow.rotation.x = -Math.PI / 2;
    shadow.position.y = -1.15;
    shadow.receiveShadow = true;
    scene.add(shadow);

    let mixer: THREE.AnimationMixer | null = null;

    // GLTFLoader 설정
    const loader = new GLTFLoader();
    loader.load(
      "/assets/models/hero.glb", // 경량화된 모델 사용 권장
      gltf => {
        const model = gltf.scene;

        model.scale.set(1, 1, 1); // 모델 스케일 유지
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        model.traverse(node => {
          if ((node as THREE.Mesh).isMesh) {
            const mesh = node as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

        scene.add(model);

        // 애니메이션 설정
        if (gltf.animations && gltf.animations.length) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach(clip => {
            const action = mixer?.clipAction(clip);
            action?.play();
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

    // 카메라 위치 및 애니메이션 설정
    camera.position.set(20, 10, 20);
    const clock = new THREE.Clock();

    let lastFrameTime = 0;
    const fps = 30; // FPS 제한

    const animate = (time: number) => {
      requestAnimationFrame(animate);

      const deltaTime = time - lastFrameTime;
      if (deltaTime < 1000 / fps) return;

      lastFrameTime = time;

      if (mixer) mixer.update(clock.getDelta());

      scene.rotation.y += 0.002; // 회전 속도 조절
      controls.update();
      renderer.render(scene, camera);
    };

    animate(0);

    // 창 크기 조정 핸들러
    const handleResize = () => {
      camera.aspect = containerRef.current!.clientWidth / containerRef.current!.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
      controls.dispose();
    };
  }, []);

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
