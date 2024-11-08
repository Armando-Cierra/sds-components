import React from 'react';
import { Slider } from '../Slider';
import { expectError } from '../../../../TestUtils';

const InvalidChildrenSliderErrorTest = () => {
  return <Slider children></Slider>;
};

const InvalidDualChildrenSliderErrorTest = () => {
  return (
    <Slider>
      <Slider.Control />
      <Slider.DualControl />
    </Slider>
  );
};

describe('Slider error tests', () => {
  it('Should throw if no control or dual control is passed', () => {
    expectError(
      <InvalidChildrenSliderErrorTest />,
      'The <Slider.Control /> or <Slider.DualControl /> subcomponents are required to render the component'
    );
  });

  it('Should throw if both controls are passed', () => {
    expectError(
      <InvalidDualChildrenSliderErrorTest />,
      'You can only use <Slider.Control /> or <Slider.DualControl /> subcomponents at the time to render the component'
    );
  });
});
