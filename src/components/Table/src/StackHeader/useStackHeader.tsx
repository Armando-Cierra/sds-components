import { isValidElement, ReactElement, ReactNode, useContext } from 'react';
import { StackHeaderCell } from '../StackHeaderCell';
import { TableStackContext } from '../Context';

export const useStackHeader = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const columnsAmount = childrenArray.length;
  let content: ReactElement[] = [];

  const context = useContext(TableStackContext);

  if (!context)
    throw new Error('<Table.StackHeader> should be used inside <Table.Stack>');

  const { borderStyle } = context;

  childrenArray.forEach((item) => {
    if (isValidElement(item) && item.type === StackHeaderCell)
      content = [...content, item];
  });

  ('<Table.StackHeader> requires at least one <Table.StackHeaderCell> subcomponent.');
  if (content.length === 0) throw new Error();

  return { columnsAmount, content, borderStyle };
};
