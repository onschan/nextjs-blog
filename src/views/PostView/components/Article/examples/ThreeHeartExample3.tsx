// @ts-nocheck
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function ThreeLoadExample() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 장면 & 카메라 & 렌더러 생성
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      90,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000);

    containerRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);

    // GLTFLoader로 .glb 파일 불러오기
    const loader = new GLTFLoader();
    loader.load(
      "/assets/models/hero.glb",
      gltf => {
        // 모델을 씬에 추가
        scene.add(gltf.scene);
        gltf.scene.scale.set(1, 1, 1);

        // 모델이 로드된 후 한 번 렌더
        renderer.render(scene, camera);
      },
      undefined, // onProgress 생략
      error => {
        console.error("Error loading model:", error);
      }
    );

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    const handleResize = () => {
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
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "400px" }} />;
}
