import React from 'react';
import { Button } from '../../../Button';
import classNames from 'classnames';
import type { DrawerHeaderProps } from './types';

export const Header = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  (
    {
      className: customClassName,
      children,
      drawerPosition,
      closeButtonPosition = 'left',
      closeButtonIcon,
      hideCloseButton,
      onClose,
      ...rest
    },
    ref
  ) => {
    const getDefaultIcon = () => {
      if (drawerPosition === 'left') return 'arrow-from-right--fill';
      return 'arrow-from-left--line';
    };

    return (
      <div
        data-testid="sds_drawer_header"
        className={classNames('sds_drawer_header', {
          'sds_drawer_header--leftCloseButton': closeButtonPosition === 'left',
          'sds_drawer_header--rightCloseButton':
            closeButtonPosition === 'right',
          'sds_drawer_header--noCloseButton': !onClose || hideCloseButton,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {onClose && !hideCloseButton && (
          <Button
            variant="ghost"
            className="sds_drawer_header_button"
            iconOnly={closeButtonIcon ?? getDefaultIcon()}
            onClick={() => onClose?.()}
          />
        )}
        <span className="sds_drawer_header_text">{children}</span>
      </div>
    );
  }
);
