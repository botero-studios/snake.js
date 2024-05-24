import Egg from "@/models/Egg"
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function EggController(props: any) {

    const egg = useRef<any>();

    useFrame(() => {
        egg.current.rotation.y += 0.01;
    });

    return (
        <RigidBody scale={[1, 1, 1]} position={[5, 0, 5]}>
            <group ref={egg}>
                <Egg scale={[2, 2, 2]} rotation={[0, 0, Math.PI / 8]} />
            </group>
        </RigidBody >
    );
}
