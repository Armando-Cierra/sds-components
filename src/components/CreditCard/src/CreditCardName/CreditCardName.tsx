import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { TextInput } from '../../../TextInput';
import { useCreditCardControl } from '../useCreditCardControl';
import { Label } from '../../../Label';
import { HelpText } from '../../../HelpText';
import type { CreditCardNameProps } from './types';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/creditcard)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/creditcard-pwxryr?file=/src/App.tsx:1,1)
*/

export const CreditCardName = Object.assign(
  forwardRef<HTMLDivElement, CreditCardNameProps>(
    (
      {
        id,
        className: customClassName,
        children,
        hasError,
        isDisabled,
        isReadOnly,
        ...rest
      }: CreditCardNameProps,
      ref
    ) => {
      const { label, helpText, control } = useCreditCardControl(
        children,
        TextInput.Control
      );

      return (
        <TextInput
          id={id}
          className={classNames('sds_creditCardName', {
            [customClassName as string]: customClassName,
          })}
          hasError={hasError}
          isDisabled={isDisabled}
          isReadOnly={isReadOnly}
          ref={ref}
          data-testid="sds_creditCard_name"
          {...rest}
        >
          {label &&
            cloneElement(label, {
              className: classNames('sds_creditCard_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_creditCard_name_label',
            })}
          {control &&
            cloneElement(control, {
              hasError,
              isDisabled,
              isReadOnly,
              lettersOnly: true,
            })}
          {helpText &&
            cloneElement(helpText, {
              className: classNames('sds_creditCard_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
              hasError,
              isDisabled,
              isReadOnly,
              'data-testid': 'sds_creditCard_name_helptext',
            })}
        </TextInput>
      );
    }
  ),
  {
    Label,
    HelpText,
    Control: TextInput.Control,
  }
);
