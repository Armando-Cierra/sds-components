import {
  ReactNode,
  ReactElement,
  isValidElement,
  useContext,
  cloneElement,
} from 'react';
import uniqid from 'uniqid';
import { Cell } from '../Cell';
import { TableContext } from '../Context';

export const useRow = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let content: ReactElement[] = [];
  const context = useContext(TableContext);

  if (!context)
    throw new Error('<Table.Row> should be used inside <Table.Content>');

  const { fixedColumns, columnsSizes, isScrolled } = context;

  childrenArray.forEach((item, index) => {
    if (isValidElement(item) && item.type === Cell) {
      const fixedColumn = fixedColumns?.find(
        (column) => column.column === index + 1
      );
      const isFixed = fixedColumn !== undefined;
      const leftFixedPosition = isFixed ? fixedColumn.leftPosition : undefined;

      content = [
        ...content,
        cloneElement(item as ReactElement, {
          key: uniqid('sds_table_row_cell_'),
          isFixed,
          leftFixedPosition,
          isLastFixedColumn: index + 1 === fixedColumns?.length,
          isTableScrolled: isScrolled,
        }),
      ];
    }
  });

  if (content.length === 0)
    throw new Error(
      '<Table.Row> requires at least one <Table.Cell> subcomponent.'
    );

  return { content, columnsSizes };
};
