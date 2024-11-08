import React from 'react';
import { Drawer } from '../..';
import type { DrawerProps } from '../types';
import { expectError } from '../../../../TestUtils';

const DrawerErrorTest = (props: DrawerProps) => {
  return <Drawer {...props} isOpen={true} />;
};

describe('ModalError tests', () => {
  it('Should render the error state of the component', () => {
    expectError(
      <DrawerErrorTest isOpen={true} children />,
      'The <Drawer.Content> subcomponent is required to render the component'
    );
  });
});
