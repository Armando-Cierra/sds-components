import React, { useState } from 'react';
import { Slider } from '../Slider';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { fireEvent, waitFor } from '@testing-library/react';

type testProps = {
  hasError?: boolean;
  isDisabled?: boolean;
};

const SingleSliderTest = ({ hasError, isDisabled }: testProps) => {
  const [value, setValue] = useState(0);

  return (
    <Slider hasError={hasError} isDisabled={isDisabled}>
      <Slider.Label>A label</Slider.Label>
      <Slider.Control
        min={0}
        max={100}
        value={value}
        onChange={(e) => {
          setValue(e.value);
        }}
      />
      <Slider.HelpText>{String(value)}</Slider.HelpText>
    </Slider>
  );
};

describe('<Slider />', () => {
  const slider = 'sds_slider';
  const label = 'sds_slider_label';
  const helptext = 'sds_slider_helpText';

  it('Should render all elements', () => {
    const { getByTestId } = getComponent(<SingleSliderTest />);
    forEachElement(
      [getByTestId(slider), getByTestId(label), getByTestId(helptext)],
      (el) => {
        expect(el).toBeInTheDocument();
      }
    );
  });

  it('Should be changing the value in an uncontrolled way', async () => {
    const { getByTestId } = getComponent(<SingleSliderTest />);
    const sliderInput = getByTestId('sds_slider_input');

    await waitFor(() => {
      fireEvent.change(sliderInput, { target: { value: 50 } });
    });

    expect(getByTestId(helptext)).toHaveTextContent('50');
  });

  it('Expect error state to be working', () => {
    getComponent(<SingleSliderTest hasError />);
    expect(document.querySelector('.sds_slider_control_range')).toHaveClass(
      'sds_slider_control_range--error'
    );
  });

  it('Expect disabled state to be working', () => {
    getComponent(<SingleSliderTest isDisabled />);
    expect(document.querySelector('.sds_slider_control_range')).toHaveClass(
      'sds_slider_control_range--disabled'
    );
  });

  it('Should have minimum value when set to minimum', async () => {
    const { getByTestId } = getComponent(<SingleSliderTest />);
    const sliderInput = getByTestId('sds_slider_input');

    await waitFor(() => {
      fireEvent.change(sliderInput, { target: { value: -10 } });
    });

    expect(getByTestId(helptext)).toHaveTextContent('0');
  });

  it('Should have maximum value when set to maximum', async () => {
    const { getByTestId } = getComponent(<SingleSliderTest />);
    const sliderInput = getByTestId('sds_slider_input');

    await waitFor(() => {
      fireEvent.change(sliderInput, { target: { value: 110 } });
    });

    expect(getByTestId(helptext)).toHaveTextContent('100');
  });
});
