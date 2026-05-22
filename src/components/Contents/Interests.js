import React, { Fragment, useState } from 'react'
import ImageGallery from 'react-image-gallery'
import Loader from '../Loader'
// Style
import 'react-image-gallery/styles/css/image-gallery.css'
// Images
import family from '../../images/family.jpg'
import napoleon from '../../images/napoleon.jpg'
import japan1 from '../../images/japan-1.jpg'
import ny from '../../images/ny.jpg'
import mtb1 from '../../images/mtb1.jpg'
import mtb2 from '../../images/mtb2.jpg'
import skatePark from '../../images/skate-park.jpg'
import skateDh from '../../images/skate-dh.jpg'
import snowRail from '../../images/snow-rail.jpg'
import snowJump from '../../images/snow-jump.jpg'

const galleryImages = [
  { original: family },
  { original: napoleon },
  { original: japan1 },
  { original: ny },
  { original: mtb1 },
  { original: mtb2 },
  { original: skatePark },
  { original: skateDh },
  { original: snowRail },
  { original: snowJump }
]

export default function Interests() {
  const [loadedImages, setLoadedImages] = useState([])
  const onImageLoad = event => {
    if (loadedImages.length < galleryImages.length) {
      setLoadedImages([...loadedImages, event.target.src])
    }
  }

  return (
    <Fragment>
      {loadedImages.length < galleryImages.length && <Loader />}
      <div
        className="container-fluid h-100"
        style={{ opacity: loadedImages.length === galleryImages.length ? 1 : 0, transition: 'opacity 0.6s' }}>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col" style={{ maxWidth: 800 }}>
            <ImageGallery
              items={galleryImages}
              showThumbnails={false}
              showFullscreenButton={false}
              showPlayButton={false}
              onImageLoad={event => onImageLoad(event)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
