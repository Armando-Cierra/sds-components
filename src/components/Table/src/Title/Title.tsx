import React from 'react';
import classNames from 'classnames';
import { TableTitleProps } from './types';

export const Title = React.forwardRef<HTMLDivElement, TableTitleProps>(
  (
    {
      className: customClassName,
      children,
      description,
      hasPadding = false,
      stackPadding = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        data-testid="sds_table_title"
        className={classNames('sds_table_title', {
          'sds_table_title--stackPadding': stackPadding,
          'sds_table_title--hasPadding': hasPadding,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        <div className="sds_table_title_header">{children}</div>
        {description && (
          <p className="sds_table_title_description">{description}</p>
        )}
      </div>
    );
  }
);
