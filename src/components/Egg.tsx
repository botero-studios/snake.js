/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/models/foods/egg.glb 
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("./models/foods/egg.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.group35554845.geometry}
				material={materials.mat21}
			/>
		</group>
	);
}

useGLTF.preload("./models/foods/egg.glb");
