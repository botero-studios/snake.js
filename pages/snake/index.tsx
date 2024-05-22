"use client";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { SnakeScene } from "@/components/SnakeScene";

export default function SnakeIndex() {
    return (
        <>
            <div className='w-full h-screen bg-blue-100'>
                <Canvas shadows camera={{ position: [0, 6, 14], fov: 70 }}>
                    <color attach='background' args={["#dbecfb"]} />
                    <Suspense>
                        <Physics debug>
                            <SnakeScene />
                        </Physics>
                    </Suspense>
                </Canvas>
            </div>
        </>
    );
}
