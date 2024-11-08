import React from 'react';
import classNames from 'classnames';
import { Tooltip } from '../../Tooltip';
import { Telicon } from '../../Telicon';
import type { LabelProps } from './types';
import './label.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/label)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/label-p4czsl?file=/src/App.tsx:1,1)
*/

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      className: customClassName,
      infoIcon = 'question-circle--fill',
      info,
      children,
      isRequired = false,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={classNames('sds_label', {
          [customClassName as string]: customClassName,
        })}
        data-info={info ? true : false}
        data-testid="sds_label"
      >
        <label className="sds_label_text" ref={ref} {...rest}>
          {children}
          {isRequired && (
            <span
              data-testid="sds_label_indicator"
              className="sds_label_indicator"
            >
              *
            </span>
          )}
        </label>
        {info && (
          <Tooltip position="top" message={info} data-testid="sds_label_info">
            <Telicon className="sds_label_icon" iconName={infoIcon} />
          </Tooltip>
        )}
      </div>
    );
  }
);
