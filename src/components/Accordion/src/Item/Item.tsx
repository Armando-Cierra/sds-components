import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Telicon } from '../../../Telicon';
import { useItem } from './useItem';
import type { AccordionItemProps } from './types';

export const Item = forwardRef<HTMLInputElement, AccordionItemProps>(
  (
    {
      variant,
      isExpanded,
      children,
      collapsedIndicatorIcon = 'chevron-bottom--line',
      expandedIndicatorIcon = 'chevron-top--line',
      id,
      className,
      onClick,
      onChange,
      ...rest
    },
    ref
  ) => {
    const { content, title, innerID, handleChange, handleClick } = useItem({
      children,
      id,
      onChange,
    });

    if (!content || !title) {
      throw new Error(
        'The <Accordion.Title /> and <Accordion.Content /> subcomponents are required for each accordion.'
      );
    }

    const { defaultExpanded, ...props } = rest;

    return (
      <>
        <input
          className="sds_accordion_item_control"
          type="checkbox"
          id={id ?? innerID}
          onClick={onClick}
          ref={ref}
          {...(isExpanded !== undefined && { checked: isExpanded })}
          {...props}
          onChange={handleChange}
        />
        <div
          data-def-expanded={defaultExpanded}
          data-testid="sds_accordionGroup_accordion"
          className={classNames('sds_accordionGroup_accordion', {
            'sds_accordionGroup_accordion--contained': variant === 'contained',
            'sds_accordionGroup_accordion--expanded': isExpanded,
            [className as string]: className,
          })}
        >
          <div onClick={handleClick} className="sds_accordionGroup_title">
            {title}
            <Telicon
              className={classNames('sds_accordionIndicator', {
                'sds_accordionIndicator--expanded': isExpanded,
              })}
              iconName={
                isExpanded ? expandedIndicatorIcon : collapsedIndicatorIcon
              }
            />
          </div>
          <div
            className={classNames('sds_accordionGroup_accordion_content', {
              'sds_accordion--expanded': isExpanded,
            })}
          >
            {content}
          </div>
        </div>
      </>
    );
  }
);
