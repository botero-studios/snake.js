import Frog from "@/models/Frog";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function EggController(props: any) {
	return (
		<RigidBody scale={props.scale} position={props.position} colliders={false}>
			<CuboidCollider args={[1, 1, 1]} scale={[5, 7, 8]} />
			<Frog position={[0, -7, 0]} />
		</RigidBody>
	);
}
