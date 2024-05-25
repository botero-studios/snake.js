"use client";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Suspense, useMemo } from "react";
import { SnakeScene } from "@/components/SnakeScene";
import Snake from "@/components/Snake";
import { KeyboardControls, KeyboardControlsEntry } from "@react-three/drei";
import useScore from "@/hooks/useScore";
import Score from "@/components/Score";

enum Controls {
	up = "up",
	down = "down",
	left = "left",
	right = "right",
}

const SnakeIndex = () => {
	const [score, increment] = useScore(0);

	const map = useMemo<KeyboardControlsEntry<Controls>[]>(
		() => [
			{ name: Controls.up, keys: ["ArrowUp", "KeyW"] },
			{ name: Controls.down, keys: ["ArrowDown", "KeyS"] },
			{ name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
			{ name: Controls.right, keys: ["ArrowRight", "KeyD"] },
		],
		[],
	);
	const SnakeGame = () => (
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
	);
	return (
		<div className='w-full h-screen bg-blue-100'>
			<Score className='pt-8'>{score}</Score>
			<SnakeGame />
		</div>
	);
};

export default SnakeIndex;
export { Controls };
