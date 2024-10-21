import React from 'react';
import Slider from 'rc-slider';
import { Card, CardHeader, CardBody } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

import 'rc-slider/assets/index.css';

const ImageGallerySlider = () => {
  const images = [
    "https://via.placeholder.com/200x100?text=Image+1",
    "https://via.placeholder.com/200x100?text=Image+2",
    "https://via.placeholder.com/200x100?text=Image+3"
  ];

  return (
    <Card className="mb-3">
      <CardHeader>Image Gallery Slider</CardHeader>
      <CardBody>
        <Slider
          min={0}
          max={images.length - 1}
          defaultValue={0}
          onChange={(index) => {
            document.getElementById('galleryImage').src = images[index];
          }}
        />
        <div className="text-center mt-3">
          <Image
            id="galleryImage"
            src={images[0]}
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ImageGallerySlider;
