import React, { useState } from 'react';
import { Button, Drawer, Text } from '../../..';
import type { DrawerProps } from '../types';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { fireEvent, waitFor } from '@testing-library/react';

type OmittedProps = Omit<DrawerProps, 'children'>;

interface TestProps extends OmittedProps {
  isOpen: boolean;
}

const TestStaticDrawer = (props: TestProps) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);

  const closeDrawer = () => setIsOpen(false);

  const customFunction = () => {
    closeDrawer();
  };

  return (
    <Drawer {...props} isOpen={isOpen} onClose={closeDrawer}>
      <Drawer.Header>Header</Drawer.Header>
      <Drawer.Content>
        <Text.P>Lorem Ipsum</Text.P>
      </Drawer.Content>
      <Drawer.Footer>
        <Button
          variant="primary"
          data-testid="sds_drawer_button"
          onClick={customFunction}
        >
          Primary Action
        </Button>
      </Drawer.Footer>
    </Drawer>
  );
};

describe('Drawer Component', () => {
  const DrawerTestID = 'sds_drawer';
  const DrawerCardTestID = 'sds_drawer_card';
  const DrawerCardHeaderTestID = 'sds_drawer_header';
  const DrawerCardContentTestID = 'sds_drawer_content';
  const DrawerCardFooterTestID = 'sds_drawer_footer';
  const ButtonID = 'sds_drawer_button';

  it('Should be rendering Drawer component and all the subcomponents', () => {
    const { getByTestId } = getComponent(
      <TestStaticDrawer isOpen />,
      'document'
    );

    const Drawer = getByTestId(DrawerTestID);
    const DrawerCard = getByTestId(DrawerCardTestID);
    const DrawerHeader = getByTestId(DrawerCardHeaderTestID);
    const DrawerContent = getByTestId(DrawerCardContentTestID);
    const DrawerFooter = getByTestId(DrawerCardFooterTestID);

    forEachElement(
      [Drawer, DrawerCard, DrawerHeader, DrawerContent, DrawerFooter],
      (element) => expect(element).toBeInTheDocument()
    );
  });

  it('Should not render if show is false', () => {
    const { queryByTestId } = getComponent(
      <TestStaticDrawer isOpen={false} />,
      'document'
    );
    const Drawer = queryByTestId(DrawerTestID);
    expect(Drawer).toBeFalsy();
  });

  it('Expect button to execute a custom function and close the Modal', async () => {
    const { getByTestId, queryByTestId } = getComponent(
      <TestStaticDrawer isOpen />,
      'document'
    );
    const actionBtn = getByTestId(ButtonID);
    const Drawer = queryByTestId(DrawerTestID);
    fireEvent.click(actionBtn);
    await waitFor(
      () => {
        expect(Drawer).not.toBeInTheDocument();
      },
      { timeout: 1000 }
    );
  });

  it('Expect onCancel to be called by clicking outside the Drawer-card', async () => {
    const { getByTestId } = getComponent(
      <TestStaticDrawer isOpen />,
      'document'
    );

    const Drawer = getByTestId(DrawerTestID);
    fireEvent.click(Drawer);
    await waitFor(
      () => {
        expect(Drawer).not.toBeInTheDocument();
      },
      { timeout: 10000 }
    );
  });

  it('Expect onCancel to be called by pressing the Esc key', async () => {
    const { container, queryByTestId } = getComponent(
      <TestStaticDrawer isOpen />,
      'document'
    );
    const Drawer = queryByTestId(DrawerTestID);
    fireEvent.keyDown(container, { key: 'Escape', code: 'Escape' });
    await waitFor(
      () => {
        expect(Drawer).not.toBeInTheDocument();
      },
      { timeout: 10000 }
    );
  });
});
