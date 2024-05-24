"use client";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { SnakeScene } from "@/components/SnakeScene";
import Snake from "@/components/Snake";
import EggController from "@/controllers/EggController";
import FrogController from "@/controllers/FrogController";
import MiceController from "@/controllers/MiceController";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";

enum Controls {
	up = "up",
	down = "down",
	left = "left",
	right = "right",
}

export default function SnakeIndex() {
	const map = useMemo<KeyboardControlsEntry<Controls>[]>(
		() => [
			{ name: Controls.up, keys: ["ArrowUp", "KeyW"] },
			{ name: Controls.down, keys: ["ArrowDown", "KeyS"] },
			{ name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
			{ name: Controls.right, keys: ["ArrowRight", "KeyD"] },
		],
		[],
	);
	return (
		<div className='w-full h-screen bg-blue-100'>
			<KeyboardControls map={map}>
				<Canvas shadows camera={{ position: [0, 6, 14], fov: 70 }}>
					<color attach='background' args={["#dbecfb"]} />
					<Suspense>
						<Physics debug>
							<SnakeScene />
							{/* <Snake /> */}
							<EggController scale={[1.5, 1.5, 1.5]} position={[5, 0.5, -5]} />
							<FrogController scale={[0.04, 0.04, 0.04]} position={[5, 1, 5]} />
							<MiceController scale={[1, 1, 1]} position={[1, 0, 1]} />
						</Physics>
					</Suspense>
				</Canvas>
			</KeyboardControls>
		</div>
	);
}

export { Controls };
