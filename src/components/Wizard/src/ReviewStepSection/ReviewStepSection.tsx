import React, { forwardRef } from 'react';
import { Button } from '../../../Button';
import classNames from 'classnames';
import type { WizardReviewStepSectionProps } from './types';

export const ReviewStepSection = forwardRef<
  HTMLDivElement,
  WizardReviewStepSectionProps
>(
  (
    { children, className: customClassName, title, onButtonClick, ...rest },
    ref
  ) => {
    return (
      <div
        className={classNames('sds_wizard_reviewStepSection', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        <div className="sds_wizard_reviewTitle">
          <span>{title}</span>
          <Button
            onClick={() => onButtonClick?.()}
            size="small"
            variant="ghost"
            iconOnly="pencil--fill"
          />
        </div>
        <div>{children}</div>
      </div>
    );
  }
);
