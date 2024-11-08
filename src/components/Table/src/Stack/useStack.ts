import { ReactNode } from 'react';
import { StackHeader } from '../StackHeader';
import { StackBody } from '../StackBody';

export const useStack = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let header: ReactNode = null;
  let body: ReactNode = null;

  childrenArray.forEach((item) => {
    if (item.type === StackHeader) header = item;
    if (item.type === StackBody) body = item;
  });

  if (!header || !body)
    throw new Error(
      '<Table.Stack> requires as subcomponents the <Table.StackHeader> and <Table.StackBody>'
    );

  return { header, body };
};
