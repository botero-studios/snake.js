import Mice from "@/models/Mice"
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Rotation from "@/lib/Rotation";

export default function MiceController(props: any) {

    const rigidBody = useRef<any>();
    const mice = useRef<any>();
    const MOVEMENT_SPEED = 0.005;
    const CHANGE_DIRECTION_TIME = 3;
    const [direction, setDirection] = useState(Rotation.UP);


    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(Rotation.getRandomRotation());
            console.log("change direction");
            rigidBody.current.setLinvel({ x: 0, y: 0, z: 0 });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    useFrame(() => {
        let impulse = { x: 0, y: 0, z: 0 };
        if (direction == Rotation.UP) {
            impulse.x = -MOVEMENT_SPEED;
        } else if (direction == Rotation.DOWN) {
            impulse.x = MOVEMENT_SPEED;
        } else if (direction == Rotation.LEFT) {
            impulse.z = MOVEMENT_SPEED;
        } else if (direction == Rotation.RIGHT) {
            impulse.z = -MOVEMENT_SPEED;
        }
        rigidBody.current.applyImpulse(impulse);
    });

    return (
        <group >
            <RigidBody scale={[1, 1, 1]} colliders={false} ref={rigidBody} position={[1, 0, 1]} enabledRotations={[false, true, false]}>
                <CapsuleCollider args={[0.8, 0.4]} scale={[0.2, 0.6, 1]} rotation={[0, direction, Math.PI / 2]} />
                <group ref={mice}>
                    <Mice scale={[2, 2, 2]} rotation={[0, direction, 0]} />
                </group>
            </RigidBody>
        </group >
    );
}
