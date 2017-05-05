import React from 'react';

import img1 from '../../../img/1.jpg';
import img2 from '../../../img/2.jpg';
import img3 from '../../../img/3.jpg';
import img4 from '../../../img/4.jpg';
import img5 from '../../../img/5.jpg';
import img6 from '../../../img/6.jpg';

import ImageGallery from '../../components/ImageGallery';

const Interests = () => {
    const images = [img1, img2, img3, img4, img5, img6];
    return <ImageGallery images={images}/>
};

export default Interests;