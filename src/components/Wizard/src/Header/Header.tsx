import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { useHeader } from './useHeader';
import type { WizardHeaderProps } from './types';

export const Header = forwardRef<HTMLDivElement, WizardHeaderProps>(
  ({ children, className: customClassName, ...rest }, ref) => {
    const { title, actions } = useHeader(children);

    return (
      <div
        ref={ref}
        {...rest}
        className={classNames('sds_wizard_header_content', {
          [customClassName as string]: customClassName,
        })}
      >
        {title}
        {actions}
      </div>
    );
  }
);
