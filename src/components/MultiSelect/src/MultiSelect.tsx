import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { TagBox } from './TagBox';
import { Dropdown } from './Dropdown';
import { Label } from '../../Label';
import { HelpText } from '../../HelpText';
import { Menu } from '../../Menu';
import { Tag } from '../../Tag';
import { Avatar } from '../../Avatar';
import { useMultiSelect } from './useMultiSelect';
import type { MultiSelectProps } from './types';
import './multi-select.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/multiselect)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/multiselect-7lz3kd?file=/src/App.tsx:1,1)
*/

export const MultiSelect = Object.assign(
  forwardRef<HTMLDivElement, MultiSelectProps>(
    (
      {
        children,
        isDisabled,
        hasError,
        className: customClassName,
        ...rest
      }: MultiSelectProps,
      ref
    ) => {
      const { tagBox, dropdown, label, helpText, getCounter, errorValidation } =
        useMultiSelect({ children, isDisabled, hasError });

      if (!tagBox || !dropdown) {
        throw new Error(
          'Use the required MultiSelect subcomponents: MultiSelect.Tagbox, MultiSelect.Dropdown'
        );
      }

      return (
        <div
          data-testid={'sds_multiSelect'}
          className={classNames('sds_multiSelect', {
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          {label &&
            cloneElement(label, {
              className: classNames('sds_multiSelect_label', {
                [(label as ReactElement).props.className as string]: (
                  label as ReactElement
                ).props.className,
              }),
              'data-testid': 'sds_multiSelect_label',
            })}
          {tagBox &&
            cloneElement(tagBox, {
              isDisabled,
            })}
          {dropdown &&
            cloneElement(dropdown, {
              counter: getCounter(),
              hasError: errorValidation,
              isDisabled,
            })}
          {helpText &&
            cloneElement(helpText, {
              className: classNames('sds_multiSelect_helpText', {
                [(helpText as ReactElement).props.className as string]: (
                  helpText as ReactElement
                ).props.className,
              }),
              hasError: errorValidation,
              'data-testid': 'sds_multiSelect_helpText',
              isDisabled,
            })}
        </div>
      );
    }
  ),
  {
    TagBox,
    Dropdown,
    Label,
    HelpText,
    Avatar,
    Tag,
    Option: Menu.Option,
    Search: Menu.Search,
  }
);
