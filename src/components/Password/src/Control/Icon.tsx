import classNames from 'classnames';
import React from 'react';

interface Props {
  hasError?: boolean;
}

export const Icon = ({ hasError }: Props) => {
  return (
    <svg
      className={classNames('sds_password_telicon', {
        'sds_password_telicon--error': hasError,
      })}
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
};
