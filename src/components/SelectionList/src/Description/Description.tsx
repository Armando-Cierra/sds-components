import React from 'react';
import classNames from 'classnames';
import type { SelectionListDescriptionProps } from './types';

export const Description = React.forwardRef<
  HTMLParagraphElement,
  SelectionListDescriptionProps
>(({ className: customClassName, children, ...rest }, ref) => {
  return (
    <p
      className={classNames('sds_selectionList_description', {
        [customClassName as string]: customClassName,
      })}
      ref={ref}
      {...rest}
    >
      {children}
    </p>
  );
});
