import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { HelpText } from '../../HelpText';
import { Label } from '../../Label';
import { Control } from './Control';
import { useFileUploadRegion } from './useFileUploadRegion';
import type { FileUploadRegionProps } from './types';
import classNames from 'classnames';
import './file-upload-region.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/fileuploadregion)

  **Demo:*
  [Codesandbox](//to add)
*/

export const FileUploadRegion = Object.assign(
  forwardRef<HTMLDivElement, FileUploadRegionProps>(
    (
      { children, isDisabled, hasError, className: customClassName, ...rest },
      ref
    ) => {
      const { label, helptext, control } = useFileUploadRegion(children);

      const errorValidation = hasError && !isDisabled;

      if (!control) {
        throw new Error(
          'The <FileUploadRegion.Control> subcomponent is required to render the component.'
        );
      }

      return (
        <div
          className={classNames('sds_fileUploadRegion', {
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_fileUploadRegion"
          ref={ref}
          {...rest}
        >
          {label &&
            cloneElement(label, {
              'data-testid': 'sds_fileUploadRegion_label',
              className: classNames('sds_fileUploadRegion_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
            })}
          {control &&
            cloneElement(control, {
              children: helptext,
              isDisabled,
              hasError: errorValidation,
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
