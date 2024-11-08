import React from 'react';
import { Menu } from '../Menu';
import { forEachElement, getComponent } from '../../../../TestUtils';
import type { MenuProps } from '../types';

const MenuTest = ({ ...rest }: MenuProps) => {
  return (
    <Menu defaultOpen {...rest}>
      <Menu.Trigger>
        <div data-testid="sds_test_button">Click me</div>
      </Menu.Trigger>
      <Menu.Option layout="vertical">Option 1</Menu.Option>
      <Menu.Option layout="vertical">Option 2</Menu.Option>
      <Menu.Option layout="horizontal">Option 3</Menu.Option>
      <Menu.Divider />
      <Menu.CustomArea {...rest['aria-busy']?.valueOf}>
        I am a custom area
      </Menu.CustomArea>
      <Menu.Header>
        I am a header
        <Menu.Actions {...rest['aria-busy']?.valueOf}>
          <button>I am an action</button>
        </Menu.Actions>
      </Menu.Header>
      <Menu.Search />
    </Menu>
  );
};

describe('Menu component', () => {
  const MenuTestId = 'sds_menu';
  const ActionsTestId = 'sds_menu_actions';
  const CustomAreaTestId = 'sds_menu_customArea';
  const DividerTestId = 'sds_menu_divider';
  const HeaderTestId = 'sds_menu_header';
  const OptionsTestId = 'sds_menu_option';
  const TriggerTestId = 'sds_menu_trigger';

  it('Should be rendering', async () => {
    const { getByTestId, getAllByTestId } = getComponent(
      <MenuTest />,
      'document'
    );

    const menu = getByTestId(MenuTestId);
    const actions = getByTestId(ActionsTestId);
    const customArea = getAllByTestId(CustomAreaTestId)[0];
    const divider = getByTestId(DividerTestId);
    const header = getByTestId(HeaderTestId);
    const trigger = getByTestId(TriggerTestId);

    forEachElement(
      [menu, actions, customArea, divider, header, trigger],
      (element) => expect(element).toBeInTheDocument()
    );
  });

  it('Should render all the desired options passed as a child', () => {
    const { getAllByTestId } = getComponent(<MenuTest />, 'document');

    const options = getAllByTestId(OptionsTestId);
    expect(options.length).toBe(3);
  });

  it('Menu Options should be having the passed layout style', () => {
    const { getAllByTestId } = getComponent(<MenuTest />, 'document');

    const options = getAllByTestId(OptionsTestId);
    const verticalOptions = [options[0], options[1]];
    const horizontalOptions = [options[3]];
    expect(verticalOptions.length).toBe(2);
    expect(horizontalOptions.length).toBe(1);
  });

  it('Should be getting the positioning props correctly', () => {
    const { getByTestId } = getComponent(
      <MenuTest align="end" side="bottom" />,
      'document'
    );
    const menu = getByTestId(MenuTestId);
    expect(menu).toHaveAttribute('data-align', 'end');
    expect(menu).toHaveAttribute('data-side', 'bottom');
  });

  it('Should be rendering custom props in every element', () => {
    const { getByTestId } = getComponent(
      <MenuTest align="end" side="bottom" data-example="true" />,
      'document'
    );
    const menu = getByTestId(MenuTestId);
    expect(menu).toHaveAttribute('data-example', 'true');
  });
});
