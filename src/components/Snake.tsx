"use client";

import Position from "@/lib/Position";
import { useState } from "react";
import SnakeHead from "../models/SnakeHead";
import SnakeFlatBody from "../models/SnakeFlatBody";
import SnakeTail from "../models/SnakeTail";
import { useKeyboardControls } from "@react-three/drei";
import DirectionType from "@/types/DirectionType";
import { Controls } from "@/app/snake/page";
import { useFrame } from "@react-three/fiber";

const Snake: React.FC = () => {
	const [snake, setSnake] = useState<DirectionType[]>([
		{ position: { x: 0, y: 0, z: 0.1 }, rotation: Position.UP.rotation },
		{ position: { x: 0, y: -0.5, z: 0.1 }, rotation: Position.UP.rotation },
		{ position: { x: 0, y: -1, z: 0.1 }, rotation: Position.UP.rotation },
	]);
	const [direction, setDirection] = useState<DirectionType>(Position.UP);
	const [lastMoveTime, setLastMoveTime] = useState(0);

	const upPressed = useKeyboardControls(state => state[Controls.up]);
	const downPressed = useKeyboardControls(state => state[Controls.down]);
	const leftPressed = useKeyboardControls(state => state[Controls.left]);
	const rightPressed = useKeyboardControls(state => state[Controls.right]);

	const moveMilliseconds = 300;
	const scaleRatio = 1.75;
	const scale = [scaleRatio, scaleRatio, scaleRatio];

	useFrame(state => {
		const currentTime = state.clock.getElapsedTime() * 1000;
		if (currentTime - lastMoveTime <= moveMilliseconds) return;
		setLastMoveTime(currentTime);
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
	});

	useFrame(() => {
		if (upPressed) move(Position.UP);
		if (downPressed) move(Position.DOWN);
		if (leftPressed) move(Position.LEFT);
		if (rightPressed) move(Position.RIGHT);
	});

	const move = (newDirection: DirectionType) => {
		if (Position.opposite(direction.position, newDirection.position)) return;
		setDirection(newDirection);
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

export default Snake;
