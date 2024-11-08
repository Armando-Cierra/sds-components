import React from 'react';
import { Accordion } from '../Accordion';
import { expectError } from '../../../../TestUtils';

const AccordionErrorTest = () => {
  return <Accordion></Accordion>;
};

const AccordionContentErrorTest = () => {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Title>A title</Accordion.Title>
      </Accordion.Item>
    </Accordion>
  );
};

const AccordionTitleErrorTest = () => {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Content>Some content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

const AccordionOnlyOneExpandedErrorTest = () => {
  return (
    <Accordion>
      <Accordion.Item isExpanded>
        <Accordion.Content>Some content</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
        <Accordion.Content>Some content</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  );
};

describe('AccordionError tests', () => {
  it('Testing wrong children passed to the Accordion should display an error', () => {
    expectError(
      <AccordionErrorTest />,
      'At least one <Accordion.Item /> subcomponent  is required'
    );
  });

  it('No content should dislay an error', () => {
    expectError(
      <AccordionContentErrorTest />,
      'The <Accordion.Title /> and <Accordion.Content /> subcomponents are required for each accordion.'
    );
  });

  it('No title should dislay an error', () => {
    expectError(
      <AccordionTitleErrorTest />,
      'The <Accordion.Title /> and <Accordion.Content /> subcomponents are required for each accordion.'
    );
  });

  it('When using the isExpanded prop, all the items should have it because it is controlled', () => {
    expectError(
      <AccordionOnlyOneExpandedErrorTest />,
      'If you are using the controlled approach, using the prop isExpanded, all the <Accordion.Item /> should be using this prop, otherwise, use the uncontrolled approach. When using the uncontrolled approach, you can change the behavior of single/multiple using the selectedVisibility prop.'
    );
  });
});
