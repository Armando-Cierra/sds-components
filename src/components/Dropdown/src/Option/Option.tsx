import React, { MouseEvent } from 'react';
import classNames from 'classnames';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import useOption from './useOption';
import type { DropdownOptionProps } from './types';

export const Option = React.forwardRef<HTMLDivElement, DropdownOptionProps>(
  (
    {
      className: customClassName,
      children,
      isDisabled = false,
      layout = 'horizontal',
      onClick,
      value = '',
      customValue,
      isSelected = false,
      isHidden = false,
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
          [customClassName as string]: customClassName,
        })}
        disabled={isDisabled}
        data-testid="sds_menu_option"
        data-value={value}
        data-custom_value={!!customValue}
        onClick={clickEvent}
        ref={ref}
        {...rest}
      >
        {childrenArray}
      </DropdownMenu.Item>
    );
  }
);
