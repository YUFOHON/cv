
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Cv = ({ isMobile }) => {
    const cv = useGLTF("./resume_computer/cv.gltf");

    return (
        <mesh>
            <hemisphereLight intensity={0.01} groundColor='black' />
            <spotLight
                // position={[-20, 50, 10]}
                position={[10, 50, 10]}
                angle={0.12}
                penumbra={1}
                // intensity={1}    
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1} />
            <primitive
                object={cv.scene}
                scale={isMobile ? 0.7 : 2.5}
                position={isMobile ? [0, -3, -2.2] : [0, 2.4, -1.9]}
                rotation={[1.4, 0, -0.6]}
            />
        </mesh>
    );
};

const CvCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
        }
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };

    }, []);

    return (
        <Canvas
            frameloop='demand'
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={true}
                // maxPolarAngle={Math.PI / 2}
                // minPolarAngle={Math.PI / 2}
                />
                <Cv isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );

}

export default CvCanvas;
