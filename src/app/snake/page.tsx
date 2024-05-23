"use client";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { SnakeScene } from "@/components/SnakeScene";
import Snake from "@/components/Snake";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";

export default function SnakeIndex() {
	enum Controls {
		up = "up",
		down = "down",
		left = "left",
		right = "right",
	}
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
							<Snake />
						</Physics>
					</Suspense>
				</Canvas>
			</KeyboardControls>
		</div>
	);
}
