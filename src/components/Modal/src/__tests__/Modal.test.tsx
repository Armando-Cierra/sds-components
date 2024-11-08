import React from 'react';
import { Button, Modal, Text } from '../../..';
import type { ModalProps } from '../types';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { fireEvent } from '@testing-library/react';

type OmittedProps = Omit<ModalProps, 'children'>;

interface TestProps extends OmittedProps {
  onClick?: (e: MouseEvent) => void;
}

const TestStaticModal = (props: TestProps) => {
  return (
    <Modal {...props} onClose={props.onClose} isOpen={props.isOpen}>
      <Modal.Header>
        <Text.H2>Title</Text.H2>
      </Modal.Header>
      <Modal.Content>
        <Text.P>Lorem Ipsum</Text.P>
      </Modal.Content>
      <Modal.Footer>
        <Button
          variant="primary"
          data-testid="sds_modal_button"
          onClick={() => props?.onClick}
        >
          Primary Action
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

describe('Modal Component', () => {
  const ModalTestID = 'sds_modal';
  const ModalContainerTestID = 'sds_modal_container';
  const ModalCardHeaderTestID = 'sds_modal_header';
  const ModalCardContentTestID = 'sds_modal_content';
  const ModalCardFooterTestID = 'sds_modal_footer';
  const ButtonID = 'sds_modal_button';

  it('Should be rendering Modal component and all the subcomponents', () => {
    const { getByTestId } = getComponent(<TestStaticModal isOpen />);

    const modal = getByTestId(ModalTestID);
    const modalContainer = getByTestId(ModalContainerTestID);
    const modalTitle = getByTestId(ModalCardHeaderTestID);
    const modalContent = getByTestId(ModalCardContentTestID);
    const modalFooter = getByTestId(ModalCardFooterTestID);

    forEachElement(
      [modal, modalContainer, modalTitle, modalContent, modalFooter],
      (element) => expect(element).toBeInTheDocument()
    );
  });

  it('Should not render if show is false', () => {
    const { queryByTestId } = getComponent(<TestStaticModal isOpen={false} />);
    const modalContainer = queryByTestId(ModalContainerTestID);
    expect(modalContainer).toBeFalsy();
  });

  it('Expect button to execute a custom function', async () => {
    const mockClick = jest.fn();
    const { getByTestId } = getComponent(
      <TestStaticModal isOpen onClick={mockClick} />
    );
    const actionBtn = getByTestId(ButtonID);
    fireEvent.click(actionBtn);
    expect(mockClick).toHaveBeenCalled();
  });

  it('Expect onCancel to be called by clicking outside the modal-card', async () => {
    const mockCancel = jest.fn();
    const { getByTestId } = getComponent(
      <TestStaticModal isOpen onClose={mockCancel} />
    );

    const background = getByTestId(ModalContainerTestID);
    fireEvent.click(background);
    expect(mockCancel).toHaveBeenCalled();
  });

  it('Expect onCancel to be called by pressing the Esc key', async () => {
    const mockCancel = jest.fn();
    const { container } = getComponent(
      <TestStaticModal isOpen onClose={mockCancel} />
    );

    fireEvent.keyDown(container, { key: 'Escape', code: 'Escape' });
    expect(mockCancel).toHaveBeenCalled();
  });
});
