import React from 'react';
import { Button } from '../../../Button';
import type { FileUploadRegionFileProps } from './types';

const FileUploadRegionFile = ({
  file,
  isDisabled,
  onFileRemove,
  removeEvent,
}: FileUploadRegionFileProps) => {
  const { fileName, fileSize, fileId } = file;

  return (
    <div className="sds_fileUploadRegion_files">
      <div
        data-testid="sds_fileUploadRegion_fileName"
        className="sds_fileUploadRegion_filesList_fileName"
      >
        <span>{fileName.slice(0, fileName.lastIndexOf('.') - 5)}</span>
        {fileName.slice(fileName.lastIndexOf('.') - 5, fileName.length)}
      </div>
      <div className="sds_fileUploadRegion_fileDetails">
        <span>{fileSize}</span>
        <Button
          onClick={() =>
            onFileRemove ? onFileRemove(fileId) : removeEvent?.(fileId)
          }
          isDisabled={isDisabled}
          variant="ghost"
          iconOnly="x--fill"
          size="small"
        />
      </div>
    </div>
  );
};

export default FileUploadRegionFile;
