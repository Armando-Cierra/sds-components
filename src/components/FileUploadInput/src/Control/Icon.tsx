import React from 'react';

interface Props {
  name: 'error' | 'readOnly' | 'normal';
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

export const Icon = ({ name, onClick, ...rest }: Props) => {
  if (name === 'readOnly')
    return (
      <svg
        className="sds_fileUploadInput_telicon sds_fileUploadInput_telicon--readOnly"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4 7V4a4 4 0 1 1 8 0v3h2v9H2V7h2Zm6-3v3H6V4a2 2 0 1 1 4 0Zm-3 6v3h2v-3H7Z"
          clipRule="evenodd"
        />
      </svg>
    );

  if (name === 'error') {
    return (
      <svg
        className="sds_fileUploadInput_telicon sds_fileUploadInput_telicon--error"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4.7 0h6.6L16 4.7v6.6L11.3 16H4.7L0 11.3V4.7L4.7 0Zm2.8 9.5L7 3.25h2L8.5 9.5h-1ZM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  return (
    <svg
      className="sds_fileUploadInput_telicon sds_fileUploadInput_telicon--clearAction"
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm2.652-4.288L8 9.061l-2.65 2.651-1.061-1.06L6.939 8 4.288 5.348l1.06-1.06L8 6.939l2.652-2.651 1.06 1.06L9.062 8l2.651 2.652-1.06 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
