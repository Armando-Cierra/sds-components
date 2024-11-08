import React from 'react';
import { Alert, Text } from '../../..';
import { getComponent } from '../../../../TestUtils';
import type { AlertProps } from '../types';

type TestProps = Omit<AlertProps, 'children' | '$$typeof'>;

const AlertTest = (props: TestProps) => {
  return (
    <>
      <Alert
        heading="alert"
        icon="star--fill"
        variant={props.variant}
        isOpen={props.isOpen}
      >
        <Alert.Content>
          <Text.P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sunt voluptate repellat ipsam tempore! Natus recusandae aut soluta
            praesentium cupiditate. Quo voluptatem laborum libero dignissimos.
          </Text.P>
        </Alert.Content>
      </Alert>
    </>
  );
};

describe('<Alert />', () => {
  const AlertTestID = 'sds_alert';

  it('Should render if show is true', () => {
    const { getByTestId } = getComponent(<AlertTest heading="alert" isOpen />);
    const alert = getByTestId(AlertTestID);
    expect(alert).toBeInTheDocument();
  });

  it('Should not render if show is false (using react spring, the element is removed fron the dom)', () => {
    const { queryByTestId } = getComponent(
      <AlertTest heading="alert" isOpen={false} />
    );
    const alert = queryByTestId(AlertTestID);
    expect(alert).toBeFalsy();
  });

  it('Should render the desired variant', () => {
    const { getByTestId } = getComponent(
      <AlertTest heading="alert" variant="info" />
    );
    const alert = getByTestId(AlertTestID);
    expect(alert).toHaveAttribute('data-variant', 'info');
  });

  it('Should render the children', () => {
    const { getByTestId } = getComponent(
      <AlertTest heading="alert" variant="info" />
    );
    const children = getByTestId('sds_text');
    expect(children).toBeInTheDocument();
  });

  it('should render the passed icon ', () => {
    const { getByTestId } = getComponent(
      <AlertTest heading="alert" variant="info" />
    );
    const icon = getByTestId('sds_telicon_icon_name');
    expect(icon.getAttribute('href')).toBe('#star--fill');
  });
});
