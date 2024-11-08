import React from 'react';
import { ButtonGroup } from '..';
import { expectError } from '../../../../TestUtils';

const ErrorButtonGroupTest = ({ ...rest }) => {
  return (
    <>
      <ButtonGroup {...rest} children></ButtonGroup>
    </>
  );
};

describe('ButtonGroup error test', () => {
  it('Should be rendering an error if 0 children are passed', () => {
    expectError(
      <ErrorButtonGroupTest />,
      'At least one <Button> child should be passed'
    );
  });
});
