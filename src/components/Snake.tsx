"use client";

import Position from "@/lib/Position";
import { useEffect, useRef, useState } from "react";
import SnakeHead from "../models/SnakeHead";
import SnakeFlatBody from "../models/SnakeFlatBody";
import SnakeTail from "../models/SnakeTail";
import { useKeyboardControls } from "@react-three/drei";
import DirectionType from "@/types/DirectionType";

const Snake: React.FC = () => {
	const initReference = useRef(true);
	const [snake, setSnake] = useState<DirectionType[]>([
		{ position: { x: 0, y: 0, z: 0.1 }, rotation: Position.UP.rotation },
		{ position: { x: 0, y: -0.5, z: 0.1 }, rotation: Position.UP.rotation },
		{ position: { x: 0, y: -1, z: 0.1 }, rotation: Position.UP.rotation },
	]);
	const [direction, setDirection] = useState<DirectionType>(Position.UP);
	const upPressed = useKeyboardControls(state => state.up);
	const downPressed = useKeyboardControls(state => state.DOWN);
	const leftPressed = useKeyboardControls(state => state.LEFT);
	const rightPressed = useKeyboardControls(state => state.RIGHT);

	const scaleRatio = 1.75;
	const scale = [scaleRatio, scaleRatio, scaleRatio];

	useEffect(() => {
		if (initReference.current) {
			moveSnake();
			initReference.current = false;
		}
		if (upPressed) setDirection(Position.UP);
		if (downPressed) setDirection(Position.DOWN);
		if (leftPressed) setDirection(Position.LEFT);
		if (rightPressed) setDirection(Position.RIGHT);
	}, []);

	const moveSnake = () => {
		setSnake(prevSnake => {
			const newPosition = Position.sum(
				prevSnake[0].position,
				direction.position,
			);
			const newHead = {
				position: newPosition,
				rotation: direction.rotation,
			};
			const newSnake = [newHead, ...prevSnake];
			newSnake.pop();

			return newSnake;
		});
		setTimeout(moveSnake, 1000);
	};

	const snakeHead = snake[0];
	const snakeTail = snake[snake.length - 1];
	return (
		<group>
			<SnakeHead
				position={Position.toList(snakeHead.position)}
				rotation={Position.toList(snakeHead.rotation)}
				scale={scale}
			/>
			{snake.slice(1, snake.length - 1).map(snake => (
				<SnakeFlatBody
					position={Position.toList(snake.position)}
					rotation={Position.toList(snake.rotation)}
					scale={scale}
				/>
			))}
			<SnakeTail
				position={Position.toList(snakeTail.position)}
				rotation={Position.toList(snakeTail.rotation)}
				scale={scale}
			/>
		</group>
	);
};

// function useFrame(arg0: () => void) {
// 	throw new Error("Function not implemented.");
// }

export default Snake;
