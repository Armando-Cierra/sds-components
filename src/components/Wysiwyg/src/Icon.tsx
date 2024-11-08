import React from 'react';

export const Icon = ({ fill }: { fill: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2098 5.20452L6.55268 12.9197L1.79028 8.12119L3.20982 6.71232L6.55268 10.0805L12.7903 3.79565L14.2098 5.20452Z"
        fill={fill}
      />
    </svg>
  );
};
