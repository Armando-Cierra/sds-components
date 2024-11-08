import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Control } from './Control';
import { useNumberInput } from './useNumberInput';
import type { NumberInputProps } from './types';
import './number-input.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/numberinput)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/numberinput-vq8j57?file=/src/App.tsx:1,1)
*/

export const NumberInput = Object.assign(
  forwardRef<HTMLDivElement, NumberInputProps>(
    (
      {
        className: customClassName,
        hasError = false,
        isReadOnly = false,
        isDisabled = false,
        children,
        ...rest
      }: NumberInputProps,
      ref
    ) => {
      const { control, label, helpText, errorValidation, readOnlyValidation } =
        useNumberInput({
          children,
          hasError,
          isReadOnly,
          isDisabled,
        });

      if (!control) {
        throw new Error(
          'The <NumberInput.Control /> subcomponent is required to render the component'
        );
      }

      return (
        <div
          ref={ref}
          className={classNames('sds_numberInput', {
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_numberInput_component"
          {...rest}
        >
          {label &&
            cloneElement(label, {
              'data-testid': 'sds_numberInput_label',
              className: classNames('sds_numberInput_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
            })}
          {control &&
            cloneElement(control, {
              'data-testid': 'sds_numberInput_input',
              isDisabled,
              isReadOnly: readOnlyValidation,
              hasError: errorValidation,
            })}
          {helpText &&
            cloneElement(helpText, {
              'data-testid': 'sds_numberInput_helptext',
              isDisabled,
              hasError: errorValidation,
              isReadOnly: readOnlyValidation,
              className: classNames('sds_numberInput_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
            })}
        </div>
      );
    }
  ),
  { Label, HelpText, Control }
);
