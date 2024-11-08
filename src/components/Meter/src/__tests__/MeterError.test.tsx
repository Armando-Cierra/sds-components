import React from 'react';
import { Meter } from '../Meter';
import { expectError } from '../../../../TestUtils';

const NoBarError = () => {
  return (
    <>
      <Meter children></Meter>
    </>
  );
};

const InvalidPercentError = () => {
  return (
    <>
      <Meter>
        <Meter.Bar percentage={1000} />
      </Meter>
    </>
  );
};

const InvalidScaleValueError = () => {
  return (
    <>
      <Meter>
        <Meter.Bar
          variant="scaled"
          scales={{
            safe: 10,
            warning: 51,
            danger: 100,
          }}
          percentage={1000}
        />
      </Meter>
    </>
  );
};

const InvalidScaleWithouVariantError = () => {
  return (
    <>
      <Meter>
        <Meter.Bar
          percentage={10}
          scales={{
            safe: 10,
            warning: 51,
            danger: 100,
          }}
        />
      </Meter>
    </>
  );
};

describe('Meter Errors', () => {
  const invalidPercentError =
    'This component works with percentages, so values above 100 would not work. You can normalize the value to percentage  by using: (value / maxValue) * 100';

  it('Invalid children', () => {
    expectError(<NoBarError />, 'The <Meter.Bar /> subcomponent is required.');
  });

  it('Invalid percent passed', () => {
    expectError(<InvalidPercentError />, invalidPercentError);
  });

  it('Invalid scale value passed', () => {
    expectError(<InvalidScaleValueError />, invalidPercentError);
  });

  it('Scale passed without variant error', () => {
    expectError(
      <InvalidScaleWithouVariantError />,
      'It looks like you are attempting to use a scale without specifying the correct variant. To make this work, ensure that the variant is "scaled." Without this, the variant would not function properly.'
    );
  });
});
