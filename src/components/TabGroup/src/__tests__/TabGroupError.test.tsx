import React from 'react';
import { TabGroup } from '../TabGroup';
import { expectError } from '../../../../TestUtils';
import '@testing-library/jest-dom';

const ErrorTabGroupTest = () => {
  return (
    <TabGroup>
      <div>wrong children</div>
    </TabGroup>
  );
};

const TabGroupTitleErrorTest = () => {
  return (
    <TabGroup>
      <TabGroup.Tab value="1"></TabGroup.Tab>
    </TabGroup>
  );
};

describe('TabGroupError tests', () => {
  it('Should render an error if the passed children is not correct', () => {
    expectError(
      <ErrorTabGroupTest />,
      `
      Add at least one TabGroup.Tab (required)
      You should use the following subcomponents inside the TabGroup.Tab:
      TabGroup.Title (required),
      TabGroup.Content,
    `
    );
  });

  it('Should render an error if the passed children is not correct', () => {
    expectError(
      <TabGroupTitleErrorTest />,
      `<TabGroup.Title> is required and should have a child`
    );
  });
});
