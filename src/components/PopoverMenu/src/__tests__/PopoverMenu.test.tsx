import React, { useState } from 'react';
import { fireEvent } from '@testing-library/react';
import { getComponent } from '../../../../TestUtils';
import { PopoverMenu } from '../PopoverMenu';
import type { PopoverMenuProps } from '../types';

type OmittedTestProps = Omit<PopoverMenuProps, 'children'>;

const PopoverMenuTest = ({ isOpen }: OmittedTestProps) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <>
      <PopoverMenu isOpen={open}>
        <PopoverMenu.Anchor>
          <button data-testid="sds_button_test" onClick={() => setOpen(!open)}>
            Change state
          </button>
        </PopoverMenu.Anchor>
        <PopoverMenu.Option>Any</PopoverMenu.Option>
        <PopoverMenu.Option>Any</PopoverMenu.Option>
        <PopoverMenu.Option>Any</PopoverMenu.Option>
        <PopoverMenu.Option>Any</PopoverMenu.Option>
      </PopoverMenu>
    </>
  );
};

describe('PopoverMenu Component', () => {
  const popoverMenuTestId = 'sds_popoverMenu';

  it('Should match', () => {
    const { getByTestId } = getComponent(
      <PopoverMenuTest isOpen />,
      'document'
    );

    const popoverMenu = getByTestId(popoverMenuTestId);
    expect(popoverMenu).toBeInTheDocument();
  });

  it('Open state should manage if its open or not', () => {
    const { getByTestId, queryByTestId } = getComponent(
      <PopoverMenuTest isOpen={true} />
    );
    let popoverMenu = getByTestId('sds_popoverMenu');
    expect(popoverMenu).toBeInTheDocument();
    const button = getByTestId('sds_button_test');
    fireEvent.click(button);
    popoverMenu = queryByTestId('sds_popovermMenu') as HTMLElement;
    expect(popoverMenu).toBeFalsy();
  });

  it('Open state should manage if its open or not', () => {
    const { queryByTestId, getByTestId } = getComponent(
      <PopoverMenuTest isOpen={false} />,
      'document'
    );
    let popoverMenu = queryByTestId('sds_popoverMenu');
    expect(popoverMenu).toBeFalsy();
    const button = getByTestId('sds_button_test');
    fireEvent.click(button);
    popoverMenu = queryByTestId('sds_popoverMenu');
    expect(popoverMenu).toBeTruthy();
  });

  it('Should render all the passed options', () => {
    const { getAllByTestId } = getComponent(
      <PopoverMenuTest isOpen />,
      'document'
    );
    const options = getAllByTestId('sds_popoverMenu_option');
    expect(options.length).toBe(4);
  });
});
