import React, { ReactElement, forwardRef } from 'react';
import { cloneElement } from 'react';
import { Label } from '../../Label';
import { Control } from './Control';
import { HelpText } from '../../HelpText';
import { useTextInput } from './useTextInput';
import type { TextInputProps } from './types';
import './text-input.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/textinput)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/textinput-vnkgtf?file=/src/App.tsx:1,1)
*/

const TextInput = Object.assign(
  forwardRef<HTMLDivElement, TextInputProps>(
    (
      {
        className: customClassName,
        children,
        hasError = false,
        isDisabled = false,
        isReadOnly = false,
        ...rest
      },
      ref
    ) => {
      const { label, control, helpText } = useTextInput(children);

      const hasErrorValidation = hasError && !isReadOnly && !isDisabled;
      const readOnlyValidation = isReadOnly && !isDisabled;

      if (!control) {
        throw new Error(
          'The <TextInput.Control> subcomponent is required to render the component.'
        );
      }

      return (
        <div
          ref={ref}
          className={classNames('sds_textInput', {
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_textInput"
          data-has-error={hasErrorValidation}
          data-disabled={isDisabled}
          data-read_only={readOnlyValidation}
          {...rest}
        >
          {label &&
            cloneElement(label, {
              'data-testid': 'sds_textInput_label',
              className: classNames('sds_textInput_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
            })}
          {control &&
            cloneElement(control, {
              hasError: hasErrorValidation,
              isDisabled,
              isReadOnly: readOnlyValidation,
            })}
          {helpText &&
            cloneElement(helpText, {
              hasError: hasErrorValidation,
              isDisabled,
              isReadOnly: readOnlyValidation,
              className: classNames('sds_textInput_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_textInput_helptext',
            })}
        </div>
      );
    }
  ),
  {
    Label,
    HelpText,
    Control,
  }
);

export { TextInput };
