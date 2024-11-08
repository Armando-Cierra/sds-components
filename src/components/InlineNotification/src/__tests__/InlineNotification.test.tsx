import React, { useState } from 'react';
import { InlineNotification } from '../InlineNotification';
import { Button } from '../../..';
import { forEachElement, getComponent } from '../../../../TestUtils';
import type { InlineNotificationProps } from '../types';
import { fireEvent } from '@testing-library/react';

type TestProps = Omit<InlineNotificationProps, 'children'>;

const InlineNotificationTest: React.FC<TestProps> = (props) => {
  const [text, setText] = useState('');

  return (
    <>
      <InlineNotification
        {...props}
        title="Test"
        variant="danger"
        heading="Heading"
      >
        <InlineNotification.Content>
          <span data-testid="test_text">{text}</span>
        </InlineNotification.Content>
        <InlineNotification.Actions>
          <Button
            data-testid="custom_button"
            variant="inverted"
            size="small"
            onClick={() => setText('Something')}
          >
            Primary Action
          </Button>
        </InlineNotification.Actions>
      </InlineNotification>
    </>
  );
};

describe('<InlineNotification />', () => {
  const InlineNotificationID = 'sds_inlineNotification';
  const InlineNotificationContentID = 'sds_inlineNotification_content';
  const InlineNotificationActionsID = 'sds_inlineNotification_actions';

  it('Should render', () => {
    const { getByTestId } = getComponent(<InlineNotificationTest />);
    const InlineNotificationWrapper = getByTestId(InlineNotificationID);
    const InlineNotificationContent = getByTestId(InlineNotificationContentID);
    const InlineNotificationActions = getByTestId(InlineNotificationActionsID);
    forEachElement(
      [
        InlineNotificationActions,
        InlineNotificationContent,
        InlineNotificationWrapper,
      ],
      (element) => {
        expect(element).toBeInTheDocument();
      }
    );
  });

  it('Should accept native div HTML properties and custom props', () => {
    const { getByTestId } = getComponent(<InlineNotificationTest />);
    const InlineNotification = getByTestId(InlineNotificationID);
    expect(InlineNotification).toHaveAttribute('title', 'Test');
    expect(getByTestId('sds_inlineNotification_title')).toBeInTheDocument();
  });

  it('Should change the variant class as desired', () => {
    const { getByTestId } = getComponent(<InlineNotificationTest />);
    const InlineNotification = getByTestId(InlineNotificationID);
    expect(InlineNotification).toHaveClass('sds_inlineNotification--danger');
  });

  it('Should change the state based on the action pressed', () => {
    const { getByTestId } = getComponent(<InlineNotificationTest />);
    const button = getByTestId('custom_button');
    fireEvent.click(button);
    expect(getByTestId('test_text')).toHaveTextContent('Something');
  });
});
