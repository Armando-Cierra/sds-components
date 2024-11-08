import React, { ReactElement, cloneElement, forwardRef } from 'react';
import type { ControlProps } from './types';
import { useControl } from './useControl';
import { Icon } from './Icon';
import classNames from 'classnames';
import uniqid from 'uniqid';

export const Control = forwardRef<HTMLInputElement, ControlProps>(
  (
    {
      className: customClassName,
      explorerAcceptedFiles,
      acceptedFiles,
      defaultFileName,
      fileName: file,
      hasError = false,
      isDisabled = false,
      isReadOnly = false,
      placeholder,
      children,
      onChange,
      onClear,
      ...rest
    },
    ref
  ) => {
    const inputId = uniqid('sds_fileUploadInput_input_');

    const {
      buttonElement,
      buttonRef,
      fileName,
      fileTypes,
      firstFiveLettersOfFile,
      lastFiveLettersOfFile,
      filterKey,
      handleChange,
      buttonClick,
      deleteSelectedFile,
      visualizerClick,
    } = useControl({
      isDisabled,
      isReadOnly,
      inputId,
      acceptedFiles,
      children,
      defaultFileName,
      fileName: file,
      onChange,
      onClear,
    });

    const isFileNameNotEmpty = !!fileName !== false;
    const readOnlyValidation = !isDisabled && isReadOnly;
    const errorValidation = !isDisabled && !isReadOnly && hasError;
    const isClickable = !isFileNameNotEmpty && !isReadOnly && !isDisabled;

    return (
      <div className="sds_fileUploadInput_box">
        <div
          tabIndex={isDisabled || isReadOnly ? undefined : 0}
          onKeyDown={filterKey}
          className={classNames('sds_fileUploadInput_visualizer', {
            [customClassName as string]: customClassName,
            'sds_fileUploadInput_visualizer--error': errorValidation,
            'sds_fileUploadInput_visualizer--disabled': isDisabled,
            'sds_fileUploadInput_visualizer--readOnly': isReadOnly,
            'sds_fileUploadInput_visualizer--hasButton': buttonElement,
          })}
          data-testid="sds_fileUploadInput_boxVisualizer"
          onClick={() => isClickable && visualizerClick()}
        >
          {!isFileNameNotEmpty ? (
            <span
              className={classNames('sds_fileUploadInput_placeholder', {
                'sds_fileUploadInput_placeholder--error': errorValidation,
                'sds_fileUploadInput_placeholder--disabled': isDisabled,
              })}
            >
              {placeholder}
            </span>
          ) : (
            <div className="sds_fileUploadInput_visualizer_container">
              <span
                data-testid="sds_fileUploadInput_value"
                className={classNames(
                  'sds_fileUploadInput_box_visualizer_value',
                  {
                    'sds_fileUploadInput_box_visualizer_value--error':
                      errorValidation,
                    'sds_fileUploadInput_box_visualizer_value--disabled':
                      isDisabled,
                  }
                )}
              >
                {firstFiveLettersOfFile}
              </span>
              <span className="sds_fileUploadInput_box_visualizer_valueEnding">
                {lastFiveLettersOfFile}
              </span>
            </div>
          )}
          {errorValidation && (
            <Icon name="error" data-error={errorValidation} />
          )}
          {readOnlyValidation && <Icon name="readOnly" />}
          {isFileNameNotEmpty && (
            <Icon
              name="normal"
              data-testid="sds_fileUploadInput_clearIcon"
              onClick={() => !isDisabled && !isReadOnly && deleteSelectedFile()}
            />
          )}
        </div>
        <input
          ref={ref}
          type="file"
          id={inputId}
          multiple={false}
          onChange={handleChange}
          placeholder={placeholder}
          style={{ display: 'none' }}
          data-testid="sds_fileUploadInput_input"
          {...rest}
          {...(explorerAcceptedFiles &&
            //this would basically check if fileTypes map includes the passed argument (Video, Images, All), otherwise it will just pass the string.
            explorerAcceptedFiles !== 'All' && {
              accept: fileTypes[explorerAcceptedFiles] ?? explorerAcceptedFiles,
            })}
        />
        {buttonElement &&
          cloneElement(buttonElement, {
            ref: buttonRef,
            className: `${
              (buttonElement as ReactElement).props?.className
            } sds_fileUpload_button`,
            onClick: () => {
              buttonClick();
              (buttonElement as ReactElement).props?.onClick?.();
            },
            isDisabled: isDisabled || isReadOnly,
            rest: (buttonElement as ReactElement).props?.rest,
          })}
      </div>
    );
  }
);
