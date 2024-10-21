import React, { useState } from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import { Card, CardHeader, CardBody } from 'react-bootstrap';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

const HandleWithTooltip = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Slider.Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const SliderWithTooltip = () => {
  const [value, setValue] = useState(50);

  return (
    <Card className="mb-3">
      <CardHeader>Slider with Tooltip</CardHeader>
      <CardBody>
        <Slider
          min={0}
          max={100}
          defaultValue={value}
          handle={HandleWithTooltip}
          onChange={(val) => setValue(val)}
        />
      </CardBody>
    </Card>
  );
};

export default SliderWithTooltip;
