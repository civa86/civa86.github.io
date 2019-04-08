import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

// images
import image1 from '../../images/torino.jpg'
import image2 from '../../images/ny.jpg'
import image3 from '../../images/japan.jpg'
import image4 from '../../images/napoleon.jpg'
import image5 from '../../images/skate.jpg'
import image6 from '../../images/dh-1.jpg'
import image7 from '../../images/dh-2.jpg'
import image8 from '../../images/snowboard.jpg'

const Interests = () => {
  const images = [
    { original: image1 },
    { original: image2 },
    { original: image3 },
    { original: image4 },
    { original: image5 },
    { original: image6 },
    { original: image7 },
    { original: image8 }
  ]

  return (
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col" style={{ maxWidth: 800 }}>
          <ImageGallery
            items={images}
            lazyLoad={true}
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
