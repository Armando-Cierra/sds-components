import {
  type ReactElement,
  isValidElement,
  useState,
  cloneElement,
} from 'react';
import { Item } from './Item';
import type { AccordionProps } from './types';

export const useAccordion = ({
  children,
  selectedVisibility,
  collapsedIndicatorIcon,
  expandedIndicatorIcon,
}: AccordionProps) => {
  const isMultiple = selectedVisibility === 'multiple';
  const isSingle = selectedVisibility === 'single';
  const childrenArray = Array.isArray(children) ? children : [children];

  let accordions: ReactElement[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Item) accordions = [...accordions, item];
    }
  });

  const expandedProps = accordions.filter(
    (acc) => acc.props.isExpanded !== undefined
  );
  const hasExpandedInSome = accordions.some(
    (acc) => acc.props.isExpanded !== undefined
  );

  const defaultExpandedProps = accordions.filter(
    (acc) => acc.props.defaultExpanded === true
  );

  if (hasExpandedInSome && expandedProps.length !== accordions.length)
    throw new Error(
      'If you are using the controlled approach, using the prop isExpanded, all the <Accordion.Item /> should be using this prop, otherwise, use the uncontrolled approach. When using the uncontrolled approach, you can change the behavior of single/multiple using the selectedVisibility prop.'
    );

  if (defaultExpandedProps.length > 1 && isSingle)
    throw new Error(
      'If you are using the uncontrolled approach together the selectedVisibility single approach, only one <Accordion.Item /> should should have the defaultExpanded prop set to true, otherwise, it would be a contradictory behavior.'
    );

  const defaultActiveItems: (number | null)[] = accordions.map((acc, index) => {
    const { defaultExpanded } = acc.props;
    if (defaultExpanded) {
      return index;
    } else return null;
  });

  const initialActiveItems = defaultActiveItems.filter(
    (item) => item !== null
  ) as number[];

  const [activeItems, setActiveItems] = useState<number[]>(initialActiveItems);

  const toggleItem = (index: number) => {
    if (isMultiple) {
      const newActiveItems = activeItems.includes(index)
        ? activeItems.filter((item) => item !== index)
        : [...activeItems, index];
      setActiveItems(newActiveItems);
    } else {
      setActiveItems(activeItems.includes(index) ? [] : [index]);
    }
  };

  const handleAccordionClick = (index: number, onClick: () => void) => {
    toggleItem(index);
    onClick?.();
  };

  const newAccordions = accordions.map((accordion, index) => {
    const { isExpanded, onClick } = accordion.props;

    return cloneElement(accordion, {
      key: index,
      onClick: () => {
        handleAccordionClick?.(index, onClick);
      },
      collapsedIndicatorIcon,
      expandedIndicatorIcon,
      isExpanded:
        expandedProps.length === accordions.length
          ? isExpanded
          : activeItems.includes(index),
    });
  });

  return {
    newAccordions,
  };
};
