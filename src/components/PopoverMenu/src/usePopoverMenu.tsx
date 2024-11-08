import { ReactElement, ReactNode, isValidElement } from 'react';
import { Anchor } from './Anchor';

export const usePopoverMenu = (children: ReactNode) => {
  let childrenArray = Array.isArray(children) ? children.flat() : [children];
  let content: ReactElement[] = [];
  let anchor: ReactNode;

  childrenArray = childrenArray.flat();

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Anchor) {
        anchor = item;
      } else {
        content = [...content, item].flat();
      }
    }
  });

  const avoidAutoFocus = (e: Event) => {
    e.preventDefault();
  };

  return { content, anchor, avoidAutoFocus };
};
