import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HeroScene from './HeroScene'
import { useIsMobile } from '../hooks/useMediaQuery'

/* Lazily imported by Hero so Three.js ships as its own async chunk
   (and never loads at all for reduced-motion visitors). */
export default function HeroCanvas() {
  const mobile = useIsMobile()
  return (
    <Canvas
      dpr={mobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 0, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <Suspense fallback={null}>
        <HeroScene simple={mobile} />
      </Suspense>
    </Canvas>
  )
}
