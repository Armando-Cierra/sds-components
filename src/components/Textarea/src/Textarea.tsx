import React, { forwardRef, cloneElement, ReactElement } from 'react';
import { Label } from '../../Label';
import { Control } from './Control';
import { HelpText } from '../../HelpText';
import { useTextarea } from './useTextarea';
import type { TextareaProps } from './types';
import './textarea.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/textarea)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/textarea-zqt9rv?file=/src/App.tsx:1,1)
*/

const Textarea = Object.assign(
  forwardRef<HTMLDivElement, TextareaProps>(
    (
      {
        className: customClassName,
        id,
        maxLengthCounter,
        hasError = false,
        isReadOnly = false,
        isDisabled,
        children,
        ...rest
      },
      ref
    ) => {
      const { control, label, helpText } = useTextarea({
        children,
      });

      if (!control) {
        throw new Error(
          'The <Textarea.Control> subcomponent is required to render the component.'
        );
      }

      return (
        <div
          ref={ref}
          className={classNames('sds_textarea', {
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_textarea_container"
          {...rest}
        >
          {label &&
            cloneElement(label, {
              'data-testid': 'sds_textarea_label',
              className: classNames('sds_textarea_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
            })}
          {control &&
            cloneElement(control, {
              maxLengthCounter,
              isReadOnly,
              isDisabled,
              hasError,
              id,
            })}
          <div
            className="sds_helpTextBox"
            style={{
              width:
                maxLengthCounter !== 0 && maxLengthCounter !== undefined
                  ? 'calc(100% - 40px)'
                  : '100%',
            }}
          >
            {helpText &&
              cloneElement(helpText, {
                className: classNames('sds_textarea_helpText', {
                  [(helpText as ReactElement).props.className as string]: (
                    helpText as ReactElement
                  ).props.className,
                }),
                hasError,
                isDisabled,
                isReadOnly,
                'data-testid': 'sds_textarea_helptext',
              })}
          </div>
        </div>
      );
    }
  ),
  { Label, HelpText, Control }
);

export { Textarea };
