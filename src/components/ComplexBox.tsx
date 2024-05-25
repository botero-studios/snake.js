import { Box } from "@react-three/drei";
import { MeshCollider, RigidBody } from "@react-three/rapier";

export default function ComplexBox(props: any) {
	return (
		<RigidBody
			colliders={props.colliders}
			type='fixed'
			position-y={-0.5}
			collisionGroups={props.collisionGroups}>
			<MeshCollider type='hull'>
				<Box scale={props.scale} receiveShadow position={props.position}>
					<meshStandardMaterial color={props.color} />
				</Box>
			</MeshCollider>
		</RigidBody>
	);
}
