import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Bruce } from "./Bruce";

import CanvasLoader from "../Loader";

// const Cv = ({ isMobile }) => {
//   const cv = useGLTF("./resume_computer/cv.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.01} groundColor="black" />
//       <spotLight
//         // position={[-20, 50, 10]}
//         position={[10, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         // intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={cv.scene}
//         scale={isMobile ? 0.7 : 2.5}
//         position={isMobile ? [0, -3, -2.2] : [0, 2.4, -1.9]}
//         rotation={[1.4, 0, -0.6]}
//       />
//     </mesh>
//   );
// };

const CvCanvas = () => {
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const mediaQuery = window.matchMedia("(max-width: 500px)");
  //   setIsMobile(mediaQuery.matches);
  //   const handleMediaQueryChange = (e) => {
  //     setIsMobile(e.matches);
  //   };
  //   mediaQuery.addEventListener("change", handleMediaQueryChange);

  //   return () => {
  //     mediaQuery.removeEventListener("change", handleMediaQueryChange);
  //   };
  // }, []);

  return (

    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0,8], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* <Suspense fallback={<CanvasLoader />}>: 
            This is a React component that 
            suspends rendering of the canvas until its child components are
             loaded. The fallback property sets a loading indicator component 
             to be displayed while the child components are being loaded. */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
            autoRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* <Cv isMobile={isMobile} /> */}
        <ambientLight intensity={1} />
        <group position-y={-1}>
          <Bruce />
  
        </group>

        {/* <mesh>
          <meshNormalMaterial />
          <boxBufferGeometry />
        </mesh> */}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default CvCanvas;
