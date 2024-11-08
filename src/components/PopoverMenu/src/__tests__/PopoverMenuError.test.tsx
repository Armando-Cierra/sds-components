import React from 'react';
import { expectError } from '../../../../TestUtils';
import { PopoverMenu } from '../PopoverMenu';

const PopoverMenuErrorTest = () => <PopoverMenu isOpen></PopoverMenu>;

describe('PopoverMenuError test', () => {
  it('Should display an error if the passed children is not correct', () => {
    expectError(
      <PopoverMenuErrorTest />,
      'The <PopoverMenu.Anchor> subcomponent is required for the <PopOverMenu>. Also remember to provide at least one children: CustomArea, Divider, Option, Header, Search, Option'
    );
  });
});
