import React, { cloneElement, forwardRef } from 'react';
import { Item } from './Item';
import { Title } from './Title';
import { Content } from './Content';
import { useAccordion } from './useAccordion';
import classNames from 'classnames';
import type { AccordionProps } from './types';
import './accordion.scss';

export const Accordion = Object.assign(
  forwardRef<HTMLDivElement, AccordionProps>(
    (
      {
        children,
        selectedVisibility = 'single',
        className,
        collapsedIndicatorIcon = 'chevron-bottom--line',
        expandedIndicatorIcon = 'chevron-top--line',
        variant = 'ruled',
        ...rest
      },
      ref
    ) => {
      const { newAccordions } = useAccordion({
        children,
        selectedVisibility,
        collapsedIndicatorIcon,
        expandedIndicatorIcon,
      });

      if (newAccordions.length === 0) {
        throw new Error(
          'At least one <Accordion.Item /> subcomponent  is required'
        );
      }

      return (
        <div
          className={classNames('sds_accordionGroup', {
            [className as string]: className,
          })}
          data-testid="sds_accordionGroup"
          ref={ref}
          {...rest}
        >
          {newAccordions.map((item) =>
            cloneElement(item, {
              variant,
            })
          )}
        </div>
      );
    }
  ),
  {
    Item,
    Title,
    Content,
  }
);
