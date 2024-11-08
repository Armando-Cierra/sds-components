import React from 'react';
import { within } from '@testing-library/react';
import { getComponent } from '../../../../TestUtils';
import { Avatar } from '../Avatar';
import type { AvatarProps } from '../types';

const AvatarTest = (props: AvatarProps) => {
  return (
    <>
      <Avatar
        title="this comes from a custom prop"
        size="large"
        shape="square"
        status="online"
        children={props.children}
      />
    </>
  );
};

describe('<Avatar />', () => {
  const avatarTestID = 'sds_avatar';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<AvatarTest children="John Doe" />);
    const avatar = getByTestId(avatarTestID);
    expect(avatar).toBeInTheDocument();
  });

  it('Should be rendering the custom props', () => {
    const { getByTestId } = getComponent(<AvatarTest children="John Doe" />);
    const avatar = getByTestId(avatarTestID);
    expect(avatar).toHaveClass('sds_avatar--large');
    expect(avatar).toHaveAttribute('title', 'this comes from a custom prop');
  });

  it('Should be having the desired status', () => {
    const { getByTestId } = getComponent(<AvatarTest children="John Doe" />);
    expect(getByTestId('sds_avatar_status')).toHaveClass(
      'sds_avatar_status--online'
    );
  });

  it('Should render only the two first letters of the component', () => {
    const { getByTestId } = getComponent(<AvatarTest children="John Doe" />);
    const { getByText } = within(getByTestId(avatarTestID));
    expect(getByText('JD')).toBeInTheDocument();
  });

  it('Avatar username is correctly displayed with the first two values provided', () => {
    const { getByTestId } = getComponent(<AvatarTest children="Jo" />);
    const { getByText } = within(getByTestId(avatarTestID));
    expect(getByText('JO')).toBeInTheDocument();
  });

  it('should render the phone telicon when children is blank, if the element has a length of 1 or if undefined ', () => {
    const { getAllByTestId } = getComponent(<AvatarTest children="J" />);
    // querying for the first element, which should be the phone
    const teliconAvatar = getAllByTestId('sds_telicon')[0];
    expect(teliconAvatar).toBeInTheDocument();
  });

  it('Should change the shape based on the prop', () => {
    const { getByTestId } = getComponent(<AvatarTest children="John Doe" />);
    const isSquare =
      getByTestId(avatarTestID).classList.contains('sds_avatar--square');
    expect(isSquare).toBe(true);
  });
});
