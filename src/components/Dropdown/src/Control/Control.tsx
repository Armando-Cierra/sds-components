import React from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';
import { Menu } from '../../../Menu';
import { Icon } from '../Icon';
import { useControl } from './useControl';
import type { DropdownControlProps } from './types';

export const Control = React.forwardRef<HTMLDivElement, DropdownControlProps>(
  (
    {
      className: customClassName,
      menuClassName,
      id: customId,
      children,
      defaultValue,
      defaultOpen,
      value: controlledValue,
      showModeOption = 'value',
      placeholder = '',
      hasError,
      isDisabled,
      isReadOnly,
      align = 'start',
      alignOffset = 0,
      side = 'bottom',
      sideOffset = 4,
      style,
      ...rest
    },
    ref
  ) => {
    const innerId = uniqid('sds_dropdown_control_');
    const {
      errorValidation,
      readOnlyValidation,
      content,
      value,
      menuWidth,
      toggleMenu,
    } = useControl({
      innerId,
      children,
      defaultValue,
      controlledValue,
      hasError,
      isDisabled,
      isReadOnly,
      placeholder,
      showModeOption,
    });
    const boxContent = !!value !== false ? value : placeholder;

    if (!content)
      throw new Error(
        'The <Dropdown.Control> children cannot be empty. Try using a valid subcomponent: <Dropdown.Option>, <Dropdown.Header> and/or <Dropdown.Actions>.'
      );

    if (isDisabled || isReadOnly)
      return (
        <button
          data-testid="sds_dropdown_control"
          id={classNames(innerId, {
            [customId as string]: customId,
          })}
          className={classNames('sds_dropdown_control', {
            'sds_dropdown_control--error': errorValidation,
            'sds_dropdown_control--disabled': isDisabled,
            'sds_dropdown_control--readOnly': readOnlyValidation,
            [customClassName as string]: customClassName,
          })}
          style={style}
        >
          <span className="sds_dropdown_control_text">{boxContent}</span>
          {errorValidation && <Icon name="error" />}
          {readOnlyValidation && <Icon name="readOnly" />}
          <Icon name="carretSortables" />
        </button>
      );

    return (
      <Menu
        defaultOpen={defaultOpen}
        style={{ width: `${menuWidth}px` }}
        className={classNames('sds_dropdown_menu', {
          'sds_dropdown_menu--disabled': isDisabled,
          [menuClassName as string]: menuClassName,
        })}
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        onOpenChange={toggleMenu}
        {...rest}
        ref={ref}
      >
        <Menu.Trigger>
          <button
            data-testid="sds_dropdown_control"
            id={classNames(innerId, {
              [customId as string]: customId,
            })}
            className={classNames('sds_dropdown_control', {
              'sds_dropdown_control--error': errorValidation,
              'sds_dropdown_control--disabled': isDisabled,
              'sds_dropdown_control--readOnly': readOnlyValidation,
              [customClassName as string]: customClassName,
            })}
            style={style}
          >
            <span className="sds_dropdown_control_text">{boxContent}</span>
            {errorValidation && <Icon name="error" />}
            {readOnlyValidation && <Icon name="readOnly" />}
            <Icon name="carretSortables" />
          </button>
        </Menu.Trigger>
        {content}
      </Menu>
    );
  }
);
