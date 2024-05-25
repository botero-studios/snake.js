import Mice from "@/models/Mice";
import {
	CapsuleCollider,
	RigidBody,
	interactionGroups,
} from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import Rotation from "@/lib/Rotation";

export default function MiceController(props: any) {
	const rigidBody = useRef<any>();
	const mice = useRef<any>();
	const MOVEMENT_SPEED = 0.005;
	const MAX_VELOCITY = 1.5;
	const [direction, setDirection] = useState(Rotation.UP);

	useEffect(() => {
		const interval = setInterval(() => {
			setDirection(Rotation.getRandomRotation());
			if (rigidBody.current) rigidBody.current.setLinvel({ x: 0, y: 0, z: 0 });
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	useFrame(() => {
		if (!rigidBody.current) return;
		let impulse = { x: 0, y: 0, z: 0 };
		const linvel = rigidBody.current.linvel();
		if (direction == Rotation.UP && linvel.x > -MAX_VELOCITY) {
			impulse.x -= MOVEMENT_SPEED;
		} else if (direction == Rotation.DOWN && linvel.x < MAX_VELOCITY) {
			impulse.x += MOVEMENT_SPEED;
		} else if (direction == Rotation.LEFT && linvel.z < MAX_VELOCITY) {
			impulse.z += MOVEMENT_SPEED;
		} else if (direction == Rotation.RIGHT && linvel.z > -MAX_VELOCITY) {
			impulse.z -= MOVEMENT_SPEED;
		}
		rigidBody.current.applyImpulse(impulse);
	});

	return (
		<group>
			<RigidBody
				scale={props.scale}
				position={props.position}
				colliders={false}
				ref={rigidBody}
				enabledRotations={[false, true, false]}
				collisionGroups={interactionGroups(3, [2, 0])}>
				<CapsuleCollider
					args={[0.8, 0.4]}
					scale={[0.2, 0.6, 1]}
					rotation={[0, direction, Math.PI / 2]}
				/>
				<group ref={mice}>
					<Mice scale={[2, 2, 2]} rotation={[0, direction, 0]} />
				</group>
			</RigidBody>
		</group>
	);
}
