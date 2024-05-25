import ComplexBox from "@/components/ComplexBox";
import { interactionGroups } from "@react-three/rapier";

export default function Stage() {
	return (
		<>
			<ComplexBox
				colliders={false}
				scale={[35, 1, 35]}
				position={[0, -0.01, 0]}
				color='#7cfc00'
				collisionGroups={interactionGroups(0, [1, 3])}
			/>
			<ComplexBox
				colliders={false}
				scale={[15, 1, 15]}
				color='#a85105'
				collisionGroups={interactionGroups(0, [1, 3])}
			/>
			<ComplexBox
				colliders={false}
				scale={[0.5, 0.5, 15]}
				color='#6e3402'
				position={[-7.25, 0.75, 0]}
				collisionGroups={interactionGroups(2, [3])}
			/>
			<ComplexBox
				colliders={false}
				scale={[0.5, 0.5, 15]}
				color='#6e3402'
				position={[7.25, 0.75, 0]}
				collisionGroups={interactionGroups(2, [3])}
			/>

			<ComplexBox
				colliders={false}
				scale={[15, 0.5, 0.5]}
				color='#6e3402'
				position={[0, 0.75, 7.25]}
				collisionGroups={interactionGroups(2, [3])}
			/>
			<ComplexBox
				colliders={false}
				scale={[15, 0.5, 0.5]}
				color='#6e3402'
				position={[0, 0.75, -7.25]}
				collisionGroups={interactionGroups(2, [3])}
			/>
		</>
	);
}
