import React, { ReactElement, cloneElement, forwardRef } from 'react';
import { useControl } from './useControl';
import { Icon } from './Icon';
import FileUploadRegionFile from './FileUploadRegionFile';
import type {
  FileUploadRegionControlProps,
  FileUploadRegionFileProperties,
} from './types';
import classNames from 'classnames';

export const Control = forwardRef<
  HTMLInputElement,
  FileUploadRegionControlProps
>(
  (
    {
      className: customClassName,
      children,
      isDisabled,
      hasError,
      defaultFileNames,
      regionDescription,
      actionText,
      files,
      acceptedFiles,
      warningMessages = {},
      fileSizeConfig = {},
      onChange,
      onFileRemove,
      ...rest
    },
    ref
  ) => {
    const {
      helptext,
      innerFileNames,
      isDragOver,
      fileTypes,
      hasInvalidFiles,
      removeEvent,
      handleChange,
      handleClick,
      handleDragEnter,
      handleDragLeave,
      handleDragOver,
      handleDrop,
    } = useControl({
      onFileRemove,
      onChange,
      isDisabled,
      fileSizeConfig,
      defaultFileNames,
      warningMessages,
      children,
      files,
      acceptedFiles,
    });

    return (
      <>
        <div
          className={classNames('sds_fileUploadRegion_box', {
            'sds_fileUploadRegion_box--disabled': isDisabled,
            [customClassName as string]: customClassName,
          })}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <div
            data-testid="sds_fileUploadRegion_dropRegion"
            className={classNames('sds_fileUploadRegion_dropRegion', {
              'sds_fileUploadRegion--disabled': isDisabled,
              'sds_fileUploadRegion--error': hasError,
              'sds_fileUploadRegion--dragOver': isDragOver,
            })}
          >
            <input
              {...(acceptedFiles &&
                //this would basically check if fileTypes map includes the passed argument (Video, Images, All), otherwise it will just pass the string.
                acceptedFiles !== 'All' && {
                  accept: fileTypes[acceptedFiles] ?? acceptedFiles,
                })}
              ref={ref}
              onChange={handleChange}
              multiple
              type="file"
              data-testid="sds_fileUploadRegion_input"
              id="sds_fileUploadRegion_input"
              style={{ display: 'none' }}
              {...rest}
            />
            {hasError && (
              <Icon
                className="sds_fileUploadRegion_errorIcon"
                iconName="warning-octagon"
              />
            )}
            <Icon iconName="upload" className="sds_fileUpload_uploadIcon" />
            <span className="sds_fileUploadRegion_dropRegion_description">
              {regionDescription ?? 'Drag and drop files here or'}
            </span>
            <span
              onClick={handleClick}
              className="sds_fileUploadRegion_dropRegionAction"
            >
              {actionText ?? 'Browse files'}
            </span>
          </div>
          {helptext &&
            cloneElement(helptext, {
              className: classNames('sds_fileUploadInput_helpText', {
                [(helptext as ReactElement).props.className as string]: (
                  helptext as ReactElement
                ).props.className,
              }),
              isDisabled,
              hasError: hasError,
              'data-testid': 'sds_fileUploadRegion_helpText',
            })}
        </div>
        {innerFileNames?.length !== 0 && (
          <div
            className={classNames('sds_fileUploadRegion_fileList', {
              'sds_fileUploadRegion_fileList--disabled': isDisabled,
            })}
          >
            {innerFileNames.map(
              (file: FileUploadRegionFileProperties, index: number) => (
                <FileUploadRegionFile
                  key={index}
                  file={file}
                  onFileRemove={onFileRemove}
                  removeEvent={removeEvent}
                  isDisabled={isDisabled}
                />
              )
            )}
          </div>
        )}
        {hasInvalidFiles !== undefined && (
          <div className="sds_fileUploadRegion_error">
            <Icon iconName="warning--triangle" />
            <p className="sds_fileUploadRegion_error_message">
              {hasInvalidFiles}
            </p>
          </div>
        )}
      </>
    );
  }
);
