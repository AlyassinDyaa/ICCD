import { useEffect, useRef, useState } from 'react'
import './Header.css'

import LOGO from '../assets/images/ICCD-logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) setActiveDropdown(null)
  }

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  useEffect(() => {
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null
      if (!target) return
      if (headerRef.current && !headerRef.current.contains(target)) {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('touchstart', onPointerDown, { passive: true })
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('touchstart', onPointerDown)
    }
  }, [])

  return (
    <header className="header" ref={headerRef}>
      <div className="header-toprow">
        <div className="container header-toprow-inner">
          <a href="#/" className="brand" aria-label="ICCD Home">
            <img src={LOGO} className="brand-logo" alt="ICCD logo" />
            <div className="brand-text">
              <div className="brand-name">ICCD</div>
              <div className="brand-tagline">Islamic Center of the Capital District</div>
            </div>
          </a>

          <div className="header-actions-wrap" aria-label="Quick actions">
            <div className="header-actions">
              <a className="header-action header-action--outline" href="/mcc">MCC</a>
              <a className="header-action header-action--outline" href="/annur">ANNUR</a>
              <a className="header-action header-action--donate" href="/donate">Donate</a>
            </div>

            <div className="header-actions-meta" aria-label="Contact">
              <span className="header-meta-item">
                <span className="header-meta-ico" aria-hidden>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path
                      fill="currentColor"
                      d="M6.6 10.8c1.6 3.1 3.5 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .3 2.1.5 3.2.5.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C9.8 22.3 1.7 14.2 1.7 4.3 1.7 3.6 2.3 3 3 3h3.4c.7 0 1.3.6 1.3 1.3 0 1.1.2 2.2.5 3.2.1.4 0 .9-.2 1.2z"
                    />
                  </svg>
                </span>
                <span className="header-meta-text">518-370-2664</span>
              </span>
              <span className="header-meta-sep" aria-hidden>•</span>
              <span className="header-meta-item">
                <span className="header-meta-ico" aria-hidden>
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path
                      fill="currentColor"
                      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
                    />
                  </svg>
                </span>
                <span className="header-meta-text">info@iccdny.org</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="header-navrow">
        <div className="container header-navrow-inner">
          <nav className="nav" aria-label="Primary">
            <button
              className="mobile-menu-toggle"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>

            <ul className={`nav-list ${isMenuOpen ? 'nav-list--open' : ''}`}>
                <li className="nav-item">
                  <a href="#/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</a>
                </li>
                <li className="nav-item dropdown">
                  <button
                    type="button"
                    className="nav-link dropdown-toggle"
                    onClick={() => toggleDropdown('about')}
                    aria-expanded={activeDropdown === 'about'}
                  >
                    About Us <span className="caret" aria-hidden>{activeDropdown === 'about' ? '▲' : '▼'}</span>
                  </button>
                  <ul className={`dropdown-menu ${activeDropdown === 'about' ? 'dropdown-menu--open' : ''}`}>
                    <li><a href="#/about/history" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>History</a></li>
                    <li><a href="#/about/imams" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Our Imams</a></li>
                    <li><a href="#/about/board" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Board of Trustees</a></li>
                    <li><a href="#/about/membership" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Membership</a></li>
                    <li><a href="#/about/community" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Community</a></li>
                    <li><a href="#/about/constitution" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Constitution</a></li>
                    <li><a href="#/about/elections" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>BOT Elections</a></li>
                    <li><a href="#/about/app" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Masjid App</a></li>
                    <li><a href="#/about/gallery" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Gallery</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#/prayer-times" className="nav-link" onClick={() => setIsMenuOpen(false)}>Prayer Times</a>
                </li>
    
                <li className="nav-item dropdown">
                  <button
                    type="button"
                    className="nav-link dropdown-toggle"
                    onClick={() => toggleDropdown('services')}
                    aria-expanded={activeDropdown === 'services'}
                  >
                    Services <span className="caret" aria-hidden>{activeDropdown === 'services' ? '▲' : '▼'}</span>
                  </button>
                  <ul className={`dropdown-menu ${activeDropdown === 'services' ? 'dropdown-menu--open' : ''}`}>
                    <li><a href="/services/marriage" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Marriage Service</a></li>
                    <li><a href="/services/food-pantry" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Food Pantry</a></li>
                    <li><a href="/services/funeral" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Funeral Services</a></li>
                    <li><a href="/services/counseling" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Family Counseling</a></li>
                    <li><a href="/services/financial" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Financial Assistance / Zakat</a></li>
                    <li><a href="/services/jobs" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Job Board</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    type="button"
                    className="nav-link dropdown-toggle"
                    onClick={() => toggleDropdown('learn')}
                    aria-expanded={activeDropdown === 'learn'}
                  >
                    Learn <span className="caret" aria-hidden>{activeDropdown === 'learn' ? '▲' : '▼'}</span>
                  </button>
                  <ul className={`dropdown-menu ${activeDropdown === 'learn' ? 'dropdown-menu--open' : ''}`}>
                    <li><a href="/learn/weekend-school" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Weekend School</a></li>
                    <li><a href="/learn/quran-academy" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Quran Academy</a></li>
                    <li><a href="/learn/arabic-class" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Arabic Class</a></li>
                    <li><a href="/learn/seerah-class" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Seerah Class</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    type="button"
                    className="nav-link dropdown-toggle"
                    onClick={() => toggleDropdown('connect')}
                    aria-expanded={activeDropdown === 'connect'}
                  >
                    Connect <span className="caret" aria-hidden>{activeDropdown === 'connect' ? '▲' : '▼'}</span>
                  </button>
                  <ul className={`dropdown-menu ${activeDropdown === 'connect' ? 'dropdown-menu--open' : ''}`}>
                    <li><a href="/connect/volunteer" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Volunteer</a></li>
                    <li><a href="/connect/interfaith" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Interfaith</a></li>
                    <li><a href="/connect/press" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Press</a></li>
                    <li><a href="/connect/newsletter" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Newsletter</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <button
                    type="button"
                    className="nav-link dropdown-toggle"
                    onClick={() => toggleDropdown('contact')}
                    aria-expanded={activeDropdown === 'contact'}
                  >
                    Contact <span className="caret" aria-hidden>{activeDropdown === 'contact' ? '▲' : '▼'}</span>
                  </button>
                  <ul className={`dropdown-menu ${activeDropdown === 'contact' ? 'dropdown-menu--open' : ''}`}>
                    <li><a href="/contact" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Contact Us</a></li>
                    <li><a href="/contact/directory" onClick={() => { setIsMenuOpen(false); setActiveDropdown(null); }}>Email Directory</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
  )
}

export default Header