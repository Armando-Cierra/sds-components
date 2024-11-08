import React, { forwardRef } from 'react';
import { Button } from '../../../Button';
import classNames from 'classnames';
import type { ReviewStepSectionProps } from './types';

export const ReviewStepSection = forwardRef<
  HTMLDivElement,
  ReviewStepSectionProps
>(({ title, children, className, onButtonClick, ...rest }, ref) => {
  return (
    <div
      className={classNames('sds_miniWizard_reviewStepSection', {
        [className as string]: className,
      })}
      ref={ref}
      {...rest}
    >
      <div className="sds_miniWizard_reviewTitle">
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
});
