import { isValidElement, ReactElement, ReactNode } from 'react';
import { StackCell } from '../StackCell';

export const useStackRow = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let content: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item) && item.type === StackCell)
      content = [...content, item];
  });

  if (content.length === 0)
    throw new Error('<Table.StackRow> requires at least one <Table.StackCell>');

  const columnsAmount = content.length;

  return { content, columnsAmount };
};
