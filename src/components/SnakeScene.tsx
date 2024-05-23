"use client";

import { OrbitControls } from "@react-three/drei";
import Stage from "@/components/Stage";
import Egg from "@/components/Egg";
import Frog from "@/components/Frog";
import Mice from "@/components/Mice";

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

			<Egg scale={[6, 6, 6]} position={[1, 1, 1]} />
			<Frog scale={[0.15, 0.15, 0.15]} position={[5, 1, 5]} />
			<Mice scale={[6, 6, 6]} position={[1, 1, 5]} />

			{/* STAGE */}
			<Stage />
		</>
	);
}
