import { useState } from "react";

const useScore = (
	initialScore: number = 0,
): [number, (points: number) => void] => {
	const [score, setScore] = useState(initialScore);

	const increment = (points: number) => setScore(score + points);

	return [score, increment];
};

export default useScore;
