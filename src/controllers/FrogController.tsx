import Rotation from "@/lib/Rotation";
import Frog from "@/models/Frog";
import { useFrame } from "@react-three/fiber";
import {
	CuboidCollider,
	RigidBody,
	interactionGroups,
} from "@react-three/rapier";
import { useEffect, useMemo, useRef, useState } from "react";

export default function EggController(props: any) {
	const rigidBody = useRef<any>();
	const JUMP_FORCE = 0.5;
	const JUMP_DISTANCE = 0.22;
	const [jump, setJump] = useState(false);
	const rotation = useMemo(() => Rotation.getRandomRotation(), []);
	const MAX = 6.5;
	const MIN = -6.5;

	useEffect(() => {
		const randomPos = Math.random() * (MAX - MIN) + MIN;

		let translation = { x: 0, y: 0, z: 0 };
		switch (rotation) {
			case Rotation.UP:
				translation.x = -15;
				translation.z = randomPos;
				break;
			case Rotation.DOWN:
				translation.x = 15;
				translation.z = randomPos;
				break;
			case Rotation.LEFT:
				translation.x = randomPos;
				translation.z = 15;
				break;
			case Rotation.RIGHT:
				translation.x = randomPos;
				translation.z = -15;
				break;
		}
		rigidBody.current.setTranslation(translation);

		const interval = setInterval(() => {
			setJump(true);
			rigidBody.current.setLinvel({ x: 0, y: 0, z: 0 });
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	useFrame(() => {
		if (jump) {
			setJump(false);
			let impulse = { x: 0, y: 0, z: 0 };
			switch (rotation) {
				case Rotation.UP:
					impulse.x += JUMP_DISTANCE;
					impulse.y += JUMP_FORCE;
					break;
				case Rotation.DOWN:
					impulse.x -= JUMP_DISTANCE;
					impulse.y += JUMP_FORCE;
					break;
				case Rotation.LEFT:
					impulse.z -= JUMP_DISTANCE;
					impulse.y += JUMP_FORCE;
					break;
				case Rotation.RIGHT:
					impulse.z += JUMP_DISTANCE;
					impulse.y += JUMP_FORCE;
					break;
			}
			rigidBody.current.applyImpulse(impulse);
		}
	});

	return (
		<RigidBody
			ref={rigidBody}
			scale={props.scale}
			position={props.position}
			colliders={false}
			lockRotations={true}
			collisionGroups={interactionGroups(1, [0])}>
			<CuboidCollider
				args={[1, 1, 1]}
				scale={[5, 7, 8]}
				rotation={[0, rotation, 0]}
			/>
			<Frog position={[0, -7, 0]} rotation={[0, rotation, 0]} />
		</RigidBody>
	);
}
