import React from 'react';
import { getComponent } from '../../../../TestUtils';
import type { TooltipProps } from '../types';
import { Tooltip } from '../Tooltip';
import { fireEvent, waitFor } from '@testing-library/react';

type TooltipTestProps = Omit<TooltipProps, 'children'>;

const TooltipTest: React.FC<TooltipTestProps> = ({
  position,
  message,
  delayDuration,
}) => {
  return (
    <div>
      <Tooltip
        className="custom-tooltip"
        delayDuration={delayDuration}
        message={message}
        position={position}
        data-example="example"
      >
        <div data-testid="children">{message}</div>
      </Tooltip>
    </div>
  );
};

describe('<Tooltip />', () => {
  const tooltip = 'sds_tooltip';

  it('Component renders successfully', () => {
    const { getByTestId } = getComponent(
      <TooltipTest
        delayDuration={1000}
        message={'Test message'}
        position={'right'}
      />
    );
    expect(getByTestId(tooltip)).toBeInTheDocument();
  });

  it('Component message is properly passed as a prop', async () => {
    const { getByTestId } = getComponent(
      <TooltipTest
        delayDuration={0}
        message={'Test message'}
        position={'right'}
      />
    );
    await waitFor(() => {
      fireEvent.mouseOver(getByTestId(tooltip));
    });
    expect(getByTestId(tooltip)).toHaveTextContent('Test message');
  });

  it('Component position is properly passed as a prop', () => {
    const { getByTestId } = getComponent(
      <TooltipTest
        delayDuration={1000}
        message={'Test message'}
        position={'right'}
      />
    );
    expect(getByTestId(tooltip)).toHaveAttribute('data-side', 'right');
  });

  it('Element renders children as desired', () => {
    const { getByTestId } = getComponent(
      <TooltipTest
        delayDuration={1000}
        message={'Test message'}
        position={'right'}
      />
    );
    expect(getByTestId('children')).toHaveTextContent('Test message');
  });

  it('Element has a custom attribute', () => {
    const { getByTestId } = getComponent(
      <TooltipTest message={'Test message'} position={'right'} />
    );
    expect(getByTestId(tooltip)).toHaveAttribute('data-example', 'example');
  });
});
