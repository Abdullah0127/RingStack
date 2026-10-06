import { useEffect, useRef, useState } from 'react'

// Renders children only when the section is about to scroll into view.
// Combined with React.lazy, the section's code is not even downloaded until then.
export default function LazyMount({ children, minHeight = 420 }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setShow(true)
      return undefined
    }
    const el = ref.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          io.disconnect()
        }
      },
      { rootMargin: '500px 0px' },
    )
    if (el) io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={ref} style={show ? undefined : { minHeight }}>
      {show ? children : null}
    </div>
  )
}
