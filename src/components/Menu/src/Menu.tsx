import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import classNames from 'classnames';
import { Search } from './Search';
import { useMenu } from './useMenu';
import { Trigger } from './Trigger';
import { Header } from './Header';
import { Divider } from './Divider';
import { Option } from './Option';
import { Actions } from './Actions';
import { CustomArea } from './CustomArea';
import { Sub } from './Sub';
import { SubTrigger } from './SubTrigger';
import type { MenuProps } from './types';
import './menu.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/menu)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/menu-jkz392?file=/src/App.tsx:1,1)
*/

export const Menu = Object.assign(
  React.forwardRef<HTMLDivElement, MenuProps>(
    (
      {
        children,
        className: customClassName,
        align = 'start',
        alignOffset = 0,
        side = 'bottom',
        sideOffset = 4,
        defaultOpen = false,
        onOpenChange: onOpen,
        ...rest
      },
      ref
    ) => {
      const { content, trigger } = useMenu(children);

      if (content.length === 0) {
        throw new Error(
          'Remember to provide at least one children: CustomArea, Divider, Option, Header, Search, Option'
        );
      }

      return (
        <DropdownMenu.Root
          defaultOpen={defaultOpen}
          onOpenChange={(e) => {
            onOpen?.(e);
          }}
        >
          <DropdownMenu.Trigger asChild className="radix_trigger">
            <div className="sds_menu_triggerWrapper">{trigger}</div>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              asChild
              side={side}
              sideOffset={sideOffset}
              align={align}
              alignOffset={alignOffset}
            >
              <div
                data-testid="sds_menu"
                data-align={align}
                data-side={side}
                className={classNames('sds_menu', {
                  [customClassName as string]: customClassName,
                })}
                ref={ref}
                {...rest}
              >
                <div className="sds_menu_content">{content}</div>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      );
    }
  ),
  {
    CustomArea,
    Divider,
    Header,
    Option,
    Trigger,
    Actions,
    Search,
    Sub,
    SubTrigger,
  }
);
