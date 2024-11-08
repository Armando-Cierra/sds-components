import React from 'react';
import classNames from 'classnames';
import useHeader from './useHeader';
import type { PopoverMenuHeaderProps } from './types';

export const Header = React.forwardRef<HTMLDivElement, PopoverMenuHeaderProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    const { title, actions } = useHeader(children);

    if (!title) {
      throw new Error(
        'The <PopoverMenu.Header> requires a string children value to work as the header title. Using a <Popover.Actions> is optional.'
      );
    }

    return (
      <div
        className={classNames('sds_popoverMenu_header', {
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_popoverMenu_header"
        ref={ref}
        {...rest}
      >
        <span className="sds_popoverMenu_title">{title}</span>
        {actions}
      </div>
    );
  }
);
