import React from 'react';
import Slider from 'rc-slider';
import { Card, CardHeader, CardBody } from 'react-bootstrap';

import 'rc-slider/assets/index.css';

const RangeSlider = Slider.Range;

export const RangeSliderExample = () => {
  const handleRangeChange = (value) => {
    console.log(`Range Value: ${value}`);
  };

  return (
    <Card className="mb-3">
      <CardHeader>Range Slider</CardHeader>
      <CardBody>
        <RangeSlider
          defaultValue={[20, 50]}
          onChange={handleRangeChange}
          min={0}
          max={100}
        />
      </CardBody>
    </Card>
  );
};

export default RangeSliderExample;
