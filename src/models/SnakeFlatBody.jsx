import { useGLTF } from "@react-three/drei";

const SnakeFlatBody = props => {
	const { nodes, materials } = useGLTF("models/FlatBody.glb");
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Flat_Body.geometry} material={materials.mat18} />
		</group>
	);
};

useGLTF.preload("models/FlatBody.glb");

export default SnakeFlatBody;
