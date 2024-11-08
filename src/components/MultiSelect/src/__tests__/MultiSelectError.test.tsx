import React from 'react';
import { expectError } from '../../../../TestUtils';
import { MultiSelect } from '../MultiSelect';

export const MultiSelectErrorTest = () => {
  return <MultiSelect>MultiSelecteError test</MultiSelect>;
};

describe('MultiSelectError test', () => {
  it('Should display an error', () => {
    expectError(
      <MultiSelectErrorTest />,
      'Use the required MultiSelect subcomponents: MultiSelect.Tagbox, MultiSelect.Dropdown'
    );
  });
});
