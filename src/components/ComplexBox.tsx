import { Box } from "@react-three/drei";
import { MeshCollider, RigidBody } from "@react-three/rapier";

export default function ComplexBox(props) {
	return (
		<RigidBody colliders={props.colliders} type='fixed' position-y={-0.5}>
			<MeshCollider type='hull'>
				<Box scale={props.scale} receiveShadow position={props.position}>
					<meshStandardMaterial color={props.color} />
				</Box>
			</MeshCollider>
		</RigidBody>
	);
}
