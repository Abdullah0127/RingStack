import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { LogoMark, MenuIcon, CloseIcon } from './Icons.jsx'
import { site, nav } from '../data/site.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo" aria-label={`${site.fullName} home`}>
          <LogoMark />
          <span>{site.name}</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/contact" className="btn btn-ghost header-cta">
          Get Started
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`}>
        <nav className="container" aria-label="Mobile">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-grad">
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  )
}
