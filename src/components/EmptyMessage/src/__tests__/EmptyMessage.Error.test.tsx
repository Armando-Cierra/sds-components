import React from 'react';
import { EmptyMessage } from '../EmptyMessage';
import { expectError } from '../../../../TestUtils';

const NoHeaderError = () => {
  return (
    <>
      <EmptyMessage children></EmptyMessage>
    </>
  );
};

const IconAndImageError = () => {
  const img =
    'https://media.istockphoto.com/id/1177794485/vector/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=B41l9xgyu4bR63vPqt49mKZIRGh8ewpewN7zXnYPOsI=';
  return (
    <>
      <EmptyMessage icon="star--fill" image={img}>
        <EmptyMessage.Header>A header</EmptyMessage.Header>
      </EmptyMessage>
    </>
  );
};

describe('EmptyMessageError', () => {
  it('Invalid header', () => {
    expectError(
      <NoHeaderError />,
      'The <EmptyMessage.Header> subcomponent is required to render the component.'
    );
  });

  it('Using both icon an image', () => {
    expectError(
      <IconAndImageError />,
      'You can use either an icon or an image but not both.'
    );
  });
});
