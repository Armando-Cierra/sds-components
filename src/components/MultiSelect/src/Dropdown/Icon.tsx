import React from 'react';

interface Props {
  name: 'error' | 'carretSortables';
}

export const Icon = ({ name }: Props) => {
  if (name === 'carretSortables') {
    return (
      <svg
        className="sds_multiSelect_icon sds_multiSelect_carret"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M8 3 4 7h8L8 3Zm0 10L4 9h8l-4 4Z" />
      </svg>
    );
  }

  return (
    <svg
      className="sds_multiSelect_icon sds_multiSelect_icon--error"
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
