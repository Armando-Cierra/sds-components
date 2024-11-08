import { fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { Button } from '../../..';
import { getComponent } from '../../../../TestUtils';
import { Toast } from '../Toast';
import { toastTrigger, toastSubtleTrigger } from '../';
import type { ToastPosition } from 'react-toastify';

const ToastTest = () => {
  const message = 'Custom message';
  const position: ToastPosition = 'bottom-center';

  return (
    <>
      <Toast variant="default" />
      <Button
        onClick={() =>
          toastTrigger.default({ content: message, position: position })
        }
      >
        Click me for toast
      </Button>
    </>
  );
};

const ToastSubtleTest = () => {
  const message = 'Custom message';
  const position: ToastPosition = 'bottom-center';

  return (
    <>
      <Toast variant="subtle" />
      <Button
        onClick={() =>
          toastSubtleTrigger({ content: message, position: position })
        }
      >
        Click me for toast
      </Button>
    </>
  );
};

describe('<Toast />', () => {
  it('Should be rendering a toast when clicked', async () => {
    const { getByTestId } = getComponent(<ToastTest />, 'document');
    const button = getByTestId('sds_button');

    await waitFor(() => {
      fireEvent.click(button);
      const toast = document.getElementsByClassName('sds_toast')[0];
      expect(toast).toBeInTheDocument();
    });
  });

  it('Should have the correct class depending on the position ', async () => {
    const { getByTestId } = getComponent(<ToastTest />, 'document');
    const button = getByTestId('sds_button');

    await waitFor(() => {
      fireEvent.click(button);
      const toastPosition = document.querySelector(
        '.Toastify__toast-container--bottom-center'
      );
      expect(toastPosition).toBeTruthy();
    });
  });

  it('Should render the desired message', async () => {
    const { getByTestId } = getComponent(<ToastTest />, 'document');
    const button = getByTestId('sds_button');

    await waitFor(() => {
      fireEvent.click(button);
      const toastPosition = document.querySelector('.Toastify__toast-body');
      expect(toastPosition).toHaveTextContent('Custom message');
    });
  });

  it('Should be rendering a subtle toast when clicked', async () => {
    const { getByTestId } = getComponent(<ToastSubtleTest />, 'document');
    const button = getByTestId('sds_button');

    await waitFor(() => {
      fireEvent.click(button);
      const toast = document.getElementsByClassName('sds_toast')[0];
      expect(toast).toBeInTheDocument();
    });
  });

  it('Should have the correct class depending on the position ', async () => {
    const { getByTestId } = getComponent(<ToastSubtleTest />, 'document');
    const button = getByTestId('sds_button');

    await waitFor(() => {
      fireEvent.click(button);
      const toastPosition = document.querySelector(
        '.Toastify__toast-container--bottom-center'
      );
      expect(toastPosition).toBeTruthy();
    });
  });
});
