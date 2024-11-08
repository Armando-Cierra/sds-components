import React from 'react';
import { Modal } from '../../..';
import type { ModalProps } from '../types';
import { expectError } from '../../../../TestUtils';

const ModalErrorTest = (props: ModalProps) => {
  return <Modal {...props} isOpen={true} />;
};

describe('ModalError tests', () => {
  it('Should render the error state of the component', () => {
    expectError(
      <ModalErrorTest children />,
      'The <Modal.Content> subcomponent is required to render the component'
    );
  });
});
