import React from 'react';
import classNames from 'classnames';
import { Label } from './Label';
import { Control } from './Control';
import { useRadio } from './useRadio';
import type { RadioProps } from './types';
import './radio.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/radio)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/radio-2nhhcy?file=/src/App.tsx:1,1)
*/

export const Radio = Object.assign(
  React.forwardRef<HTMLDivElement, RadioProps>(
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
      const { label, control } = useRadio({ children });
      const capitalizedLabelPosition = `${labelPosition
        .charAt(0)
        .toUpperCase()}${labelPosition.slice(1).toLowerCase()}`;

      if (!control) {
        throw new Error(
          'The <Radio.Control> subcomponent is required to render the component.'
        );
      }

      return (
        <div
          className={classNames('sds_radio', {
            [`sds_radio--label${capitalizedLabelPosition}`]: labelPosition,
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_radio"
          ref={ref}
          {...rest}
        >
          {React.cloneElement(control, { isDisabled, hasError })}
          {label && React.cloneElement(label, { isDisabled, hasError })}
        </div>
      );
    }
  ),
  {
    Label,
    Control,
  }
);
