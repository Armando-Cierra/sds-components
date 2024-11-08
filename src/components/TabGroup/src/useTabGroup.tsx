import {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
  useState,
} from 'react';
import uniqid from 'uniqid';
import { Tab } from './Tab';
import { Content } from './Content';
import { Divider } from './Divider';
import type { useTabGroupProps } from './types';

export const useTabGroup = ({
  children,
  controlledSelection,
  defaultSelectedTab,
}: useTabGroupProps) => {
  const childrenArray = Array.isArray(children) ? children.flat() : [children];
  let tabs: ReactElement[] = [];
  let content: ReactNode[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item) && item.type === Tab) tabs = [...tabs, item];
  });

  const [innerSelection, setInnerSelection] = useState(
    defaultSelectedTab ?? tabs[0]?.props.value
  );
  const selection = controlledSelection ?? innerSelection;

  const handleTabSelect = (item: ReactElement) => {
    const { value, onClick } = item.props;
    setInnerSelection(value);
    onClick?.();
  };

  let tabsSection: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Tab)
        tabsSection = [
          ...tabsSection,
          cloneElement(item as ReactElement, {
            key: uniqid('sds_tabGroup_tab_'),
            isSelected: (item as ReactElement).props.value === selection,
            onClick: () => handleTabSelect(item),
          }),
        ];
      if (item.type === Divider)
        tabsSection = [
          ...tabsSection,
          cloneElement(item, {
            key: uniqid('sds_tabGroup_divider_'),
          }),
        ];
    }
  });

  const getContent = (children: ReactNode) => {
    const tabChildrenArray = Array.isArray(children) ? children : [children];
    let content: ReactNode;

    tabChildrenArray.forEach((item) => {
      if (isValidElement(item) && item.type === Content) content = item;
    });

    return content;
  };

  content = tabs.map((item) => {
    if (item.props.value === selection) {
      return getContent(item.props.children);
    }
    return null;
  });

  return {
    tabsSection,
    tabs,
    content,
  };
};
