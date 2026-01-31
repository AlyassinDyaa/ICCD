import { useEffect, useMemo, useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'

function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#/')

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#/')
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const route = useMemo(() => {
    const raw = (hash || '#/').replace(/^#/, '')
    // Normalize: allow "#/about/x" or "#about/x"
    const path = raw.startsWith('/') ? raw : `/${raw}`
    const parts = path.split('/').filter(Boolean)
    const page = parts[0] ?? ''
    const section = parts[1] ?? ''
    return { page, section }
  }, [hash])

  // Home section scrolling via route like "#/prayer-times"
  useEffect(() => {
    if (route.page && route.page !== 'prayer-times') return
    const id = route.page === 'prayer-times' ? 'prayer-times' : ''
    if (!id) return
    window.setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }, [route.page])

  return (
    <Layout>
      {route.page === 'about' ? <About initialSection={route.section} /> : <Home />}
    </Layout>
  )
}

export default App
