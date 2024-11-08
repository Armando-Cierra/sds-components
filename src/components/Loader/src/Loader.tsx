import React from 'react';
import classNames from 'classnames';
import type { LoaderProps } from './types';
import './Loader.scss';

/**
  **Documentation:*
  [Gitbook](https://app.gitbook.com/o/-M_7-lSPEt2IeTSqnKOP/s/3Lcw1cy2vsA9bEz125dK/sds-components/components/loader)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/loader-jqfs5s?file=/src/App.tsx:1,1)
*/

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ size = 'default', className: customClassName, ...rest }, ref) => {
    return (
      <div
        data-testid="sds_loader"
        className={classNames('sds_loader', {
          [`sds_loader--${size}`]: size,
          [customClassName as string]: customClassName,
        })}
        ref={ref}
        {...rest}
      >
        <div className="sds_loader_dot" />
        <div className="sds_loader_dot" />
        <div className="sds_loader_dot" />
      </div>
    );
  }
);
