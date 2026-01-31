import './Footer.css'

const IconPhone = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.4 21 3 13.6 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1L6.6 10.8z"
    />
  </svg>
)

const IconMail = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
    />
  </svg>
)

const IconPin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"
    />
  </svg>
)

const IconFacebook = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.6c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2H15c-1.1 0-1.5.7-1.5 1.4V12H16l-.4 3h-2.1v7A10 10 0 0 0 22 12z"
    />
  </svg>
)

const IconInstagram = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.2a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
    />
  </svg>
)

const IconYoutube = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6A3 3 0 0 0 2.4 7.2 31.8 31.8 0 0 0 2 12a31.8 31.8 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 22 12a31.8 31.8 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"
    />
  </svg>
)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div className="container footer-shell-inner">
          <div className="footer-mid">
            <div className="footer-col">
              <div className="footer-heading">Contact Us</div>
              <div className="footer-list">
                <div className="footer-item">
                  <IconPhone className="footer-ico" />
                  <a href="tel:+15183702664" className="footer-link">(518) 370 – 2664</a>
                </div>
                <div className="footer-item">
                  <IconMail className="footer-ico" />
                  <a href="mailto:info@iccdny.org" className="footer-link">info@iccdny.org</a>
                </div>
                <div className="footer-item">
                  <IconPin className="footer-ico" />
                  <div className="footer-text">21 Lansing Rd N, Schenectady, 12304</div>
                </div>
              </div>
            </div>

            <div className="footer-col footer-map">
              <div className="footer-heading">Location</div>
              <div className="map-wrap" aria-label="Map">
                <iframe
                  title="ICCD Location Map"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps?q=21%20Lansing%20Rd%20N%2C%20Schenectady%2C%20NY%2012304&output=embed"
                />
              </div>
            </div>
          </div>

          <div className="footer-bottomrow">
            <div className="footer-bottom-left">
              <div className="footer-heading">Get In Touch</div>
              <div className="footer-social">
                <a href="#" className="footer-social-link" aria-label="Facebook">
                  <IconFacebook className="footer-social-ico" />
                </a>
                <a href="#" className="footer-social-link" aria-label="Instagram">
                  <IconInstagram className="footer-social-ico" />
                </a>
                <a href="#" className="footer-social-link" aria-label="YouTube">
                  <IconYoutube className="footer-social-ico" />
                </a>
              </div>
            </div>

            <div className="footer-small">
              © 2026 ICCDNY. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer