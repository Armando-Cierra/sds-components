import React from 'react';
import classNames from 'classnames';
import { Title } from './Title';
import { ControlBar } from './ControlBar';
import { Content } from './Content';
import { Header } from './Header';
import { HeaderCell } from './HeaderCell';
import { Body } from './Body';
import { Row } from './Row';
import { Cell } from './Cell';
import { useTable } from './useTable';
import { Stack } from './Stack';
import { StackHeader } from './StackHeader';
import { StackHeaderCell } from './StackHeaderCell';
import { StackBody } from './StackBody';
import { StackItem } from './StackItem';
import { StackCell } from './StackCell';
import { StackRow } from './StackRow';
import type { TableProps } from './types';
import './table.scss';

export const Table = Object.assign(
  React.forwardRef<HTMLDivElement, TableProps>(
    (
      { className: customClassName, children, displayStackAt, ...rest },
      ref
    ) => {
      const { title, controlBars, content, stack, showStack } = useTable({
        children,
        displayStackAt,
      });

      return (
        <div
          data-testid="sds_table"
          className={classNames('sds_table', {
            [customClassName as string]: customClassName,
          })}
          {...rest}
          ref={ref}
        >
          {title}
          {controlBars}
          {!stack && content}
          {!showStack && stack && content}
          {showStack && stack}
        </div>
      );
    }
  ),
  {
    Title,
    Content,
    ControlBar,
    Header,
    HeaderCell,
    Body,
    Row,
    Cell,
    Stack,
    StackHeader,
    StackHeaderCell,
    StackBody,
    StackItem,
    StackRow,
    StackCell,
  }
);
