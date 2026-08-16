import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const started = performance.now()
    const tick = () => {
      const next = Math.min(100, Math.round((performance.now() - started) / 8))
      setProgress(next)
      if (next < 100) requestAnimationFrame(tick)
      else setTimeout(onComplete, 250)
    }
    requestAnimationFrame(tick)
  }, [onComplete])
  return <motion.div className="loader" exit={{ opacity: 0, y: '-100%' }} transition={{ duration: .65, ease: [0.76, 0, 0.24, 1] }}><div><p>MAHESH OS</p><strong>MB<span>.</span></strong></div><div className="loader-progress"><span style={{ width: `${progress}%` }} /><output>{String(progress).padStart(3, '0')}</output></div></motion.div>
}
