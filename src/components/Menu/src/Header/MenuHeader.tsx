import React from 'react';
import classNames from 'classnames';
import useHeader from './useHeader';
import type { MenuHeaderProps } from './types';

export const Header = React.forwardRef<HTMLDivElement, MenuHeaderProps>(
  ({ className: customClassName, children, ...rest }, ref) => {
    const { title, actions } = useHeader(children);

    if (!title) {
      throw new Error(
        'The <Menu.Header> requires a string children value to work as the header title. Using a <Menu.Actions> is optional.'
      );
    }

    return (
      <div
        className={classNames('sds_menu_header', {
          [customClassName as string]: customClassName,
        })}
        data-testid="sds_menu_header"
        ref={ref}
        {...rest}
      >
        <span className="sds_menu_title">{title}</span>
        {actions}
      </div>
    );
  }
);
