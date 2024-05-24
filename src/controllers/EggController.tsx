import Egg from "@/models/Egg";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";

export default function EggController(props: any) {
	const egg = useRef<any>();

	useFrame(() => {
		egg.current.rotation.y += 0.01;
	});

	return (
		<RigidBody scale={props.scale} position={props.position} type='fixed'>
			<group ref={egg}>
				<Egg rotation={[0, 0, Math.PI / 8]} />
			</group>
		</RigidBody>
	);
}
