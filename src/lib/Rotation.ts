const UP: number = 0;
const DOWN: number = Math.PI;
const LEFT: number = Math.PI / 2;
const RIGHT: number = -Math.PI / 2;

const getRandomRotation = () => {
	const randomRotation = Math.floor(Math.random() * 4);

	switch (randomRotation) {
		case 0:
			return UP;
		case 1:
			return DOWN;
		case 2:
			return LEFT;
		case 3:
			return RIGHT;
		default:
			return 0;
	}
};

const Rotation = { UP, DOWN, LEFT, RIGHT, getRandomRotation };

export default Rotation;
