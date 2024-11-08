import { ReactNode, isValidElement } from 'react';
import { Actions } from './Actions';
import { Content } from './Content';

export const useInlineNotification = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let content: ReactNode | null = null;
  let actions: ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Content) content = item;
      if (item.type === Actions) actions = item;
    }
  });

  return {
    content,
    actions,
  };
};
