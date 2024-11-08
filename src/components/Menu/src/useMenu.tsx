import { ReactElement, ReactNode, isValidElement } from 'react';
import { Trigger } from './Trigger';

export const useMenu = (children: ReactNode) => {
  let childrenArray = Array.isArray(children) ? children : [children];
  let content: ReactElement[] = [];
  let trigger: ReactNode;

  childrenArray = childrenArray.flat();

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Trigger) {
        trigger = item;
      } else {
        content = [...content, item];
      }
    }
  });

  return { content, trigger };
};
