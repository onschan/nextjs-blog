import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { theme } from "@/theme/theme";

import { BREAK_POINT } from "@/constants";

import { colors } from "@/styles";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

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

        gltf.scene.traverse(node => {
          if ((node as THREE.Mesh).isMesh) {
            const mesh = node as THREE.Mesh;
            mesh.castShadow = true;
            mesh.receiveShadow = true;
          }
        });

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

  return (
    <div
      css={css`
        display: flex;
        gap: 60px;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: calc(100vh - 150px);
        height: 100%;
        padding: 40px;
        background: ${theme.background.primary};
        font-size: 16px;

        @media screen and (max-width: ${BREAK_POINT}px) {
          flex-direction: column;
          justify-content: center;
          gap: 30px;
          padding: 30px;
          font-size: 10px;
        }
      `}
    >
      <div
        css={css`
          order: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;

          h1 {
            font-size: 2.5em;
            font-weight: 800;
            margin: 0;
            white-space: pre-line;
            line-height: 1.2;
            letter-spacing: -1px;
            background: linear-gradient(
              135deg,
              ${theme.text.primary} 0%,
              ${theme.text.hero} 50%,
              ${theme.text.primary} 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

            @media screen and (max-width: ${BREAK_POINT}px) {
              font-size: 2rem;
            }
          }

          p {
            font-size: 1.4em;
            font-weight: 500;
            margin-top: 20px;
            letter-spacing: 1px;

            span {
              color: ${theme.text.secondary};
            }

            .separator {
              margin: 0 8px;
            }
          }
        `}
      >
        <h1>{`Solving Challenges,\nServing Users`}</h1>
        <p>
          <span>Frontend Developer</span>
          <span className="separator">|</span>
          <span>SeungChan On</span>
        </p>
        <div
          css={css`
            display: flex;
            gap: 20px;
            margin-top: 32px;

            button {
              padding: 12px 24px;
              border-radius: 8px;
              background: ${theme.interactive.secondary};
              color: ${theme.text.primary};
              font-size: 1.2em;
              font-weight: 600;
              letter-spacing: 0.5px;
              cursor: pointer;

              &:hover {
                background: ${theme.interactive.secondaryHover};
              }

              &:first-of-type {
                background: ${theme.interactive.primary};
                color: ${colors.white};

                &:hover {
                  background: ${theme.interactive.primaryHover};
                }
              }
            }

            @media screen and (max-width: ${BREAK_POINT}px) {
              button {
                padding: 10px 20px;
                font-size: 1em;
              }
            }
          `}
        >
          <button type="button">About</button>
          <button type="button">Contact Me</button>
        </div>
      </div>
      <div
        ref={containerRef}
        css={css`
          order: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45vw;
          height: 45vw;

          @media screen and (max-width: ${BREAK_POINT}px) {
            width: 80vw;
            height: 80vw;
          }
        `}
      >
        {isLoading && (
          <div
            css={css`
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              animation: spin 1s linear infinite;
              color: ${theme.interactive.primary};

              @keyframes spin {
                0% {
                  transform: translate(-50%, -50%) rotate(0deg);
                }
                100% {
                  transform: translate(-50%, -50%) rotate(360deg);
                }
              }
            `}
          >
            <AiOutlineLoading3Quarters size={24} />
          </div>
        )}
      </div>
    </div>
  );
}
