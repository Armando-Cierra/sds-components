import React from 'react';
import { ButtonGroup } from '..';
import { getComponent } from '../../../../TestUtils';

const ButtonGroupTest = ({ ...rest }) => {
  return (
    <>
      <ButtonGroup {...rest}>
        <ButtonGroup.Button>Button 1</ButtonGroup.Button>
        <ButtonGroup.Button>Button 2</ButtonGroup.Button>
        <ButtonGroup.Button>Button 3</ButtonGroup.Button>
      </ButtonGroup>
    </>
  );
};

describe('ButtonGroup component', () => {
  const ButtonGroupTestID = 'sds_buttonGroup';

  it('Should be rendering ', () => {
    const { getByTestId } = getComponent(<ButtonGroupTest />);
    const buttonGroup = getByTestId(ButtonGroupTestID);
    expect(buttonGroup).toBeInTheDocument();
  });

  it('Renders the desired buttons ', () => {
    const { getAllByTestId } = getComponent(<ButtonGroupTest />);
    const buttons = getAllByTestId('sds_buttonGroup_button');
    expect(buttons.length).toBe(3);
  });

  it('applies the correct data attribute when there is only one button', () => {
    const { getByTestId } = getComponent(
      <ButtonGroup>
        <ButtonGroup.Button>Button 1</ButtonGroup.Button>
      </ButtonGroup>
    );
    const buttonGroup = getByTestId(ButtonGroupTestID);
    expect(buttonGroup).toHaveClass('sds_buttonGroup--individualButton');
  });

  it('ButtonGroup accepts native div attributes', () => {
    const { getByTestId } = getComponent(<ButtonGroupTest title="example" />);
    const buttonGroup = getByTestId(ButtonGroupTestID);
    expect(buttonGroup).toHaveAttribute('title', 'example');
  });
});
