import { ReactNode, isValidElement } from 'react';
import { Actions } from '../Actions';

const useHeader = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  let title: ReactNode | null = null;
  let actions: ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (typeof item === 'string') title = item;
    if (item.type === Actions && isValidElement(item)) actions = item;
  });

  return {
    title,
    actions,
  };
};

export default useHeader;
