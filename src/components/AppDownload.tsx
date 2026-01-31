import './AppDownload.css'
import APP_STORE_BADGE from '../assets/images/applestore.png'
import GOOGLE_PLAY_BADGE from '../assets/images/googleplatstoreimg.png'
import MOBILE_APP_QR from '../assets/images/mobileAppQR.png'
import MOBILE_APP_MOCK from '../assets/images/mobileApp.png'

const AppDownload = () => {
  return (
    <section className="app-download section-bg" aria-label="Download our app">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" style={{paddingBottom: "50px"}}>Download Our APP</h2>
        </div>

        <div className="app-download-card">
          <div className="app-download-left">
            <p className="app-download-copy">
              AlhamduLillah, Iccdny team has launched Iccdny Masjid App where you can view current Jamat timings, events,
              donate online and more
            </p>

            <div className="app-download-badges" aria-label="App download links">
              <a className="app-download-badge-link" href="#" aria-label="Download on the App Store">
                <img className="app-download-badge-img" src={APP_STORE_BADGE} alt="Download on the App Store" />
              </a>
              <a className="app-download-badge-link" href="#" aria-label="Get it on Google Play">
                <img className="app-download-badge-img" src={GOOGLE_PLAY_BADGE} alt="Get it on Google Play" />
              </a>
            </div>

            <div className="app-download-qr-stack" aria-label="QR code">
              <div className="app-download-qr-card">
                <img className="app-download-qr-img" src={MOBILE_APP_QR} alt="QR code to download ICCD app" />
              </div>
            </div>
          </div>

          <div className="app-download-right">
            <img className="app-download-phone" src={MOBILE_APP_MOCK} alt="ICCD Masjid App preview" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AppDownload

