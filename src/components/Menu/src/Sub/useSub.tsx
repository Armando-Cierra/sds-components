import {
  cloneElement,
  isValidElement,
  ReactElement,
  type ReactNode,
} from 'react';
import uniqid from 'uniqid';
import { SubTrigger } from '../SubTrigger';
import { Option } from '../Option';

export const useSub = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let subTrigger: ReactNode = null;
  let content: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === SubTrigger)
        subTrigger = (item as ReactElement).props.children;
      if (item.type === Option)
        content = [
          ...content,
          cloneElement(item, {
            key: uniqid(),
          }),
        ];
    }
  });

  return {
    subTrigger,
    content,
  };
};
