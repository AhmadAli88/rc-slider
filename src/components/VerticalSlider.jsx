import React from 'react';
import Slider from 'rc-slider';
import { Card, CardHeader, CardBody } from 'react-bootstrap';

import 'rc-slider/assets/index.css';

const VerticalSlider = () => {
  return (
    <Card className="mb-3">
      <CardHeader>Vertical Slider</CardHeader>
      <CardBody>
        <div style={{ height: 300, marginLeft: '50px' }}>
          <Slider vertical defaultValue={30} />
        </div>
      </CardBody>
    </Card>
  );
};

export default VerticalSlider;
