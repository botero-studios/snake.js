'use client'

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { Experience } from "@/app/components/ThreeScene";

export default function Home() {
    return (
        <div className="w-full h-screen">
            <Canvas shadows camera={{ position: [0, 6, 14], fov: 70 }}>
                <color attach="background" args={["#dbecfb"]} />
                <Suspense>
                    <Physics debug>
                        <Experience />
                    </Physics>
                </Suspense>
            </Canvas>
        </div>
    );
}
