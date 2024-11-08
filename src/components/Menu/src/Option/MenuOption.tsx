import React, { MouseEvent } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import { useOption } from './useOption';
import type { MenuOptionProps } from './types';

export const Option = React.forwardRef<HTMLDivElement, MenuOptionProps>(
  (
    {
      className: customClassName,
      variant = 'default',
      children,
      isDisabled = false,
      layout = 'horizontal',
      isSelected = false,
      isHidden = false,
      onClick,
      ...rest
    },
    ref
  ) => {
    const clickEvent = (e: MouseEvent) => {
      if (onClick && !isDisabled) {
        onClick(e);
      }
    };

    const { childrenArray } = useOption(children);

    return (
      <DropdownMenu.Item
        className={classNames('sds_menu_option', {
          'sds_menu_option--disabled': isDisabled,
          [`sds_menu_option--${layout}`]: layout,
          'sds_menu_option--selected': isSelected,
          'sds_menu_option--hidden': isHidden,
          'sds_menu_option--danger': variant === 'danger',
          [customClassName as string]: customClassName,
        })}
        disabled={isDisabled}
        data-testid="sds_menu_option"
        onClick={clickEvent}
        ref={ref}
        {...rest}
      >
        {childrenArray}
      </DropdownMenu.Item>
    );
  }
);
