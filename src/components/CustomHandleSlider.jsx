import React from 'react';
import Slider from 'rc-slider';
import { Card, CardHeader, CardBody } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'rc-slider/assets/index.css';

const CustomHandle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <div {...restProps} className="custom-handle">
      <span className={`handle-icon ${dragging ? 'dragging' : ''}`}>
        {index === 0 ? <ChevronLeft /> : <ChevronRight />}
      </span>
    </div>
  );
};

const CustomHandleSlider = () => {
  const handleChange = (value) => {
    console.log(`Slider Value: ${value}`);
  };

  return (
    <Card className="mb-3">
      <CardHeader>Slider with Custom Handle</CardHeader>
      <CardBody>
        <Slider
          defaultValue={50}
          handle={CustomHandle}
          onChange={handleChange}
        />
      </CardBody>
    </Card>
  );
};

export default CustomHandleSlider;
