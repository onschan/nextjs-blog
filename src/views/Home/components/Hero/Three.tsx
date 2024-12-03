// @ts-nocheck
import { useEffect, useRef } from "react";
import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

export function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    /*
    Scene 만들기
three.js로 무언가를 표현하려면 scene, camera 그리고 renderer가 필요합니다. 이를 통해 카메라로 장면을 구현할 수 있습니다.
*/
    const scene = new THREE.Scene({});

    /*
    첫 번째 속성은 field of view(시야각)입니다. FOV(시야각)는 해당 시점의 화면이 보여지는 정도를 나타냅니다. 값은 각도 값으로 설정합니다.

두 번째 속성은 aspect ratio(종횡비)입니다. 대부분의 경우 요소의 높이와 너비에 맞추어 표시하게 할텐데, 그렇지 않으면 와이드스크린에 옛날 영화를 트는 것처럼 이미지가 틀어져 보일 것입니다.

다음 두 속성은 near 와 far 절단면입니다. 무슨 뜻인가 하면, far 값 보다 멀리 있는 요소나 near 값보다 가까이 있는 오브젝트는 렌더링 되지 않는다는 뜻입니다. 지금 시점에서 이것까지 고려할 필요는 없지만, 앱 성능 향상을 위해 사용할 수 있습니다.
    */
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    /*다음은 renderer입니다. 마법이 일어나는 곳입니다. 같이 사용하는 WebGLRenderer와 더불어, three.js는 다른 몇가지 renderer를 사용하는데, 오래된 브라우저 혹은 모종의 사유로 WebGL을 지원 안할때의 대비용으로 사용하는 것입니다.

renderer 인스턴스를 생성함과 동시에, 렌더링할 곳의 크기를 설정해줘야 합니다. 렌더링할 구역의 높이와 너비를 설정하는 것은 좋은 방법입니다. 이 경우, 높이와 너비는 각각 브라우저 윈도우의 크기가 됩니다. 성능 개선을 중시하는 앱의 경우, setSize를 사용하거나 window.innerWidth/2, window.innerHeight/2를 사용해서 화면 크기의 절반으로 구현할 수도 있습니다.

사이즈는 그대로 유지하고 싶지만 더 낮은 해상도로 렌더링하고 싶을 경우, setSize의 updateStyle (세 번째 인자)를 false로 불러오면 됩니다. setSize(window.innerWidth/2, window.innerHeight/2, false)처럼 사용하면 <canvas>가 100%의 높이, 너비로 되어있다는 기준 하에 절반의 해상도로 렌더링 될 것입니다. */
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    /* 
    큐브를 만드려면, BoxGeometry가 필요합니다. 여기에는 큐브에 필요한 모든 꼭짓점 (vertices) 와 면(faces)이 포함돼 있습니다. 여기에 대해서는 나중에 더 자세히 알아봅시다.

geometry와 더불어, 무언가를 색칠해줄 요소가 필요합니다. Three.js에서는 여러 방법을 고려했지만, 현재로서는MeshBasicMaterial을 고수하고자 합니다. 이 속성이 적용된 오브젝트들은 모두 영향을 받을 것입니다. 가장 단순하게 알아볼 수 있도록, 여기에서는 녹색인 0x00ff00만을 속성으로 사용하겠습니다. CSS 나 Photoshop에서처럼 (hex colors)로 동일하게 작동합니다.

세 번째로 필요한 것은Mesh입니다. mesh는 기하학을 받아 재질을 적용하고 우리가 화면 안에 삽입하고 자유롭게 움직일 수 있게 해 줍니다.

기본 설정상 scene.add()를 불러오면, 추가된 모든 것들은 (0,0,0) 속성을 가집니다. 이렇게 되면 카메라와 큐브가 동일한 위치에 겹치게 되겠죠. 이를 피하기 위해, 카메라를 약간 움직여 두었습니다.
    
    */
    // 큐브 만들기
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // camera.position.z = 5;
    /*

/* 
//선 만들기 
*/

    const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const points = [];
    points.push(new THREE.Vector3(-10, 0, 0));
    points.push(new THREE.Vector3(0, 10, 0));
    points.push(new THREE.Vector3(10, 0, 0));

    const geometry = new THREE.BufferGeometry().setFromPoints(points);

    const line = new THREE.Line(geometry, material);

    scene.add(line);

    /*
    scene 렌더링
맨 처음에 있던 HTML 파일을 복사해서 열어놨다면, 아무것도 보이지 않을 것입니다. 왜냐하면 아직 아무것도 렌더링하지 않았기 때문입니다. 이를 해결하려면 render or animate loop라는 것이 필요합니다.
    

이 코드는 화면이 새로고침 될 때마다 계속해서 렌더링을 해 줄 것입니다. (일반적인 경우에 1초에 60번 렌더링 됩니다). 웹 브라우저에서 게임을 만들기 시작한 지 얼마 안 된 분이라면, "왜 그냥 setInterval을 쓰지 않는거죠?"라고 질문할 수도 있을 겁니다. 단적으로 말하면 가능은 합니다. 하지만 requestAnimationFrame 을 사용하는 것이 훨씬 이점이 많습니다. 아마 가장 큰 이점은 유저가 브라우저 창에서 이탈했을때 멈춰주는 기능일 것입니다. 이를 통해 소중한 전력과 배터리를 아낄 수 있죠.

    */
    function animate() {
      requestAnimationFrame(animate);

      /*
      큐브 애니메이팅
시작할 때 만들었던 파일에 이전까지의 코드를 모두 작성해서 넣었을 경우, 초록색 박스를 확인할 수 있을 것입니다. 이 박스를 회전시켜 보면서 조금 더 재미있게 만들어봅시다.

다음 코드를 animate함수 안의 renderer.render 바로 위에 넣어주세요.
      
위 코드는 모든 프레임마다 실행되면서 (일반적으로 1초에 60번), 큐브가 멋지게 돌아가도록 만들어 줄겁니다. 기본적으로 앱을 실행하는 동안 무언가를 움직이거나 변형하고 싶을때, animate loop를 사용하면 됩니다. 물론 다른 함수를 불러올 수도 있고, animate 함수 안에 수백줄을 작성할 필요도 없습니다.
          cube.rotation.x += 0.01;
      // cube.rotation.y += 0.01;
      */
      //

      renderer.render(scene, camera);
    }

    if (WebGL.isWebGL2Available()) {
      // Initiate function or other initializations here
      animate();
    } else {
      const warning = WebGL.getWebGL2ErrorMessage();
      // show an error message
      document.getElementById("container").appendChild(warning);
    }
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100vh" }} />;
}
