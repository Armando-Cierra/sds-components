import React from 'react';
import { forEachElement, getComponent } from '../../../../TestUtils';
import { EmptyMessage } from '../EmptyMessage';
import { EmptyMessageProps } from '../types';

const EmptyMessageTest = ({
  icon,
  variant,
  image,
}: Omit<EmptyMessageProps, 'children'>) => {
  return (
    <EmptyMessage
      variant={variant}
      icon={icon ?? undefined}
      image={image ?? undefined}
    >
      <EmptyMessage.Header>A short header</EmptyMessage.Header>
      <EmptyMessage.Description>
        A short little Description
      </EmptyMessage.Description>
      <EmptyMessage.Actions>
        <button>An action</button>
      </EmptyMessage.Actions>
    </EmptyMessage>
  );
};

describe('<EmptyMessage />', () => {
  const emptyMessageTestID = 'sds_emptyMessage';
  const emptyMessageHeaderTestID = 'sds_emptyMessage_header';
  const emptyMessageDescriptionTestID = 'sds_emptyMessage_description';
  const emptyMessageActionsTestID = 'sds_emptyMessage_actions';

  it('Should be rendering all the subcomponents and self', () => {
    const { getByTestId } = getComponent(<EmptyMessageTest />);
    const emptyMessage = getByTestId(emptyMessageTestID);
    const actions = getByTestId(emptyMessageActionsTestID);
    const header = getByTestId(emptyMessageHeaderTestID);
    const description = getByTestId(emptyMessageDescriptionTestID);

    forEachElement([emptyMessage, actions, header, description], (el) => {
      expect(el).toBeInTheDocument();
    });
  });

  it('Variant should change', () => {
    const { getByTestId } = getComponent(
      <EmptyMessageTest variant="contrast" />
    );
    const emptyMessage = getByTestId(emptyMessageTestID);
    expect(emptyMessage).toHaveClass('sds_emptyMessage--contrast');
  });

  it('Icon should render', () => {
    const { getByTestId } = getComponent(
      <EmptyMessageTest icon="star--fill" />
    );
    const iconName = getByTestId('sds_telicon_icon_name');
    expect(iconName).toHaveAttribute('href', '#star--fill');
  });

  it('Image should render', () => {
    const img =
      'https://media.istockphoto.com/id/1177794485/vector/person-gray-photo-placeholder-woman.jpg?s=612x612&w=0&k=20&c=B41l9xgyu4bR63vPqt49mKZIRGh8ewpewN7zXnYPOsI=';
    const { getByTestId } = getComponent(<EmptyMessageTest image={img} />);
    const imageElement = getByTestId('sds_emptyMessage_image');
    expect(imageElement).toBeInTheDocument();
  });
});
