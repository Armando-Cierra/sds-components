import React from 'react';
import classNames from 'classnames';
import { Button } from '../../../Button';
import { Tooltip } from '../../../Tooltip';
import { AvailableTelicon, Telicon } from '../../../Telicon';
import { useItem } from './useItem';
import type { ContainerListItemProps } from './types';

export const Item = ({
  className: customClassName,
  children,
  value,
  background = 'default',
  ...rest
}: ContainerListItemProps) => {
  const {
    content,
    actions,
    isDraggable,
    styles,
    setNodeRef,
    attributes,
    listeners,
    dragIcon,
    hideSortingButtons,
    sortingButtonsIcons,
    hideSortingButtonsTooltips,
    sortingButtonsTooltipsText,
    isFirstItem,
    isLastItem,
    moveItem,
    sortingButtonsVariant,
    itemsAmount,
  } = useItem(children, value);

  if (isDraggable)
    return (
      <div
        className={classNames('sds_containerList_item', {
          'sds_containerList_item--isUnique': itemsAmount === 1,
          'sds_containerList_item--isDraggable': isDraggable,
          [`sds_containerList_item--${background}`]: background,
          [customClassName as string]: customClassName,
        })}
        style={styles}
        ref={setNodeRef}
        data-testid="sds_containerList_item"
        {...attributes}
        {...listeners}
        {...rest}
      >
        {isDraggable && (
          <Telicon
            className="sds_containerList_dragIcon"
            iconName={dragIcon as AvailableTelicon}
          />
        )}
        {content}
        {actions}
        {hideSortingButtons === false && (
          <div className="sds_containerList_sortingButtons">
            {hideSortingButtonsTooltips ? (
              <>
                <Button
                  variant={sortingButtonsVariant}
                  isDisabled={isFirstItem}
                  iconOnly={sortingButtonsIcons?.up}
                  onClick={moveItem('up', value)}
                />
                <Button
                  variant={sortingButtonsVariant}
                  isDisabled={isLastItem}
                  iconOnly={sortingButtonsIcons?.down}
                  onClick={moveItem('down', value)}
                />
              </>
            ) : (
              <>
                <Tooltip message={sortingButtonsTooltipsText?.up}>
                  <Button
                    variant={sortingButtonsVariant}
                    isDisabled={isFirstItem}
                    iconOnly={sortingButtonsIcons?.up}
                    onClick={moveItem('up', value)}
                  />
                </Tooltip>
                <Tooltip message={sortingButtonsTooltipsText?.down}>
                  <Button
                    variant={sortingButtonsVariant}
                    isDisabled={isLastItem}
                    iconOnly={sortingButtonsIcons?.down}
                    onClick={moveItem('down', value)}
                  />
                </Tooltip>
              </>
            )}
          </div>
        )}
      </div>
    );

  return (
    <div
      className={classNames('sds_containerList_item', {
        'sds_containerList_item--isUnique': itemsAmount === 1,
        'sds_containerList_item--isDraggable': isDraggable,
        [`sds_containerList_item--${background}`]: background,
        [customClassName as string]: customClassName,
      })}
      data-testid="sds_containerList_item"
      {...rest}
    >
      {isDraggable && (
        <Telicon
          className="sds_containerList_dragIcon"
          iconName={dragIcon as AvailableTelicon}
        />
      )}
      {content}
      {actions}
    </div>
  );
};
