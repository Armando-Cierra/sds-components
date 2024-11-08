import React, { CSSProperties } from 'react';
import classNames from 'classnames';
import { Item } from './Item';
import { Title } from './Title';
import { Description } from './Description';
import { NestedContent } from './NestedContent';
import { useSelectionList } from './useSelectionList';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import type { SelectionListProps } from './types';
import './selection-list.scss';

export const SelectionList = Object.assign(
  React.forwardRef<HTMLDivElement, SelectionListProps>(
    (
      {
        children,
        className: customClassName,
        layout = 'list',
        listGap = 4,
        gridColumnsNumber = 2,
        gridRowGap = 4,
        gridColumnGap = 4,
        style,
        ...rest
      },
      ref
    ) => {
      const { getCustomStyles, label, helptext, items } = useSelectionList({
        layout,
        listGap,
        gridColumnsNumber,
        gridColumnGap,
        gridRowGap,
        children,
      });

      if (items.length === 0)
        throw new Error(
          'The <SelectionList> component requires having at least one subcomponent element as children'
        );

      return (
        <div
          className={classNames('sds_selectionList', {
            [`sds_selectionList--${layout}`]: layout,
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_selectionList"
          style={{ ...style, ...(getCustomStyles() as CSSProperties) }}
          ref={ref}
          {...rest}
        >
          {label}
          {items}
          {helptext}
        </div>
      );
    }
  ),
  {
    Item,
    Title,
    Description,
    NestedContent,
    Label,
    HelpText,
  }
);
