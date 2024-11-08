import React from 'react';
import { SelectionList } from '../';
import { expectError } from '../../../../TestUtils';

describe('SelectionListError tests', () => {
  it('Expect an error to be shown if incorrect subcomponent is passed to <SelectionList>', () => {
    expectError(
      <SelectionList>Incorrect children content</SelectionList>,
      'The <SelectionList> component requires having at least one subcomponent element as children'
    );
  });

  it('Expect an error to be shown if there are not passed a <SelectionList.Title> or a <SelectionList.Description> to the <SelectionList.Items>', () => {
    expectError(
      <SelectionList>
        <SelectionList.Item controlType="checkbox" />
        <SelectionList.Item controlType="checkbox" />
      </SelectionList>,
      'The <SelectionList.Title> and/or <SelectionList.Description> subcomponents are required as children elements on <SelectionList.Item>.'
    );
  });

  it('Expect an error to be shown if there are not passed the same control types to the <SelectionList.Item> subcomponents', () => {
    expectError(
      <SelectionList>
        <SelectionList.Item controlType="checkbox">
          <SelectionList.Title>Example 1</SelectionList.Title>
        </SelectionList.Item>
        <SelectionList.Item controlType="radio">
          <SelectionList.Title>Example 1</SelectionList.Title>
        </SelectionList.Item>
      </SelectionList>,
      'All the <SelectionList.Item> subcomponents included in the <SelectionList> component should share the same controlType (radio or checkbox). It is not possible to mix both controlTypes in a single implementation.'
    );
  });

  it('Expect an error to be shown if <SelectionList.Item> is not using the same logic approach (controlled or uncontrolled)', () => {
    expectError(
      <SelectionList>
        <SelectionList.Item controlType="checkbox">
          <SelectionList.Title>Example 1</SelectionList.Title>
        </SelectionList.Item>
        <SelectionList.Item controlType="checkbox" checked>
          <SelectionList.Title>Example 1</SelectionList.Title>
        </SelectionList.Item>
      </SelectionList>,
      '<SelectionList.Items> should have only one logic approach. For the controlled approach, all the <SelectionList.Item> should have the prop "checked" with a boolean value. For the uncontrolled approach the "checked" prop is not necessary, and oprtionally, you can use the prop "defaultChecked"'
    );
  });

  it('Expect an error to be shown if <SelectionList.Item> is not using the same controls visuallization)', () => {
    expectError(
      <SelectionList>
        <SelectionList.Item controlType="checkbox">
          <SelectionList.Title>Example 1</SelectionList.Title>
        </SelectionList.Item>
        <SelectionList.Item controlType="checkbox" hideControl>
          <SelectionList.Title>Example 1</SelectionList.Title>
        </SelectionList.Item>
      </SelectionList>,
      'All the <SelectionList.Item> subcomponents in the <SelectionList> component should share the same visualization for the controls'
    );
  });
});
