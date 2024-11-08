import React, { MouseEvent } from 'react';
import classNames from 'classnames';
import { useOption } from './useOption';
import type { PopoverMenuOptionProps } from './types';

export const Option = React.forwardRef<HTMLDivElement, PopoverMenuOptionProps>(
  (
    {
      className: customClassName,
      children,
      isDisabled = false,
      layout = 'horizontal',
      isSelected = false,
      isHidden = false,
      variant,
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
      <div
        className={classNames('sds_popoverMenu_option', {
          'sds_popoverMenu_option--disabled': isDisabled,
          [`sds_popoverMenu_option--${layout}`]: layout,
          'sds_popoverMenu_option--selected': isSelected,
          'sds_popoverMenu_option--hidden': isHidden,
          'sds_popoverMenu_option--danger': variant === 'danger',
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_popoverMenu_option"
        onClick={clickEvent}
        ref={ref}
        {...rest}
      >
        {childrenArray}
      </div>
    );
  }
);
