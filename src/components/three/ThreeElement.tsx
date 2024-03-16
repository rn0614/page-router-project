"use client";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

export default function ThreeElement() {
  const { size, gl, scene, camera } = useThree(); // gl: render, scene:scene, camera: cawmera
  const boxRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const box = useControls({
    rotation: { value: 0, min: -360, max: 360, step: 1 },
  });

  useFrame((state, delta, xrFrame) => {
    console.log("state :", state);
    console.log("delta :", delta);
    console.log("boxRef :", boxRef);
    // scene.rotation.x +=0.01;
    //boxRef.current!.rotation.x += delta;
    //boxRef.current!.position.y +=0.01;
    //boxRef.current!.scale.y +=0.01;
  });
  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <group ref={groupRef}>
        <mesh
          ref={boxRef}
          position={[-2, 0, 2]}
          rotation={[
            THREE.MathUtils.degToRad(45),
            THREE.MathUtils.degToRad(box.rotation),
            0,
          ]}
          scale={[2, 1, 1]}
        >
          <boxGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh
          ref={boxRef}
          position={[2, 0, 2]}
          rotation={[
            THREE.MathUtils.degToRad(45),
            THREE.MathUtils.degToRad(box.rotation),
            0,
          ]}
          scale={[2, 1, 1]}
        >
          <boxGeometry />
          <meshStandardMaterial wireframe color="white" />
        </mesh>
        <fog attach={"fog"} args={["blue", 3, 10]}></fog>
        <mesh position={[2, 0, 4]}>
          <boxGeometry />
          <meshBasicMaterial
            color="red"
            visible
            transparent={true}
            opacity={0.5}
            side={THREE.FrontSide}
            alphaTest={0.3}
            depthTest={true}
            depthWrite={true}
            fog={true}
          />
        </mesh>

        <mesh position={[2, 0, 6]}>
          <boxGeometry />
          <meshLambertMaterial
            color="red"
            emissive={"yellow"}
          />
        </mesh>

        <mesh position={[2, 0, 6]}>
          <boxGeometry />
          <meshPhongMaterial
            color="red"
            specular="#fff"
            shininess={20}
            flatShading={true}
          />
        </mesh>
      </group>
    </>
  );
}
