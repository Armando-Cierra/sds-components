import React from 'react';
import { Label } from '../Label';
import { getComponent } from '../../../../TestUtils';
import type { LabelProps } from '../types';

type TestProps = Omit<LabelProps, 'children'>;

const LabelTest: React.FC<TestProps> = (props) => {
  return (
    <>
      <Label htmlFor="example" {...props}>
        Lorem Ipsum
      </Label>
    </>
  );
};

describe('<Label />', () => {
  const LabelTestID = 'sds_label';
  const LabelInfoTestID = 'sds_label_info';

  it('Should render the component properly', () => {
    const { getByTestId } = getComponent(<LabelTest />);
    const labelComponent = getByTestId(LabelTestID);
    expect(labelComponent).toBeInTheDocument();
  });

  it('children should be rendered', () => {
    const { getByTestId } = getComponent(<LabelTest />);
    const children = getByTestId(LabelTestID);
    expect(children.textContent).toBe('Lorem Ipsum');
  });

  it('Expect the label to detect info prop and showing its message', () => {
    const { getByTestId } = getComponent(<LabelTest info="Lorem Ipsum" />);
    const label = getByTestId(LabelTestID);
    const info = getByTestId(LabelInfoTestID);
    expect(label).toHaveAttribute('data-info', 'true');
    expect(info).toBeInTheDocument();
  });

  it('Expect to render custom icon', () => {
    const { getByTestId } = getComponent(
      <LabelTest info="Lorem Ipsum" infoIcon="star--fill" />
    );
    const iconValue = getByTestId('sds_telicon_icon_name').getAttribute('href');
    expect(iconValue).toBe('#star--fill');
  });

  it('Expect if required, a * to render', () => {
    const { getByTestId } = getComponent(
      <LabelTest info="Lorem Ipsum" isRequired />
    );
    const isRequired = getByTestId('sds_label_indicator').textContent === '*';
    expect(isRequired).toBe(true);
  });
});
