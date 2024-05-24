"use client";

import { OrbitControls } from "@react-three/drei";
import Stage from "@/components/Stage";
import EggController from "@/controllers/EggController";
import Frog from "@/models/Frog";
import MiceController from "@/controllers/MiceController";

export function SnakeScene() {
    return (
        <>
            <OrbitControls />
            {/* LIGHTS */}
            <ambientLight intensity={1} />
            <directionalLight
                position={[5, 5, 5]}
                intensity={0.8}
                castShadow
                color={"#9e69da"}
            />

            <EggController scale={[6, 6, 6]} position={[1, 1, 1]} />
            <Frog scale={[0.15, 0.15, 0.15]} position={[5, 1, 5]} />
            <MiceController />

            {/* STAGE */}
            <Stage />
        </>
    );
}
