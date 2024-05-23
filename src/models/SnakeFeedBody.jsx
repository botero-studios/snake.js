import { useGLTF } from "@react-three/drei";

export function Model(props) {
	const { nodes, materials } = useGLTF("models/snake/FeedBody.glb");
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Feed_Body.geometry} material={materials.mat18} />
		</group>
	);
}

useGLTF.preload("models/snake/FeedBody.glb");
