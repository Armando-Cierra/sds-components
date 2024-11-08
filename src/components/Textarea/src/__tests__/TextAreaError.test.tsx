import React from 'react';
import { expectError } from '../../../../TestUtils';
import { Textarea } from '../Textarea';
import '@testing-library/jest-dom';

const TextAreaErrorTest = () => {
  return (
    <>
      <Textarea>
        <p>I should not be here!</p>
      </Textarea>
    </>
  );
};

describe('TextAreaError tests', () => {
  it('Should render the error fallback of the component by using a not expected children content', () => {
    expectError(
      <TextAreaErrorTest />,
      'The <Textarea.Control> subcomponent is required to render the component.'
    );
  });
});
