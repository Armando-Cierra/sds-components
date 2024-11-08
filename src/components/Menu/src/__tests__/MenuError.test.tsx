import React from 'react';
import { Menu } from '../Menu';
import { expectError } from '../../../../TestUtils';

const MenuErrorTest = () => {
  return <Menu></Menu>;
};

describe('MenuError tests', () => {
  it('Testing wrong children passed to the menu should display an error', () => {
    expectError(
      <MenuErrorTest />,
      'Remember to provide at least one children: CustomArea, Divider, Option, Header, Search, Option'
    );
  });
});
