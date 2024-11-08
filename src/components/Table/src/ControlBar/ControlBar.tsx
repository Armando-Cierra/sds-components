import React from 'react';
import classNames from 'classnames';
import type { TableControlBarProps } from './types';

export const ControlBar = React.forwardRef<
  HTMLDivElement,
  TableControlBarProps
>(
  (
    {
      className: customClassName,
      children,
      stackPadding = false,
      hasPadding = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        data-testid="sds_table_controlBar"
        className={classNames('sds_table_controlBar', {
          'sds_table_title--stackPadding': stackPadding,
          'sds_table_controlBar--hasPadding': hasPadding,
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
