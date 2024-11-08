import React from 'react';

interface Props {
  iconName: 'completed' | 'dot';
}

export const Icon = ({
  iconName,
  ...rest
}: Props & React.SVGProps<SVGSVGElement>) => {
  if (iconName === 'dot')
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
        {...rest}
      >
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      </svg>
    );

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
        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm5.032-10.222-1.064-1.056-5.152 5.19-2.784-2.804-1.064 1.057 3.848 3.877 6.216-6.264Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
