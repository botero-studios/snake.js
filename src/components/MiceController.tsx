import Mice from "@/components/Mice"
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MiceController(props: any) {

    const rigidBody = useRef<any>();
    const MOVEMENT_SPEED = 0.005;
    const CHANGE_DIRECTION_TIME = 3;


    useFrame(({ clock }) => {
        let changeDirection = false;
        let impulse = { x: 0, y: 0, z: 0 };
        console.log(clock.getElapsedTime());
        if (Math.trunc(clock.getElapsedTime()) % CHANGE_DIRECTION_TIME === 0) {
            changeDirection = true;
        }
        impulse.x = MOVEMENT_SPEED;
        if (changeDirection) {
            // console.log("change direction");
            impulse.x *= -1;
        }
        rigidBody.current.applyImpulse(impulse);
    });

    return (
        <RigidBody scale={[1, 1, 1]} colliders={false} ref={rigidBody} enabledRotations={[false, false, true]}>
            <CapsuleCollider args={[0.8, 0.4]} scale={[0.2, 0.6, 1]} position={[1, 0.9, 5]} rotation={[0, 0, Math.PI / 2]} />
            <Mice scale={[2, 2, 2]} position={[1, 1, 5]} />
        </RigidBody>
    );
}
