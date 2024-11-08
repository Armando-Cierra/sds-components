import React, { forwardRef } from 'react';
import type { TabGroupDividerProps } from './types';
import classNames from 'classnames';

const Divider = forwardRef<HTMLDivElement, TabGroupDividerProps>(
  ({ className: customClassName, ...rest }: TabGroupDividerProps, ref) => {
    return (
      <div className="sds_tabGroup_divider_container">
        <div
          data-testid="sds_tabGroup_divider"
          {...rest}
          ref={ref}
          className={classNames('sds_tabGroup_divider', {
            [customClassName as string]: customClassName,
          })}
        ></div>
      </div>
    );
  }
);

export { Divider };
