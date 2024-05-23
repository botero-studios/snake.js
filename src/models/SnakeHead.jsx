import { useGLTF } from "@react-three/drei";

const SnakeHead = props => {
	const { nodes, materials } = useGLTF("models/snake/Head.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.mesh2142745760001.geometry}
				material={materials.mat18}
			/>
			<mesh
				geometry={nodes.mesh2142745760001_1.geometry}
				material={materials.mat23}
			/>
		</group>
	);
};

useGLTF.preload("models/snake/Head.glb");

export default SnakeHead;
