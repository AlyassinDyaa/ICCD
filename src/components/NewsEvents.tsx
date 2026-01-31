import './NewsEvents.css'

const NewsEvents = () => {
  const categories = [
    'All', 'General Events', 'Youth Events', 'Weekly', 'Daily', 'ICCD Events'
  ]

  return (
    <section className="news-events section-bg">
      <div className="container">
        <h2>NEWS & EVENTS</h2>

        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn ${index === 0 ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="events-content">
          <div className="no-events">
            <p>Events not found!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsEvents