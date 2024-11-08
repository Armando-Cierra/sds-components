import { ChangeEvent, isValidElement, type ReactNode } from 'react';
import uniqid from 'uniqid';
import { Title } from '../Title';
import { Description } from '../Description';
import { NestedContent } from '../NestedContent';
import type { UseSelectionListItemProps } from './types';

export const useItem = ({ children, onChange }: UseSelectionListItemProps) => {
  const innerItemId = uniqid('sds_selectionList_item_');
  const childrenArray = Array.isArray(children) ? children : [children];
  let title: ReactNode = null;
  let description: ReactNode = null;
  let nestedContent: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Title) title = item;
      if (item.type === Description) description = item;
      if (item.type === NestedContent) nestedContent = item;
    }
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e);
  };

  return {
    title,
    description,
    nestedContent,
    innerItemId,
    handleChange,
  };
};
