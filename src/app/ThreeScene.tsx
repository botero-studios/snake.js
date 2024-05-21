"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);

      cube.position.x = 0;
      cube.position.y = 0;
      cube.position.z = 0;
      cube.rotation.x = -0.5;
      cube.rotation.y = 0.5;
      cube.rotation.z = 0.5;
      cube.scale.set(0.5, 0.5, 0.5);

      scene.add(cube);

      renderer.render(scene, camera);
    }
  }, []);
  return <div ref={containerRef} />;
};
export default ThreeScene;
