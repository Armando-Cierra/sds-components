import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useSub } from './useSub';
import type { MenuSubProps } from './types';
import classNames from 'classnames';

export const Sub = React.forwardRef<HTMLDivElement, MenuSubProps>(
  ({ children, className: customClassName, ...rest }, ref) => {
    const { subTrigger, content } = useSub(children);

    return (
      <DropdownMenu.Sub {...rest}>
        <DropdownMenu.SubTrigger asChild>{subTrigger}</DropdownMenu.SubTrigger>
        <DropdownMenu.Portal>
          <DropdownMenu.SubContent sideOffset={4}>
            <div
              data-testid="sds_menu"
              className={classNames('sds_menu', {
                [customClassName as string]: customClassName,
              })}
              ref={ref}
              {...rest}
            >
              <div className="sds_menu_content">{content}</div>
            </div>
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
    );
  }
);
