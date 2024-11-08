import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { useTagBox } from './useTagBox';
import type { MultiSelectTagBoxProps } from './types';
import '../multi-select.scss';

export const TagBox = forwardRef<HTMLDivElement, MultiSelectTagBoxProps>(
  ({ children, className: customClassName, isDisabled, ...rest }, ref) => {
    const { tags } = useTagBox(children, isDisabled);

    return (
      <div
        ref={ref}
        className={classNames('sds_multiSelect_tagBox', {
          [customClassName as string]: customClassName,
          'sds_multiSelect_tagBox--hidden': tags.length === 0,
        })}
        {...rest}
      >
        {tags}
      </div>
    );
  }
);
