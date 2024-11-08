import React, { forwardRef } from 'react';
import { Header } from './Header';
import { Description } from './Description';
import { Actions } from './Actions';
import { useEmptyMessage } from './useEmptyMessage';
import type { EmptyMessageProps } from './types';
import classNames from 'classnames';
import './empty-message.scss';

export const EmptyMessage = Object.assign(
  forwardRef<HTMLDivElement, EmptyMessageProps>(
    (
      { children, variant, icon, image, className: customClassName, ...rest },
      ref
    ) => {
      const { header, description, actions } = useEmptyMessage({
        children,
        icon,
        image,
      });

      return (
        <div
          ref={ref}
          {...rest}
          data-testid="sds_emptyMessage"
          className={classNames('sds_emptyMessage', {
            'sds_emptyMessage--contrast': variant === 'contrast',
            [customClassName as string]: customClassName,
          })}
        >
          {header}
          {description}
          {actions}
        </div>
      );
    }
  ),
  {
    Header,
    Actions,
    Description,
  }
);
