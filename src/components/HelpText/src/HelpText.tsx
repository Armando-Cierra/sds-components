import React from 'react';
import classNames from 'classnames';
import type { HelpTextProps } from './types';
import './help-text.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/~/changes/60/sds-components/components/helptext)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/helptext-pm3n5x?file=/src/App.tsx:1,1)
*/

export const HelpText = React.forwardRef<HTMLSpanElement, HelpTextProps>(
  (
    {
      className: customClassName,
      children,
      isDisabled,
      isReadOnly,
      hasError,
      ...rest
    },
    ref
  ) => {
    const errorValidation = hasError && !isReadOnly && !isDisabled;
    const readOnlyValidation = isReadOnly && !isDisabled;

    return (
      <span
        data-testid="sds_helpText"
        className={classNames('sds_helpText', {
          'sds_helpText--disabled': isDisabled,
          'sds_helpText--readOnly': readOnlyValidation,
          'sds_helpText--error': errorValidation,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </span>
    );
  }
);
