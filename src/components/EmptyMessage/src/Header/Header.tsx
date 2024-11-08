import React, { forwardRef } from 'react';
import type { HeaderProps } from './types';
import { useHeader } from './useHeader';
import classNames from 'classnames';

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, icon, image, className: customClassName, ...rest }, ref) => {
    const { iconOrImage } = useHeader({ icon, image });

    return (
      <div
        ref={ref}
        data-testid="sds_emptyMessage_header"
        {...rest}
        className={classNames('sds_emptyMessage_header', {
          [customClassName as string]: customClassName,
        })}
      >
        {iconOrImage}
        {children}
      </div>
    );
  }
);
