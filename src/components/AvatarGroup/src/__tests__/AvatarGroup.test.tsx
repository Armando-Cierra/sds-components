import React from 'react';
import { getComponent } from '../../../../TestUtils';
import { AvatarGroup } from '../AvatarGroup';
import type { AvatarGroupProps } from '../types';

const elements = [
  'Josh Sanders',
  'Armando Cierra',
  'Eduardo Olmedo',
  'Eduardo Olmedo',
  'Eduardo Olmedo',
  'Eduardo Olmedo',
  'Eduardo Olmedo',
  'Eduardo Olmedo',
  'Eduardo Olmedo',
  'Eduardo Olmedo',
  'Eduardox Olmedo',
  'Eduardo Olmedo',
];

type TestAvatarGroup = Omit<AvatarGroupProps, 'children'>;

const TestAvatarGroup: React.FC<TestAvatarGroup> = (props) => {
  const { visibleUsers = 2, ...rest } = props;

  return (
    <>
      <AvatarGroup {...rest} visibleUsers={visibleUsers}>
        {elements.map((el, index) => {
          return (
            <AvatarGroup.Avatar shape="circle" key={index}>
              {el}
            </AvatarGroup.Avatar>
          );
        })}
      </AvatarGroup>
    </>
  );
};

describe('<AvatarGroup />', () => {
  const AvatarGroupTestID = 'sds_avatar_group';
  const avatarTestID = 'sds_avatar';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<TestAvatarGroup />);
    const avatarGroup = getByTestId(AvatarGroupTestID);

    expect(avatarGroup).toBeInTheDocument();
  });

  it('Should render the desired number of visibleUsers', () => {
    const { getAllByTestId } = getComponent(
      <TestAvatarGroup visibleUsers={2} />
    );
    const elements = getAllByTestId('sds_avatar');
    expect(elements.length).toBe(2);
  });

  it('If the visible users value is higher than 10, only 10 avatars must be rendered', () => {
    const { getAllByTestId } = getComponent(
      <TestAvatarGroup visibleUsers={12} />
    );
    const elements = getAllByTestId('sds_avatar');
    expect(elements.length).toBe(10);
  });

  it('Should accept native div tag props', () => {
    const { getByTestId } = getComponent(
      <TestAvatarGroup title="TestTitle" aria-haspopup visibleUsers={8} />
    );
    const avatarGroup = getByTestId(AvatarGroupTestID);
    expect(avatarGroup).toHaveAttribute('title', 'TestTitle');
    expect(avatarGroup).toHaveAttribute('aria-haspopup', 'true');
  });

  it('Should change the shape of each avatar based on the prop', () => {
    const { getAllByTestId } = getComponent(<TestAvatarGroup />);
    const isSquare = getAllByTestId(avatarTestID).every((avatar) =>
      avatar.classList.contains('sds_avatar--circle')
    );
    expect(isSquare).toBe(true);
  });
});
