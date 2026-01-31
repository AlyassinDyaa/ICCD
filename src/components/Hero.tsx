import { useEffect, useMemo, useState } from 'react'
import './Hero.css'
import iccdImg1 from '../assets/images/masjid/iccd.jpg'
import iccdImg2 from '../assets/images/masjid/iccd2.jpg'
import masjidImg from '../assets/images/masjid/masjid.jpg'
import mccImg1 from '../assets/images/masjid/mcc.jpg'
import mccImg2 from '../assets/images/masjid/mcc2.jpg'

const Hero = () => {
  const images = useMemo(
    () => [
      // Local ICCD/Masjid images
      iccdImg1,
      iccdImg2,
      masjidImg,
      mccImg1,
      mccImg2,
      // Fallback Unsplash images
     
    ],
    []
  )

  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % images.length)
    }, 4500)
    return () => window.clearInterval(id)
  }, [images.length])

  const goPrev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const goNext = () => setIdx((i) => (i + 1) % images.length)

  return (
    <section className="hero section-bg">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title" style={{marginTop: '50px'}}>The Islamic Center of the Capital District</h1>
          <p className="hero-description">
          In the late 60’s and 70’s, a group of young professionals in the capital district, mostly immigrants from different parts of the world, had one thing in common. They were muslim. While not having a place of their own to practice their Religion, many would often take suffrage at each others homes or even at other places of worship. Sharing the dream to come together as one and practice openly, drove them to establish a place that they could one day call their own.
          </p>
          <div className="hero-actions">
            <a href="#/about" className="btn btn-primary hero-btn">
              Explore More <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-card hero-carousel">
            <img
              src={images[idx]}
              alt="Beautiful mosque architecture"
              className="hero-mosque-image"
              loading="lazy"
            />
            <button className="hero-carousel-btn hero-carousel-btn--prev" onClick={goPrev} aria-label="Previous image">
              ‹
            </button>
            <button className="hero-carousel-btn hero-carousel-btn--next" onClick={goNext} aria-label="Next image">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero