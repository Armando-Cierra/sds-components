import React from 'react';
import { InlineNotification } from '../InlineNotification';
import { expectError } from '../../../../TestUtils';
import type { InlineNotificationProps } from '../types';

type TestProps = Omit<InlineNotificationProps, 'children'>;

const InlineNotificationErrorTest: React.FC<TestProps> = (props) => {
  return (
    <InlineNotification {...props} variant="danger" heading="Heading">
      Lorem Ipsum...
    </InlineNotification>
  );
};

describe('InlineNotificationError tests', () => {
  it('Should render error message of the component', () => {
    expectError(
      <InlineNotificationErrorTest />,
      'The <InlineNotification.Content> subcomponent is required to render the component'
    );
  });
});
