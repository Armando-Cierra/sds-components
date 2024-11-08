import React from 'react';
import classNames from 'classnames';
import { Telicon } from '../../../Telicon';
import { useItem } from './useItem';
import type { SelectionListItemProps } from './types';

export const Item = React.forwardRef<HTMLInputElement, SelectionListItemProps>(
  (
    {
      className: customClassName,
      hasError,
      isDisabled,
      name,
      value,
      id,
      icon,
      image,
      imageLayout = 'left',
      controlType = 'checkbox',
      hideControl,
      children,
      checked,
      defaultChecked,
      onChange,
      ...rest
    },
    ref
  ) => {
    const { title, description, nestedContent, innerItemId, handleChange } =
      useItem({
        children,
        onChange,
      });

    if (!title && !description)
      throw new Error(
        'The <SelectionList.Title> and/or <SelectionList.Description> subcomponents are required as children elements on <SelectionList.Item>.'
      );

    return (
      <>
        <input
          className={classNames('sds_selectionList_item_control', {
            'sds_selectionList_item_control--error': hasError && !isDisabled,
            'sds_selectionList_item_control--disabled': isDisabled,
          })}
          type={controlType}
          id={id ?? innerItemId}
          name={name}
          value={value}
          disabled={isDisabled}
          ref={ref}
          {...(checked !== undefined && { checked })}
          {...(checked === undefined && defaultChecked && { defaultChecked })}
          onChange={handleChange}
          {...rest}
        />
        <div
          className={classNames('sds_selectionList_item', {
            'sds_selectionList_item--showsControl': !hideControl,
            'sds_selectionList_item--hasDescription': !!description,
            [`sds_selectionList_item--image_${imageLayout}Position`]:
              imageLayout && !icon,
            [customClassName as string]: customClassName,
          })}
        >
          <label
            htmlFor={id ?? innerItemId}
            className={classNames('sds_selectionList_item_baseContent', {
              'sds_selectionList_item_baseContent--verticalLayout':
                !icon && imageLayout === 'top',
            })}
          >
            {(image || icon) && (
              <>
                {image && !icon && (
                  <img
                    className={classNames(
                      'sds_selectionList_item_baseContent_image',
                      {
                        'sds_selectionList_item_baseContent_image--square':
                          imageLayout === 'left',
                        'sds_selectionList_item_baseContent_image--landscape':
                          imageLayout === 'top',
                      }
                    )}
                    src={image}
                    alt={`${title} image`}
                  />
                )}
                {!image && icon && (
                  <div className="sds_selectionList_item_baseContent_iconBox">
                    <Telicon iconName={icon} />
                  </div>
                )}
              </>
            )}
            <div className="sds_selectionList_item_baseContent_text">
              {title}
              {description}
              {!hideControl && (
                <div
                  className={classNames(
                    'sds_selectionList_item_baseContent_control',
                    `sds_selectionList_item_baseContent_control--${controlType}`,
                    {
                      [`sds_selectionList_item_baseContent_control--${controlType}--error`]:
                        hasError && !isDisabled,
                      [`sds_selectionList_item_baseContent_control--${controlType}--disabled`]:
                        isDisabled,
                    }
                  )}
                />
              )}
            </div>
          </label>
          {nestedContent && (
            <div className="sds_selectionList_item_nestedContent">
              {nestedContent}
            </div>
          )}
        </div>
      </>
    );
  }
);
