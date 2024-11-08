import React from 'react';
import { Banner } from '../../..';
import { expectError } from '../../../../TestUtils';

const BannerNoContentErrorTest = () => {
  return (
    <>
      <Banner isOpen children></Banner>
    </>
  );
};

const BannerInvalidDisplayZIndexErrorTest = () => {
  return (
    <>
      <Banner isOpen display="block" zIndex={1}>
        <Banner.Content>Content</Banner.Content>
      </Banner>
    </>
  );
};

describe('Alert Error Test', () => {
  it('Expect error to be rendered when content is undefined.', () => {
    expectError(
      <BannerNoContentErrorTest />,
      'The <Banner.Content> subcomponent is required.'
    );
  });

  it('Expect error to be rendered when display is block and zIndex is being passed..', () => {
    expectError(
      <BannerInvalidDisplayZIndexErrorTest />,
      'zIndex should only be used when using the overlay display.'
    );
  });
});
