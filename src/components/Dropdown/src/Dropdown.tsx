import React, { ReactElement, cloneElement } from 'react';
import classNames from 'classnames';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Menu } from '../../Menu';
import { Option } from './Option';
import { Control } from './Control';
import { useDropdown } from './useDropdown';
import type { DropdownProps } from './types';
import './dropdown.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/dropdown)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/dropdown-njynny?file=/src/App.tsx:1,1)
*/

export const Dropdown = Object.assign(
  React.forwardRef<HTMLDivElement, DropdownProps>(
    (
      {
        className: customClassName,
        hasError = false,
        isDisabled = false,
        isReadOnly = false,
        children,
        ...rest
      },
      ref
    ) => {
      const { label, control, helpText, errorValidation, readOnlyValidation } =
        useDropdown({
          children,
          hasError,
          isDisabled,
          isReadOnly,
        });

      if (!control) {
        throw new Error(
          'No <Dropdown.Control> subcomponent was not found. The Control subcomponent is required.'
        );
      }

      return (
        <div
          className={classNames('sds_dropdown', {
            'sds_dropdown--error': errorValidation,
            'sds_dropdown--disabled': isDisabled,
            [customClassName as string]: customClassName,
          })}
          data-testid="sds_dropdown"
          ref={ref}
          {...rest}
        >
          {label &&
            cloneElement(label, {
              className: classNames('sds_dropdown_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
            })}
          {control &&
            React.cloneElement(control, { isDisabled, isReadOnly, hasError })}
          {helpText &&
            React.cloneElement(helpText, {
              isDisabled,
              isReadOnly: readOnlyValidation,
              hasError: errorValidation,
              className: classNames('sds_dropdown_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
            })}
        </div>
      );
    }
  ),
  {
    Label,
    Control,
    HelpText,
    Header: Menu.Header,
    Actions: Menu.Actions,
    Divider: Menu.Divider,
    Search: Menu.Search,
    CustomArea: Menu.CustomArea,
    Option,
  }
);
