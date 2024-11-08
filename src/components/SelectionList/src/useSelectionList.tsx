import { ReactElement, ReactNode, cloneElement, isValidElement } from 'react';
import { Item } from './Item';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import type { UseSelectionListProps } from './types';
import classNames from 'classnames';

type ValidationArray = {
  logic: (boolean | undefined)[];
  controlType: ('checkbox' | 'radio')[];
  controlDisplay: boolean[];
};

export const useSelectionList = ({
  layout,
  listGap,
  gridColumnsNumber,
  gridRowGap,
  gridColumnGap,
  children,
}: UseSelectionListProps) => {
  const childrenArray = Array.isArray(children) ? children.flat() : [children];

  const items: ReactNode[] = [];
  let label: ReactElement | null = null;
  let helptext: ReactElement | null = null;

  const validationArray: ValidationArray = {
    logic: [],
    controlType: [],
    controlDisplay: [],
  };

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Item) {
        validationArray.logic.push((item as ReactElement).props.checked);
        validationArray.controlType.push(
          (item as ReactElement).props.controlType
        );
        validationArray.controlDisplay.push(
          !!(item as ReactElement).props.hideControl
        );
        items.push(item);
      }

      if (item.type === Label)
        label = cloneElement(item as ReactElement, {
          className: classNames('sds_selectionList_label', {
            [(item as ReactElement).props.className as string]: (
              item as ReactElement
            ).props.className,
          }),
        });

      if (item.type === HelpText)
        helptext = cloneElement(item as ReactElement, {
          className: classNames('sds_selectionList_helpText', {
            [(item as ReactElement).props.className as string]: (
              item as ReactElement
            ).props.className,
          }),
        });
    }
  });

  if (
    validationArray.logic.includes(undefined) &&
    (validationArray.logic.includes(false) ||
      validationArray.logic.includes(true))
  )
    throw new Error(
      '<SelectionList.Items> should have only one logic approach. For the controlled approach, all the <SelectionList.Item> should have the prop "checked" with a boolean value. For the uncontrolled approach the "checked" prop is not necessary, and oprtionally, you can use the prop "defaultChecked"'
    );

  if (
    validationArray.controlType.includes('radio') &&
    validationArray.controlType.includes('checkbox')
  )
    throw new Error(
      'All the <SelectionList.Item> subcomponents included in the <SelectionList> component should share the same controlType (radio or checkbox). It is not possible to mix both controlTypes in a single implementation.'
    );

  if (
    validationArray.controlDisplay.includes(true) &&
    validationArray.controlDisplay.includes(false)
  )
    throw new Error(
      'All the <SelectionList.Item> subcomponents in the <SelectionList> component should share the same visualization for the controls'
    );

  const getCustomStyles = () => {
    if (layout === 'list')
      return {
        display: 'flex',
        flexDirection: 'column',
        gap: listGap,
      };

    return {
      display: 'grid',
      gridTemplateColumns: `repeat(${gridColumnsNumber}, 1fr)`,
      rowGap: gridRowGap,
      columnGap: gridColumnGap,
    };
  };

  return { getCustomStyles, label, helptext, items };
};
