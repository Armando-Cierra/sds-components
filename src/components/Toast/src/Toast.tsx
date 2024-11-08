import React from 'react';
import classNames from 'classnames';
import { Slide, Zoom, ToastContainer } from 'react-toastify';
import * as Portal from '@radix-ui/react-portal';
import { toastID, toastSubtleID } from './utils';
import type { ToastProps } from './types';
import './toastDependencyStyles.scss';
import './toast.scss';

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className: customClassName,
      stacked,
      limit,
      autoclose,
      variant = 'default',
      customPosition,
    },
    ref
  ) => {
    if (variant === 'subtle') {
      return (
        <Portal.Root className="sds_toast_portal" ref={ref}>
          <ToastContainer
            className={classNames('sds_toast sds_toast--subtle', {
              [customClassName as string]: customClassName,
            })}
            containerId={toastSubtleID}
            draggable
            icon={false}
            transition={Zoom}
            limit={1}
            autoClose={autoclose ?? 2000}
            closeButton={false}
            hideProgressBar={true}
            style={customPosition}
          />
        </Portal.Root>
      );
    }

    return (
      <Portal.Root className="sds_toast_portal" ref={ref}>
        <ToastContainer
          className={classNames('sds_toast', {
            [customClassName as string]: customClassName,
          })}
          containerId={toastID}
          draggable
          icon={false}
          stacked={stacked}
          limit={limit ?? 3}
          autoClose={autoclose ?? 5000}
          transition={Slide}
          style={customPosition}
        />
      </Portal.Root>
    );
  }
);
