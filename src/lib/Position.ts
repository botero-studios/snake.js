import DirectionType from "@/types/DirectionType";
import PositionType from "@/types/PositionType";
import Rotation from "@/lib/Rotation";

const UP: DirectionType = {
	position: { x: 0, y: -0.5, z: 0 },
	rotation: { x: 0, y: 0, z: Rotation.UP },
};
const DOWN: DirectionType = {
	position: { x: 0, y: 0.5, z: 0 },
	rotation: { x: 0, y: 0, z: Rotation.DOWN },
};
const LEFT: DirectionType = {
	position: { x: -0.5, y: 0, z: 0 },
	rotation: { x: 0, y: 0, z: Rotation.LEFT },
};
const RIGHT: DirectionType = {
	position: { x: 0.5, y: 0, z: 0 },
	rotation: { x: 0, y: 0, z: Rotation.RIGHT },
};

const sum = (a: PositionType, b: PositionType) => ({
	x: a.x + b.x,
	y: a.y + b.y,
	z: a.z + b.z,
});

const toList = (position: PositionType) => [position.x, position.z, position.y];

const opposite = (a: PositionType, b: PositionType) => {
	const sumPosition = sum(a, b);
	return sumPosition.x === 0 && sumPosition.y === 0;
};

const Position = { UP, DOWN, LEFT, RIGHT, opposite, sum, toList };

export default Position;
