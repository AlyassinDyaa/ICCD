import { useMemo, useRef } from 'react'
import './Services.css'
import weddingImg from '../assets/services/wedding.jpg'
import foodPantryImg from '../assets/services/foodPantry.jpg'
import funeralImg from '../assets/services/funeral.jpg'
import familyCouncilImg from '../assets/services/familyCouncil.jpg'
import financialImg from '../assets/services/financial.jpg'
import jobBoardImg from '../assets/services/boardJob.jpg'

const Services = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null)

  const services = useMemo(
    () => [
      {
        title: 'Marriage Service',
        link: '/services/marriage',
        image: weddingImg,
        imageAlt: 'Marriage service',
        description:
          'Nikah is a blessed Sunnah and a sacred covenant. We help facilitate marriage services with clarity, respect, and proper Islamic guidance for the community.',
      },
      {
        title: 'Food Pantry',
        link: '/services/food-pantry',
        image: foodPantryImg,
        imageAlt: 'Food pantry',
        description:
          'A community amanah to help relieve hunger. We serve neighbors with dignity, mercy, and consistent support—regardless of background.',
      },
      {
        title: 'Funeral Services',
        link: '/services/funeral',
        image: funeralImg,
        imageAlt: 'Funeral services',
        description:
          'Caring for the deceased is a communal responsibility (Fard Kifayah). We support families through preparation, janazah, and burial with compassion and Sunnah.',
      },
      {
        title: 'Family Counseling',
        link: '/services/counseling',
        image: familyCouncilImg,
        imageAlt: 'Family counseling',
        description:
          'We provide a confidential space for family support—grounded in Islamic values, wisdom, and practical guidance for healthier relationships.',
      },
      {
        title: 'Financial Assistance / Zakat',
        link: '/services/financial',
        image: financialImg,
        imageAlt: 'Financial assistance and zakat',
        description:
          'Zakat purifies wealth and strengthens the community. We help connect eligible families with assistance through a respectful and careful process.',
      },
      {
        title: 'Job Board',
        link: '/services/jobs',
        image: jobBoardImg,
        imageAlt: 'Job board',
        description:
          'Work is a means of halal provision. We share community opportunities and resources to support career growth and self‑sufficiency.',
      },
    ],
    []
  )

  const scrollByCard = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const firstCard = el.querySelector<HTMLElement>('.service-card')
    const step = (firstCard?.offsetWidth ?? 320) + 16
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section className="services section-bg" aria-label="What we offer">
      <div className="container">
        <div className="section-head section-head--with-controls">
          <h2 className="section-title" style={{paddingBottom: "50px"}}>What We Offer</h2>
          <div className="section-head-controls" aria-label="Carousel controls">
            <button className="services-navbtn" type="button" onClick={() => scrollByCard(-1)} aria-label="Previous">
              ‹
            </button>
            <button className="services-navbtn" type="button" onClick={() => scrollByCard(1)} aria-label="Next">
              ›
            </button>
          </div>
        </div>

        <div className="services-carousel" ref={scrollerRef}>
          {services.map((service) => (
            <a key={service.link} href={service.link} className="service-card">
              <div className="service-media">
                <img className="service-media-img" src={service.image} alt={service.imageAlt} loading="lazy" />
                <div className="service-media-title">{service.title}</div>
              </div>
              <div className="service-content">
                <p>{service.description}</p>
                <div className="service-cta">
                  Learn more <span aria-hidden>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services