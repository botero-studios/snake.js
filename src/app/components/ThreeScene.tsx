"use client";

import { Box, Cylinder, OrbitControls } from "@react-three/drei";
import { CylinderCollider, MeshCollider, RigidBody } from "@react-three/rapier";
import { MeshNormalMaterial } from "three";

export function Experience() {
	return (
		<>
			<OrbitControls />
			{/* LIGHTS */}
			<ambientLight intensity={1} />
			<directionalLight
				position={[5, 5, 5]}
				intensity={0.8}
				castShadow
				color={"#9e69da"}
			/>

			{/* STAGE */}
			<RigidBody colliders={false} type='fixed' position-y={-0.5}>
				<MeshCollider type='trimesh'>
					<Box scale={[15, 1, 15]} receiveShadow>
						<meshStandardMaterial color='#a85105' />
					</Box>
				</MeshCollider>
			</RigidBody>
			<RigidBody colliders={false} type='fixed' position-y={-0.5}>
				<MeshCollider type='hull'>
					<Box scale={[0.5, 0.5, 15]} receiveShadow position={[-7.25, 0.75, 0]}>
						<meshStandardMaterial color='#6e3402' />
					</Box>
				</MeshCollider>
			</RigidBody>
			<RigidBody colliders={false} type='fixed' position-y={-0.5}>
				<MeshCollider type='hull'>
					<Box scale={[0.5, 0.5, 15]} receiveShadow position={[7.25, 0.75, 0]}>
						<meshStandardMaterial color='#6e3402' />
					</Box>
				</MeshCollider>
			</RigidBody>

			<RigidBody colliders={false} type='fixed' position-y={-0.5}>
				<MeshCollider type='hull'>
					<Box scale={[15, 0.5, 0.5]} receiveShadow position={[0, 0.75, 7.25]}>
						<meshStandardMaterial color='#6e3402' />
					</Box>
				</MeshCollider>
			</RigidBody>
			<RigidBody colliders={false} type='fixed' position-y={-0.5}>
				<MeshCollider type='hull'>
					<Box scale={[15, 0.5, 0.5]} receiveShadow position={[0, 0.75, -7.25]}>
						<meshStandardMaterial color='#6e3402' />
					</Box>
				</MeshCollider>
			</RigidBody>
		</>
	);
}
