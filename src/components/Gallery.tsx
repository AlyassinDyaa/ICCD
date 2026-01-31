import './Gallery.css'

const Gallery = () => {
  return (
    <section className="gallery section-bg">
      <div className="container">
        <h2>OUR GALLERY</h2>

        <div className="gallery-grid">
          {[
            'https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1584531972411-8590e96e636b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1579013714521-99c1a6c18b2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            'https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
          ].map((imageUrl, index) => (
            <div key={index} className="gallery-item">
              <img
                src={imageUrl}
                alt={`Islamic center gallery image ${index + 1}`}
                className="gallery-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery