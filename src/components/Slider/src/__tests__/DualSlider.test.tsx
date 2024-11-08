import React, { useState } from 'react';
import { Slider } from '../Slider';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { fireEvent, waitFor } from '@testing-library/react';

type testProps = {
  hasError?: boolean;
  isDisabled?: boolean;
};

const DualSliderTest = ({ hasError, isDisabled }: testProps) => {
  const [value, setValue] = useState(0);
  const [endValue, setEndValue] = useState(0);

  return (
    <Slider hasError={hasError} isDisabled={isDisabled}>
      <Slider.Label>A label</Slider.Label>
      <Slider.DualControl
        min={0}
        max={100}
        endValue={endValue}
        initialValue={value}
        onChange={(e) => {
          setValue(e.initialValue);
          setEndValue(e.endValue);
        }}
      />
      <Slider.HelpText>{`${value} ${endValue}`}</Slider.HelpText>
    </Slider>
  );
};

describe('<Slider />', () => {
  const sliderInitial = 'sds_slider_input_initial';
  const sliderEnd = 'sds_slider_input_end';
  const label = 'sds_slider_label';
  const helptext = 'sds_slider_helpText';

  it('Should render all elements', () => {
    const { getByTestId } = getComponent(<DualSliderTest />);
    forEachElement(
      [
        getByTestId(sliderInitial),
        getByTestId(sliderEnd),
        getByTestId(label),
        getByTestId(helptext),
      ],
      (el) => {
        expect(el).toBeInTheDocument();
      }
    );
  });

  it('Should be changing the value in an uncontrolled way', async () => {
    const { getByTestId } = getComponent(<DualSliderTest />);
    const sliderInputInitial = getByTestId(sliderInitial);
    const sliderInputEnd = getByTestId(sliderEnd);

    await waitFor(() => {
      fireEvent.change(sliderInputEnd, { target: { value: 50 } });
      fireEvent.change(sliderInputInitial, { target: { value: 25 } });
    });

    expect(getByTestId(helptext)).toHaveTextContent('25 50');
  });

  it('Should have minimum value when set to minimum', async () => {
    const { getByTestId } = getComponent(<DualSliderTest />);
    const sliderInputEnd = getByTestId(sliderEnd);

    await waitFor(() => {
      fireEvent.change(sliderInputEnd, { target: { value: -10 } });
    });

    expect(getByTestId(helptext)).toHaveTextContent('0 0');
  });

  it('Should have maximum value when set to maximum', async () => {
    const { getByTestId } = getComponent(<DualSliderTest />);
    const sliderInputEnd = getByTestId(sliderEnd);

    await waitFor(() => {
      fireEvent.change(sliderInputEnd, { target: { value: 110 } });
    });

    expect(getByTestId(helptext)).toHaveTextContent('0 100');
  });
});
