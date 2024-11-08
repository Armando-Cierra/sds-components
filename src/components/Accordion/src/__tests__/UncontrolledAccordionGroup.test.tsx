import React from 'react';
import { Accordion, AccordionProps, TextInput } from '../../..';
import { getComponent, forEachElement } from '../../../../TestUtils';
import { fireEvent, waitFor } from '@testing-library/react';

type TestProps = Omit<AccordionProps, 'children' | '$$typeof'>;

export const ControlledAccordionGroupTest = ({
  variant = 'ruled',
  selectedVisibility,
}: TestProps) => {
  return (
    <>
      <div style={{ height: '200px' }}>
        <Accordion
          collapsedIndicatorIcon="plus--fill"
          expandedIndicatorIcon="minus--fill"
          selectedVisibility={selectedVisibility}
          variant={variant}
        >
          <Accordion.Item>
            <Accordion.Title>
              <h2>Open to see more</h2>
            </Accordion.Title>
            <Accordion.Content>
              <TextInput.Control />
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Title>Title 2</Accordion.Title>
            <Accordion.Content>Content2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

describe('Should change in an uncontrolled way', () => {
  const accordionGroupTitleTestID = 'sds_accordionGroup_title';
  const accordionGroupAccordionTestID = 'sds_accordionGroup_accordion';

  it('Should change in single mode / only one accordion should be open', () => {
    const { getAllByTestId } = getComponent(<ControlledAccordionGroupTest />);
    let titles = getAllByTestId(accordionGroupTitleTestID);

    forEachElement(titles, async (title) => {
      // clicks on accordion one then on two so only accordion two remains open
      await waitFor(() => {
        fireEvent.click(title);
      });
    });

    const accordionOne = getAllByTestId(accordionGroupAccordionTestID)[0];
    const accordionTwo = getAllByTestId(accordionGroupAccordionTestID)[1];
    // clicks on accordion one then on two so only accordion two remains open
    expect(accordionOne).not.toHaveClass(
      'sds_accordionGroup_accordion--expanded'
    );
    expect(accordionTwo).toHaveClass('sds_accordionGroup_accordion--expanded');
  });

  it('Should change in multiple mode both accordion should be open', () => {
    const { getAllByTestId } = getComponent(
      <ControlledAccordionGroupTest selectedVisibility="multiple" />
    );
    let titles = getAllByTestId(accordionGroupTitleTestID);

    forEachElement(titles, async (title) => {
      // clicks on accordion one then on two so both remain open
      await waitFor(() => {
        fireEvent.click(title);
      });
    });

    const accordionOne = getAllByTestId(accordionGroupAccordionTestID)[0];
    const accordionTwo = getAllByTestId(accordionGroupAccordionTestID)[1];
    // clicks on accordion one then on two so both remain open
    expect(accordionOne).toHaveClass('sds_accordionGroup_accordion--expanded');
    expect(accordionTwo).toHaveClass('sds_accordionGroup_accordion--expanded');
  });
});
