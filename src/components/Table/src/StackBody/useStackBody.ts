import { isValidElement, ReactElement, ReactNode, useContext } from 'react';
import { StackItem } from '../StackItem';
import { TableStackContext } from '../Context';

export const useStackBody = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const context = useContext(TableStackContext);
  let content: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (item.type === StackItem && isValidElement(item))
      content = [...content, item];
  });

  if (content.length === 0)
    throw new Error(
      '<Table.StackBody> requires at least one <Table.StackItem>'
    );

  if (!context)
    throw new Error(
      '<Table.StackBody> should be used inside <Table> component.'
    );

  const { borderStyle, fillStyle } = context;

  return { content, borderStyle, fillStyle };
};
