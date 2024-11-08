import React from 'react';

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  iconName: 'upload' | 'warning--triangle' | 'warning-octagon';
}

export const Icon = ({ iconName, ...rest }: IconProps) => {
  if (iconName === 'warning--triangle') {
    return (
      <svg
        className="sds_fileUploadRegion_warningIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        {...rest}
      >
        <path
          fillRule="evenodd"
          d="M15.898 14.703 8.658.433A.82.82 0 0 0 8.38.116c-.364-.239-.828-.097-1.038.317l-7.24 14.27a.958.958 0 0 0-.102.432c0 .478.34.865.76.865h14.48a.69.69 0 0 0 .38-.116c.363-.239.488-.768.278-1.181ZM7.5 10.5l-.5-5h2l-.5 5h-1ZM7 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (iconName === 'warning-octagon') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        {...rest}
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
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...rest}
    >
      <path d="M1.5 6c0 1.243.504 2.368 1.318 3.182l-1.06 1.06a6 6 0 1 1 9.906-6.229 4 4 0 0 1 3.15 6.83l-1.061-1.06A2.5 2.5 0 0 0 10.5 6a4.502 4.502 0 0 0-9 0Z" />
      <path d="m8.001 7.5 4.073 4.024-1.071 1.06-2.288-2.256V16H7.287v-5.672L5 12.585l-1.071-1.061L8 7.5Z" />
    </svg>
  );
};
