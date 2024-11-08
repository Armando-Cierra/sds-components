import React from 'react';

interface Props {
  name: 'error' | 'calendar' | 'readOnly';
  className?: string;
}

export const Icon = ({ name, className }: Props) => {
  if (name === 'calendar')
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M4 0h2v2H4V0Z" />
        <path
          fillRule="evenodd"
          d="M3 1H1v14h14V1h-2v2H9V1H7v2H3V1Zm.5 5h2v2h-2V6Zm2 4h-2v2h2v-2ZM7 6h2v2H7V6Zm2 4H7v2h2v-2Zm1.5-4h2v2h-2V6Zm2 4h-2v2h2v-2Z"
          clipRule="evenodd"
        />
        <path d="M12 0h-2v2h2V0Z" />
      </svg>
    );

  if (name === 'readOnly')
    return (
      <svg
        className={className}
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

  return (
    <svg
      className={className}
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
