import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

let wResize;

export class ImageGallery extends Component {

    componentDidMount () {
        $('#interests-pics').waitForImages(() => {
            $('.loader').fadeOut(() => $('.image-gallery').fadeIn());
        });
        wResize = () => {
            $('.image-gallery').height($('.content-editor').height());
        };
        $(window).on('resize', wResize);
        wResize();
    }

    componentWillUnmount () {
        $(window).off('resize', wResize);
    }

    render () {
        const { images } = this.props;

        return (
            <div id="image-gallery-wrapper">
                <div className="loader"></div>
                <div className="image-gallery" style={{ display: 'none' }}>
                    <div id="interests-pics"
                         className="carousel slide"
                         data-ride="carousel"
                         data-interval="false">
                        <div className="carousel-inner" role="listbox">
                            {images.map((img, i) => (
                                <div key={i} className={'item' + ((i === 0) ? ' active' : '')}>
                                    <img className="img-responsive" src={img}/>
                                </div>
                            ))}
                        </div>
                        <a className="left carousel-control"
                           data-target="#interests-pics"
                           role="button"
                           data-slide="prev">
                            <span className="carousel-control-left glyphicon glyphicon-chevron-left"></span>
                        </a>
                        <a className="right carousel-control"
                           data-target="#interests-pics"
                           role="button"
                           data-slide="next">
                            <span className="carousel-control-right glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ImageGallery;
