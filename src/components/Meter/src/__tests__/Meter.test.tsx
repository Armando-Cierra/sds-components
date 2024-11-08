import React, { useState } from 'react';
import { Meter } from '../Meter';
import { forEachElement, getComponent } from '../../../../TestUtils';
import type { MeterLabelPositions } from '../types';
import { fireEvent } from '@testing-library/react';

type testProps = {
  variant?: 'primary' | 'default' | 'scaled';
  scales?: {
    safe?: number;
    warning?: number;
    danger?: number;
  };
  labelPosition?: MeterLabelPositions;
};

const MeterTest = ({ variant, scales, labelPosition }: testProps) => {
  const [percentage, setPercentage] = useState(0);

  return (
    <>
      <button data-testid="button-test" onClick={() => setPercentage(49)}>
        51
      </button>
      <button data-testid="button-test" onClick={() => setPercentage(74)}>
        76
      </button>
      <button data-testid="button-test" onClick={() => setPercentage(100)}>
        100
      </button>
      <div data-testid="value-test">{percentage}</div>
      <Meter labelPosition={labelPosition}>
        <Meter.Bar variant={variant} scales={scales} percentage={percentage} />
        <Meter.Label>A label</Meter.Label>
      </Meter>
    </>
  );
};

describe('<Meter />', () => {
  const labelTestID = 'sds_meter_label';
  const barTestID = 'sds_meter_bar';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<MeterTest />);
    const label = getByTestId(labelTestID);
    const bar = getByTestId(barTestID);

    forEachElement([bar, label], (el) => {
      expect(el).toBeInTheDocument();
    });
  });

  it('The primary variant should be working', () => {
    const { getByTestId } = getComponent(<MeterTest variant="primary" />);
    const bar = getByTestId(barTestID);
    expect(bar).toHaveClass('sds_meter_bar--variant_primary');
  });

  it('Percentage of the bar should change ', () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <MeterTest variant="primary" />
    );
    fireEvent.click(getAllByTestId('button-test')[0]);
    const bar = getByTestId(barTestID);
    const width = getComputedStyle(bar).width;
    expect(width).toBe('49%');
  });

  it('The scaled variant should be working', () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <MeterTest variant="scaled" />
    );
    const bar = getByTestId(barTestID);
    fireEvent.click(getAllByTestId('button-test')[0]);

    expect(bar).toHaveClass('sds_meter_bar--variant_safe');

    fireEvent.click(getAllByTestId('button-test')[1]);

    expect(bar).toHaveClass('sds_meter_bar--variant_warning');

    fireEvent.click(getAllByTestId('button-test')[2]);

    expect(bar).toHaveClass('sds_meter_bar--variant_danger');
  });

  it('The labelPosition works', () => {
    const { getByTestId } = getComponent(<MeterTest labelPosition="below" />);
    const label = getByTestId(labelTestID);
    expect(label).toHaveClass('sds_meter_label--below');
  });
});
