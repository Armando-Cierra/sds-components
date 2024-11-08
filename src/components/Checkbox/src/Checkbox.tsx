import React, { cloneElement } from 'react';
import { Label } from './Label';
import { Control } from './Control';
import classNames from 'classnames';
import { useCheckbox } from './useCheckbox';
import type { CheckboxProps } from './types';
import './checkbox.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/checkbox)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/checkbox-snqg9y?file=/src/App.tsx:1,1)
*/

export const Checkbox = Object.assign(
  React.forwardRef<HTMLDivElement, CheckboxProps>(
    (
      {
        className: customClassName,
        labelPosition = 'after',
        children,
        isDisabled = false,
        hasError = false,
        ...rest
      },
      ref
    ) => {
      const { label, control } = useCheckbox({ children });
      const capitalizedLabelPosition = `${labelPosition
        .charAt(0)
        .toUpperCase()}${labelPosition.slice(1).toLowerCase()}`;

      if (!control) {
        throw new Error(
          'No <Checkbox.Control> subcomponent was found. The Control subcomponent is required.'
        );
      }

      return (
        <div
          className={classNames('sds_checkbox', {
            [`sds_checkbox--label${capitalizedLabelPosition}`]: labelPosition,
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_checkbox"
          ref={ref}
          {...rest}
        >
          {cloneElement(control, { isDisabled, hasError })}
          {label && cloneElement(label, { isDisabled, hasError })}
        </div>
      );
    }
  ),
  {
    Label,
    Control,
  }
);
