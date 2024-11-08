import { Children, isValidElement, ReactNode, useContext } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Actions } from '../Actions';
import { Content } from '../Content';
import { ContainerListContext } from '../context';
import type { ContainerListContextProps } from '../types';

export const useItem = (children: ReactNode, value: string) => {
  const childrenArray = Children.toArray(children);
  let content: ReactNode = null;
  let actions: ReactNode = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Content) content = item;
      if (item.type === Actions) actions = item;
    }
  });

  if (content === null)
    throw new Error(
      '<ContainerList.Item> requires to have at least the <ContainerList.Content> subcomponent as children.'
    );

  const {
    isDraggable,
    dragIcon,
    hideSortingButtons,
    sortingButtonsIcons,
    sortingButtonsVariant,
    hideSortingButtonsTooltips,
    sortingButtonsTooltipsText,
    sort,
    moveItem,
  } = useContext(ContainerListContext) as ContainerListContextProps;

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useSortable({
      id: value,
    });

  const styles = isDragging
    ? {
        transform: CSS.Transform.toString(transform),
        boxShadow: `0px 2px 4px 0px rgba(0, 0, 0, 0.08),
    0px 2px 4px 0px rgba(0, 0, 0, 0.08)`,
        borderRadius: '0.5rem',
        zIndex: 1,
      }
    : {
        transform: CSS.Transform.toString(transform),
      };

  const isFirstItem = sort.indexOf(value) === 0;
  const isLastItem = sort.indexOf(value) === sort.length - 1;
  const itemsAmount = sort.length;

  return {
    content,
    actions,
    isDraggable,
    dragIcon,
    attributes,
    listeners,
    setNodeRef,
    styles,
    hideSortingButtons,
    sortingButtonsIcons,
    hideSortingButtonsTooltips,
    sortingButtonsTooltipsText,
    isFirstItem,
    isLastItem,
    moveItem,
    sortingButtonsVariant,
    itemsAmount,
  };
};
