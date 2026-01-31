import Hero from '../components/Hero'
import PrayerTimes from '../components/PrayerTimes'
import Services from '../components/Services'
import Donation from '../components/Donation'
import NewsEvents from '../components/NewsEvents'
import AppDownload from '../components/AppDownload'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <PrayerTimes />
      <Services />
      <Donation />
      <AppDownload />
      <NewsEvents />
      {/* <Gallery /> */}
    </div>
  )
}

export default Home