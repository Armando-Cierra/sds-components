import { ReactElement, cloneElement, isValidElement } from 'react';
import uniqid from 'uniqid';
import { Button } from '../../../Button';
import type { UseSidebarContentGroupActions } from './types';

export const useSidebarContentGroupActions = ({
  children,
}: UseSidebarContentGroupActions) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let content: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item) && item.type === Button) {
      content = [
        ...content,
        cloneElement(item as ReactElement, {
          size: 'small',
          key: uniqid('sds_appTemplate_sidebar_content_group_actions_'),
        }),
      ];
    } else {
      content = [
        ...content,
        cloneElement(item, {
          key: uniqid('sds_appTemplate_sidebar_content_group_actions_'),
        }),
      ];
    }
  });

  return { content };
};
