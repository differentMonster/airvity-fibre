// import React from 'react';
// import { Canvas } from '@react-three/fiber';
// import { Suspense } from 'react';
// import styles from '../../scss/pages/customize.module.scss';
// import Floor from '../../components/Floor';
// import Box from '../../components/Box';
// import LightBulb from '../../components/Light';
// import OrbitControls from '../../components/OrbitControls';
// import Draggable from '../../components/Draggable';

// export default function Customize() {
//   return (
//     <div className={styles.scene}>
//       <Canvas
//         shadows={true}
//         className={styles.canvas}
//         camera={{
//           position: [-6, 7, 7],
//         }}
//       >
//         <ambientLight color={'white'} intensity={0.2} />
//         <LightBulb position={[0, 3, 0]} />
//         <Draggable>
//           <Suspense fallback={null}>
//             <Box rotateX={3} rotateY={0.2} />
//           </Suspense>
//         </Draggable>
//         <OrbitControls />
//         <Floor position={[0, -1, 0]} />
//       </Canvas>
//     </div>
//   );
// }

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import React, { useRef, useState } from 'react';

function Box(props) {
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(false);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  // console.log('mesh:', mesh.current.rotation)

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
}

const LCanvas = ({ children }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

export default LCanvas;
