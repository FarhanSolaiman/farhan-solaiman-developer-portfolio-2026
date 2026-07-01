import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

/* ------------------------------------------------------------
   HeroScene — a playful, editorial 3D moment for the light theme.
   A soft distorting "blob" lit in warm duotone (terracotta + sage),
   with a couple of floating accent shapes. Parallaxes to the cursor.
------------------------------------------------------------ */

export default function HeroScene({ simple = false }: { simple?: boolean }) {
  const group = useRef<THREE.Group>(null!)

  useFrame((state) => {
    const g = group.current
    if (!g) return
    const px = state.pointer.x
    const py = state.pointer.y
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, px * 0.4, 0.05)
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -py * 0.28, 0.05)
    g.position.x = THREE.MathUtils.lerp(g.position.x, 2.5 + px * 0.32, 0.06)
    g.position.y = THREE.MathUtils.lerp(g.position.y, py * 0.2, 0.06)
  })

  return (
    <>
      {/* Warm, soft key + colored rim lights → duotone gradient across the blob */}
      <ambientLight intensity={0.8} color="#fff1df" />
      <directionalLight position={[4, 6, 5]} intensity={1.6} color="#fff2e0" />
      <pointLight position={[-6, 2, 3]} intensity={78} color="#e8794c" distance={20} />
      <pointLight position={[6, -3, 4]} intensity={26} color="#7f9784" distance={16} />

      <group ref={group} position={[2.5, 0, 0]}>
        <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.1}>
          <Sphere args={[1.4, simple ? 64 : 160, simple ? 64 : 160]}>
            <MeshDistortMaterial
              color="#f0e4cd"
              distort={simple ? 0.28 : 0.4}
              speed={simple ? 1.2 : 1.8}
              roughness={0.32}
              metalness={0.12}
            />
          </Sphere>
        </Float>

        {!simple && (
          <>
            <Float speed={2.2} rotationIntensity={1.4} floatIntensity={1.2}>
              <mesh position={[-1.5, 1.05, 1.1]} rotation={[0.6, 0.3, 0]}>
                <torusGeometry args={[0.4, 0.16, 24, 80]} />
                <meshStandardMaterial color="#c05a37" roughness={0.4} metalness={0.15} />
              </mesh>
            </Float>

            <Float speed={1.8} rotationIntensity={1.6} floatIntensity={1.4}>
              <mesh position={[2.0, -1.7, 0.6]} rotation={[0.3, 0.4, 0.2]}>
                <icosahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="#4a5d52" roughness={0.35} metalness={0.2} flatShading />
              </mesh>
            </Float>

            <Float speed={2.6} rotationIntensity={1} floatIntensity={1.8}>
              <mesh position={[-0.3, -2.3, 0.9]}>
                <dodecahedronGeometry args={[0.3, 0]} />
                <meshStandardMaterial color="#c79a3f" roughness={0.4} metalness={0.1} flatShading />
              </mesh>
            </Float>
          </>
        )}
      </group>

      {/* Soft grounding shadow on the cream */}
      <ContactShadows
        position={[2.1, -2.4, 0]}
        opacity={0.35}
        scale={12}
        blur={2.6}
        far={5}
        color="#5c3a22"
      />
    </>
  )
}
