import { useEffect, useMemo } from 'react'
import './About.css'
import BOT_IMG from '../assets/images/BOT.jpeg'

type AboutSection = {
  key:
    | 'history'
    | 'imams'
    | 'board'
    | 'membership'
    | 'community'
    | 'constitution'
    | 'elections'
    | 'app'
    | 'gallery'
  title: string
  body: string[]
  listTitle?: string
  listItems?: string[]
  bulletsTitle?: string
  bullets?: string[]
  footerNote?: string
  download?: {
    label: string
    filename: string
    content: string
  }
  linksTitle?: string
  links?: { label: string; href: string }[]
  image?: { src: string; alt: string }
  downloadHref?: string
  downloadLabel?: string
  email?: string
}

const About = ({ initialSection }: { initialSection?: string }) => {

  const sections = useMemo<AboutSection[]>(
    () => [
      {
        key: 'history',
        title: 'History',
        body: [
          'In the late 60’s and 70’s, a group of young professionals in the capital district, mostly immigrants from different parts of the world, had one thing in common. They were muslim. While not having a place of their own to practice their Religion, many would often take suffrage at each others homes or even at other places of worship. Sharing the dream to come together as one and practice openly, drove them to establish a place that they could one day call their own.',
          'In 1979, this dream became a reality. The Islamic Center of the Capital District, known as the ICCD, was built. The building, although only a few thousand square feet, it included a kitchen, small banquet hall, a few offices, and a prayer area to accommodate a few hundred worshippers. At the time, this may have seemed a little ambitious for the small group. But, the pioneers knew that one day, even this place, would be too small for them. As the years went by, the muslim community began to grow and the need for educating our community became a necessity.',
          'In the 80’s, a learning schedule was implemented. For the youth, the weekend school was formed. Comprised of volunteers, mostly mothers of the children, the weekend school began to take shape. Classes were held on Friday evenings and Sunday mornings. Alongside the weekend school, the community held classes for the adults taught by the local Imam. This was a place that our members could not only learn their Islamic Culture but also socialize with others just like themselves.',
          'In the 90’s, the community went from hundreds to thousands. The need for a larger facility became more and more evident. The banquet hall was now being used as classrooms and overflow for the weekly Friday afternoon Mass, also known as Jumma Prayer. During this time, a member of the community had passed away and left money to the community, with one contingency. The money was to be used one day to build a center for our youth to enjoy.',
          'Mr. Qadi’s vision inspired the Muslim community and in the early 2000’s, the planning of the community center became underway. There were many struggles during the beginning stages. Originally, the 17,000 sq Ft. facility was designed as a one story open space centered around an indoor basketball court which could double as additional prayer space. Soon after, the plans grew into the 3 story, 33,000 square feet community center you see before you today. This would be known as the MCC, or Muslim Community Center. Amenities include a full size basketball court overlooked by a 2nd story running track, his and her workout areas, a 6000 sq ft banquet hall accommodating up to 500 people and an area of worship to hold 2,000 people.',
        ],
      },
      {
        key: 'imams',
        title: 'Our Imams',
        body: [
          'Meet the leadership that guides our community with knowledge, mercy, and wisdom—supporting prayer, education, and spiritual growth.',
        ],
      },
      {
        key: 'board',
        title: 'Board of Trustees',
        body: [
          'ICCD’s Board of Trustees (BOT) is responsible for administering the day-to-day affairs of ICCD, taking care of and maintaining ICCD’s facilities and properties, managing expenses as approved by the BOT, and performing such acts that may be necessary for achieving the goals, vision and overall objectives of ICCD.',
          'For qualifications and eligibility you can review it in ICCD’s Constitution.',
          'ICCD has Nine (9) Board of Trustees (BOT) that are elected to office by the General Body members. The current Board of Directors elected are:',
        ],
        listTitle: 'Current Board of Trustees',
        listItems: [
          'Abdurrahman Khalidi (President)',
          'Mohammad Rafi (Vice President, Assistant Treasurer)',
          'Imran Siddiqui (Treasurer)',
          'Ranan Akari (Secretary)',
          'Zainul-Abideen Syed (Member)',
          'Abdalmajeid Alyassin (Member)',
          'Tipu nazeer (Member)',
          'Muhammad Azam Hussain (Member)',
          'Farah Khan (Member)',
        ],
        bulletsTitle: 'Goals of the current Board of Trustees',
        bullets: [
          'Streamline operations, processes and procedures to serve the needs of the community',
          'Empower committees and the youth to provide excellent services',
          'Contribute to society-at-large through outreach and social services',
        ],
        footerNote:
          'Whether you have a question, an inquiry, a comment or a request, we appreciate you taking the time to write. To contact the ICCD Management team, please email info@iccdny.org.',
      },
      {
        key: 'membership',
        title: 'Membership',
        body: ['ICCD Membership Application and Dues', 'As-Salaam Alaikum', 'Attached is the ICCD Membership Application form. Please fill out the form and forward to president@iccdny.org or vice.president@iccdny.org. This form needs to be filled out and approved by the ICCD BOT.', 'Once approved, membership dues of $250.00 are payable prior to July 31, 2023. In order to vote during the elections or vote on any matters that come before the General Body of the ICCD an individual has to be a paying member of ICCD.', 'All membership dues are payable before July 31, 2023 for this year. Registered volunteers at ICCD are assessed reduced membership dues of $100.00.'],
        download: {
          label: 'Download Form',
          filename: 'iccd-membership-application.txt',
          content:
            'ICCD Membership Application and Dues\n\nAs-Salaam Alaikum\n\nAttached is the ICCD Membership Application form. Please fill out the form and forward to president@iccdny.org or vice.president@iccdny.org. This form needs to be filled out and approved by the ICCD BOT.\n\nOnce approved, membership dues of $250.00 are payable prior to July 31, 2023. In order to vote during the elections or vote on any matters that come before the General Body of the ICCD an individual has to be a paying member of ICCD.\n\nAll membership dues are payable before July 31, 2023 for this year. Registered volunteers at ICCD are assessed reduced membership dues of $100.00.\n',
        },
      },
      {
        key: 'community',
        title: 'Community',
        body: [
          'ICCD is one of several local mosques that serves the greater Capital Region. The below is a list of other mosques and community centers in the area.',
        ],
        linksTitle: 'Other mosques and community centers',
        links: [
          { label: 'Muslim Commuity Center', href: 'https://www.google.com/maps/search/?api=1&query=Muslim%20Community%20Center' },
          { label: 'Masjid Al-Hidaya', href: 'https://www.google.com/maps/search/?api=1&query=Masjid%20Al-Hidaya' },
          { label: 'Masjid As-Salam', href: 'https://www.google.com/maps/search/?api=1&query=Masjid%20As-Salam' },
          { label: 'Masjid Darul Taqwa', href: 'https://www.google.com/maps/search/?api=1&query=Masjid%20Darul%20Taqwa' },
        ],
      },
      {
        key: 'constitution',
        title: 'Constitution',
        body: [
          'Explore the principles and governance that guide ICCD—built on accountability, fairness, and service to the community.',
        ],
      },
      {
        key: 'elections',
        title: 'BOT Elections',
        body: [
          'BOT Nomination Form PDF',
          'Please email the election committee for further information at Election@iccdny.org',
        ],
        image: { src: BOT_IMG, alt: 'ICCD Board of Trustees' },
        downloadHref: '/bot-nomination-form.pdf',
        downloadLabel: 'Download Nomination Form (PDF)',
        email: 'Election@iccdny.org',
      },
    ],
    []
  )

  useEffect(() => {
    if (!initialSection) return
    const el = document.getElementById(`about-${initialSection}`)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [initialSection])

  return (
    <div className="about-page">
      {sections.map((s) => (
        <section
          key={s.key}
          id={`about-${s.key}`}
          className={`about-section ${s.key === 'elections' ? 'about-section--elections' : ''}`}
        >
          <div className="container">
            <div className="section-head">
              <h2 className="section-title" style={{ paddingBottom: '50px' }}>
                {s.title}
              </h2>
            </div>
            {s.key === 'elections' ? (
              <div className="about-card bot-elections-card">
                <div className="bot-elections-grid">
                  <div className="bot-elections-left">
                    {s.image ? (
                      <img className="bot-elections-img" src={s.image.src} alt={s.image.alt} loading="lazy" />
                    ) : null}
                  </div>

                  <div className="bot-elections-right">
                    {s.downloadHref ? (
                      <a className="bot-elections-btn" href={s.downloadHref} download>
                        BOT Nomination Form PDF
                      </a>
                    ) : null}

                    <div className="bot-elections-text">
                      Please email the election committee for further information at{' '}
                      {s.email ? (
                        <a className="about-link" href={`mailto:${s.email}`}>
                          {s.email}
                        </a>
                      ) : (
                        'Election@iccdny.org'
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="about-card">
                {s.body.map((para, idx) => (
                  <p key={idx} className="about-body">
                    {para}
                  </p>
                ))}

                {s.image ? (
                  <div className="about-media" aria-label="Section image">
                    <img className="about-img" src={s.image.src} alt={s.image.alt} loading="lazy" />
                  </div>
                ) : null}

              {s.key === 'board' ? (
                <p className="about-body about-inline-link">
                  <a className="about-link" href="#/about/constitution">
                    View ICCD’s Constitution
                  </a>
                </p>
              ) : null}

              {s.listItems?.length ? (
                <>
                  {s.listTitle ? <div className="about-subtitle">{s.listTitle}</div> : null}
                  <ul className="about-list">
                    {s.listItems.map((item) => (
                      <li key={item} className="about-list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {s.bullets?.length ? (
                <>
                  {s.bulletsTitle ? <div className="about-subtitle">{s.bulletsTitle}</div> : null}
                  <ul className="about-bullets">
                    {s.bullets.map((b) => (
                      <li key={b} className="about-list-item">
                        {b}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

              {s.links?.length ? (
                <>
                  {s.linksTitle ? <div className="about-subtitle">{s.linksTitle}</div> : null}
                  <ul className="about-links">
                    {s.links.map((lnk) => (
                      <li key={lnk.label} className="about-list-item">
                        <a className="about-link" href={lnk.href} target="_blank" rel="noreferrer">
                          {lnk.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}

                {s.download ? (
                  <button
                    type="button"
                    className="about-action-btn"
                    onClick={() => {
                      const blob = new Blob([s.download!.content], { type: 'text/plain;charset=utf-8' })
                      const url = URL.createObjectURL(blob)
                      const a = document.createElement('a')
                      a.href = url
                      a.download = s.download!.filename
                      document.body.appendChild(a)
                      a.click()
                      a.remove()
                      URL.revokeObjectURL(url)
                    }}
                  >
                    {s.download.label}
                  </button>
                ) : null}

                {s.footerNote ? <p className="about-body about-footer">{s.footerNote}</p> : null}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}

export default About