import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { useControl } from './useControl';
import type { SliderControlProps } from './types';

export const Control = React.forwardRef<HTMLDivElement, SliderControlProps>(
  (
    {
      className: customClassName,
      variant = 'default',
      min = 0,
      max = 100,
      defaultValue,
      value: controlledValue,
      tooltipBehavior = 'showOnHover',
      hasError = false,
      isDisabled = false,
      onChange,
      labels,
      ...rest
    },
    ref
  ) => {
    const {
      singleSliderRef,
      singleSliderKnobRef,
      getPercentage,
      value,
      handleChange,
      handleThumbMouseDown,
      handleKeyEvent,
      errorValidation,
    } = useControl({
      min,
      max,
      defaultValue,
      controlledValue,
      hasError,
      isDisabled,
      onChange,
    });

    return (
      <div
        className={classNames('sds_slider_controlBox', {
          'sds_slider_controlBox--disabled': isDisabled,
        })}
      >
        <div
          className={classNames('sds_slider_control', {
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          <input
            type="range"
            data-testid="sds_slider_input"
            className="sds_slider_input"
            min={min}
            max={max}
            value={value}
            ref={singleSliderRef}
            disabled={isDisabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange(Number(e.target.value))
            }
            tabIndex={-1}
          />

          <div
            className={classNames('slider_control_bar', {
              'slider_control_bar--primary': variant === 'primary',
              'slider_control_bar--disabled': isDisabled,
              'slider_control_bar--error': errorValidation,
            })}
          >
            <button
              className={classNames('sds_slider_control_knob', {
                'sds_slider_control_knob--disabled': isDisabled,
                'sds_slider_control_knob--error': errorValidation,
              })}
              disabled={isDisabled}
              style={{
                left: `calc(${getPercentage(value)}% - 10px)`,
              }}
              ref={singleSliderKnobRef}
              onMouseDown={handleThumbMouseDown}
              onKeyDown={handleKeyEvent}
            >
              {!isDisabled && (
                <div
                  className={classNames('sds_slider_control_tooltip', {
                    [`sds_slider_control_tooltip--${tooltipBehavior}`]:
                      tooltipBehavior,
                  })}
                >
                  {value < 0 ? `-${Math.abs(value)}` : value}
                </div>
              )}
            </button>
            <div
              className={classNames('sds_slider_control_range', {
                'sds_slider_control_range--primary': variant === 'primary',
                'sds_slider_control_range--disabled': isDisabled,
                'sds_slider_control_range--error': hasError,
              })}
              style={{
                width: `${getPercentage(value)}%`,
              }}
            />
          </div>
        </div>
        {labels && (
          <div className="sds_slider_labels">
            <span
              className={classNames('sds_slider_labels_label', {
                'sds_slider_label--error': errorValidation,
              })}
            >
              {labels.min}
            </span>
            <span
              className={classNames('sds_slider_labels_label', {
                'sds_slider_label--error': errorValidation,
              })}
            >
              {labels.max}
            </span>
          </div>
        )}
      </div>
    );
  }
);
