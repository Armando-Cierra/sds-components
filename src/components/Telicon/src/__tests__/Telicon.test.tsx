import React from 'react';
import { Telicon } from '../Telicon';
import { getComponent } from '../../../../TestUtils';
import type { TeliconProps } from '../types';

type TestTypes = Omit<TeliconProps, 'iconName'>;

const TestTelicon: React.FC<TestTypes> = ({ size }) => {
  return (
    <>
      <Telicon iconName={'star--fill'} size={size} data-example="example" />
    </>
  );
};

describe('<Telicon />', () => {
  const TeliconTestId = 'sds_telicon';

  it('Telicon is nicely rendered', () => {
    const { getByTestId } = getComponent(<TestTelicon />);
    const telicon = getByTestId(TeliconTestId);
    expect(telicon).toBeInTheDocument();
  });

  it('Expect telicon to have the desired icon size', () => {
    const { getByTestId } = getComponent(<TestTelicon size="large" />);
    const telicon = getByTestId(TeliconTestId);
    expect(telicon).toHaveClass('sds_telicon--large');
  });

  it('Expect telicon to have the desired IconName', () => {
    const { getByTestId } = getComponent(<TestTelicon size="large" />);
    const iconName = getByTestId('sds_telicon_icon_name');
    expect(iconName).toHaveAttribute('href', '#star--fill');
  });

  it('Expect telicon to have custom attribute', () => {
    const { getByTestId } = getComponent(<TestTelicon size="large" />);
    const telicon = getByTestId(TeliconTestId);
    expect(telicon).toHaveAttribute('data-example', 'example');
  });
});
