import { Children, isValidElement, ReactElement, useState } from 'react';
import { DragEndEvent, useSensors, useSensor } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { customPointerSensor } from './pointerSensor';
import { Item } from './Item';
import type { UseContainerListProps } from './types';

export const useContainerList = ({
  children,
  itemsSort,
  onDragChange,
}: UseContainerListProps) => {
  const childrenArray = Children.toArray(children);
  let content: ReactElement[] = [];
  let defaultSort: string[] = [];

  childrenArray.forEach((item) => {
    if (isValidElement(item) && item.type === Item) {
      defaultSort = [...defaultSort, item.props.value];
      content = [...content, item];
    }
  });

  const [innerSort, setInnerSort] = useState(defaultSort);
  const sort = itemsSort ?? innerSort;
  const orderMap = new Map(
    sort.map((value: string, index: number) => [value, index])
  );

  content = content.sort((a, b) => {
    const indexA = orderMap.get(a.props.value) ?? -1;
    const indexB = orderMap.get(b.props.value) ?? -1;
    return indexA - indexB;
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const oldIndex = sort.findIndex((item) => item === active.id);
    const newIndex = sort.findIndex((item) => item === over?.id);
    const newOrder = arrayMove(sort, oldIndex, newIndex);

    setInnerSort(newOrder);
    onDragChange?.(newOrder);
  };

  const getItemElement = (e: Element) => {
    const directParentElement = e.parentElement?.parentElement;

    if (!directParentElement?.className.includes('sds_containerList_item'))
      return directParentElement?.parentElement?.parentElement;

    return directParentElement;
  };

  const moveItem =
    (movement: 'up' | 'down', value: string) => (e: React.MouseEvent) => {
      e.stopPropagation();
      const oldIndex = sort.indexOf(value);
      const updateSort = (newOrder: string[]) => {
        setInnerSort(newOrder);
        onDragChange?.(newOrder);
      };
      const itemElement = getItemElement(e.currentTarget) as HTMLElement;
      itemElement.classList.add('sds_containerList_item--animated');
      setTimeout(() => {
        itemElement.classList.remove('sds_containerList_item--animated');
      }, 1500);

      const movements = {
        up: () => {
          const newIndex = oldIndex - 1;
          const newOrder = arrayMove(sort, oldIndex, newIndex);
          updateSort(newOrder);
        },
        down: () => {
          const newIndex = oldIndex + 1;
          const newOrder = arrayMove(sort, oldIndex, newIndex);
          updateSort(newOrder);
        },
      };

      movements[movement]();
    };

  const sensors = useSensors(useSensor(customPointerSensor));

  return { content, handleDragEnd, sort, moveItem, sensors };
};
