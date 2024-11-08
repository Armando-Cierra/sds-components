import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Icon } from './Icon';
import { Menu } from '../../../Menu';
import { useMultiSelectDropdown } from './useDropdown';
import type { MultiSelectDropdownProps } from './types';
import '../multi-select.scss';

export const Dropdown = forwardRef<HTMLDivElement, MultiSelectDropdownProps>(
  (
    {
      className: customClassName,
      children,
      placeholder = 'Items Selected',
      counter,
      hasError,
      defaultOpen,
      isDisabled,
      menuClassName,
      ...rest
    },
    ref
  ) => {
    const { search, options, menuWidth, menuTriggerRef, toggleMenu } =
      useMultiSelectDropdown(children);

    return (
      <div
        ref={ref}
        className={classNames('sds_multiSelect_dropdown', {
          [customClassName as string]: customClassName,
          'sds_multiSelect--disabled': isDisabled,
        })}
      >
        <Menu
          defaultOpen={defaultOpen}
          style={{ width: `${menuWidth}px` }}
          align="start"
          onOpenChange={toggleMenu}
          className={classNames('sds_multiSelect_dropdown_menu', {
            [menuClassName as string]: menuClassName,
          })}
        >
          <Menu.Trigger>
            <div
              role="button"
              className={classNames('sds_multiSelect_control', {
                'sds_multiSelect_tagBox--selection': counter === 0,
                'sds_multiSelect--disabled': isDisabled,
                'sds_multiSelect--error': hasError && !isDisabled,
              })}
              ref={menuTriggerRef}
              data-tag_box_selection={counter}
              data-error={hasError}
              data-disabled={isDisabled}
              tabIndex={0}
              {...rest}
            >
              {`${counter} ${placeholder}`}
              {hasError && <Icon name="error" />}
              <Icon name="carretSortables" />
            </div>
          </Menu.Trigger>
          {search}
          {options}
        </Menu>
      </div>
    );
  }
);
