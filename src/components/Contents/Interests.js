import React, { Component, Fragment } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Loader from '../Loader'
import { galleryImageLoaded } from '../../store/reducer'

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

const galleryImages = [
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

class Interests extends Component {
  onImageLoad = event => {
    const { loadedGalleryImages, galleryImageLoaded } = this.props
    if (loadedGalleryImages.length < galleryImages.length) {
      galleryImageLoaded(event.target.src)
    }
  }

  render() {
    const { loadedGalleryImages } = this.props
    return (
      <Fragment>
        {loadedGalleryImages.length < galleryImages.length && <Loader />}
        <div
          className="container-fluid h-100"
          style={{ opacity: loadedGalleryImages.length === galleryImages.length ? 1 : 0, transition: 'opacity 0.6s' }}>
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col" style={{ maxWidth: 800 }}>
              <ImageGallery
                items={galleryImages}
                showThumbnails={false}
                showFullscreenButton={false}
                showPlayButton={false}
                onImageLoad={event => this.onImageLoad(event)}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loadedGalleryImages: state.loadedGalleryImages
})

const mapDispatchToProps = dispatch => bindActionCreators({ galleryImageLoaded }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Interests)
