import {
  ReactNode,
  ReactElement,
  isValidElement,
  useContext,
  cloneElement,
} from 'react';
import uniqid from 'uniqid';
import { HeaderCell } from '../HeaderCell';
import { TableContext } from '../Context';

export const useHeader = (children: ReactNode) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let content: ReactElement[] = [];
  const context = useContext(TableContext);

  if (!context)
    throw new Error('<Table.Header> should be used inside <Table.Content>');

  const { fixedColumns, columnsSizes, borderStyle, isScrolled } = context;

  childrenArray.forEach((item, index) => {
    if (isValidElement(item) && item.type === HeaderCell) {
      const fixedColumn = fixedColumns?.find(
        (column) => column.column === index + 1
      );
      const isFixed = fixedColumn !== undefined;
      const leftFixedPosition = isFixed ? fixedColumn.leftPosition : undefined;

      content = [
        ...content,
        cloneElement(item as ReactElement, {
          key: uniqid('sds_table_header_cell_'),
          isFixed,
          leftFixedPosition,
          isLastFixedColumn: index + 1 === fixedColumns?.length,
          isTableScrolled: isScrolled,
        }),
      ];
    }
  });

  return { content, columnsSizes, borderStyle };
};
