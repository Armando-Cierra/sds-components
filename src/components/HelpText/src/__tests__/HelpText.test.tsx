import React from 'react';
import { HelpText } from '../HelpText';
import { getComponent } from '../../../../TestUtils';
import type { HelpTextProps } from '../types';

const HelpTextTest = ({ ...rest }: Omit<HelpTextProps, 'children'>) => {
  return <HelpText {...rest}>Hey</HelpText>;
};

describe('HelpText Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = getComponent(<HelpTextTest />);
    const helptext = getByTestId('sds_helpText');
    expect(helptext).toBeInTheDocument();
  });

  it('applies custom className when provided', () => {
    const { getByTestId } = getComponent(
      <HelpTextTest className="custom-class" />
    );
    const helptext = getByTestId('sds_helpText');
    expect(helptext).toHaveClass('custom-class');
  });

  it('applies disabled styles when isDisabled is true', () => {
    const { getByTestId } = getComponent(<HelpTextTest isDisabled />);
    const helptext = getByTestId('sds_helpText');
    expect(helptext).toHaveClass('sds_helpText--disabled');
  });

  it('applies readOnly styles when isReadOnly is true', () => {
    const { getByTestId } = getComponent(<HelpTextTest isReadOnly />);
    const helptext = getByTestId('sds_helpText');
    expect(helptext).toHaveClass('sds_helpText--readOnly');
  });

  it('applies error styles when hasError is true and not readOnly or disabled', () => {
    const { getByTestId } = getComponent(<HelpTextTest hasError />);
    const helptext = getByTestId('sds_helpText');
    expect(helptext).toHaveClass('sds_helpText--error');
  });

  it('does not apply error styles when hasError is true but isReadOnly is also true', () => {
    const { getByTestId } = getComponent(<HelpTextTest isReadOnly hasError />);
    const helptext = getByTestId('sds_helpText');
    expect(helptext).not.toHaveClass('sds_helpText--error');
  });
});
