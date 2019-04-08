import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

// images
import torino from '../../images/torino.jpg'
import ny from '../../images/ny.jpg'
import japan1 from '../../images/japan-1.jpg'
import japan2 from '../../images/japan-2.jpg'
import napoleon from '../../images/napoleon.jpg'
import skatePark from '../../images/skate-park.jpg'
import skateDh from '../../images/skate-dh.jpg'
import snowRail from '../../images/snow-rail.jpg'
import snowJump from '../../images/snow-jump.jpg'

const Interests = () => {
  const images = [
    { original: torino },
    { original: japan1 },
    { original: japan2 },
    { original: ny },
    { original: napoleon },
    { original: skatePark },
    { original: skateDh },
    { original: snowRail },
    { original: snowJump }
  ]
  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col" style={{ maxWidth: 800 }}>
          <ImageGallery
            items={images}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={!('ontouchstart' in window)}
          />
        </div>
      </div>
    </div>
  )
}

export default Interests
