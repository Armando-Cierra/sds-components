import React from 'react';
import { Alert } from '../../..';
import { expectError } from '../../../../TestUtils';

const AlertErrorTest = () => {
  return (
    <>
      <Alert heading="alert" isOpen={true}>
        <div>Any</div>
      </Alert>
    </>
  );
};

describe('Alert Error Test', () => {
  it('Expect error to be rendered when content is undefined.', () => {
    expectError(
      <AlertErrorTest />,
      'The <Alert.Content> subcomponent is required to render the component.'
    );
  });
});
