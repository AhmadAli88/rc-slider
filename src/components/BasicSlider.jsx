import React from 'react';
import Slider from 'rc-slider';
import { Card, CardHeader, CardBody } from 'react-bootstrap';

import 'rc-slider/assets/index.css';

const BasicSlider = () => {
  const handleSliderChange = (value) => {
    console.log(`Slider Value: ${value}`);
  };

  return (
    <Card className="mb-3">
      <CardHeader>Basic Slider</CardHeader>
      <CardBody>
        <Slider defaultValue={30} onChange={handleSliderChange} />
      </CardBody>
    </Card>
  );
};

export default BasicSlider;
