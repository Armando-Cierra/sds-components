import { ReactNode, isValidElement, useContext } from 'react';
import { Row } from '../Row';
import { TableContext } from '../Context';

export const useBody = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  const context = useContext(TableContext);

  if (!context)
    throw new Error('<Table.Body> should be used inside <Table.Content>');

  const { fillStyle, borderStyle } = context;

  childrenArray.forEach((item) => {
    if (!isValidElement(item) || item.type !== Row)
      throw new Error('<Table.Body> only accepts <Table.Row> as subcomponent.');
  });

  return { fillStyle, borderStyle };
};
