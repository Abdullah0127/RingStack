import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Suspense fallback={<div className="page-loading" aria-hidden="true" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
