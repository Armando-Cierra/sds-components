import { ReactElement, ReactNode, isValidElement, cloneElement } from 'react';
import { Avatar } from '../../Avatar';
import { Tooltip } from '../../Tooltip';
import uniqid from 'uniqid';

export const useAvatarGroup = (children: ReactNode, length: number) => {
  const childrenArray = Array.isArray(children) ? children.flat() : [children];
  const remainingUsersLength = `${childrenArray.length - length}`;
  let content: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Avatar) {
        const originalClassName = (item as ReactElement).props.className;

        content = [
          ...content,
          cloneElement(item as ReactElement, {
            className: `sds_avatarGroup_Avatar ${originalClassName}`,
            key: 'sds_avatarGroup_' + uniqid(),
          }),
        ];
      }
      if (item.type === Tooltip) {
        content = [
          ...content,
          cloneElement(item as ReactElement, {
            key: 'sds_avatarGroup_tooltip_' + uniqid(),
          }),
        ];
      }
    }
  });

  content = content.splice(0, Math.min(10, length));

  return {
    content,
    remainingUsersLength,
  };
};
