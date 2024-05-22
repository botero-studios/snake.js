"use client";

import { OrbitControls } from "@react-three/drei";
import Stage from "@/components/Stage";

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

			{/* STAGE */}
			<Stage />
		</>
	);
}
