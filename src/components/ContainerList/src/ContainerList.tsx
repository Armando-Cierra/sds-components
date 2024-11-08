import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { DndContext, closestCenter } from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Item } from './Item';
import { Actions } from './Actions';
import { Content } from './Content';
import { ContainerListContext } from './context';
import { useContainerList } from './useContainerList';
import type { ContainerListProps } from './types';
import './container-list.scss';

export const ContainerList = Object.assign(
  forwardRef<HTMLDivElement, ContainerListProps>(
    (
      {
        className: customClassName,
        children,
        isDraggable = false,
        dragIcon = 'drag-dots-vertical--line',
        hideSortingButtons = false,
        sortingButtonsIcons = {
          up: 'arrow-top--line',
          down: 'arrow-bottom--line',
        },
        sortingButtonsVariant = 'base',
        hideSortingButtonsTooltips = false,
        sortingButtonsTooltipsText = {
          up: 'Move Up',
          down: 'Move Down',
        },
        itemsSort,
        onDragChange,
        ...rest
      },
      ref
    ) => {
      const { content, sort, handleDragEnd, moveItem, sensors } =
        useContainerList({
          children,
          itemsSort,
          onDragChange,
        });

      if (isDraggable)
        return (
          <ContainerListContext.Provider
            value={{
              isDraggable,
              dragIcon,
              hideSortingButtons,
              sortingButtonsIcons,
              sortingButtonsVariant,
              hideSortingButtonsTooltips,
              sortingButtonsTooltipsText,
              sort,
              moveItem,
            }}
          >
            <DndContext
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
              sensors={sensors}
            >
              <div
                className={classNames(
                  'sds_containerList',
                  'sds_containerList--isDraggable',
                  {
                    [customClassName as string]: customClassName,
                  }
                )}
                data-testid="sds_containerList"
                ref={ref}
                {...rest}
              >
                <SortableContext
                  items={sort}
                  strategy={verticalListSortingStrategy}
                >
                  {content}
                </SortableContext>
              </div>
            </DndContext>
          </ContainerListContext.Provider>
        );

      return (
        <ContainerListContext.Provider
          value={{
            isDraggable,
            dragIcon,
            hideSortingButtons,
            sortingButtonsIcons,
            sortingButtonsVariant,
            hideSortingButtonsTooltips,
            sortingButtonsTooltipsText,
            sort,
            moveItem,
          }}
        >
          <div
            className={classNames('sds_containerList', {
              [customClassName as string]: customClassName,
            })}
            data-testid="sds_containerList"
            ref={ref}
            {...rest}
          >
            {content}
          </div>
        </ContainerListContext.Provider>
      );
    }
  ),
  { Item, Actions, Content }
);
