import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { Control } from './Control';
import { HelpText } from '../../HelpText';
import { Label } from '../../Label';
import { useFileUploadInput } from './useFileUploadInput';
import { Button } from '../../Button';
import type { FileUploadInputProps } from './types';
import classNames from 'classnames';
import './file-upload-input.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/fileuploadinput)

  **Demo:*
  [Codesandbox](//to add)
*/

export const FileUploadInput = Object.assign(
  forwardRef<HTMLDivElement, FileUploadInputProps>(
    (
      {
        className: customClassName,
        children,
        hasError,
        isDisabled,
        isReadOnly,
        ...rest
      },
      ref
    ) => {
      const { control, label, helptext } = useFileUploadInput(children);

      if (!control) {
        throw new Error(
          'The <FileUploadInput.Control> subcomponent is required to render the component.'
        );
      }

      return (
        <div
          data-testid="sds_fileUploadInput"
          className={classNames('sds_fileUploadInput', {
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {label &&
            cloneElement(label, {
              'data-testid': 'sds_fileUploadInput_label',
              className: classNames('sds_fileUploadInput_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
            })}
          {control &&
            cloneElement(control, {
              hasError,
              isDisabled,
              isReadOnly,
            })}
          {helptext &&
            cloneElement(helptext, {
              className: classNames('sds_fileUploadInput_helpText', {
                [(helptext as ReactElement).props.className as string]: (
                  helptext as ReactElement
                ).props.className,
              }),
              hasError,
              isDisabled,
              isReadOnly,
              'data-testid': 'sds_fileUploadInput_helptext',
            })}
        </div>
      );
    }
  ),
  {
    Control,
    HelpText,
    Label,
    Button,
  }
);
