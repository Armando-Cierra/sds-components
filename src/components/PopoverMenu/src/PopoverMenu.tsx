import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import classNames from 'classnames';
import { Search } from './Search';
import { usePopoverMenu } from './usePopoverMenu';
import { Anchor } from './Anchor';
import { Header } from './Header';
import { Divider } from './Divider';
import { Option } from './Option';
import { Actions } from './Actions';
import { CustomArea } from './CustomArea';
import type { PopoverMenuProps } from './types';
import './popoverMenu.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/popoverMenu)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/popoverMenu-jkz392?file=/src/App.tsx:1,1)
*/

export const PopoverMenu = Object.assign(
  React.forwardRef<HTMLDivElement, PopoverMenuProps>(
    (
      {
        children,
        className: customClassName,
        align = 'start',
        alignOffset = 0,
        side = 'bottom',
        sideOffset = 4,
        isOpen,
        autoFocus = false,
        ...rest
      },
      ref
    ) => {
      const { content, anchor, avoidAutoFocus } = usePopoverMenu(children);

      if (!anchor) {
        throw new Error(
          'The <PopoverMenu.Anchor> subcomponent is required for the <PopOverMenu>. Also remember to provide at least one children: CustomArea, Divider, Option, Header, Search, Option'
        );
      }

      return (
        <Popover.Root open={isOpen}>
          <Popover.Trigger asChild className="radix_trigger">
            <div className="sds_popoverMenu_triggerWrapper">{anchor}</div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              asChild
              side={side}
              sideOffset={sideOffset}
              align={align}
              alignOffset={alignOffset}
              {...(!autoFocus && { onOpenAutoFocus: avoidAutoFocus })}
            >
              <div
                data-testid="sds_popoverMenu"
                data-align={align}
                data-side={side}
                className={classNames('sds_popoverMenu', {
                  [customClassName as string]: customClassName,
                })}
                ref={ref}
                {...rest}
              >
                <div className="sds_popoverMenu_content">{content}</div>
              </div>
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      );
    }
  ),
  {
    CustomArea,
    Divider,
    Header,
    Option,
    Actions,
    Search,
    Anchor,
  }
);
