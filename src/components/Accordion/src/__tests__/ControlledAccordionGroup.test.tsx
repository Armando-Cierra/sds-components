import React, { ChangeEvent, useState } from 'react';
import { Accordion, AccordionProps, TextInput } from '../../..';
import { getComponent, forEachElement } from '../../../../TestUtils';
import { fireEvent, waitFor } from '@testing-library/react';

type TestProps = Omit<AccordionProps, 'children' | '$$typeof'>;

interface Element {
  id: string;
  title: string;
  checked: boolean;
}

export const ControlledAccordionGroupTest = ({
  variant = 'ruled',
}: TestProps) => {
  const [elements, setElements] = useState<Element[]>([
    {
      id: 'accordion1',
      title: 'Element 1',
      checked: false,
    },
    {
      id: 'accordion2',
      title: 'Element 2',
      checked: false,
    },
  ]);

  const handleSelection = (e: ChangeEvent<HTMLInputElement>) => {
    setElements((prevState) => {
      const updatedElements: Element[] = [];
      prevState.forEach((item) => {
        if (item.id === e.target.id) {
          updatedElements.push({ ...item, checked: e.target.checked });
        } else {
          updatedElements.push(item);
        }
      });

      return updatedElements;
    });
  };

  return (
    <>
      <div style={{ height: '200px' }}>
        <Accordion
          collapsedIndicatorIcon="plus--fill"
          expandedIndicatorIcon="minus--fill"
          variant={variant}
        >
          <Accordion.Item
            id={elements[0].id}
            isExpanded={elements[0].checked}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSelection(e)}
          >
            <Accordion.Title>
              <h2>Open to see more</h2>
            </Accordion.Title>
            <Accordion.Content>
              <TextInput.Control />
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item
            id={elements[1].id}
            isExpanded={elements[1].checked}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleSelection(e)}
          >
            <Accordion.Title>Title 2</Accordion.Title>
            <Accordion.Content>Content2</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

describe('<ControlledAccordionGroup />', () => {
  const accordionGroupTestID = 'sds_accordionGroup';
  const accordionGroupTitleTestID = 'sds_accordionGroup_title';
  const accordionGroupContentTestID = 'sds_accordionGroup_content';
  const accordionGroupAccordionTestID = 'sds_accordionGroup_accordion';

  it('Should be rendering', () => {
    const { getAllByTestId } = getComponent(<ControlledAccordionGroupTest />);

    const accordionTitle = getAllByTestId(accordionGroupTitleTestID)[0];
    const accordionGroup = getAllByTestId(accordionGroupTestID)[0];
    const accordionContent = getAllByTestId(accordionGroupContentTestID)[0];
    const accordion = getAllByTestId(accordionGroupAccordionTestID)[0];

    forEachElement(
      [accordionGroup, accordionTitle, accordionContent, accordion],
      (el) => {
        expect(el).toBeInTheDocument();
      }
    );
  });

  it('Should expand and collapse the accordion in the controlled way', async () => {
    const { getAllByTestId } = getComponent(<ControlledAccordionGroupTest />);
    let title = getAllByTestId(accordionGroupTitleTestID)[0];
    const accordion = getAllByTestId(accordionGroupAccordionTestID)[0];
    await waitFor(() => {
      fireEvent.click(title);
    });
    expect(accordion).toHaveClass('sds_accordionGroup_accordion--expanded');
    await waitFor(() => {
      fireEvent.click(title);
    });
    expect(accordion).not.toHaveClass('sds_accordionGroup_accordion--expanded');
  });

  it('Should have the passed variant.', () => {
    const { getAllByTestId } = getComponent(
      <ControlledAccordionGroupTest variant="contained" />
    );

    forEachElement([...getAllByTestId(accordionGroupAccordionTestID)], (el) => {
      expect(el).toHaveClass('sds_accordionGroup_accordion--contained');
    });
  });

  it('Should pass the custom icons for open / closed states', () => {
    const { getAllByTestId } = getComponent(
      <ControlledAccordionGroupTest variant="contained" />
    );
    const iconNames = getAllByTestId('sds_telicon_icon_name');
    let titles = getAllByTestId(accordionGroupTitleTestID);

    forEachElement(iconNames, (icon) => {
      expect(icon.getAttribute('href')).toBe('#plus--fill');
    });

    forEachElement(titles, async (title) => {
      await waitFor(() => {
        fireEvent.click(title);
      });
    });

    forEachElement(iconNames, (icon) => {
      expect(icon.getAttribute('href')).toBe('#minus--fill');
    });
  });
});
