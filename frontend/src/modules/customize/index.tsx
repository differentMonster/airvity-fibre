import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import styles from '../../scss/pages/customize.module.scss'
import Floor from '../../components/Floor'
import Box from '../../components/Box'
import LightBulb from '../../components/Light'
import OrbitControls from '../../components/OrbitControls'
import Draggable from '../../components/Draggable'

export default function Customize() {
	return (
		<div className={styles.scene}>
			<Canvas
				shadows={true}
				className={styles.canvas}
				camera={{
					position: [-6, 7, 7],
				}}>
				<ambientLight color={'white'} intensity={0.2} />
				<LightBulb position={[0, 3, 0]} />
				<Draggable>
					<Suspense fallback={null}>
						<Box rotateX={3} rotateY={0.2} />
					</Suspense>
				</Draggable>
				<OrbitControls />
				<Floor position={[0, -1, 0]} />
			</Canvas>
		</div>
	)
}
