import React from 'react';
import Slider from 'rc-slider';
import { Card, CardHeader, CardBody } from 'react-bootstrap';

import 'rc-slider/assets/index.css';

const StepSlider = () => {
  const marks = {
    0: '0%',
    20: '20%',
    40: '40%',
    60: '60%',
    80: '80%',
    100: '100%',
  };

  return (
    <Card className="mb-3">
      <CardHeader>Step Slider with Marks</CardHeader>
      <CardBody>
        <Slider
          min={0}
          max={100}
          step={20}
          marks={marks}
          defaultValue={40}
        />
      </CardBody>
    </Card>
  );
};

export default StepSlider;
