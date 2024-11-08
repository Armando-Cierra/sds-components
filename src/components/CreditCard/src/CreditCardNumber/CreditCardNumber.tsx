import React, { cloneElement, forwardRef, ReactElement } from 'react';
import { NumberInput } from '../../../NumberInput';
import { Label } from '../../../Label';
import { HelpText } from '../../../HelpText';
import CreditCardIcon from '../CreditCardIcon/CreditCardIcon';
import { useCreditCardControl } from '../useCreditCardControl';
import { useCreditCardNumber } from './useCreditCardNumber';
import type { CreditCardNumberProps } from './types';
import './style.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/creditcard)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/creditcard-pwxryr?file=/src/App.tsx:1,1)
*/

export const CreditCardNumber = Object.assign(
  forwardRef<HTMLDivElement, CreditCardNumberProps>(
    (
      {
        className: customClassName,
        hasError,
        children,
        isDisabled = false,
        ...rest
      }: CreditCardNumberProps,
      ref
    ) => {
      const { label, control, helpText } = useCreditCardControl(
        children,
        NumberInput.Control
      );
      const { creditCard, handleChange, customFilter } =
        useCreditCardNumber(control);

      if (!control) {
        throw new Error(
          'The <CreditCardNumber.Control /> subcomponent is required to render the component.'
        );
      }

      return (
        <div
          ref={ref}
          className={classNames('sds_creditCardNumber', {
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_creditCard_number"
          {...rest}
        >
          {label &&
            cloneElement(label, {
              className: classNames('sds_creditCard_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_creditCard_number_label',
            })}
          <div className="sds_creditCardNumber_controlBox">
            <CreditCardIcon
              style={{
                right: hasError ? '40px' : '7px',
              }}
              creditCard={creditCard}
            />
            {control &&
              cloneElement(control, {
                hasError,
                isDisabled,
                isWholeNumbersOnly: true,
                maxLength: 20,
                onChange: handleChange(
                  (control as ReactElement).props.onChange
                ),
                customFilter,
              })}
          </div>
          {helpText &&
            cloneElement(helpText, {
              className: classNames('sds_creditCard_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
              hasError,
              isDisabled,
              'data-testid': 'sds_creditCard_number_helptext',
            })}
        </div>
      );
    }
  ),
  {
    Label,
    HelpText,
    Control: NumberInput.Control,
  }
);
