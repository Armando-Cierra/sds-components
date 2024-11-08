import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import { useDualControl } from './useDualControl';
import type { SliderControlProps } from './types';

export const DualControl = React.forwardRef<HTMLDivElement, SliderControlProps>(
  (
    {
      className: customClassName,
      variant = 'default',
      min = 0,
      max = 100,
      defaultInitialValue,
      initialValue: controlledInitialValue,
      defaultEndValue,
      endValue: controlledEndValue,
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
      initialSliderRef,
      initialSliderKnobRef,
      endSliderKnobRef,
      endSliderRef,
      getPercentage,
      initialValue,
      endValue,
      handleChange,
      handleThumbMouseDown,
      handleKeyEvent,
      errorValidation,
    } = useDualControl({
      min,
      max,
      defaultInitialValue,
      controlledInitialValue,
      defaultEndValue,
      controlledEndValue,
      hasError,
      isDisabled,
      onChange,
    });

    return (
      <div
        className={classNames(
          'sds_slider_controlBox',
          'sds_slider_dual_controlBox',
          {
            'sds_slider_controlBox--disabled': isDisabled,
          }
        )}
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
            data-testid="sds_slider_input_initial"
            className="sds_slider_input sds_slider_input_initial"
            min={min}
            max={max}
            value={initialValue}
            ref={initialSliderRef}
            disabled={isDisabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange({
                initialValue: Number(e.target.value),
                endValue: endValue,
              })
            }
            tabIndex={-1}
          />
          <input
            type="range"
            data-testid="sds_slider_input_end"
            className="sds_slider_input sds_slider_input_end"
            min={min}
            max={max}
            value={endValue}
            ref={endSliderRef}
            disabled={isDisabled}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleChange({
                initialValue,
                endValue: Number(e.target.value),
              })
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
                left: `calc(${getPercentage(initialValue)}% - 10px)`,
              }}
              ref={initialSliderKnobRef}
              onMouseDown={handleThumbMouseDown('initial')}
              onKeyDown={handleKeyEvent('initial')}
            >
              {!isDisabled && (
                <div
                  className={classNames('sds_slider_control_tooltip', {
                    [`sds_slider_control_tooltip--${tooltipBehavior}`]:
                      tooltipBehavior,
                  })}
                >
                  {initialValue < 0
                    ? `-${Math.abs(initialValue)}`
                    : initialValue}
                </div>
              )}
            </button>
            <button
              className={classNames('sds_slider_control_knob', {
                'sds_slider_control_knob--disabled': isDisabled,
                'sds_slider_control_knob--error': errorValidation,
              })}
              disabled={isDisabled}
              style={{
                left: `calc(${getPercentage(endValue)}% - 10px)`,
              }}
              ref={endSliderKnobRef}
              onMouseDown={handleThumbMouseDown('end')}
              onKeyDown={handleKeyEvent('end')}
            >
              {!isDisabled && (
                <div
                  className={classNames('sds_slider_control_tooltip', {
                    [`sds_slider_control_tooltip--${tooltipBehavior}`]:
                      tooltipBehavior,
                  })}
                >
                  {endValue < 0 ? `-${Math.abs(endValue)}` : endValue}
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
                left: `${getPercentage(initialValue)}%`,
                width: `${
                  getPercentage(endValue) - getPercentage(initialValue)
                }%`,
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
