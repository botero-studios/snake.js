import { useGLTF } from "@react-three/drei";

const SnakeTail = props => {
	const { nodes, materials } = useGLTF("models/Tail.glb");
	return (
		<group {...props} dispose={null}>
			<mesh geometry={nodes.Tail.geometry} material={materials.mat18} />
		</group>
	);
};

useGLTF.preload("models/Tail.glb");

export default SnakeTail;
