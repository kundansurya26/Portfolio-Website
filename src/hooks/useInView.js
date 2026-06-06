import { useEffect, useRef, useState } from 'react'

export function useInView(options = { threshold: 0.15, triggerOnce: true }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.triggerOnce) observer.unobserve(el)
        } else if (!options.triggerOnce) {
          setInView(false)
        }
      },
      { threshold: options.threshold }
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [options.threshold, options.triggerOnce])

  return { ref, inView }
}
