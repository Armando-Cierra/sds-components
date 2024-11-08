import React from 'react';
import classNames from 'classnames';
import './section-heading.scss';
import type { HeadingProps } from './types';

export const SectionHeading = React.forwardRef<HTMLDivElement, HeadingProps>(
  (
    { className: customClassName, children, variant = 'solid', ...rest },
    ref
  ) => {
    return (
      <div
        data-testid="sds_sectionHeading"
        className={classNames('sds_sectionHeading', {
          [`sds_sectionHeading--${variant}`]: variant,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
