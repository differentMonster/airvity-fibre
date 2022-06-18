import React from 'react';
import { extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

function Controls(props) {
  const { camera, gl } = useThree();
  return (
    <OrbitControls attach={'orbitControls'} args={[camera, gl.domElement]} />
  );
}

export default Controls;
