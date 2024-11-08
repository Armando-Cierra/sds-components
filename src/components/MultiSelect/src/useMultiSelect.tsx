import { ReactNode, ReactElement, isValidElement } from 'react';
import { TagBox } from './TagBox';
import { Dropdown } from './Dropdown';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import type { UseMultiSelectProps } from './types';

export const useMultiSelect = ({
  children,
  isDisabled,
  hasError,
}: UseMultiSelectProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  const errorValidation = !isDisabled && hasError;

  let label: ReactNode = null;
  let tagBox: ReactNode = null;
  let dropdown: ReactNode = null;
  let helpText: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Dropdown) dropdown = item;
      if (item.type === TagBox) tagBox = item;
      if (item.type === Label) label = item;
      if (item.type === HelpText) helpText = item;
    }
  });

  const getCounter = () => {
    const tagBoxChildren = (tagBox as ReactElement).props.children;
    const tagBoxChildrenArray =
      tagBoxChildren !== undefined
        ? Array.isArray(tagBoxChildren)
          ? tagBoxChildren
          : [tagBoxChildren]
        : [];

    return tagBoxChildrenArray.length;
  };

  return {
    tagBox,
    dropdown,
    label,
    helpText,
    getCounter,
    errorValidation,
  };
};
