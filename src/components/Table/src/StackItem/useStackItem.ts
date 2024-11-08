import { isValidElement, ReactElement, ReactNode } from 'react';
import { StackItem } from '../StackItem';

export const useStackItem = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let content: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (item.type === StackItem && isValidElement(item))
      content = [...content, item];
  });

  if (content.length === 0)
    throw new Error('<Table.StackItem> requires <Table.StackRow> as children.');

  return { content };
};
