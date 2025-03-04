import React from 'react';

interface IconListType {
  [key: string]: React.ReactElement;
}

export const iconList: IconListType = {
  '_fpo-icon': (
    <symbol id="_fpo-icon" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12 4H4v8h8V4zm-1.5 6.5v-5h-5v5h5zm-8-8H6V1H1v5h1.5V2.5zM10 1v1.5h3.5V6H15V1h-5zm0 14v-1.5h3.5V10H15v5h-5zm-9-5h1.5v3.5H6V15H1v-5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'address-book--fill': (
    <symbol id="address-book--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M15 3v2h-1v2h1v2h-1v2h1v2h-1v3H2V0h12v3h1zm-4.31 2.938a2.438 2.438 0 11-4.877 0 2.438 2.438 0 014.877 0zM5 11.358c0-1.198.97-2.168 2.168-2.168h2.167c1.197 0 2.167.97 2.167 2.167V13H5v-1.643z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'address-book--line': (
    <symbol id="address-book--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5 11.357A2.168 2.168 0 017.168 9.19h2.167a2.168 2.168 0 012.167 2.168V13H5v-1.643zm5.002 0v.143H6.5v-.143c0-.368.299-.667.668-.667h2.167c.369 0 .667.299.667.667zM7.168 8.123a2.444 2.444 0 01-1.355-2.185 2.438 2.438 0 111.355 2.185zM9.19 5.938a.938.938 0 11-1.877 0 .938.938 0 011.877 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2 0v16h12v-3h1v-2h-1V9h1V7h-1V5h1V3h-1V0H2zm1.5 1.5h9v13h-9v-13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-bottom--fill': (
    <symbol id="arrow-bottom--fill" viewBox="0 0 16 16">
      <path d="M8.75 10H13l-5 5-5-5h4.25V2h1.5v8z" />
    </symbol>
  ),
  'arrow-bottom--line': (
    <symbol id="arrow-bottom--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 10.05L7.998 15 13 10.047l-1.071-1.06-3.216 3.185V2H7.284v10.172L4.071 8.99 3 10.05z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-bottom-circle--fill': (
    <symbol id="arrow-bottom-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm-.002-3l-4.57-4.52L4.5 7.417l2.784 2.754V3h1.428v7.172l2.785-2.754 1.07 1.061L7.999 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-bottom-circle--line': (
    <symbol id="arrow-bottom-circle--line" viewBox="0 0 16 16">
      <path d="M7.998 13l-4.07-4.02L5 7.917l2.284 2.254V3h1.429v7.172l2.263-2.233L12.047 9l-4.049 4z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-bottom-left--fill': (
    <symbol id="arrow-bottom-left--fill" viewBox="0 0 16 16">
      <path d="M3 13V6l3 3 6-6 1 1-6 6 2.996 2.996.008.004H3z" />
    </symbol>
  ),
  'arrow-bottom-left--line': (
    <symbol id="arrow-bottom-left--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 6v7h7.004v-1.5H5.5L13 4l-1-1-7.5 7.5V6H3z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-bottom-right--fill': (
    <symbol id="arrow-bottom-right--fill" viewBox="0 0 16 16">
      <path d="M13 13V6l-3 3-6-6-1 1 6 6-2.996 2.996-.008.004H13z" />
    </symbol>
  ),
  'arrow-bottom-right--line': (
    <symbol id="arrow-bottom-right--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13 6v7H5.996v-1.5H10.5L3 4l1-1 7.5 7.5V6H13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-double-bottom--fill': (
    <symbol id="arrow-double-bottom--fill" viewBox="0 0 16 16">
      <path d="M13 5.5H8.75V1h-1.5v4.5H3l5 5 5-5z" />
      <path d="M4.071 9L3 10.059 8 15l5-4.941L11.929 9 8 12.882 4.071 9z" />
    </symbol>
  ),
  'arrow-double-bottom--line': (
    <symbol id="arrow-double-bottom--line" viewBox="0 0 16 16">
      <path d="M8.75 7.641l3.179-3.14L13 5.558 8 10.5 3 5.559 4.071 4.5 7.25 7.641V1h1.5v6.641z" />
      <path d="M4.071 9L3 10.059 8 15l5-4.941L11.929 9 8 12.882 4.071 9z" />
    </symbol>
  ),
  'arrow-double-left--fill': (
    <symbol id="arrow-double-left--fill" viewBox="0 0 16 16">
      <path d="M7 4.071L5.941 3 1 8l4.941 5L7 11.929 3.118 8 7 4.071z" />
      <path d="M10.5 13V8.75H15v-1.5h-4.5V3l-5 5 5 5z" />
    </symbol>
  ),
  'arrow-double-left--line': (
    <symbol id="arrow-double-left--line" viewBox="0 0 16 16">
      <path d="M11.5 4.071L10.441 3 5.5 8l4.941 5 1.059-1.071L8.359 8.75H15v-1.5H8.359L11.5 4.071z" />
      <path d="M7 4.071L5.941 3 1 8l4.941 5L7 11.929 3.118 8 7 4.071z" />
    </symbol>
  ),
  'arrow-double-right--fill': (
    <symbol id="arrow-double-right--fill" viewBox="0 0 16 16">
      <path d="M5.5 13V8.75H1v-1.5h4.5V3l5 5-5 5z" />
      <path d="M9 4.071L10.059 3 15 8l-4.941 5L9 11.929 12.882 8 9 4.071z" />
    </symbol>
  ),
  'arrow-double-right--line': (
    <symbol id="arrow-double-right--line" viewBox="0 0 16 16">
      <path d="M4.5 4.071L5.559 3 10.5 8l-4.941 5L4.5 11.929 7.641 8.75H1v-1.5h6.641L4.5 4.071z" />
      <path d="M9 4.071L10.059 3 15 8l-4.941 5L9 11.929 12.882 8 9 4.071z" />
    </symbol>
  ),
  'arrow-double-top--fill': (
    <symbol id="arrow-double-top--fill" viewBox="0 0 16 16">
      <path d="M4.071 7L3 5.941 8 1l5 4.941L11.929 7 8 3.118 4.071 7z" />
      <path d="M13 10.5H8.75V15h-1.5v-4.5H3l5-5 5 5z" />
    </symbol>
  ),
  'arrow-double-top--line': (
    <symbol id="arrow-double-top--line" viewBox="0 0 16 16">
      <path d="M4.071 7L3 5.941 8 1l5 4.941L11.929 7 8 3.118 4.071 7z" />
      <path d="M4.071 11.5L3 10.441 8 5.5l5 4.941-1.071 1.059L8.75 8.359V15h-1.5V8.359L4.071 11.5z" />
    </symbol>
  ),
  'arrow-enter-bottom-left--fill': (
    <symbol id="arrow-enter-bottom-left--fill" viewBox="0 0 16 16">
      <path d="M2.5 2.5h11v11H7V15h8V1H1v8h1.5V2.5z" />
      <path d="M11 11V5H5l2.47 2.47-4.5 4.5 1.06 1.06 4.5-4.5L11 11z" />
    </symbol>
  ),
  'arrow-enter-bottom-left--line': (
    <symbol id="arrow-enter-bottom-left--line" viewBox="0 0 16 16">
      <path d="M2.5 2.5h11v11H7V15h8V1H1v8h1.5V2.5z" />
      <path d="M11 10.974V5H4.996v1.494H8.45L2.944 12 4 13.056 9.506 7.55v3.424H11z" />
    </symbol>
  ),
  'arrow-enter-bottom-right--fill': (
    <symbol id="arrow-enter-bottom-right--fill" viewBox="0 0 16 16">
      <path d="M13.5 2.5h-11v11H9V15H1V1h14v8h-1.5V2.5z" />
      <path d="M5 10.978V5h5.977L8.52 7.459l4.483 4.483-1.06 1.06L7.457 8.52 5 10.98z" />
    </symbol>
  ),
  'arrow-enter-bottom-right--line': (
    <symbol id="arrow-enter-bottom-right--line" viewBox="0 0 16 16">
      <path d="M13.5 2.5h-11v11H9V15H1V1h14v8h-1.5V2.5z" />
      <path d="M5 10.932V5h5.963v1.483H7.532L13 11.951 11.951 13 6.483 7.532v3.4H5z" />
    </symbol>
  ),
  'arrow-enter-top-left--fill': (
    <symbol id="arrow-enter-top-left--fill" viewBox="0 0 16 16">
      <path d="M13.5 2.5H7V1h8v14H1V7h1.5v6.5h11v-11z" />
      <path d="M11 5L8.53 7.47l-4.5-4.5-1.06 1.06 4.5 4.5L5 11h6V5z" />
    </symbol>
  ),
  'arrow-enter-top-left--line': (
    <symbol id="arrow-enter-top-left--line" viewBox="0 0 16 16">
      <path d="M7 2.5h6.5v11h-11V7H1v8h14V1H7v1.5z" />
      <path d="M11 5.026V11H4.996V9.506H8.45L2.944 4 4 2.944 9.506 8.45V5.026H11z" />
    </symbol>
  ),
  'arrow-enter-top-right--fill': (
    <symbol id="arrow-enter-top-right--fill" viewBox="0 0 16 16">
      <path d="M2.5 2.5H9V1H1v14h14V7h-1.5v6.5h-11v-11z" />
      <path d="M5 5l2.455 2.455 4.484-4.485L13 4.03 8.515 8.515 11 11H5V5z" />
    </symbol>
  ),
  'arrow-enter-top-right--line': (
    <symbol id="arrow-enter-top-right--line" viewBox="0 0 16 16">
      <path d="M9 2.5H2.5v11h11V7H15v8H1V1h8v1.5z" />
      <path d="M5 5.026V11h6.004V9.506H7.55L13.056 4 12 2.944 6.494 8.45V5.026H5z" />
    </symbol>
  ),
  'arrow-exit-bottom-left--fill': (
    <symbol id="arrow-exit-bottom-left--fill" viewBox="0 0 16 16">
      <path d="M1 1v5h1.5V2.5h11v11H10V15h5V1H1z" />
      <path d="M7 15l-2.47-2.47 4.5-4.5-1.06-1.06-4.5 4.5L1 9v6h6z" />
    </symbol>
  ),
  'arrow-exit-bottom-left--line': (
    <symbol id="arrow-exit-bottom-left--line" viewBox="0 0 16 16">
      <path d="M1 6V1h14v14h-5v-1.5h3.5v-11h-11V6H1z" />
      <path d="M7 13.5H3.56l5.47-5.47-1.06-1.06-5.47 5.47V9H1v6h6v-1.5z" />
    </symbol>
  ),
  'arrow-exit-bottom-right--fill': (
    <symbol id="arrow-exit-bottom-right--fill" viewBox="0 0 16 16">
      <path d="M2.5 13.5H6V15H1V1h14v5h-1.5V2.5h-11v11z" />
      <path d="M15 9l-2.47 2.47-4.5-4.5-1.06 1.06 4.5 4.5L9 15h6V9z" />
    </symbol>
  ),
  'arrow-exit-bottom-right--line': (
    <symbol id="arrow-exit-bottom-right--line" viewBox="0 0 16 16">
      <path d="M2.5 13.5H6V15H1V1h14v5h-1.5V2.5h-11v11z" />
      <path d="M15 15V9.026h-1.493v3.424L8 6.944 6.944 8l5.506 5.507H8.996V15H15z" />
    </symbol>
  ),
  'arrow-exit-top-left--fill': (
    <symbol id="arrow-exit-top-left--fill" viewBox="0 0 16 16">
      <path d="M13.5 2.5H10V1h5v14H1v-5h1.5v3.5h11v-11z" />
      <path d="M1 7V1h6L4.515 3.485 9 7.97 7.94 9.03 3.453 4.546 1 7z" />
    </symbol>
  ),
  'arrow-exit-top-left--line': (
    <symbol id="arrow-exit-top-left--line" viewBox="0 0 16 16">
      <path d="M1 6.974V1h6.004v1.494H3.55L9.056 8 8 9.056 2.494 3.55v3.424H1z" />
      , <path d="M15 15H1v-5h1.5v3.5h11v-11H10V1h5v14z" />
    </symbol>
  ),
  'arrow-exit-top-right--fill': (
    <symbol id="arrow-exit-top-right--fill" viewBox="0 0 16 16">
      <path d="M2.5 2.5H6V1H1v14h14v-5h-1.5v3.5h-11v-11z" />
      <path d="M15 7V1H9l2.47 2.47-4.5 4.5 1.06 1.06 4.5-4.5L15 7z" />
    </symbol>
  ),
  'arrow-exit-top-right--line': (
    <symbol id="arrow-exit-top-right--line" viewBox="0 0 16 16">
      <path d="M15 6.974V1H8.996v1.494h3.454L6.944 8 8 9.056l5.507-5.506v3.424H15z" />
      <path d="M1 1h5v1.5H2.5v11h11V10H15v5H1V1z" />
    </symbol>
  ),
  'arrow-from-bottom--fill': (
    <symbol id="arrow-from-bottom--fill" viewBox="0 0 16 16">
      <path d="M13 6H8.75v5h-1.5V6H3l5-5 5 5zM2 14.5V13h12v1.5H2z" />
    </symbol>
  ),
  'arrow-from-bottom--line': (
    <symbol id="arrow-from-bottom--line" viewBox="0 0 16 16">
      <path d="M8.002 1L13 5.95l-1.071 1.06-3.213-3.182V11H7.287V3.828L4.071 7.013 3 5.953 8.002 1zM2 13h12v1.5H2V13z" />
    </symbol>
  ),
  'arrow-from-left--fill': (
    <symbol id="arrow-from-left--fill" viewBox="0 0 16 16">
      <path d="M3 2v12H1.5V2H3zm7 11V8.75H5v-1.5h5V3l5 5-5 5z" />
    </symbol>
  ),
  'arrow-from-left--line': (
    <symbol id="arrow-from-left--line" viewBox="0 0 16 16">
      <path d="M3 2v12H1.5V2H3zm12 6.002L10.05 13l-1.06-1.071 3.182-3.213H5V7.287h7.172L8.987 4.071 10.047 3 15 8.002z" />
    </symbol>
  ),
  'arrow-from-right--fill': (
    <symbol id="arrow-from-right--fill" viewBox="0 0 16 16">
      <path d="M14.5 2H13v12h1.5V2zM6 13V8.75h5v-1.5H6V3L1 8l5 5z" />
    </symbol>
  ),
  'arrow-from-right--line': (
    <symbol id="arrow-from-right--line" viewBox="0 0 16 16">
      <path d="M13 2v12h1.5V2H13zM1 8.002L5.95 13l1.06-1.071-3.182-3.213H11V7.287H3.828l3.185-3.216L5.953 3 1 8.002z" />
    </symbol>
  ),
  'arrow-from-top--fill': (
    <symbol id="arrow-from-top--fill" viewBox="0 0 16 16">
      <path d="M2 3h12V1.5H2V3zm11 7H8.75V5h-1.5v5H3l5 5 5-5z" />
    </symbol>
  ),
  'arrow-from-top--line': (
    <symbol id="arrow-from-top--line" viewBox="0 0 16 16">
      <path d="M2 3h12V1.5H2V3zm6.002 12L13 10.05l-1.071-1.06-3.213 3.182V5H7.287v7.172L4.071 8.987 3 10.047 8.002 15z" />
    </symbol>
  ),
  'arrow-left--fill': (
    <symbol id="arrow-left--fill" viewBox="0 0 16 16">
      <path d="M6 8.75V13L1 8l5-5v4.25h8v1.5H6z" />
    </symbol>
  ),
  'arrow-left--line': (
    <symbol id="arrow-left--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5.95 13L1 8.002 5.953 3l1.06 1.071-3.185 3.216H14v1.429H3.828l3.182 3.213L5.95 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-left-circle--fill': (
    <symbol id="arrow-left-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM3 8.002L7.95 13l1.06-1.071-3.182-3.213H13V7.287H5.828l3.185-3.216L7.953 3 3 8.002z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-left-circle--line': (
    <symbol id="arrow-left-circle--line" viewBox="0 0 16 16">
      <path d="M3 8.002L7.95 13l1.06-1.071-3.182-3.213H13V7.287H5.828l3.185-3.216L7.953 3 3 8.002z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-right--fill': (
    <symbol id="arrow-right--fill" viewBox="0 0 16 16">
      <path d="M10 8.75V13l5-5-5-5v4.25H2v1.5h8z" />
    </symbol>
  ),
  'arrow-right--line': (
    <symbol id="arrow-right--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M10.05 13L15 8.002 10.047 3l-1.06 1.071 3.185 3.216H2v1.429h10.172L8.99 11.929 10.05 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-right-circle--fill': (
    <symbol id="arrow-right-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm5-8.002L8.05 3 6.99 4.071l3.182 3.213H3v1.429h7.172l-3.185 3.216L8.047 13 13 7.998z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-right-circle--line': (
    <symbol id="arrow-right-circle--line" viewBox="0 0 16 16">
      <path d="M13 7.998L8.05 3 6.99 4.071l3.182 3.213H3v1.429h7.172l-3.185 3.216L8.047 13 13 7.998z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-rotate-clockwise--fill': (
    <symbol id="arrow-rotate-clockwise--fill" viewBox="0 0 16 16">
      <path d="M8 1.5c1.928 0 3.66.84 4.851 2.174L10 7h6V0l-2.165 2.526a8 8 0 101.156 9.367l-1.238-.866A6.5 6.5 0 118 1.5z" />
    </symbol>
  ),
  'arrow-rotate-clockwise--line': (
    <symbol id="arrow-rotate-clockwise--line" viewBox="0 0 16 16">
      <path d="M14.002 5.5A6.502 6.502 0 001.5 8a6.5 6.5 0 0012.253 3.027l1.237.866a8 8 0 11-.49-8.558V0H16v7h-6V5.5h4.002z" />
    </symbol>
  ),
  'arrow-rotate-counterclockwise--fill': (
    <symbol id="arrow-rotate-counterclockwise--fill" viewBox="0 0 16 16">
      <path d="M0 7V0l2.166 2.527a8 8 0 11-1.156 9.367l1.237-.867a6.5 6.5 0 10.902-7.354L6 7H0z" />
    </symbol>
  ),
  'arrow-rotate-counterclockwise--line': (
    <symbol id="arrow-rotate-counterclockwise--line" viewBox="0 0 16 16">
      <path d="M0 0h1.5v3.335a8 8 0 11-.49 8.558l1.237-.866A6.5 6.5 0 101.999 5.5H6V7H0V0z" />
    </symbol>
  ),
  'arrow-rotate-double--fill': (
    <symbol id="arrow-rotate-double--fill" viewBox="0 0 16 16">
      <path d="M0 7h6L3.149 3.674a6.5 6.5 0 0110.605 1.299l1.236-.866A7.998 7.998 0 008 0a7.978 7.978 0 00-5.834 2.527L0 0v7zm12.851 5.326a6.5 6.5 0 01-10.605-1.299l-1.236.866A7.998 7.998 0 008 16a7.98 7.98 0 005.835-2.526L16 16V9h-6l2.851 3.326z" />
    </symbol>
  ),
  'arrow-rotate-double--line': (
    <symbol id="arrow-rotate-double--line" viewBox="0 0 16 16">
      <path d="M0 0h1.5v3.335A7.99 7.99 0 018 0a7.998 7.998 0 016.99 4.107l-1.236.866A6.502 6.502 0 001.998 5.5H6V7H0V0zm14.002 10.5a6.502 6.502 0 01-11.755.527l-1.237.866A7.998 7.998 0 008 16a7.99 7.99 0 006.5-3.335V16H16V9h-6v1.5h4.002z" />
    </symbol>
  ),
  'arrow-target-bottom--fill': (
    <symbol id="arrow-target-bottom--fill" viewBox="0 0 16 16">
      <path d="M13 7H8.75V1h-1.5v6H3l5 5 5-5zM2 14.5V13h12v1.5H2z" />
    </symbol>
  ),
  'arrow-target-bottom--line': (
    <symbol id="arrow-target-bottom--line" viewBox="0 0 16 16">
      <path d="M8.002 12L13 7.05l-1.071-1.06-3.213 3.182V1H7.287v8.172L4.071 5.987 3 7.047 8.002 12zM2 13h12v1.5H2V13z" />
    </symbol>
  ),
  'arrow-target-left--fill': (
    <symbol id="arrow-target-left--fill" viewBox="0 0 16 16">
      <path d="M3 2v12H1.5V2H3zm6 11V8.75h6v-1.5H9V3L4 8l5 5z" />
    </symbol>
  ),
  'arrow-target-left--line': (
    <symbol id="arrow-target-left--line" viewBox="0 0 16 16">
      <path d="M3 2v12H1.5V2H3zm1 6.002L8.95 13l1.06-1.071-3.182-3.213H15V7.287H6.828l3.185-3.216L8.953 3 4 8.002z" />
    </symbol>
  ),
  'arrow-target-right--fill': (
    <symbol id="arrow-target-right--fill" viewBox="0 0 16 16">
      <path d="M14.5 2H13v12h1.5V2zM7 13V8.75H1v-1.5h6V3l5 5-5 5z" />
    </symbol>
  ),
  'arrow-target-right--line': (
    <symbol id="arrow-target-right--line" viewBox="0 0 16 16">
      <path d="M13 2v12h1.5V2H13zm-1 6.002L7.05 13l-1.06-1.071 3.182-3.213H1V7.287h8.172L5.987 4.071 7.047 3 12 8.002z" />
    </symbol>
  ),
  'arrow-target-top--fill': (
    <symbol id="arrow-target-top--fill" viewBox="0 0 16 16">
      <path d="M2 3h12V1.5H2V3zm11 6H8.75v6h-1.5V9H3l5-5 5 5z" />
    </symbol>
  ),
  'arrow-target-top--line': (
    <symbol id="arrow-target-top--line" viewBox="0 0 16 16">
      <path d="M2 3h12V1.5H2V3zm6.002 1L13 8.95l-1.071 1.06-3.213-3.182V15H7.287V6.828l-3.216 3.185L3 8.953 8.002 4z" />
    </symbol>
  ),
  'arrow-top--fill': (
    <symbol id="arrow-top--fill" viewBox="0 0 16 16">
      <path d="M8.75 6H13L8 1 3 6h4.25v8h1.5V6z" />
    </symbol>
  ),
  'arrow-top--line': (
    <symbol id="arrow-top--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 5.95L7.998 1 13 5.953l-1.071 1.06-3.216-3.185V14H7.284V3.828L4.071 7.01 3 5.95z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-top-circle--fill': (
    <symbol id="arrow-top-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zM3 7.95L7.998 3 13 7.953l-1.071 1.06-3.216-3.185V13H7.284V5.828L4.071 9.01 3 7.95z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-top-circle--line': (
    <symbol id="arrow-top-circle--line" viewBox="0 0 16 16">
      <path d="M3 7.95L7.998 3 13 7.953l-1.071 1.06-3.216-3.185V13H7.284V5.828L4.071 9.01 3 7.95z" />
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm6.5-8a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-top-left--fill': (
    <symbol id="arrow-top-left--fill" viewBox="0 0 16 16">
      <path d="M3 3v7l3-3 6 6 1-1-6-6 2.996-2.996.008-.004H3z" />
    </symbol>
  ),
  'arrow-top-left--line': (
    <symbol id="arrow-top-left--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 10V3h7.004v1.5H5.5L13 12l-1 1-7.5-7.5V10H3z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-top-right--fill': (
    <symbol id="arrow-top-right--fill" viewBox="0 0 16 16">
      <path d="M13 3v7l-3-3-6 6-1-1 6-6-2.996-2.996L5.996 3H13z" />
    </symbol>
  ),
  'arrow-top-right--line': (
    <symbol id="arrow-top-right--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13 10V3H5.996v1.5H10.5L3 12l1 1 7.5-7.5V10H13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'arrow-trend-down--fill': (
    <symbol id="arrow-trend-down--fill" viewBox="0 0 16 16">
      <path d="M10.97 10.03L8 13h7V6l-2.97 2.97L8 4.94l-2.5 2.5-3.97-3.97L.47 4.53 5.5 9.56 8 7.06l2.97 2.97z" />
    </symbol>
  ),
  'arrow-trend-down--line': (
    <symbol id="arrow-trend-down--line" viewBox="0 0 16 16">
      <path d="M9 13h6V7h-1.5v3.44L8 4.94l-2.5 2.5-3.97-3.97L.47 4.53 5.5 9.56 8 7.06l4.44 4.44H9V13z" />
    </symbol>
  ),
  'arrow-trend-up--fill': (
    <symbol id="arrow-trend-up--fill" viewBox="0 0 16 16">
      <path d="M8 3h7v7l-2.97-2.97L8 11.06l-2.5-2.5-3.97 3.97-1.06-1.06L5.5 6.44 8 8.94l2.97-2.97L8 3z" />
    </symbol>
  ),
  'arrow-trend-up--line': (
    <symbol id="arrow-trend-up--line" viewBox="0 0 16 16">
      <path d="M9 4.5V3h6v6h-1.5V5.56L8 11.06l-2.5-2.5-3.97 3.97-1.06-1.06L5.5 6.44 8 8.94l4.44-4.44H9z" />
    </symbol>
  ),
  'arrow-turn-bottom--fill': (
    <symbol id="arrow-turn-bottom--fill" viewBox="0 0 16 16">
      <path d="M6.25 15L2 10.75h3.5v-5.5a4.25 4.25 0 018.5 0V8h-1.5V5.25a2.75 2.75 0 10-5.5 0v5.5h3.5L6.25 15z" />
    </symbol>
  ),
  'arrow-turn-bottom--line': (
    <symbol id="arrow-turn-bottom--line" viewBox="0 0 16 16">
      <path d="M9.75 1A4.25 4.25 0 005.5 5.25v6.886l-2.44-2.44L2 10.758 6.243 15l4.242-4.243-1.06-1.06L7 12.12V5.25a2.75 2.75 0 015.5 0V8H14V5.25A4.25 4.25 0 009.75 1z" />
    </symbol>
  ),
  'arrow-turn-left--fill': (
    <symbol id="arrow-turn-left--fill" viewBox="0 0 16 16">
      <path d="M1 6.25L5.25 2v3.5h5.5a4.25 4.25 0 110 8.5H8v-1.5h2.75a2.75 2.75 0 100-5.5h-5.5v3.5L1 6.25z" />
    </symbol>
  ),
  'arrow-turn-left--line': (
    <symbol id="arrow-turn-left--line" viewBox="0 0 16 16">
      <path d="M15 9.75a4.25 4.25 0 00-4.25-4.25H3.864l2.44-2.44L5.242 2 1 6.243l4.243 4.242 1.06-1.06L3.88 7h6.871a2.75 2.75 0 110 5.5H8V14h2.75A4.25 4.25 0 0015 9.75z" />
    </symbol>
  ),
  'arrow-turn-right--fill': (
    <symbol id="arrow-turn-right--fill" viewBox="0 0 16 16">
      <path d="M15 9.75L10.75 14v-3.5h-5.5a4.25 4.25 0 010-8.5H8v1.5H5.25a2.75 2.75 0 000 5.5h5.5V5.5L15 9.75z" />
    </symbol>
  ),
  'arrow-turn-right--line': (
    <symbol id="arrow-turn-right--line" viewBox="0 0 16 16">
      <path d="M1 6.25a4.25 4.25 0 004.25 4.25h6.886l-2.44 2.44L10.758 14 15 9.757l-4.243-4.242-1.06 1.06L12.12 9H5.25a2.75 2.75 0 010-5.5H8V2H5.25A4.25 4.25 0 001 6.25z" />
    </symbol>
  ),
  'arrow-turn-top--fill': (
    <symbol id="arrow-turn-top--fill" viewBox="0 0 16 16">
      <path d="M9.75 1L14 5.25h-3.5v5.5a4.25 4.25 0 11-8.5 0V8h1.5v2.75a2.75 2.75 0 105.5 0v-5.5H5.5L9.75 1z" />
    </symbol>
  ),
  'arrow-turn-top--line': (
    <symbol id="arrow-turn-top--line" viewBox="0 0 16 16">
      <path d="M6.25 15a4.25 4.25 0 004.25-4.25V3.864l2.44 2.44L14 5.242 9.757 1 5.515 5.243l1.06 1.06L9 3.88v6.871a2.75 2.75 0 11-5.5 0V8H2v2.75A4.25 4.25 0 006.25 15z" />
    </symbol>
  ),
  'arrow-two-way-horizontal--fill': (
    <symbol id="arrow-two-way-horizontal--fill" viewBox="0 0 16 16">
      <path d="M11 3.5l-1.131-.006H2v1.5h7.884L11 5v3l3.75-3.748L10.997.5l.003 3zM5 11l1.131-.006H14v1.5H6.116L5 12.5v3l-3.75-3.748L5.003 8 5 11z" />
    </symbol>
  ),
  'arrow-two-way-horizontal--line': (
    <symbol id="arrow-two-way-horizontal--line" viewBox="0 0 16 16">
      <path d="M9.935 1.561l1.934 1.933H2v1.5h9.884L9.938 6.94 11 8l3.75-3.748L10.997.5 9.935 1.561zM5 8l-3.75 3.75L5 15.5l1.062-1.062-1.945-1.945H14v-1.501H4.132l1.93-1.93L5 8z" />
    </symbol>
  ),
  'arrow-two-way-vertical--fill': (
    <symbol id="arrow-two-way-vertical--fill" viewBox="0 0 16 16">
      <path d="M5 5l.006 1.131V14h-1.5V6.117L3.501 5h-3l3.748-3.75L8 5.003 5 5zm7.5 6l.006-1.131V2h-1.5v7.884L11 11H8l3.748 3.75 3.752-3.753-3 .003z" />
    </symbol>
  ),
  'arrow-two-way-vertical--line': (
    <symbol id="arrow-two-way-vertical--line" viewBox="0 0 16 16">
      <path d="M1.561 6.065l1.933-1.934V14h1.5V4.117L6.94 6.062 8 5 4.252 1.25.5 5.003l1.061 1.062zM8 11l3.75 3.75L15.5 11l-1.062-1.062-1.945 1.945V2h-1.501v9.868l-1.93-1.93L8 11z" />
    </symbol>
  ),
  'arrows-collapse--fill': (
    <symbol id="arrows-collapse--fill" viewBox="0 0 16 16">
      <path d="M7 2L5.03 3.97 1.53.47.47 1.53l3.5 3.5L2 7h5V2zm7 5l-1.97-1.97 3.5-3.5L14.47.47l-3.5 3.5L9 2v5h5zM2 9h5v5l-1.97-1.97-3.5 3.5-1.06-1.06 3.5-3.5L2 9zm7 0h5l-1.97 1.97 3.5 3.5-1.06 1.06-3.5-3.5L9 14V9z" />
    </symbol>
  ),
  'arrows-collapse--line': (
    <symbol id="arrows-collapse--line" viewBox="0 0 16 16">
      <path d="M9 2.075V7.05h5.004V5.556H11.55l4.006-4.006L14.5.494 10.493 4.5V2.075H9zM2.026 5.507H4.45L.5 1.557 1.556.5l3.95 3.95V2.026H7V7H2.026V5.507zm0 4.987H4.45L.444 14.5 1.5 15.556l4.006-4.006v2.424H7V9H2.026v1.494zM9 9v4.974h1.493V11.55l4.007 4.006 1.056-1.056-4.006-4.006h2.454V9H9z" />
    </symbol>
  ),
  'arrows-expand--fill': (
    <symbol id="arrows-expand--fill" viewBox="0 0 16 16">
      <path d="M1 6V1h5L4.03 2.97l3 3-1.06 1.06-3-3L1 6zm14 4l-1.97 1.97-3-3-1.06 1.06 3 3L10 15h5v-5zm0-9v5l-1.97-1.97-3 3-1.06-1.06 3-3L10 1h5zM6 15l-1.97-1.97 3-3-1.06-1.06-3 3L1 10v5h5z" />
    </symbol>
  ),
  'arrows-expand--line': (
    <symbol id="arrows-expand--line" viewBox="0 0 16 16">
      <path d="M5.974 2.494H3.55l3.48 3.48L5.974 7.03l-3.48-3.48v2.424H1V1h4.974v1.494zm0 11.013H3.55L7.056 10 6 8.944 2.494 12.45v-2.424H1V15h4.974v-1.493zM15 5.974V1H9.996v1.494h2.454L8.944 6 10 7.056l3.507-3.506v2.424H15zM15 15v-4.974h-1.493v2.424L10 8.944 8.944 10l3.506 3.507H9.996V15H15z" />
    </symbol>
  ),
  'backspace--fill': (
    <symbol id="backspace--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M16 2H4L0 8l4 6h12V2zM5.105 10.834L7.94 8 5.47 5.53l1.06-1.06L9 6.94l2.47-2.47 1.06 1.06L10.06 8l2.834 2.834-1.06 1.06L9 9.061l-2.834 2.833-1.06-1.06z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'backspace--line': (
    <symbol id="backspace--line" viewBox="0 0 16 16">
      <path d="M5.105 10.834L7.94 8 5.47 5.53l1.06-1.06L9 6.94l2.47-2.47 1.06 1.06L10.06 8l2.834 2.834-1.06 1.06L9 9.061l-2.834 2.833-1.06-1.06z" />
      <path
        fillRule="evenodd"
        d="M0 8l4 6h12V2H4L0 8zm1.803 0l3-4.5H14.5v9H4.803l-3-4.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'bell--fill': (
    <symbol id="bell--fill" viewBox="0 0 16 16">
      <path d="M14.6 10.4c-.7-.7-1.6-2-1.6-4.4 0-4-2-6-5-6S3 2 3 6c0 2.4-.9 3.7-1.6 4.4-.9 1-.2 2.6 1.1 2.6h11c1.3 0 2-1.6 1.1-2.6zM6 14c0 1.1.9 2 2 2s2-.9 2-2H6z" />
    </symbol>
  ),
  'bell--line': (
    <symbol id="bell--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13.5 13c1.3 0 2-1.6 1.1-2.6-.7-.7-1.6-2-1.6-4.4 0-4-2-6-5-6S3 2 3 6c0 2.4-.9 3.7-1.6 4.4-.9 1-.2 2.6 1.1 2.6h11zM10 14H6a1.986 1.986 0 00.68 1.5 1.991 1.991 0 002.639 0 2.008 2.008 0 00.68-1.5zm-7.496-2.583C3.442 10.461 4.5 8.798 4.5 6c0-1.766.441-2.87 1.004-3.512C6.043 1.87 6.849 1.5 8 1.5s1.957.371 2.496.988C11.058 3.13 11.5 4.234 11.5 6c0 2.798 1.057 4.46 1.996 5.417l.006.011a.023.023 0 01.003.008.097.097 0 01-.01.048.1.1 0 01-.007.016H2.512a.109.109 0 01-.009-.016.097.097 0 01-.008-.048c0-.003 0-.005.002-.008l.007-.011z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'bell-slash--fill': (
    <symbol id="bell-slash--fill" viewBox="0 0 16 16">
      <path d="M14.943 0L0 14.943 1.057 16l2.993-2.993.01-.007h9.44c1.3 0 2-1.6 1.1-2.6-.7-.7-1.6-2-1.6-4.4 0-.648-.053-1.243-.153-1.786l.002-.006L16 1.057 14.943 0zm-3.406 1.402C10.667.467 9.45 0 8 0 5 0 3 2 3 6c0 2.4-.9 3.7-1.6 4.4a1.55 1.55 0 00-.344 1.483l10.48-10.48z" />
      <path d="M8 16c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z" />
    </symbol>
  ),
  'bell-slash--line': (
    <symbol id="bell-slash--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.943 0L0 14.943 1.057 16l2.975-2.975.032-.025h9.432c1.299 0 1.998-1.6 1.099-2.6-.7-.7-1.599-2-1.599-4.4 0-.648-.052-1.243-.153-1.786l.001-.002L16 1.057 14.943 0zm-9.38 11.5l5.925-5.93c.006.139.01.282.01.43 0 2.798 1.056 4.46 1.994 5.417a.08.08 0 01.006.011.023.023 0 01.003.008.098.098 0 01-.009.048.119.119 0 01-.008.016H5.563z"
        clipRule="evenodd"
      />
      <path d="M10.416 2.402C9.878 1.837 9.096 1.5 8 1.5c-1.15 0-1.955.371-2.494.988C4.944 3.13 4.503 4.234 4.503 6c0 1.058-.151 1.954-.39 2.71l-3.075 3.078a1.548 1.548 0 01.367-1.388c.7-.7 1.599-2 1.599-4.4 0-4 1.998-6 4.996-6 1.417 0 2.611.447 3.476 1.341l-1.06 1.061zM9.998 14a1.988 1.988 0 01-.68 1.5 1.989 1.989 0, 01-2.636 0 2.009 2.009 0 01-.68-1.5h3.996z" />
    </symbol>
  ),
  'book--fill': (
    <symbol id="book--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M2 2a2 2 0 012-2h10v13H4.25a.75.75 0 000 1.5H14V16H4.25A2.25 2.25 0 012 13.75C2 9.834 2.005 5.916 2 2zm9 3.5H5V4h6v1.5zm-6 3h6V7H5v1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'book--line': (
    <symbol id="book--line" viewBox="0 0 16 16">
      <path d="M11 5.5H5V4h6v1.5zm-6 3h6V7H5v1.5z" />
      <path
        fillRule="evenodd"
        d="M2 2a2 2 0 012-2h10v13H4.25a.75.75 0 000 1.5H14V16H4.25A2.25 2.25 0 012 13.75V2zm10.5-.5H4a.5.5 0 00-.5.5v9.5h9v-10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'bookmark--fill': (
    <symbol id="bookmark--fill" viewBox="0 0 16 16">
      <path d="M3 2v13l5-4 5 4V2H3z" />
    </symbol>
  ),
  'bookmark--line': (
    <symbol id="bookmark--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 9.08l3.5 2.8V3.5h-7v8.38L8 9.08zM3 15V2h10v13l-5-4-5 4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'bug--fill': (
    <symbol id="bug--fill" viewBox="0 0 16 16">
      <path d="M5 3a3 3 0 016 0H5zm7 1.5H4.375L3.06 3.186 2 4.246l.999 1V8H1v1.5h2V11c0 .566.077 1.345.405 2.095L2 14.5l1.06 1.06 1.219-1.217c.636.591 1.58 1.035 2.971 1.136V10h1.5v5.5c1.485-.02 2.484-.597 3.138-1.365l1.426 1.426 1.06-1.061-1.71-1.71A5.27 5.27 0 0013 11V9.5h2V8h-2V5.622l1.375-1.375-1.061-1.06L12 4.5z" />
    </symbol>
  ),
  'bug--line': (
    <symbol id="bug--line" viewBox="0 0 16 16">
      <path d="M6.5 3c0-.505.165-.867.4-1.1.233-.235.595-.4 1.1-.4.505 0 .867.165 1.1.4.235.233.4.595.4 1.1H11c0-.845-.285-1.608-.838-2.162C9.608.285 8.845 0 8 0S6.392.285 5.838.838C5.285 1.392 5 2.155 5 3h1.5z" />
      <path
        fillRule="evenodd"
        d="M13.314 3.186L12 4.5H4.374L3.061 3.186 2 4.247l1 1V8H1v1.5h2V11c0 .566.077 1.345.405 2.095L2 14.5l1.06 1.06 1.219-1.217c.636.591 1.58 1.035 2.971 1.136l1.5.02c1.485-.018 2.484-.596 3.138-1.364l1.426 1.426 1.06-1.061-1.71-1.71A5.27 5.27 0 0013 11V9.5h2V8h-2V5.622l1.374-1.375-1.06-1.06zM4.5 6v5c0 .58.106 1.294.47 1.852.302.462.892.997 2.28 1.122V10h1.5v4c1.171-.02 1.785-.505 2.16-1.054.43-.629.59-1.429.59-1.946V6h-7z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'bug-slash--fill': (
    <symbol id="bug-slash--fill" viewBox="0 0 16 16">
      <path d="M0 14.943L1.057 16l1.221-1.222.783.783 1.218-1.218c.636.591 1.58 1.035 2.971 1.136V10h1.5v5.5c1.485-.02 2.484-.597 3.138-1.365l1.426 1.426 1.06-1.061-1.71-1.71A5.27 5.27 0 0013 11V9.5h2V8h-2V5.622l1.375-1.375-.783-.782L16 1.057 14.943 0 0 14.943zM3 9.5H1V8h2V5.247l-1-1 1.061-1.06L4.375 4.5H8.32L3 9.82V9.5zm7.827-7.507A3.001 3.001 0 005 3h4.82l1.007-1.007z" />
    </symbol>
  ),
  'bug-slash--line': (
    <symbol id="bug-slash--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 14.943L1.057 16l1.221-1.222.783.783 1.218-1.218c.636.591 1.58 1.035 2.971 1.136l1.5.02c1.485-.018 2.484-.596 3.138-1.364l1.426 1.426 1.06-1.061-1.71-1.71A5.27 5.27 0 0013 11V9.5h2V8h-2V5.622l1.374-1.375-.782-.782L16 1.057 14.943 0 0 14.943zm4.717-2.603c.066.179.149.352.253.512.302.462.892.997 2.28 1.122V11h1.5v3c1.171-.02 1.785-.505 2.16-1.054.43-.629.59-1.429.59-1.946V6h-.443l-6.34 6.34z"
        clipRule="evenodd"
      />
      <path d="M10.162.838c.317.318.546.704.684 1.136L9.82 3H9.5c0-.505-.165-.867-.4-1.1-.233-.235-.595-.4-1.1-.4-.505 0-.867.165-1.1.4-.235.233-.4.595-.4 1.1H5c0-.845.285-1.608.838-2.162C6.392.285 7.155 0 8 0s1.608.285 2.162.838zM1 8h2V5.247l-1-1 1.06-1.06L4.375 4.5H8.32L6.82 6H4.5v2.32L3 9.82V9.5H1V8z" />
    </symbol>
  ),
  'bullhorn--fill': (
    <symbol id="bullhorn--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M9 3.991l5.6-2.902c.7-.3 1.4.2 1.4.9V13c0 .7-.7 1.2-1.4.9L9 10.997H6.9l.8 2.702c.1.7-.3 1.301-1 1.301H4.8c-.5 0-.9-.3-1-.7l-.9-3.303H1c-.6 0-1-.4-1-1.001V4.992c0-.6.4-1 1-1h8zM1.75 8.995V5.993h1.5v3.002h-1.5zm3 0V5.993h1.5v3.002h-1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'bullhorn--line': (
    <symbol id="bullhorn--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M9 10.997l5.6 2.902c.7.3 1.4-.2 1.4-.9V1.988c0-.7-.7-1.2-1.4-.9L9 3.99H1c-.6 0-1 .4-1 1.001v5.004c0 .6.4 1 1 1h1.9l.9 3.303c.1.4.5.701 1 .701h1.9c.7 0 1.1-.6 1-1.301l-.8-2.702H9zm.365-5.505H8v4.004h1.365l5.135 2.66V2.832l-5.135 2.66zm-7.615.5v3.003h1.5V5.993h-1.5zm3 0v3.003h1.5V5.993h-1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'calendar--fill': (
    <symbol id="calendar--fill" viewBox="0 0 16 16">
      <path d="M4 0h2v2H4V0z" />
      <path d="M9 1H7v2H3V1H1v14h14V1h-2v2H9V1z" />
      <path d="M12 0h-2v2h2V0z" />
    </symbol>
  ),
  'calendar--line': (
    <symbol id="calendar--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4 0h2v1h4V0h2v1h3v14H1V1h3V0zm6 2.5V4h2V2.5h1.5v11h-11v-11H4V4h2V2.5h4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'calendar-check--fill': (
    <symbol id="calendar-check--fill" viewBox="0 0 16 16">
      <path d="M4 0h2v2H4V0z" />
      <path
        fillRule="evenodd"
        d="M3 1H1v14h14V1h-2v2H9V1H7v2H3V1zm9.033 5.528l-1.066-1.056-4.423 4.47-2.02-1.978-1.049 1.072 3.086 3.022 5.472-5.53z"
        clipRule="evenodd"
      />
      <path d="M10 0h2v2h-2V0z" />
    </symbol>
  ),
  'calendar-check--line': (
    <symbol id="calendar-check--line" viewBox="0 0 16 16">
      <path d="M12.033 6.528l-1.066-1.056-4.423 4.47-2.02-1.978-1.049 1.072 3.086 3.022 5.472-5.53z" />
      <path
        fillRule="evenodd"
        d="M6 0H4v1H1v14h14V1h-3V0h-2v1H6V0zm4 4V2.5H6V4H4V2.5H2.5v11h11v-11H12V4h-2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'calendar-days--fill': (
    <symbol id="calendar-days--fill" viewBox="0 0 16 16">
      <path d="M4 0h2v2H4V0z" />
      <path
        fillRule="evenodd"
        d="M3 1H1v14h14V1h-2v2H9V1H7v2H3V1zm.5 5h2v2h-2V6zm2 4h-2v2h2v-2zM7 6h2v2H7V6zm2 4H7v2h2v-2zm1.5-4h2v2h-2V6zm2 4h-2v2h2v-2z"
        clipRule="evenodd"
      />
      <path d="M12 0h-2v2h2V0z" />
    </symbol>
  ),
  'calendar-days--line': (
    <symbol id="calendar-days--line" viewBox="0 0 16 16">
      <path d="M5.5 6h-2v2h2V6zm-2 4h2v2h-2v-2zM9 6H7v2h2V6zm-2 4h2v2H7v-2zm5.5-4h-2v2h2V6zm-2 4h2v2h-2v-2z" />
      <path
        fillRule="evenodd"
        d="M4 0h2v1h4V0h2v1h3v14H1V1h3V0zm6 2.5V4h2V2.5h1.5v11h-11v-11H4V4h2V2.5h4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'calendar-event--fill': (
    <symbol id="calendar-event--fill" viewBox="0 0 16 16">
      <path d="M4 0h2v2H4V0z" />
      <path
        fillRule="evenodd"
        d="M9 1H7v2H3V1H1v14h14V1h-2v2H9V1zm3 11V9H8v3h4z"
        clipRule="evenodd"
      />
      <path d="M10 0h2v2h-2V0z" />
    </symbol>
  ),
  'calendar-event--line': (
    <symbol id="calendar-event--line" viewBox="0 0 16 16">
      <path d="M8 12V9h4v3H8z" />
      <path
        fillRule="evenodd"
        d="M6 0H4v1H1v14h14V1h-3V0h-2v1H6V0zm4 2.5H6V4H4V2.5H2.5v11h11v-11H12V4h-2V2.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'calendar-minus--fill': (
    <symbol id="calendar-minus--fill" viewBox="0 0 16 16">
      <path d="M4 0h2v2H4V0z" />
      <path
        fillRule="evenodd"
        d="M9 1H7v2H3V1H1v14h14V1h-2v2H9V1zM4 9.75h8v-1.5H4v1.5z"
        clipRule="evenodd"
      />
      <path d="M10 0h2v2h-2V0z" />
    </symbol>
  ),
  'calendar-minus--line': (
    <symbol id="calendar-minus--line" viewBox="0 0 16 16">
      <path d="M4 9.75h8v-1.5H4v1.5z" />
      <path
        fillRule="evenodd"
        d="M6 0H4v1H1v14h14V1h-3V0h-2v1H6V0zm4 4V2.5H6V4H4V2.5H2.5v11h11v-11H12V4h-2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'calendar-plus--fill': (
    <symbol id="calendar-plus--fill" viewBox="0 0 16 16">
      <path d="M6 0H4v2h2V0z" />
      <path
        fillRule="evenodd"
        d="M7 1h2v2h4V1h2v14H1V1h2v2h4V1zm.25 7.25h-2.5v1.5h2.5v2.5h1.5v-2.5h2.5v-1.5h-2.5v-2.5h-1.5v2.5z"
        clipRule="evenodd"
      />
      <path d="M12 0h-2v2h2V0z" />
    </symbol>
  ),
  'calendar-plus--line': (
    <symbol id="calendar-plus--line" viewBox="0 0 16 16">
      <path d="M7.25 8.25h-2.5v1.5h2.5v2.5h1.5v-2.5h2.5v-1.5h-2.5v-2.5h-1.5v2.5z" />
      <path
        fillRule="evenodd"
        d="M4 0h2v1h4V0h2v1h3v14H1V1h3V0zm6 2.5V4h2V2.5h1.5v11h-11v-11H4V4h2V2.5h4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'calendar-weeks--fill': (
    <symbol id="calendar-weeks--fill" viewBox="0 0 16 16">
      <path d="M6 0H4v2h2V0z" />
      <path
        fillRule="evenodd"
        d="M7 1h2v2h4V1h2v14H1V1h2v2h4V1zM3.5 7h9v1.5h-9V7zm9 3h-9v1.5h9V10z"
        clipRule="evenodd"
      />
      <path d="M12 0h-2v2h2V0z" />
    </symbol>
  ),
  'calendar-weeks--line': (
    <symbol id="calendar-weeks--line" viewBox="0 0 16 16">
      <path d="M3.5 7h9v1.5h-9V7zm9 3h-9v1.5h9V10z" />
      <path
        fillRule="evenodd"
        d="M4 0h2v1h4V0h2v1h3v14H1V1h3V0zm6 2.5V4h2V2.5h1.5v11h-11v-11H4V4h2V2.5h4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'camera--fill': (
    <symbol id="camera--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5.4 9.9c-.7-2.2 1.3-4.2 3.5-3.5.8.3 1.4.9 1.7 1.7.7 2.2-1.3 4.2-3.5 3.5-.8-.3-1.4-.9-1.7-1.7zM6 8.4c.1.3.3.5.6.6.9.3 1.7-.5 1.4-1.4-.1-.3-.3-.5-.6-.6-.9-.3-1.7.5-1.4 1.4z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11.8 3H15c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1H1c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h3.2l.6-1.4c.1-.3.5-.6.9-.6h4.6c.4 0 .8.3 1 .6l.5 1.4zM9 12.6c1.3-.3 2.3-1.3 2.6-2.6.8-2.8-1.8-5.4-4.6-4.6-1.3.3-2.3 1.3-2.6 2.6-.8 2.8 1.8 5.4 4.6 4.6z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'camera--line': (
    <symbol id="camera--line" viewBox="0 0 16 16">
      <path d="M6 8.4c.1.3.3.5.6.6.9.3 1.7-.5 1.4-1.4-.1-.3-.3-.5-.6-.6-.9-.3-1.7.5-1.4 1.4z" />
      <path
        fillRule="evenodd"
        d="M15 3h-3.2l-.5-1.4c-.2-.3-.6-.6-1-.6H5.7c-.4 0-.8.3-.9.6L4.2 3H1c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm-4.257 1.5l-.714-2H6.046l-.857 2H1.5v8h4.562a4 4 0 113.876 0H14.5v-8h-3.757zM10.5 9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'camera-slash--fill': (
    <symbol id="camera-slash--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.943 0L0 14.943 1.057 16l2-2H15c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1h-.94L16 1.057 14.943 0zM10.68 6.38l-.712.713c.273.282.487.621.632 1.007.7 2.2-1.3 4.2-3.5 3.5a2.899 2.899 0 01-1.007-.632l-.712.712A3.68 3.68 0 009 12.6c1.3-.3 2.3-1.3 2.6-2.6a3.681 3.681 0 00-.92-3.62z"
        clipRule="evenodd"
      />
      <path d="M7 5.4c.178-.051.356-.088.532-.112l3.735-3.735C11.058 1.269 10.679 1 10.3 1H5.7c-.4 0-.8.3-.9.6L4.2 3H1c-.6 0-1 .4-1 1v8.82l4.288-4.288c.024-.176.061-.354.112-.532.3-1.3 1.3-2.3 2.6-2.6z" />
    </symbol>
  ),
  'camera-slash--line': (
    <symbol id="camera-slash--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.943 0L0 14.943 1.057 16l2-2H15c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1h-.94L16 1.057 14.943 0zM10.86 6.202l1.7-1.702h1.94v8H9.938a3.999 3.999 0 00.92-6.298zm-1.061 1.06l-3.535 3.536a2.5 2.5 0 003.535-3.535zM5.202 11.86l-.641.641h1.501a4.013 4.013 0 01-.86-.641z"
        clipRule="evenodd"
      />
      <path d="M10.105 2.715L10.03 2.5H6.046l-.857 2H1.5v6.82L0 12.82V4c0-.6.4-1 1-1h3.2l.6-1.4c.1-.3.5-.6.9-.6h4.6c.379 0 .758.27.967.553l-1.162 1.162z" />
      <path d="M7.816 5.004a4 4 0 00-3.812 3.812l3.812-3.812z" />
    </symbol>
  ),
  'cancel--fill': (
    <symbol id="cancel--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-2 0a6 6 0 01-9.477 4.89l8.368-8.367A5.977 5.977 0 0114 8zM3.11 11.476l8.367-8.367a6 6 0 00-8.367 8.367z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'cancel--line': (
    <symbol id="cancel--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 01-10.535 5.096l9.131-9.131A6.472 6.472 0 0114.5 8zM2.904 12.035l9.131-9.13a6.5 6.5 0 00-9.131 9.131z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'cart--fill': (
    <symbol id="cart--fill" viewBox="0 0 16 16">
      <path d="M14 12.1V11H6.2l-.4-1.4h8.3L16 3H4l-.5-2H0v2h2l2.5 9.3c-.3.3-.5.7-.5 1.2 0 .8.7 1.5 1.5 1.5S7 14.3 7 13.5c0-.2 0-.3-.1-.5h5.2c-.1.2-.1.3-.1.5 0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4z" />
    </symbol>
  ),
  'cart--line': (
    <symbol id="cart--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 2.75h1.914l2.445 9.777a1.5 1.5 0 102.44.223h5.402a1.5 1.5 0 101.8-.665v-.835H5.585L5.148 9.5H14.5L16 3H3.523l-.437-1.75H0v1.5zM4.788 8l-.87-3.5h10.196L13.307 8H4.788z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'chart-bar-vertical--fill': (
    <symbol id="chart-bar-vertical--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M15 1H1v14h14V1zM5.25 6h-1.5v7h1.5V6zm2-3h1.5v10h-1.5V3zm5 6h-1.5v4h1.5V9z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'chart-bar-vertical--line': (
    <symbol id="chart-bar-vertical--line" viewBox="0 0 16 16">
      <path d="M1 1h1.5v12.5H15V15H1V1z" />
      <path d="M5.75 5h-1.5v7h1.5V5zm2-3h1.5v10h-1.5V2zm5 6h-1.5v4h1.5V8z" />
    </symbol>
  ),
  'check--fill': (
    <symbol id="check--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.21 5.204L6.552 12.92 1.79 8.12l1.42-1.409 3.342 3.368 6.238-6.284 1.42 1.408z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'check--line': (
    <symbol id="check--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.032 5.028l-7.48 7.537-4.584-4.62 1.064-1.057 3.52 3.547 6.416-6.463 1.064 1.056z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'check-circle--fill': (
    <symbol id="check-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm5.032-10.222l-1.064-1.056-5.152 5.19-2.784-2.804-1.064 1.057 3.848 3.877 6.216-6.264z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'check-circle--line': (
    <symbol id="check-circle--line" viewBox="0 0 16 16">
      <path d="M13.032 5.778l-1.064-1.056-5.152 5.19-2.784-2.804-1.064 1.057 3.848 3.877 6.216-6.264z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'chevron-bottom--fill': (
    <symbol id="chevron-bottom--fill" viewBox="0 0 16 16">
      <path d="M4 6l4 4 4-4H4z" />
    </symbol>
  ),
  'chevron-bottom--line': (
    <symbol id="chevron-bottom--line" viewBox="0 0 16 16">
      <path d="M11.929 5L13 6.059l-5 4.94-5-4.94L4.071 5 8 8.882 11.929 5z" />
    </symbol>
  ),
  'chevron-double-bottom--fill': (
    <symbol id="chevron-double-bottom--fill" viewBox="0 0 16 16">
      <path d="M8 8.5l5-5H3l5 5z" />
      <path d="M13 8.059L11.929 7 8 10.882 4.071 7 3 8.06 8 13l5-4.941z" />
    </symbol>
  ),
  'chevron-double-bottom--line': (
    <symbol id="chevron-double-bottom--line" viewBox="0 0 16 16">
      <path d="M13 8.559L11.929 7.5 8 11.382 4.071 7.5 3 8.56l5 4.94 5-4.941z" />
      <path d="M13 4.059L11.929 3 8 6.882 4.071 3 3 4.06 8 9l5-4.941z" />
    </symbol>
  ),
  'chevron-double-left--fill': (
    <symbol id="chevron-double-left--fill" viewBox="0 0 16 16">
      <path d="M9 4.071L7.941 3 3 8l4.941 5L9 11.929 5.118 8 9 4.071z" />
      <path d="M7.5 8l5 5V3l-5 5z" />
    </symbol>
  ),
  'chevron-double-left--line': (
    <symbol id="chevron-double-left--line" viewBox="0 0 16 16">
      <path d="M7.441 3L8.5 4.071 4.618 8 8.5 11.929 7.44 13 2.5 8l4.941-5z" />
      <path d="M11.941 3L13 4.071 9.118 8 13 11.929 11.94 13 7 8l4.941-5z" />
    </symbol>
  ),
  'chevron-double-right--fill': (
    <symbol id="chevron-double-right--fill" viewBox="0 0 16 16">
      <path d="M8.5 8l-5 5V3l5 5z" />
      <path d="M7 4.071L8.059 3 13 8l-4.941 5L7 11.929 10.882 8 7 4.071z" />
    </symbol>
  ),
  'chevron-double-right--line': (
    <symbol id="chevron-double-right--line" viewBox="0 0 16 16">
      <path d="M8.559 3L7.5 4.071 11.382 8 7.5 11.929 8.56 13l4.94-5-4.941-5z" />
      <path d="M4.059 3L3 4.071 6.882 8 3 11.929 4.06 13 9 8 4.059 3z" />
    </symbol>
  ),
  'chevron-double-top--fill': (
    <symbol id="chevron-double-top--fill" viewBox="0 0 16 16">
      <path d="M11.929 9L13 7.941 8 3 3 7.941 4.071 9 8 5.118 11.929 9z" />
      <path d="M8 7.5l5 5H3l5-5z" />
    </symbol>
  ),
  'chevron-double-top--line': (
    <symbol id="chevron-double-top--line" viewBox="0 0 16 16">
      <path d="M13 7.441L11.929 8.5 8 4.618 4.071 8.5 3 7.44 8 2.5l5 4.941z" />
      <path d="M13 11.941L11.929 13 8 9.118 4.071 13 3 11.94 8 7l5 4.941z" />
    </symbol>
  ),
  'chevron-left--fill': (
    <symbol id="chevron-left--fill" viewBox="0 0 16 16">
      <path d="M10 4L6 8l4 4V4z" />
    </symbol>
  ),
  'chevron-left--line': (
    <symbol id="chevron-left--line" viewBox="0 0 16 16">
      <path d="M11 11.928L9.941 13 5 8l4.941-5L11 4.07 7.118 8 11 11.928z" />
    </symbol>
  ),
  'chevron-right--fill': (
    <symbol id="chevron-right--fill" viewBox="0 0 16 16">
      <path d="M6 4l4 4-4 4V4z" />
    </symbol>
  ),
  'chevron-right--line': (
    <symbol id="chevron-right--line" viewBox="0 0 16 16">
      <path d="M5 11.928L6.059 13 11 8 6.059 3 5 4.07 8.882 8 5 11.928z" />
    </symbol>
  ),
  'chevron-target-bottom--fill': (
    <symbol id="chevron-target-bottom--fill" viewBox="0 0 16 16">
      <path d="M8 9.5l5-5H3l5 5zm-6 3V11h12v1.5H2z" />
    </symbol>
  ),
  'chevron-target-bottom--line': (
    <symbol id="chevron-target-bottom--line" viewBox="0 0 16 16">
      <path d="M13 4.559L11.929 3.5 8 7.382 4.071 3.5 3 4.56 8 9.5l5-4.941zM2 11h12v1.5H2V11z" />
    </symbol>
  ),
  'chevron-target-left--fill': (
    <symbol id="chevron-target-left--fill" viewBox="0 0 16 16">
      <path d="M5 2v12H3.5V2H5zm1.5 6l5-5v10l-5-5z" />
    </symbol>
  ),
  'chevron-target-left--line': (
    <symbol id="chevron-target-left--line" viewBox="0 0 16 16">
      <path d="M5 2v12H3.5V2H5zm6.441 11l1.059-1.072L8.618 8 12.5 4.07 11.44 3 6.5 8l4.941 5z" />
    </symbol>
  ),
  'chevron-target-right--fill': (
    <symbol id="chevron-target-right--fill" viewBox="0 0 16 16">
      <path d="M12.5 2H11v12h1.5V2zm-3 6l-5-5v10l5-5z" />
    </symbol>
  ),
  'chevron-target-right--line': (
    <symbol id="chevron-target-right--line" viewBox="0 0 16 16">
      <path d="M11 2v12h1.5V2H11zM4.559 13L3.5 11.928 7.382 8 3.5 4.07 4.56 3 9.5 8l-4.941 5z" />
    </symbol>
  ),
  'chevron-target-top--fill': (
    <symbol id="chevron-target-top--fill" viewBox="0 0 16 16">
      <path d="M2 5h12V3.5H2V5zm6 1.5l-5 5h10l-5-5z" />
    </symbol>
  ),
  'chevron-target-top--line': (
    <symbol id="chevron-target-top--line" viewBox="0 0 16 16">
      <path d="M2 5h12V3.5H2V5zm11 6.441L11.929 12.5 8 8.618 4.071 12.5 3 11.44 8 6.5l5 4.941z" />
    </symbol>
  ),
  'chevron-top--fill': (
    <symbol id="chevron-top--fill" viewBox="0 0 16 16">
      <path d="M4 10l4-4 4 4H4z" />
    </symbol>
  ),
  'chevron-top--line': (
    <symbol id="chevron-top--line" viewBox="0 0 16 16">
      <path d="M11.929 11L13 9.94 8 5 3 9.94 4.071 11 8 7.118 11.929 11z" />
    </symbol>
  ),
  'chevrons-collapse-horizontal--fill': (
    <symbol id="chevrons-collapse-horizontal--fill" viewBox="0 0 16 16">
      <path d="M7 8L3 4v8l4-4zm2 0l4-4v8L9 8z" />
    </symbol>
  ),
  'chevrons-collapse-horizontal--line': (
    <symbol id="chevrons-collapse-horizontal--line" viewBox="0 0 16 16">
      <path d="M2.059 13L1 11.928 4.882 8 1 4.07 2.06 3 7 8l-4.941 5zm11.882 0L15 11.929 11.118 8 15 4.071 13.94 3 9 8l4.941 5z" />
    </symbol>
  ),
  'chevrons-collapse-vertical--fill': (
    <symbol id="chevrons-collapse-vertical--fill" viewBox="0 0 16 16">
      <path d="M8 7L4 3h8L8 7zm0 2l-4 4h8L8 9z" />
    </symbol>
  ),
  'chevrons-collapse-vertical--line': (
    <symbol id="chevrons-collapse-vertical--line" viewBox="0 0 16 16">
      <path d="M13 2.059L11.929.999 8 4.883 4.071 1 3 2.059l5 4.94 5-4.94zm0 11.882L11.929 15 8 11.118 4.071 15 3 13.94 8 9l5 4.941z" />
    </symbol>
  ),
  'chevrons-expand-horizontal--fill': (
    <symbol id="chevrons-expand-horizontal--fill" viewBox="0 0 16 16">
      <path d="M3 8l4-4v8L3 8zm10 0L9 4v8l4-4z" />
    </symbol>
  ),
  'chevrons-expand-horizontal--line': (
    <symbol id="chevrons-expand-horizontal--line" viewBox="0 0 16 16">
      <path d="M5.941 13L7 11.929 3.118 8 7 4.071 5.94 3 1 8l4.941 5zm4.118 0L9 11.929 12.882 8 9 4.071 10.06 3 15 8l-4.941 5z" />
    </symbol>
  ),
  'chevrons-expand-vertical--fill': (
    <symbol id="chevrons-expand-vertical--fill" viewBox="0 0 16 16">
      <path d="M8 3L4 7h8L8 3zm0 10L4 9h8l-4 4z" />
    </symbol>
  ),
  'chevrons-expand-vertical--line': (
    <symbol id="chevrons-expand-vertical--line" viewBox="0 0 16 16">
      <path d="M13 5.941L11.929 7 8 3.118 4.071 7 3 5.94 8 1l5 4.941zm0 4.118L11.929 9 8 12.882 4.071 9 3 10.06 8 15l5-4.941z" />
    </symbol>
  ),
  'clipboard--fill': (
    <symbol id="clipboard--fill" viewBox="0 0 16 16">
      <path d="M10.5 0v2.5h-5V0h5z" />
      <path d="M2 1h2v3h8V1h2v15H2V1z" />
    </symbol>
  ),
  'clipboard--line': (
    <symbol id="clipboard--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.5 0h7v1H14v15H2V1h2.5V0zM6 1.5h4V3H6V1.5zm-1.5 1h-1v12h9v-12h-1v2h-7v-2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'clipboard-file--fill': (
    <symbol id="clipboard-file--fill" viewBox="0 0 16 16">
      <path d="M10.5 0v2.5h-5V0h5z" />
      <path
        fillRule="evenodd"
        d="M2 1h2v3h8V1h2v15H2V1zm2 6h8v1.5H4V7zm8 3H4v1.5h8V10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'clipboard-file--line': (
    <symbol id="clipboard-file--line" viewBox="0 0 16 16">
      <path d="M4.5 7h7v1.5h-7V7zm7 3h-7v1.5h7V10z" />
      <path
        fillRule="evenodd"
        d="M4.5 0h7v1H14v15H2V1h2.5V0zM6 1.5h4V3H6V1.5zm-1.5 1h-1v12h9v-12h-1v2h-7v-2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'clock--fill': (
    <symbol id="clock--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM7.25 2.5v5.81l2.72 2.72 1.06-1.06-2.28-2.28V2.5h-1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'clock--line': (
    <symbol id="clock--line" viewBox="0 0 16 16">
      <path d="M7.25 2.5v5.81l2.72 2.72 1.06-1.06-2.28-2.28V2.5h-1.5z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'clock-hands--fill': (
    <symbol id="clock-hands--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7 2.5h2v5.086l2.207 2.207-1.414 1.414L7 8.414V2.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'clock-hands--line': (
    <symbol id="clock-hands--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7.25 2.5h1.5v5.19l2.28 2.28-1.06 1.06-2.72-2.72V2.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'code-angles--fill': (
    <symbol id="code-angles--fill" viewBox="0 0 16 16">
      <path d="M8 2h2L8 14H6L8 2zM2.828 8l2.793-2.793-1.414-1.414L0 8l4.207 4.207 1.414-1.414L2.828 8zm7.552-2.793L13.173 8l-2.793 2.793 1.414 1.414L16.001 8l-4.207-4.207-1.414 1.414z" />
    </symbol>
  ),
  'code-angles--line': (
    <symbol id="code-angles--line" viewBox="0 0 16 16">
      <path d="M8.5 2L6 14h1.5L10 2H8.5zM2.121 8l2.97-2.97-1.06-1.06L0 8l4.03 4.03 1.061-1.06L2.121 8zM11 10.928L12.059 12 16 8l-3.941-4L11 5.07 13.882 8 11 10.928z" />
    </symbol>
  ),
  'code-block--fill': (
    <symbol id="code-block--fill" viewBox="0 0 16 16">
      <path d="M3.207 0l1.414 1.414-1.793 1.793L4.621 5 3.207 6.414 0 3.207 3.207 0z" />
      <path d="M1 7.5V15h15V1h-4.5v6.5H1z" />
      <path d="M6 1.414L7.414 0l3.207 3.207-3.207 3.207L6 5l1.793-1.793L6 1.414z" />
    </symbol>
  ),
  'code-block--line': (
    <symbol id="code-block--line" viewBox="0 0 16 16">
      <path d="M2.957 6L4 4.95 2.087 3 4 1.05 2.956 0 0 3l2.957 3zM6 4.95L7.043 6 10 3 7.044 0 6 1.05 7.913 3 6 4.95z" />
      <path d="M1 7v8h15V1h-5v1.5h3.5v11h-12V7H1z" />
    </symbol>
  ),
  'coins-stacked--fill': (
    <symbol id="coins-stacked--fill" viewBox="0 0 16 16">
      <path d="M10 0H1v3h9V0zM9 4v2.1c-.5.2-1 .5-1.5.9H0V4h9zM1 8h5.6c-.6.9-1 1.9-1.1 3H1V8zm-1 4h5.5c.1 1.1.5 2.1 1.1 3H0v-3zm11.5 4a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
    </symbol>
  ),
  'coins-stacked--line': (
    <symbol id="coins-stacked--line" viewBox="0 0 16 16">
      <path d="M10 2.25H1V.75h9v1.5zM9 6.044a5.979 5.979 0 00-.407.206H0v-1.5h9v1.294zM1 8.75h5.166c-.242.468-.423.97-.536 1.5H1v-1.5zm4.63 4H0v1.5h6.166a5.957 5.957 0 01-.536-1.5z" />
      <path
        fillRule="evenodd"
        d="M16 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-1.5 0a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'color-blend--fill': (
    <symbol id="color-blend--fill" viewBox="0 0 16 16">
      <path d="M11.587 5.548c.216-.49.336-1.031.336-1.6C11.923 1.767 10.167 0 8 0 5.834 0 4.077 1.767 4.077 3.947a3.939 3.939 0 0 0 3.508 3.925 5.48 5.48 0 0 1 4.002-2.324Zm-2.681 7.83c.66-1.436.7-3.136 0-4.65a3.908 3.908 0 0 1 5.132-1.094 3.96 3.96 0 0 1 1.436 5.392 3.91 3.91 0 0 1-6.568.352ZM3.507 7.126A5.481 5.481 0 0 0 7.51 9.452c.805 1.822.13 4-1.625 5.018a3.91 3.91 0 0 1-5.359-1.444 3.96 3.96 0 0 1 1.436-5.392 3.892 3.892 0 0 1 1.545-.508Z" />
    </symbol>
  ),
  'color-blend--line': (
    <symbol id="color-blend--line" viewBox="0 0 16 16">
      <path d="M8 1.538c1.71 0 3.098 1.378 3.098 3.077 0 .419-.084.817-.236 1.18a4.65 4.65 0 0 0-3.264 1.871 3.1 3.1 0 0 1-2.282-1.514 3.043 3.043 0 0 1-.413-1.537c0-1.7 1.386-3.077 3.097-3.077Zm4.463 4.364c.12-.41.183-.84.183-1.287C12.646 2.066 10.566 0 8 0S3.354 2.066 3.354 4.615c0 .446.064.878.183 1.287a4.665 4.665 0 0 0-1.213.485 4.598 4.598 0 0 0-1.7 6.305c1.282 2.207 4.124 2.963 6.346 1.689a4.64 4.64 0 0 0 1.03-.8 4.67 4.67 0 0 0 1.03.8c2.222 1.274 5.064.518 6.347-1.69a4.598 4.598 0 0 0-1.7-6.304 4.665 4.665 0 0 0-1.214-.485Zm-3.57 6.355a4.584 4.584 0 0 0 .001-3.745 3.106 3.106 0 0 1 4.008-.793 3.065 3.065 0 0 1 1.134 4.203 3.109 3.109 0 0 1-5.142.335ZM7.509 9.205a3.07 3.07 0 0 1-1.313 3.844 3.109 3.109 0 0 1-4.23-1.127A3.066 3.066 0 0 1 3.097 7.72a3.1 3.1 0 0 1 1.146-.388 4.65 4.65 0 0 0 3.264 1.873Z" />
    </symbol>
  ),
  'color-palette--fill': (
    <symbol id="color-palette--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M16 7.111C16 3.182 12.418 0 8 0a8 8 0 0 0 0 16c.72 0 1.333-.595 1.333-1.333 0-.347-.133-.658-.346-.898a1.336 1.336 0 0 1-.338-.88 1.33 1.33 0 0 1 1.333-1.333h1.574A4.446 4.446 0 0 0 16 7.11ZM8 5.5A1.25 1.25 0 1 0 8 3a1.25 1.25 0 0 0 0 2.5ZM5.5 6.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM11.75 8a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'color-palette--line': (
    <symbol id="color-palette--line" viewBox="0 0 16 16">
      <path d="M8 6a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 8 6ZM6 7.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm5.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" />
      <path
        fillRule="evenodd"
        d="M8.649 12.889c0 .338.133.649.338.88.213.24.346.551.346.898C9.333 15.405 8.72 16 8 16A8 8 0 0 1 8 0c4.418 0 8 3.182 8 7.111a4.446 4.446 0 0 1-4.444 4.445H9.982a1.33 1.33 0 0 0-1.333 1.333Zm-1.5 0c0 .604.195 1.157.502 1.602A6.501 6.501 0 0 1 8 1.5c3.76 0 6.5 2.672 6.5 5.611a2.946 2.946 0 0 1-2.944 2.945H9.982a2.832 2.832 0 0 0-2.833 2.833Z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'comment--fill': (
    <symbol id="comment--fill" viewBox="0 0 16 16">
      <path d="M15 2H1v14l3-3h11V2z" />
    </symbol>
  ),
  'comment--line': (
    <symbol id="comment--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3.379 11.5H13.5v-8h-11v8.879l.879-.879zM1 16V2h14v11H4l-3 3z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'comment-discussion--fill': (
    <symbol id="comment-discussion--fill" viewBox="0 0 16 16">
      <path d="M0 0h13v10.214H2.786L0 13V0z" />
      <path d="M3.5 13.214v-1.5h11V3H16v13l-2.786-2.786H3.5z" />
    </symbol>
  ),
  'comment-discussion--line': (
    <symbol id="comment-discussion--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 13l2.786-2.786H13V0H0v13zm2.164-4.286L1.5 9.38V1.5h10v7.214H2.164z"
        clipRule="evenodd"
      />
      <path d="M3.5 13.214V11.75h10.371l.629.629V3H16v13l-2.786-2.786H3.5z" />
    </symbol>
  ),
  'comment-dots--fill': (
    <symbol id="comment-dots--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 2h14v11H4l-3 3V2zm8 5.5a1 1 0 11-2 0 1 1 0 012 0zm-4.5 1a1 1 0 100-2 1 1 0 000 2zm8-1a1 1 0 11-2 0 1 1 0 012 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'comment-dots--line': (
    <symbol id="comment-dots--line" viewBox="0 0 16 16">
      <path d="M9 7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
      <path
        fillRule="evenodd"
        d="m1 16 3-3h11V2H1v14Zm2.379-4.5-.879.879V3.5h11v8H3.379Z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'copy--fill': (
    <symbol id="copy--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12 13h3V0H4v3H1v13h11v-3zm1.5-11.5h-8V3H12v8.5h1.5v-10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'copy--line': (
    <symbol id="copy--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12 13h3V0H4v3H1v13h11v-3zm1.5-11.5h-8V3H12v8.5h1.5v-10zm-11 3h8v10h-8v-10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'copy-file--fill': (
    <symbol id="copy-file--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12 13h3V0H4v3H1v13h11v-3zm1.5-11.5h-8V3H12v8.5h1.5v-10zM4 8.75h5v-1.5H4v1.5zm5 3H4v-1.5h5v1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'copy-file--line': (
    <symbol id="copy-file--line" viewBox="0 0 16 16">
      <path d="M9 8.75H4v-1.5h5v1.5zm-5 3h5v-1.5H4v1.5z" />
      <path
        fillRule="evenodd"
        d="M12 13h3V0H4v3H1v13h11v-3zm1.5-11.5h-8V3H12v8.5h1.5v-10zm-11 3h8v10h-8v-10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'copy-plus--fill': (
    <symbol id="copy-plus--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12 13h3V0H4v3H1v13h11v-3zm1.5-11.5h-8V3H12v8.5h1.5v-10zm-7.75 8.75v2.5h1.5v-2.5h2.5v-1.5h-2.5v-2.5h-1.5v2.5h-2.5v1.5h2.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'copy-plus--line': (
    <symbol id="copy-plus--line" viewBox="0 0 16 16">
      <path d="M5.75 12.5v-2.25H3.5v-1.5h2.25V6.5h1.5v2.25H9.5v1.5H7.25v2.25h-1.5z" />
      <path
        fillRule="evenodd"
        d="M15 13h-3v3H1V3h3V0h11v13zM5.5 1.5h8v10H12V3H5.5V1.5zm5 3h-8v10h8v-10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'corners-collapse--fill': (
    <symbol id="corners-collapse--fill" viewBox="0 0 16 16">
      <path d="M7 7V1L1 7h6zm2-6v6h6L9 1zm0 14V9h6l-6 6zm-2 0V9H1l6 6z" />
    </symbol>
  ),
  'corners-collapse--line': (
    <symbol id="corners-collapse--line" viewBox="0 0 16 16">
      <path d="M5.5 1H7v6H1V5.5h4.5V1zm0 14H7V9H1v1.5h4.5V15zM9 1h1.5v4.5H15V7H9V1zm1.5 14H9V9h6v1.5h-4.5V15z" />
    </symbol>
  ),
  'corners-expand--fill': (
    <symbol id="corners-expand--fill" viewBox="0 0 16 16">
      <path d="M1 6V1h5L1 6zm14-5v5l-5-5h5zm0 14v-5l-5 5h5zM1 15v-5l5 5H1z" />
    </symbol>
  ),
  'corners-expand--line': (
    <symbol id="corners-expand--line" viewBox="0 0 16 16">
      <path d="M1 1v5h1.5V2.5H6V1H1zm9 1.5V1h5v5h-1.5V2.5H10zm0 11V15h5v-5h-1.5v3.5H10zM1 10v5h5v-1.5H2.5V10H1z" />
    </symbol>
  ),
  'credit-card--fill': (
    <symbol id="credit-card--fill" viewBox="0 0 16 16">
      <path d="M0 2h16v2H0V2zm0 3.5V14h16V5.5H0zM6 11H2V9h4v2zm4 0H8V9h2v2z" />
    </symbol>
  ),
  'credit-card--line': (
    <symbol id="credit-card--line" viewBox="0 0 16 16">
      <path d="M3 10.75h4v-1.5H3v1.5zm8 0H9v-1.5h2v1.5z" />
      <path
        fillRule="evenodd"
        d="M0 2h16v12H0V2zm1.5 1.5h13v1.75h-13V3.5zm13 3.25v5.75h-13V6.75h13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'credit-card-plus--fill': (
    <symbol id="credit-card-plus--fill" viewBox="0 0 16 16">
      <path d="M0 2h15v2H0V2z" />
      <path
        fillRule="evenodd"
        d="M15 9V5.5H0V14h9v-3h2V9h4zm-9 2H2V9h4v2z"
        clipRule="evenodd"
      />
      <path d="M12.5 16v-2h-2v-1.5h2v-2H14v2h2V14h-2v2h-1.5z" />
    </symbol>
  ),
  'credit-card-plus--line': (
    <symbol id="credit-card-plus--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13.5 6.75V9H15V2H0v12h9v-1.5H1.5V6.75h12zm0-3.25h-12v1.75h12V3.5z"
        clipRule="evenodd"
      />
      <path d="M12.5 16v-2h-2v-1.5h2v-2H14v2h2V14h-2v2h-1.5zM7 10.75H3v-1.5h4v1.5z" />
    </symbol>
  ),
  'crosshair--fill': (
    <symbol id="crosshair--fill" viewBox="0 0 16 16">
      <path d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      <path
        fillRule="evenodd"
        d="M7 2.083V0h2v2.083A6.005 6.005 0 0113.917 7H16v2h-2.083A6.005 6.005 0 019 13.917V16H7v-2.083A6.005 6.005 0 012.083 9H0V7h2.083A6.005 6.005 0 017 2.083zM8 12a4 4 0 100-8 4 4 0 000 8z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'crosshair--line': (
    <symbol id="crosshair--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11 8a3 3 0 11-6 0 3 3 0 016 0zM9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M7.25 0v2.046A6.003 6.003 0 002.046 7.25H0v1.5h2.046a6.003 6.003 0 005.204 5.204V16h1.5v-2.046a6.003 6.003 0 005.204-5.204H16v-1.5h-2.046A6.003 6.003 0 008.75 2.046V0h-1.5zM8 12.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'currency-usd--fill': (
    <symbol id="currency-usd--fill" viewBox="0 0 16 16">
      <path d="M10.17 2.576a4.841 4.841 0 00-1.42-.396V.5h-1.5v1.652a5.344 5.344 0 00-1.694.42c-.673.296-1.195.707-1.572 1.23-.383.534-.56 1.176-.557 1.83-.004.856.273 1.524.824 2.018.56.5 1.335.867 2.331 1.096l1.22.285c.428.1.785.21 1.067.332.288.119.512.266.663.446.154.182.23.41.234.648a1.138 1.138 0 01-.25.703 1.529 1.529 0 01-.673.468c-.284.11-.623.162-1.013.162a3 3 0 01-1.141-.203 1.783 1.783 0 01-.79-.614 1.842 1.842 0 01-.314-.89H3.128c.028.838.23 1.526.597 2.072.387.575.93 1.005 1.634 1.29.553.223 1.182.36 1.891.41V15.5h1.5v-1.669a5.618 5.618 0 001.556-.37c.672-.273 1.18-.665 1.533-1.17.352-.506.532-1.114.536-1.83a3.238 3.238 0 00-.23-1.22 2.768 2.768 0 00-.66-.956 4.002 4.002 0 00-1.083-.726 6.946 6.946 0 00-1.5-.493L7.9 6.838a5.793 5.793 0 01-.733-.205 2.728 2.728 0 01-.576-.277 1.299 1.299 0 01-.38-.395.965.965 0 01-.118-.528c.005-.237.075-.45.212-.635.139-.191.343-.335.602-.437.262-.102.583-.151.957-.151.566 0 1.02.12 1.347.38.302.234.481.554.54.95h2.461a3.271 3.271 0 00-.54-1.724c-.353-.53-.853-.944-1.502-1.24z" />
    </symbol>
  ),
  'currency-usd--line': (
    <symbol id="currency-usd--line" viewBox="0 0 16 16">
      <path d="M10.967 3.447c-.492-.57-1.22-1.002-2.217-1.145V.5h-1.5v1.797c-.992.128-1.755.51-2.299 1.041C4.291 3.982 4 4.802 4 5.5c0 .703.267 1.43.93 2.026.643.577 1.61.99 2.947 1.214 1.388.231 1.929.668 2.148.96.22.293.225.577.225.8 0 .391-.1.814-.377 1.131-.26.297-.779.619-1.873.619-1.317 0-1.958-.429-2.29-.844-.357-.447-.46-1.008-.46-1.406h-1.5c0 .602.147 1.54.79 2.344.563.704 1.44 1.22 2.71 1.365V15.5h1.5v-1.795c1.012-.126 1.752-.515 2.252-1.086.598-.683.748-1.51.748-2.119 0-.614-.151-1.202-.525-1.7-.53-.708-1.49-1.271-3.102-1.54-1.177-.196-1.836-.532-2.19-.85-.333-.3-.433-.613-.433-.91 0-.302.134-.732.499-1.088.351-.343.965-.662 2.001-.662 1.008 0 1.541.34 1.832.678.315.364.418.807.418 1.072h1.5a3.23 3.23 0 00-.783-2.053z" />
    </symbol>
  ),
  'db-storage--fill': (
    <symbol id="db-storage--fill" viewBox="0 0 16 16">
      <path d="M8 6.25c3.314 0 6-1.175 6-2.625S11.314 1 8 1 2 2.175 2 3.625 4.686 6.25 8 6.25z" />
      <path d="M8 8C4.7 8 2 6.862 2 5.375V8c0 1.488 2.7 2.625 6 2.625S14 9.488 14 8V5.375C14 6.862 11.3 8 8 8z" />
      <path d="M8 12.375c-3.3 0-6-1.137-6-2.625v2.625C2 13.863 4.7 15 8 15s6-1.137 6-2.625V9.75c0 1.488-2.7 2.625-6 2.625z" />
    </symbol>
  ),
  'db-storage--line': (
    <symbol id="db-storage--line" viewBox="0 0 16 16">
      <path d="M3.333 8c0 .23.308.633 1.02 1.026.923.51 2.232.816 3.647.816 1.415 0 2.724-.306 3.646-.816.713-.393 1.02-.795 1.02-1.026V6.4c-1.1.751-2.781 1.232-4.666 1.232-1.885 0-3.567-.48-4.667-1.232V8zm9.334 2.084c-1.1.752-2.782 1.232-4.667 1.232-1.885 0-3.567-.48-4.667-1.232v1.6c0 .231.308.633 1.02 1.027.923.51 2.232.815 3.647.815 1.415 0 2.724-.306 3.646-.815.713-.394 1.02-.796 1.02-1.027v-1.6zM2 11.684V4.316C2 2.485 4.686 1 8 1s6 1.485 6 3.316v7.368C14 13.516 11.314 15 8 15s-6-1.485-6-3.316zm6-5.526c1.415 0 2.724-.306 3.646-.816.713-.394 1.02-.795 1.02-1.026 0-.231-.307-.633-1.02-1.027-.922-.51-2.23-.815-3.646-.815-1.415 0-2.724.306-3.646.815-.713.394-1.02.796-1.02 1.027 0 .23.307.632 1.02 1.026.922.51 2.23.816 3.646.816z" />
    </symbol>
  ),
  'device-ata--fill': (
    <symbol id="device-ata--fill" viewBox="0 0 16 16">
      <path d="M0 3v10h16V3H0zm4 7H2V6h2v4zm4 0H6V6h2v4zm4.5-1c-.8 0-1.5-.7-1.5-1.5S11.7 6 12.5 6s1.5.7 1.5 1.5S13.3 9 12.5 9z" />
    </symbol>
  ),
  'device-ata--line': (
    <symbol id="device-ata--line" viewBox="0 0 16 16">
      <path d="M12.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3 10h2V6H3v4zm5.5 0h-2V6h2v4z" />
      <path
        fillRule="evenodd"
        d="M0 3h16v10H0V3zm1.5 1.5h13v7h-13v-7z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-fax--fill': (
    <symbol id="device-fax--fill" viewBox="0 0 16 16">
      <path d="M3 0h10v3.5H3V0zm.5 12h9v4h-9v-4z" />
      <path
        fillRule="evenodd"
        d="M16 14V5H0v9h2v-3.5h12V14h2zM2 7.9h2.5V6.4H2v1.5zm4-1.5v1.5h2.5V6.4H6z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-fax--line': (
    <symbol id="device-fax--line" viewBox="0 0 16 16">
      <path d="M2.5 7.9V6.4H5v1.5H2.5zm4 0V6.4H9v1.5H6.5z" />
      <path
        fillRule="evenodd"
        d="M3 0v4H0v10h3v2h10v-2h3V4h-3V0H3zm8.5 1.5h-7V4h7V1.5zm-10 11v-7h13v7H13v-2H3v2H1.5zm3-.5h7v2.5h-7V12z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-mobile--fill': (
    <symbol id="device-mobile--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 16V0h10v16H3zm3.5-1.25h3v-1.5h-3v1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-mobile--line': (
    <symbol id="device-mobile--line" viewBox="0 0 16 16">
      <path d="M6.5 13.75h3v-1.5h-3v1.5z" />
      <path
        fillRule="evenodd"
        d="M3 0h10v16H3V0zm1.5 1.5h7v13h-7v-13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-monitor--fill': (
    <symbol id="device-monitor--fill" viewBox="0 0 16 16">
      <path d="M16 1H0v12h16V1zM4 16l1-2h6l1 2H4z" />
    </symbol>
  ),
  'device-monitor--line': (
    <symbol id="device-monitor--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 1h16v12H0V1zm1.5 1.5h13v9h-13v-9z"
        clipRule="evenodd"
      />
      <path d="M4 16l1-2h6l1 2H4z" />
    </symbol>
  ),
  'device-monitor-arrow-top--fill': (
    <symbol id="device-monitor-arrow-top--fill" viewBox="0 0 16 16">
      <path d="M0 1h16v12H8.75V8H12L8 4 4 8h3.25v5H0V1zm4 15l1-2h6l1 2H4z" />
    </symbol>
  ),
  'device-monitor-arrow-top--line': (
    <symbol id="device-monitor-arrow-top--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 1v12h16V1H0zm14.5 1.5h-13v9h5.75V6.856L5.071 9 4 7.941 8 4l4 3.941L10.929 9 8.75 6.856V11.5h5.75v-9z"
        clipRule="evenodd"
      />
      <path d="M5 14l-1 2h8l-1-2H5z" />
    </symbol>
  ),
  'device-monitor-arrow-top-right--fill': (
    <symbol id="device-monitor-arrow-top-right--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 1h16v12H0V1zm14 2v5.978L11.542 6.52l-4.483 4.484-1.061-1.06 4.483-4.484L8.023 3H14z"
        clipRule="evenodd"
      />
      <path d="M4 16l1-2h6l1 2H4z" />
    </symbol>
  ),
  'device-monitor-arrow-top-right--line': (
    <symbol id="device-monitor-arrow-top-right--line" viewBox="0 0 16 16">
      <path d="M13.5 3.5v6H12V6.05l-4 4.006L6.944 9l4.006-4H7.496V3.5H13.5z" />
      <path
        fillRule="evenodd"
        d="M0 1v12h16V1H0zm14.5 1.5h-13v9h13v-9z"
        clipRule="evenodd"
      />
      <path d="M5 14l-1 2h8l-1-2H5z" />
    </symbol>
  ),
  'device-monitor-slash--fill': (
    <symbol id="device-monitor-slash--fill" viewBox="0 0 16 16">
      <path d="M0 14.943L1.057 16l3-3H16V1l-1.057-1L0 14.943zM11.82 1H0v11.82L11.82 1z" />
      <path d="M5 14l-1 2h8l-1-2H5z" />
    </symbol>
  ),
  'device-monitor-slash--line': (
    <symbol id="device-monitor-slash--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 14.943L1.057 16l3-3H16V1l-1.057-1L0 14.943zM5.557 11.5H14.5V2.557L5.557 11.5z"
        clipRule="evenodd"
      />
      <path d="M10.32 2.5H1.5v8.82L0 12.82V1h11.82l-1.5 1.5zM5 14l-1 2h8l-1-2H5z" />
    </symbol>
  ),
  'device-mst--fill': (
    <symbol id="device-mst--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 14l10 2V0L0 2v12zm2.5-9.2h5v1.5H5.8V12H4.3V6.2H2.5V4.8z"
        clipRule="evenodd"
      />
      <path d="M14 12h1c.6 0 1-.4 1-1V7h-2v5zm2-7a1 1 0 11-2 0 1 1 0 012 0zm-5 8h1c.6 0 1-.4 1-1V6h-2v7zm2-9a1 1 0 11-2 0 1 1 0 012 0z" />
    </symbol>
  ),
  'device-mst--line': (
    <symbol id="device-mst--line" viewBox="0 0 16 16">
      <path d="M2.5 4.8h5v1.5H5.8V12H4.3V6.2H2.5V4.8z" />
      <path
        fillRule="evenodd"
        d="M10 0v16L0 14V2l10-2zM8.5 14.17l-7-1.4V3.23l7-1.4v12.34z"
        clipRule="evenodd"
      />
      <path d="M14.25 12h.5c.6 0 1-.4 1-1V7h-1.5v5zM16 5a1 1 0 11-2 0 1 1 0 012 0zm-4.75 8h.5c.6 0 1-.4 1-1V6h-1.5v7zM13 4a1 1 0 11-2 0 1 1 0 012 0z" />
    </symbol>
  ),
  'device-soft-phone--fill': (
    <symbol id="device-soft-phone--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 1h16v12H0V1zm4.096 4.916s.2.7.7 1.2c.6.7 1.2.8 1.3.8l.8-.6 1.4.5.2.1s.1.7-.2 1c-.8.9-1.8 1.1-4-1.1l-.1-.1c-2.2-2.2-1.9-3.2-1.1-4 .3-.3.9-.2.9-.2.1 0 .2.2.2.2l.4 1.4-.5.8z"
        clipRule="evenodd"
      />
      <path d="M4 16l1-2h6l1 2H4z" />
    </symbol>
  ),
  'device-soft-phone--line': (
    <symbol id="device-soft-phone--line" viewBox="0 0 16 16">
      <path d="M5.296 7.616c-.5-.5-.7-1.2-.7-1.2l.5-.8-.4-1.4s-.1-.2-.2-.2c0 0-.6-.1-.9.2-.8.8-1.1 1.8 1.1 4l.1.1c2.2 2.2 3.2 2 4 1.1.3-.3.2-1 .2-1l-.2-.1-1.4-.5-.8.6c-.1 0-.7-.1-1.3-.8z" />
      <path
        fillRule="evenodd"
        d="M0 1v12h16V1H0zm14.5 1.5h-13v9h13v-9z"
        clipRule="evenodd"
      />
      <path d="M5 14l-1 2h8l-1-2H5z" />
    </symbol>
  ),
  'device-sprint-phone--fill': (
    <symbol id="device-sprint-phone--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 1h1.5v1H13v13H3V1zm8.5 2.5V7h-7V3.5h7z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-sprint-phone--line': (
    <symbol id="device-sprint-phone--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 1h1.5v1.5H13V15H3V1zm1.5 3v3h7V4h-7zm7 9.5v-5h-7v5h7z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-tablet--fill': (
    <symbol id="device-tablet--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 14V2h16v12H0zm13.25-7.5v3h1.5v-3h-1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-tablet--line': (
    <symbol id="device-tablet--line" viewBox="0 0 16 16">
      <path d="M11.75 6.5v3h1.5v-3h-1.5z" />
      <path
        fillRule="evenodd"
        d="M0 14h16V2H0v12zM14.5 3.5v9h-13v-9h13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'device-voip-phone--fill': (
    <symbol id="device-voip-phone--fill" viewBox="0 0 16 16">
      <path d="M0 0h5v16H0V0zm6 1v14h10V1H6zm3 13H7v-2h2v2zm0-3H7V9h2v2zm0-3H7V6h2v2zm3 6h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm3 6h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm0-3H7V2h8v3z" />
    </symbol>
  ),
  'device-voip-phone--line': (
    <symbol id="device-voip-phone--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5 0H0v16h5V0zM1.5 1.5h2v13h-2v-13zM6 15V1h10v14H6zm1.5-1.5H9V12H7.5v1.5zm0-3H9V9H7.5v1.5zm0-3H9V6H7.5v1.5zm2.75 6h1.5V12h-1.5v1.5zm0-3h1.5V9h-1.5v1.5zm0-3h1.5V6h-1.5v1.5zm2.75 6h1.5V12H13v1.5zm0-3h1.5V9H13v1.5zm0-3h1.5V6H13v1.5zm-5.5-3h7v-2h-7v2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'dot--fill': (
    <symbol id="dot--fill" viewBox="0 0 16 16">
      <path d="M8 12a4 4 0 100-8 4 4 0 000 8z" />
    </symbol>
  ),
  'dot--line': (
    <symbol id="dot--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12 8a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'downgrade--fill': (
    <symbol id="downgrade--fill" viewBox="0 0 16 16">
      <path d="M14 1H2v1.5h12V1zm-3 13.5V13H5v1.5h6zM13 7H8.75V3.5h-1.5V7H3l5 5 5-5z" />
    </symbol>
  ),
  'downgrade--line': (
    <symbol id="downgrade--line" viewBox="0 0 16 16">
      <path d="M15 1H1v1.5h14V1zm-4 12.5H5V15h6v-1.5zm-2.999-1l4.073-4.024-1.071-1.06-2.288 2.256V4H7.287v5.672L5 7.415 3.929 8.476 8 12.5z" />
    </symbol>
  ),
  'download-cloud--fill': (
    <symbol id="download-cloud--fill" viewBox="0 0 16 16">
      <path d="M15.123 10.5H10.5V6h-5v4.5H2.031A5.981 5.981 0 010 6a6 6 0 0111.664-1.986 4.027 4.027 0 013.165 1.158A3.987 3.987 0 0116 8c0 .946-.328 1.815-.877 2.5z" />
      <path d="M12 12H8.75V7.5h-1.5V12H4l4 4 4-4z" />
    </symbol>
  ),
  'download-cloud--line': (
    <symbol id="download-cloud--line" viewBox="0 0 16 16">
      <path d="M1.5 6c0 1.243.504 2.368 1.318 3.182l-1.06 1.06a6 6 0 119.906-6.229 4 4 0 013.15 6.83l-1.061-1.06A2.5 2.5 0 0010.5 6a4.502 4.502 0 00-9 0z" />
      <path d="M8.001 16l4.073-4.024-1.071-1.06-2.288 2.256V7.5H7.287v5.672L5 10.915l-1.071 1.061L8 16z" />
    </symbol>
  ),
  'download-tray--fill': (
    <symbol id="download-tray--fill" viewBox="0 0 16 16">
      <path d="M12 8H8.75V1h-1.5v7H4l4 4 4-4z" />
      <path d="M1 11h1.5v2.5h11V11H15v4H1v-4z" />
    </symbol>
  ),
  'download-tray--line': (
    <symbol id="download-tray--line" viewBox="0 0 16 16">
      <path d="M8.001 12l4.073-4.024-1.071-1.06-2.288 2.256V1H7.287v8.172L5 6.915 3.929 7.976 8 12z" />
      <path d="M1 11h1.5v2.5h11V11H15v4H1v-4z" />
    </symbol>
  ),
  'drag-bars-horizontal--fill': (
    <symbol id="drag-bars-horizontal--fill" viewBox="0 0 16 16">
      <path d="M2 7.25h12v-1.5H2v1.5zm12 1.5H2v1.5h12v-1.5z" />
    </symbol>
  ),
  'drag-bars-horizontal--line': (
    <symbol id="drag-bars-horizontal--line" viewBox="0 0 16 16">
      <path d="M2 6h12v1H2V6zm0 3h12v1H2V9z" />
    </symbol>
  ),
  'drag-bars-vertical--fill': (
    <symbol id="drag-bars-vertical--fill" viewBox="0 0 16 16">
      <path d="M7.25 14V2h-1.5v12h1.5zm1.5-12v12h1.5V2h-1.5z" />
    </symbol>
  ),
  'drag-bars-vertical--line': (
    <symbol id="drag-bars-vertical--line" viewBox="0 0 16 16">
      <path d="M7 2v12H6V2h1zm3 0v12H9V2h1z" />
    </symbol>
  ),
  'drag-dots-horizontal--fill': (
    <symbol id="drag-dots-horizontal--fill" viewBox="0 0 16 16">
      <path d="M2 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm4 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM11.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM14 7.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3.5 10a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm5.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </symbol>
  ),
  'drag-dots-horizontal--line': (
    <symbol id="drag-dots-horizontal--line" viewBox="0 0 16 16">
      <path d="M2 7a1 1 0 100-2 1 1 0 000 2zm5-1a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm-4 0a1 1 0 100-2 1 1 0 000 2zm-3-1a1 1 0 11-2 0 1 1 0 012 0zm-5 1a1 1 0 100-2 1 1 0 000 2z" />
    </symbol>
  ),
  'drag-dots-vertical--fill': (
    <symbol id="drag-dots-vertical--fill" viewBox="0 0 16 16">
      <path d="M6 3.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM8.5 2a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm0 4a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm1.5 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM8.5 14a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-4-8a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM6 11.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM4.5 14a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
    </symbol>
  ),
  'drag-dots-vertical--line': (
    <symbol id="drag-dots-vertical--line" viewBox="0 0 16 16">
      <path d="M9 2a1 1 0 102 0 1 1 0 00-2 0zm1 5a1 1 0 110-2 1 1 0 010 2zm0 4a1 1 0 110-2 1 1 0 010 2zm-5 3a1 1 0 102 0 1 1 0 00-2 0zm4 0a1 1 0 102 0 1 1 0 00-2 0zm-4-4a1 1 0 102 0 1 1 0 00-2 0zm1-3a1 1 0 110-2 1 1 0 010 2zM5 2a1 1 0 102 0 1 1 0 00-2 0z" />
    </symbol>
  ),
  'ear--fill': (
    <symbol id="ear--fill" viewBox="0 0 16 16">
      <path d="M12 6a2 2 0 11-4 0 2 2 0 014 0z" />
      <path
        fillRule="evenodd"
        d="M15.201 8.993a6 6 0 10-7.18 2.673A2.64 2.64 0 008 12a4 4 0 008 0c0-1.199-.233-2.274-.799-3.007zM10 9.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        clipRule="evenodd"
      />
      <path d="M2.5 6c0 2.03.806 3.871 2.116 5.221l-1.06 1.061A8.97 8.97 0 011 6 8.96 8.96 0 012.784.62l1.074 1.075A7.466 7.466 0 002.5 6z" />
    </symbol>
  ),
  'ear--line': (
    <symbol id="ear--line" viewBox="0 0 16 16">
      <path d="M14.5 6H16a5.981 5.981 0 00-1.757-4.243A6 6 0 004 6c0 2.528 1.637 4.82 4.014 5.664A4 4 0 1016 12h-1.5a2.49 2.49 0 01-.718 1.753A2.492 2.492 0 0112 14.5c-1.375 0-2.505-1.15-2.5-2.52.005-.555.19-1.067.5-1.48a4.502 4.502 0 010-9 4.48 4.48 0 012.862 1.028A4.49 4.49 0 0114.5 6z" />
      <path d="M10 8a2 2 0 100-4 2 2 0 000 4zM2.5 6c0 2.03.806 3.871 2.116 5.221l-1.06 1.061A8.97 8.97 0 011 6 8.96 8.96 0 012.784.62l1.074 1.075A7.466 7.466 0 002.5 6z" />
    </symbol>
  ),
  'ellipses-horizontal--fill': (
    <symbol id="ellipses-horizontal--fill" viewBox="0 0 16 16">
      <path d="M2 10a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4zm8-2a2 2 0 11-4 0 2 2 0 014 0z" />
    </symbol>
  ),
  'ellipses-horizontal--line': (
    <symbol id="ellipses-horizontal--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.5 8.25a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM2.25 9a.75.75 0 100-1.5.75.75 0 000 1.5zm8-.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zM8 9a.75.75 0 100-1.5A.75.75 0 008 9zm5.75 1.5a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm.75-2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'ellipses-vertical--fill': (
    <symbol id="ellipses-vertical--fill" viewBox="0 0 16 16">
      <path d="M6 2a2 2 0 104 0 2 2 0 00-4 0zm0 6a2 2 0 104 0 2 2 0 00-4 0zm0 6a2 2 0 104 0 2 2 0 00-4 0z" />
    </symbol>
  ),
  'ellipses-vertical--line': (
    <symbol id="ellipses-vertical--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 4.5A2.25 2.25 0 118 0a2.25 2.25 0 010 4.5zm-.75-2.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm.75 8a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM7.25 8a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm-1.5 5.75a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM8 14.5A.75.75 0 118 13a.75.75 0 010 1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'enter--fill': (
    <symbol id="enter--fill" viewBox="0 0 16 16">
      <path d="M1 1h5v3H4.5V2.5h-2v11h2V12H6v3H1V1z" />
      <path d="M9 12V8.75h6v-1.5H9V4L5 8l4 4z" />
    </symbol>
  ),
  'enter--line': (
    <symbol id="enter--line" viewBox="0 0 16 16">
      <path d="M1 1h5v3H4.5V2.5h-2v11h2V12H6v3H1V1z" />
      <path d="M5 8.001l4.024 4.073 1.06-1.071-2.256-2.288H15V7.287H7.828L10.084 5l-1.06-1.071L5 8z" />
    </symbol>
  ),
  'exit--fill': (
    <symbol id="exit--fill" viewBox="0 0 16 16">
      <path d="M1 1h5v3H4.5V2.5h-2v11h2V12H6v3H1V1z" />
      <path d="M11 12V8.75H5v-1.5h6V4l4 4-4 4z" />
    </symbol>
  ),
  'exit--line': (
    <symbol id="exit--line" viewBox="0 0 16 16">
      <path d="M1 1h5v3H4.5V2.5h-2v11h2V12H6v3H1V1z" />
      <path d="M15 8.001l-4.024 4.073-1.06-1.071 2.256-2.288H5V7.287h7.172L9.915 5l1.061-1.071L15 8z" />
    </symbol>
  ),
  'eye--fill': (
    <symbol id="eye--fill" viewBox="0 0 16 16">
      <path d="M8 10a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M8 2C4.405 2 .627 4.587 0 8c.627 3.414 4.405 6 8 6 3.595 0 7.373-2.586 8-6-.627-3.413-4.405-6-8-6zm3.334 6a3.333 3.333 0 11-6.667 0 3.333 3.333 0 016.667 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'eye--line': (
    <symbol id="eye--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11 8a3 3 0 11-6 0 3 3 0 016 0zM9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 2c3.595 0 7.373 2.587 8 6-.627 3.414-4.405 6-8 6-3.595 0-7.373-2.586-8-6 .627-3.413 4.405-6 8-6zm-4.23 9.068C2.622 10.23 1.827 9.144 1.536 8c.29-1.144 1.084-2.23 2.234-3.068C5.009 4.029 6.547 3.5 8 3.5c1.452 0 2.99.53 4.228 1.432 1.15.838 1.945 1.924 2.236 3.068-.291 1.144-1.086 2.23-2.236 3.068C10.991 11.971 9.453 12.5 8 12.5c-1.453 0-2.991-.53-4.23-1.432z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'eye-closed--fill': (
    <symbol id="eye-closed--fill" viewBox="0 0 16 16">
      <path d="M.13 5a5.65 5.65 0 00-.13.55c.243 1.321.957 2.518 1.95 3.49L.47 10.52l1.06 1.06 1.588-1.587a9.15 9.15 0 001.9.99l-.714 1.789 1.392.557.772-1.93c.508.1 1.022.151 1.532.151s1.024-.052 1.532-.151l.772 1.93 1.392-.557-.715-1.788a9.174 9.174 0 001.901-.991l1.588 1.588 1.06-1.061-1.48-1.48c.993-.972 1.707-2.169 1.95-3.49a5.667 5.667 0 00-.13-.55C14.962 7.517 11.4 8.55 8 8.55 4.601 8.55 1.038 7.517.13 5z" />
    </symbol>
  ),
  'eye-closed--line': (
    <symbol id="eye-closed--line" viewBox="0 0 16 16">
      <path d="M2.247 8.693C1.155 7.488.527 6.117.277 5.197l1.447-.394C2.184 6.49 4.094 9.75 8 9.75c3.905 0 5.816-3.26 6.276-4.947l1.447.394c-.25.92-.878 2.29-1.97 3.496l1.777 1.777-1.06 1.06-1.82-1.82a7.41 7.41 0 01-1.758 1.002l.804 2.01-1.392.557-.862-2.154A8.184 8.184 0 018 11.25c-.509 0-.989-.044-1.442-.125l-.862 2.154-1.392-.557.803-2.01A7.436 7.436 0 013.35 9.71l-1.82 1.82-1.06-1.06 1.777-1.777z" />
    </symbol>
  ),
  'eye-dropper--fill': (
    <symbol id="eye-dropper--fill" viewBox="0 0 16 16">
      <path d="M11.204 1.243s.611-.609 1.321.1l2.131 2.125c.71.708.1 1.317.1 1.317l-2.443 2.436.71.708-1.527 1.523-4.972-4.958 1.527-1.523.71.709 2.443-2.437z" />
      <path
        fillRule="evenodd"
        d="M6.304 6.17l3.551 3.54-4.367 4.356c-1.071 1.068-3.772.928-3.772.928l-.71-.708s-.14-2.693.931-3.762L6.304 6.17zm.15 1.975l1.42 1.417-3.451 3.441c-.244.243-.826.442-1.595.536a7.92 7.92 0 01-.401.038c.009-.127.021-.261.038-.4.094-.767.294-1.347.537-1.59l3.451-3.442z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'eye-dropper--line': (
    <symbol id="eye-dropper--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.496 9.452l1.527-1.523-.71-.708 2.443-2.436s.61-.61-.1-1.317l-2.13-2.125c-.71-.709-1.321-.1-1.321-.1L8.762 3.68l-.71-.709-1.528 1.523 4.972 4.958zm.32-6.7l1.426 1.424-2.456 2.45L9.36 5.201l2.456-2.45zM9.855 9.71L6.304 6.17l-4.367 4.354c-1.072 1.069-.93 3.762-.93 3.762l.71.708s2.7.14 3.771-.928L9.855 9.71zm-1.981-.148l-1.42-1.417-3.452 3.442c-.243.243-.443.823-.537 1.59-.017.139-.03.274-.038.4a7.92 7.92 0 00.4-.038c.77-.094 1.352-.293 1.596-.536l3.45-3.441z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'eye-slash--fill': (
    <symbol id="eye-slash--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 14.943L1.057 16l2.998-2.998C5.279 13.636 6.652 14 8 14c3.595 0 7.373-2.586 8-6-.304-1.657-1.351-3.119-2.759-4.185L16 1.057 14.943 0 0 14.943zm6.231-4.117a3.333 3.333 0 004.595-4.595l-.986.985A2 2 0 017.216 9.84l-.985.986z"
        clipRule="evenodd"
      />
      <path d="M8.15 4.67L8 4.667A3.333 3.333 0 004.67 8.15l-3.025 3.024C.812 10.264.217 9.182 0 8c.627-3.413 4.405-6 8-6 .817 0 1.643.134 2.44.38L8.15 4.67z" />
    </symbol>
  ),
  'eye-slash--line': (
    <symbol id="eye-slash--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 14.943L1.057 16l2.998-2.998C5.279 13.636 6.652 14 8 14c3.595 0 7.373-2.586 8-6-.304-1.657-1.351-3.119-2.759-4.185L16 1.057 14.943 0 0 14.943zm5.179-3.065c.906.4 1.881.622 2.821.622 1.453 0 2.991-.53 4.23-1.432 1.149-.838 1.944-1.924 2.235-3.068-.291-1.144-1.086-2.23-2.236-3.068l-.06-.044-1.586 1.585a3 3 0 01-4.11 4.11L5.18 11.878zm2.43-2.43a1.502 1.502 0 001.84-1.84l-1.84 1.84z"
        clipRule="evenodd"
      />
      <path d="M9.204 3.616A6.493 6.493 0 008 3.5c-1.453 0-2.991.53-4.23 1.432C2.622 5.77 1.827 6.856 1.536 8c.19.747.595 1.468 1.172 2.113l-1.062 1.061C.812 10.264.217 9.182 0 8c.627-3.413 4.405-6 8-6 .817 0 1.643.134 2.44.38L9.204 3.616z" />
      <path d="M7.814 5.006a3 3 0 00-2.808 2.808l2.808-2.808z" />
    </symbol>
  ),
  'failover--fill': (
    <symbol id="failover--fill" viewBox="0 0 16 16">
      <path d="M1 1h6v2.25h2V1h6v6h-2.25v1.5h-1.5V7H9V4.75H7V7H4.75v2H7v2.25h1.5v1.5H7V15H1V9h2.25V7H1V1z" />
      <path d="M12 10.94l1.97-1.97L15 10l-1.94 2L15 14l-1 1-2-1.94L10 15l-1.03-1.03L10.94 12l-1.97-1.97 1.06-1.06L12 10.94z" />
    </symbol>
  ),
  'failover--line': (
    <symbol id="failover--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 1v6h2.25v2H1v6h6v-2.25h1.5v-1.5H7V9H4.75V7H7V4.75h2V7h2.25v1.5h1.5V7H15V1H9v2.25H7V1H1zm4.5 1.5h-3v3h3v-3zm0 8h-3v3h3v-3zm8-8h-3v3h3v-3z"
        clipRule="evenodd"
      />
      <path d="M13.97 8.97L12 10.94l-1.97-1.97-1.06 1.06L10.94 12l-1.97 1.97L10 15l2-1.94L14 15l1-1-1.94-2L15 10l-1.03-1.03z" />
    </symbol>
  ),
  'file--fill': (
    <symbol id="file--fill" viewBox="0 0 16 16">
      <path d="M8 0v6h6v10H2V0h6z" />
      <path d="M9.5 4.5H14L9.5 0v4.5z" />
    </symbol>
  ),
  'file--line': (
    <symbol id="file--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M2 0v16h12V5L9 0H2zm10.5 6.5h-5v-5h-4v13h9v-8zM12 5L9 2v3h3z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'filter-bars--fill': (
    <symbol id="filter-bars--fill" viewBox="0 0 16 16">
      <path d="M15 5H1V3h14v2zM4 7h8v2H4V7zm6 4H6v2h4v-2z" />
    </symbol>
  ),
  'filter-bars--line': (
    <symbol id="filter-bars--line" viewBox="0 0 16 16">
      <path d="M15 4.75H1v-1.5h14v1.5zM4 7.25h8v1.5H4v-1.5zm6 4H6v1.5h4v-1.5z" />
    </symbol>
  ),
  'filter-funnel--fill': (
    <symbol id="filter-funnel--fill" viewBox="0 0 16 16">
      <path d="M1 2.5V1h14v1.5L10 7v9l-4-2V7L1 2.5z" />
    </symbol>
  ),
  'filter-funnel--line': (
    <symbol id="filter-funnel--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7.5 6.832v6.24l1 .5v-6.74L13.313 2.5H2.687L7.5 6.832zM1 1h14v2l-5 4.5V16l-4-2V7.5L1 3V1z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'flag--fill': (
    <symbol id="flag--fill" viewBox="0 0 16 16">
      <path d="M1 1h1.5v14H1V1zm7.455 8.5H3.5V1h4.955L9.5 2.5H15V11H9.5L8.455 9.5z" />
    </symbol>
  ),
  'flag--line': (
    <symbol id="flag--line" viewBox="0 0 16 16">
      <path d="M1 1h1.5v14H1V1z" />
      <path
        fillRule="evenodd"
        d="M3.5 1v8.5h4.955L9.5 11H15V2.5H9.5L8.455 1H3.5zm5.737 7H5V2.5h2.672L8.717 4H13.5v5.5h-3.217L9.237 8z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder--fill': (
    <symbol id="folder--fill" viewBox="0 0 16 16">
      <path d="M8 3L7 1H0v14h16V3H8z" />
    </symbol>
  ),
  'folder--line': (
    <symbol id="folder--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7.073 4.5l-1-2H1.5v11h13v-9H7.073zM16 3v12H0V1h7l1 2h8z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-arrow--fill': (
    <symbol id="folder-arrow--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7 1l1 2h8v12H0V1h7zM4 9.75h6.19l-1.72 1.72 1.06 1.06L13.06 9 9.53 5.47 8.47 6.53l1.72 1.72H4v1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-arrow--line': (
    <symbol id="folder-arrow--line" viewBox="0 0 16 16">
      <path d="M4 9.75v-1.5h6.19L8.47 6.53l1.06-1.06L13.06 9l-3.53 3.53-1.06-1.06 1.72-1.72H4z" />
      <path
        fillRule="evenodd"
        d="M16 3v12H0V1h7l1 2h8zM7.073 4.5l-1-2H1.5v11h13v-9H7.073z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-check--fill': (
    <symbol id="folder-check--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7 1l1 2h8v12H0V1h7zm5.583 5.53l-1.06-1.06-4.97 4.97L4.53 8.416l-1.06 1.06 3.083 3.084 6.03-6.03z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-check--line': (
    <symbol id="folder-check--line" viewBox="0 0 16 16">
      <path d="M12.583 6.53l-1.06-1.06-4.97 4.97L4.53 8.416l-1.06 1.06 3.083 3.084 6.03-6.03z" />
      <path
        fillRule="evenodd"
        d="M16 3H8L7 1H0v14h16V3zM7.073 4.5H14.5v9h-13v-11h4.573l1 2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-group--fill': (
    <symbol id="folder-group--fill" viewBox="0 0 16 16">
      <path d="M2 1h6.5l1 2H16v10h-1.5V4.5h-6l-1-2H2V1z" />
      <path d="M0 3.5h7l1 2h5.5V15H0V3.5z" />
    </symbol>
  ),
  'folder-group--line': (
    <symbol id="folder-group--line" viewBox="0 0 16 16">
      <path d="M2 1h6.5l1 2H16v10h-1.5V4.5h-6l-1-2H2V1z" />
      <path
        fillRule="evenodd"
        d="M13.5 5.5H8l-1-2H0V15h13.5V5.5zM7.073 7H12v6.5H1.5V5h4.573l1 2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-minus--fill': (
    <symbol id="folder-minus--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7 1l1 2h8v12H0V1h7zM5 8.25v1.5h6v-1.5H5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-minus--line': (
    <symbol id="folder-minus--line" viewBox="0 0 16 16">
      <path d="M5 8.25v1.5h6v-1.5H5z" />
      <path
        fillRule="evenodd"
        d="M16 3H8L7 1H0v14h16V3zM7.073 4.5H14.5v9h-13v-11h4.573l1 2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-open--fill': (
    <symbol id="folder-open--fill" viewBox="0 0 16 16">
      <path d="M14 2v1.5H1.5L0 15V1h5l.5 1H14z" />
      <path d="M0 15h14l2-10H2.5L0 15z" />
    </symbol>
  ),
  'folder-open--line': (
    <symbol id="folder-open--line" viewBox="0 0 16 16">
      <path d="M14 2v1.5H1.5L0 15V1h5l.5 1H14z" />
      <path
        fillRule="evenodd"
        d="M0 15L2.5 5H16l-2 10H0zm1.921-1.5l1.75-7h10.5l-1.4 7H1.92z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-plus--fill': (
    <symbol id="folder-plus--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 3L7 1H0v14h16V3H8zM5 9.75v-1.5h2.25V6h1.5v2.25H11v1.5H8.75V12h-1.5V9.75H5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-plus--line': (
    <symbol id="folder-plus--line" viewBox="0 0 16 16">
      <path d="M5 9.75v-1.5h2.25V6h1.5v2.25H11v1.5H8.75V12h-1.5V9.75H5z" />
      <path
        fillRule="evenodd"
        d="M16 3v12H0V1h7l1 2h8zM7.073 4.5l-1-2H1.5v11h13v-9H7.073z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'folder-star--fill': (
    <symbol id="folder-star--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7 1l1 2h8v12H0V1h7zm-.843 11L8 10.971 9.843 12 9.5 9.814 11 8.271l-2.057-.3L8 6l-.943 1.971-2.057.3 1.5 1.543L6.157 12z"
        clipRule="evenodd"
      />
      ,
    </symbol>
  ),
  'folder-star--line': (
    <symbol id="folder-star--line" viewBox="0 0 16 16">
      <path d="M6.157 12L8 10.971 9.843 12 9.5 9.814 11 8.271l-2.057-.3L8 6l-.943 1.971-2.057.3 1.5 1.543L6.157 12z" />
      <path
        fillRule="evenodd"
        d="M16 3H8L7 1H0v14h16V3zM7.073 4.5H14.5v9h-13v-11h4.573l1 2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'gear--fill': (
    <symbol id="gear--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.988 2.722A7.987 7.987 0 00.354 5.641 2.995 2.995 0 011.5 8c0 .957-.448 1.81-1.146 2.36a7.991 7.991 0 001.634 2.918 3 3 0 014.256 2.529 8.026 8.026 0 003.512 0 3 3 0 014.256-2.53 7.987 7.987 0 001.634-2.918A2.995 2.995 0 0114.5 8c0-.957.448-1.81 1.146-2.36a7.987 7.987 0 00-1.634-2.918A3 3 0 019.756.193a8.028 8.028 0 00-3.512 0 3 3 0 01-4.256 2.53zM8 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'gear--line': (
    <symbol id="gear--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11 8a3 3 0 11-6 0 3 3 0 016 0zM9.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M.354 5.64a7.991 7.991 0 011.634-2.918A3 3 0 006.244.193a8.027 8.027 0 013.512 0 3 3 0 004.256 2.53 7.987 7.987 0 011.634 2.918A2.995 2.995 0 0014.5 8c0 .957.448 1.81 1.146 2.36a7.987 7.987 0 01-1.634 2.918 3 3 0 00-4.256 2.529 8.026 8.026 0 01-3.512 0 3 3 0 00-4.256-2.53A7.987 7.987 0 01.354 10.36 2.995 2.995 0 001.5 8c0-.957-.448-1.81-1.146-2.36zM3 8a4.48 4.48 0 00-.91-2.712c.135-.293.291-.574.466-.841a4.501 4.501 0 004.93-2.927 6.614 6.614 0 011.027 0 4.501 4.501 0 004.93 2.927c.176.267.332.548.466.84A4.483 4.483 0 0013 8c0 1.019.34 1.959.91 2.712a6.484 6.484 0 01-.466.841 4.501 4.501 0 00-4.93 2.927 6.6 6.6 0 01-1.027 0 4.501 4.501 0 00-4.93-2.927 6.486 6.486 0 01-.466-.84A4.495 4.495 0 003 8z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'gear-double--fill': (
    <symbol id="gear-double--fill" viewBox="0 0 16 16">
      <path d="M8.299 1.069A4.937 4.937 0 006.474 0C6.131.457 5.598.75 5 .75A1.843 1.843 0 013.526 0 4.937 4.937 0 001.7 1.069c.112.25.174.53.174.825 0 1.04-.775 1.893-1.754 1.958a5.482 5.482 0 000 2.296c.98.066 1.754.917 1.754 1.958 0 .295-.062.575-.174.825a4.98 4.98 0 001.302.866 6.963 6.963 0 011.052-3.495A1.659 1.659 0 013.438 5c0-.903.7-1.635 1.562-1.635.78 0 1.426.598 1.543 1.379.53-.278.935-.76 1.11-1.341.294-.104.596-.19.906-.254a2.009 2.009 0 01-.434-1.255c0-.295.062-.575.174-.825z" />
      <path
        fillRule="evenodd"
        d="M4 8.23a5.924 5.924 0 011.282-2.188c.301.133.637.208.99.208 1.25 0 2.272-.93 2.35-2.105a6.578 6.578 0 012.756 0c.078 1.175 1.1 2.105 2.35 2.105.353 0 .689-.075.99-.208A5.925 5.925 0 0116 8.23a2.212 2.212 0 00-.9 1.77c0 .718.352 1.357.9 1.77a5.925 5.925 0 01-1.282 2.188 2.436 2.436 0 00-.99-.208c-1.25 0-2.272.93-2.35 2.105a6.58 6.58 0 01-2.756 0c-.078-1.175-1.1-2.105-2.35-2.105-.353 0-.689.075-.99.208A5.924 5.924 0 014 11.77c.548-.412.9-1.051.9-1.769S4.548 8.643 4 8.23zM11.962 10c0 1.036-.879 1.875-1.962 1.875S8.038 11.035 8.038 10c0-1.036.879-1.875 1.962-1.875s1.962.84 1.962 1.875z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'gear-double--line': (
    <symbol id="gear-double--line" viewBox="0 0 16 16">
      <path d="M8.125 1.894c0 .477.163.915.434 1.255a6.946 6.946 0 00-.865.24 2.36 2.36 0 01-.289.719 3.525 3.525 0 01-.78-2.286A3.292 3.292 0 015 2.25a3.292 3.292 0 01-1.626-.428l.001.072c0 1.326-.743 2.528-1.875 3.104v.004c1.038.528 1.749 1.583 1.86 2.777a6.983 6.983 0 00-.357 2.018A4.98 4.98 0 011.7 8.931c.112-.25.174-.53.174-.825 0-1.04-.775-1.893-1.754-1.958a5.482 5.482 0 010-2.296c.98-.065 1.754-.917 1.754-1.958a2.03 2.03 0 00-.174-.825A4.937 4.937 0 013.526 0c.343.457.876.75 1.474.75S6.131.457 6.474 0A4.95 4.95 0 018.3 1.069a2.03 2.03 0 00-.174.825z" />
      <path d="M3.5 5c0 .497.242.937.614 1.21a7.03 7.03 0 01.788-1.007A2.386 2.386 0 006.5 4.967 1.5 1.5 0 003.5 5z" />
      <path
        fillRule="evenodd"
        d="M10 12.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zm.75-2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M11.378 4.145c.078 1.175 1.1 2.105 2.35 2.105.353 0 .689-.075.99-.208A5.925 5.925 0 0116 8.23a2.212 2.212 0 00-.9 1.77c0 .718.352 1.357.9 1.77a5.925 5.925 0 01-1.282 2.188 2.436 2.436 0 00-.99-.208c-1.25 0-2.272.93-2.35 2.105a6.58 6.58 0 01-2.756 0c-.078-1.175-1.1-2.105-2.35-2.105-.353 0-.689.075-.99.208A5.924 5.924 0 014 11.77c.548-.412.9-1.051.9-1.769S4.548 8.643 4 8.23a5.924 5.924 0 011.282-2.188c.301.133.637.208.99.208 1.25 0 2.272-.93 2.35-2.105a6.578 6.578 0 012.756 0zm-5.62 3.783a3.66 3.66 0 010 4.144c.037.067.076.133.116.198.132-.013.265-.02.399-.02 1.543 0 2.929.9 3.533 2.246a5.185 5.185 0 00.388 0c.604-1.346 1.99-2.246 3.533-2.246.134 0 .268.007.399.02.04-.065.079-.131.116-.198A3.66 3.66 0 0113.6 10c0-.773.24-1.483.642-2.072a4.32 4.32 0 00-.116-.198c-.131.013-.264.02-.399.02-1.543 0-2.929-.9-3.533-2.246a5.165 5.165 0 00-.388 0C9.202 6.85 7.816 7.75 6.273 7.75c-.134 0-.267-.007-.399-.02-.04.065-.079.131-.116.198z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'gear-service--fill': (
    <symbol id="gear-service--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4 2.82a3.95 3.95 0 01.855-1.459c.2.09.424.139.66.139.833 0 1.514-.62 1.566-1.403a4.385 4.385 0 011.838 0C8.97.88 9.652 1.5 10.485 1.5c.236 0 .46-.05.66-.139.385.418.68.914.855 1.46-.365.274-.6.7-.6 1.179 0 .479.235.905.6 1.18a3.948 3.948 0 01-.855 1.459c-.2-.09-.424-.139-.66-.139-.833 0-1.514.62-1.566 1.403a4.385 4.385 0 01-1.838 0C7.03 7.12 6.348 6.5 5.515 6.5c-.236 0-.46.05-.66.139A3.95 3.95 0 014 5.179c.365-.274.6-.7.6-1.179 0-.479-.235-.905-.6-1.18zM9.308 4c0 .69-.586 1.25-1.308 1.25-.722 0-1.308-.56-1.308-1.25S7.278 2.75 8 2.75c.722 0 1.308.56 1.308 1.25z"
        clipRule="evenodd"
      />
      <path d="M13.9 10.2c.5-.3 1.6-.8 2-.1.4.7-.5 1.3-.5 1.3S10 16 8 16c-.612 0-1.688-.526-2.643-.993-.762-.372-1.446-.707-1.757-.707-1 0-2.7.9-2.7.9L0 10.7c.86 0 1.491-.41 2.134-.829C2.838 9.414 3.555 8.948 4.6 9c.633 0 1.102.572 1.556 1.126l.144.174c1.1 1.4 3.5 1.4 3.5 1.4s.9 0 .9.4c0 .5-.9.4-.9.4H7.4c-.9 0-2.1-.3-2.1-.3.653.735 1.44 1.003 1.815 1.131.084.029.148.05.185.069.2.1 2 0 2 0 1.8 0 2.3-.4 2.3-1.3 0-1.392-1.287-1.346-2.28-1.31-.148.005-.29.01-.42.01.4-.4 2-1.4 2.4-1.4.4 0 .8.5.8.5.3-.4 1.1-.6 1.5-.4.4.2.3.7.3.7z" />
    </symbol>
  ),
  'gear-service--line': (
    <symbol id="gear-service--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.01 2.82a3.947 3.947 0 01.857-1.459c.201.09.426.139.662.139.835 0 1.518-.62 1.57-1.403a4.407 4.407 0 011.842 0c.053.783.736 1.403 1.57 1.403.237 0 .461-.05.663-.139.385.418.68.914.857 1.46A1.47 1.47 0 0011.429 4c0 .479.235.905.601 1.18a3.948 3.948 0 01-.856 1.459 1.632 1.632 0 00-.662-.139c-.835 0-1.518.62-1.57 1.403a4.407 4.407 0 01-1.843 0C7.047 7.12 6.364 6.5 5.53 6.5c-.236 0-.46.05-.662.139a3.947 3.947 0 01-.857-1.46c.366-.274.601-.7.601-1.179 0-.479-.235-.905-.6-1.18zM9.775 4c0 .966-.786 1.75-1.755 1.75A1.752 1.752 0 016.266 4c0-.966.785-1.75 1.754-1.75.97 0 1.755.784 1.755 1.75z"
        clipRule="evenodd"
      />
      <path d="M5.025 8.506c.625.004 1.096.315 1.48.778.656.796 1.43 1.284 2.498 1.284 1.022.226 2.025 1.933 1.022 1.933-1.002 0-3.54-1.06-4.275-1.989a2.717 2.717 0 01-.136-.184c-.123-.178-.261-.377-.44-.443-.64-.237-1.45.083-1.952.408l-.108.07c-.397.258-.878.571-1.474.733l.506 2.52c1.017-.43 1.95-.669 2.982-.213.263.117.546.275.84.44.685.383 1.43.8 2.127.8.727 0 1.848-.381 3.059-1.095 1.19-.702 2.372-1.67 3.22-2.726.369-.46.241-.788-.376-.48l-.909.452c0-.837-1.084-.276-1.362 0l-.055-.056c-.35-.351-.822-.824-1.28-.369l-.868-.917c.31-.309.538-.516.796-.602.342-.114.967-.102 1.49.24.616-.3 1.451-.578 2.038-.056 2.044-.654 2.76 1.178 1.59 2.636-.969 1.206-2.284 2.276-3.59 3.046C10.56 15.474 9.184 16 8.094 16c-.803 0-1.51-.352-2.21-.701-.97-.483-1.923-.958-3.094-.48-.491.2-.959.448-1.427.696l-.205.108L0 9.848c.976 0 1.637-.15 2.48-.694.617-.398 1.41-.7 2.545-.648z" />
    </symbol>
  ),
  'globe--fill': (
    <symbol id="globe--fill" viewBox="0 0 16 16">
      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm.2 10.9l-.1.4c0 .1-.1.4-.1.4 0 .1-.1.2-.1.3 0 0-.3.1-.3.2-.1 0-.1.1-.2.1l-.1.1c0 .1.1.3 0 .4-.1 0-.1 0-.1.1-.1 0 0 .1-.1.1s-.2.1-.2.2c0 .2 0 .2-.1.3 0 0-.2 0-.2.1v.2l-.2.1c-.2 0-.2 0-.3.1v.1c0 .003-.097-.01-.1 0 0 .1 0 .1-.1.2l-.1.1v.3c-.1 0-.2-.1-.4-.1 0-.2 0-.5.1-.5l.1-.2v-.4c0-.1.1-.2.1-.3.2-.1.1-.8.2-.8 0-.4.1-.5-.2-.6l-.2-.2c-.2 0-.3-.4-.3-.4-.1 0-.1-.1-.1-.2l-.3-.4c-.2-.1 0-.2 0-.4-.1-.1 0-.4.1-.4l.1-.1c.1.1.2-.1.1-.1v-.3c.1-.1 0-.3-.1-.1-.1 0-.4 0-.4-.2 0-.1-.1-.3-.2-.3 0-.1-.3-.3-.4-.3 0-.1-.1-.1-.1-.1.1.1 0 0-.1 0-.2 0-.4-.1-.4-.1 0-.1-.2-.1-.3-.2-.1 0-.2-.2-.2-.3 0-.2-.1-.4-.2-.4 0-.1-.2-.2-.2-.2v-.2c0-.1-.2-.3-.2-.2 0 .1.2.2.2.3l.2.3c.3.4-.2.1-.2-.1-.1-.1-.2-.3-.2-.4 0-.1-.1-.3-.1-.3 0-.1-.1-.2-.3-.2l-.2-.1c0-.1 0-.2-.1-.2v-.7c.3-.9.9-1.7 1.5-2.3h.1c.1.1.2.1.3.1h.2s.2-.1.1-.1c0-.1 0-.1-.1-.1 0-.1.2 0 .3 0 0-.1-.1-.1 0-.1.1-.1.2 0 .2-.1 0 0 .1 0 .1.1.1 0 .3.4.3.1.1 0 .1.2.1.3.1-.2.1-.3.1-.4.1 0 0-.1 0-.1s.1.1.1 0v.1H5v.3c0 .1-.2.1-.2.1 0 .1.2.1.3.2h-.2c-.1 0-.3.1-.4 0 .1 0 .2-.2.2-.3 0-.1-.1 0-.1.1 0 .2-.1 0-.2.1l-.2.1c-.2 0-.1.2-.1.3 0 .1.2.2.2.3.2.1.2.1.4.1 0 .1.1.1.1.1 0 .1.1.1.2.1 0-.1.2.1.2.2 0 0 .1.1.1.2 0 0 .2 0 .2-.1-.1 0-.1 0-.1-.1-.1-.1-.1-.2 0-.2 0 .1.3 0 .1-.1 0-.1.1-.2 0-.3 0-.1-.1 0-.1-.1.1 0 0-.2 0-.3h.1c.1 0 .2.2.3 0 .2.1 0 .2.2.1V4c.1 0 .2.1.2 0 0 0 .1-.1.1-.2 0 0 .1.3.2.3 0 .1.2.2.2.3.1 0 .1 0 .1.1 0 0 .1-.1.1 0 .1 0 .2 0 .2.1-.1 0-.1.1-.1.1 0 .1-.3 0-.3 0-.2.2-.5 0-.7.1-.1 0-.4.3-.4.4.2 0 .3-.2.4-.2h.1s0 .1.1.1c0 .1.1.1.1.1v.1h-.1v-.1c-.1 0-.2.1-.3.1l-.1.1c-.1.1-.1.3-.1.3l-.2.1c0 .1-.1.1-.1.2l-.1.1c-.1.1-.2.3-.3.3 0 .2-.2.2-.2.4.1 0 .1.2.1.3 0 .1 0 .2-.1.2v-.1c0-.1-.1-.2-.1-.3 0-.1-.1 0-.2 0 0-.1-.2-.1-.3-.1.1 0 .1 0 .1.1h-.2s0-.1-.1-.1c-.3 0-.4.2-.4.4v.4c0 .1.1.2.1.3.1-.1.2.1.3.1h.2c-.1 0 0-.2.1-.3 0 .1.1 0 .1 0 0-.1.1-.1.1-.1 0-.1.1.1 0 .1s-.2.1-.2.1-.1.1-.1.2c-.1.1 0 .1 0 .2h.3v-.1c.1 0 0 .3.1.3 0 .1.1.2.1.3.1 0 .1.1.1.2.1 0 .3 0 .3-.1.1 0 .1.1.1.2.3 0 .1-.3.2-.3h.1l.1-.1h.2c.1 0 .1-.1.2-.1 0 0 0 .2.2.2h.4c.1 0 .1.1.1.1s.1 0 .1.1.1.1.1.1c.1 0 0 .1.1.1.1.1.1.1.2.1 0-.1.1 0 .1 0l.1.1c.1.1.1 0 .2.1s.1.2.1.3v.2c-.1 0 .1.1.1 0 .1 0 .1.1.2.1 0 .1.1.1.1 0 .1 0 .1.2.1.3-.3-.2-.3-.3-.2-.3.1-.1 0 0 .1 0 .4 0 .2.4.2.6 0 .2.2.3-.1.3zm6.3-1.5c-.1.1-.1.2-.2.2 0 .1-.1.2-.2.3-.1.1-.3.2-.3.3.1-.1-.3.3-.2.3 0 .1-.1.5 0 .5 0 0 .1.4 0 .4v.6c-.4.7-1 1.2-1.6 1.7l-.3-.3c0-.1-.1-.2-.1-.3l-.1-.2c0-.1-.2-.5-.2-.5l-.1-.2c0-.2-.4-.3-.4-.4-.1 0-.1-.4-.1-.4 0-.2.1-.3.1-.4 0-.3-.3-.1-.3-.3l-.1-.2c-.1 0-.1-.2-.1-.3.1-.1.1-.4.1-.4h-.3c0-.2-.5-.1-.7-.1 0 .1-.2-.2-.2-.3-.1 0-.3-.2-.3-.3.3-.1.1-.5.1-.6-.1 0-.1-.2 0-.2 0-.1.2-.2.2-.3 0 0 .1 0 .1-.1 0-.2 0-.3.1-.4 0-.1.1-.1.1-.2s0 0 .1-.1c.1 0 .1-.1.2-.2v-.1l.1-.3c.1-.2 0-.1.1-.1s.1-.1.2-.1c0-.1 0-.1.1-.1 0 .1.2 0 .2 0 0-.1.2-.2.3-.2 0-.1.4 0 .5 0 .1 0 .3.4.3.4h.2c0 .1.1.1.2.1s.4-.1.4-.2c0 0 .1 0 .1.1.1 0 .5 0 .5.1.1 0 .1.1.2.1 0 .1.1.3.2.3 0 .1 0 .2.1.3.1.1.2.3.3.4-.1.1.1.2.1.3l.1.2c0 .1.3.4.4.5 0 0 .1 0 .3.4.1 0 .3-.1.4-.1-.5.2-.6.2-.6.4zm.2-1.4c-.1 0-.4 0-.4.2-.1 0-.3.1-.3.1-.2 0-.2-.3-.3-.3 0 0-.1 0-.1-.1.1 0-.2-.5-.2-.6 0-.1-.1-.2-.1-.3-.1-.1-.2-.2-.2-.3-.1 0-.3-.2-.3-.3.1 0 .2 0 .2-.1-.1 0-.1-.1 0-.1 0-.1.1-.1.1-.2.1-.1 0-.1 0-.2H13c.3.2 0 .2 0 .2l-.2-.1c.1-.1.5 0 .5-.1 0 0 .1.2.1 0 .1 0 .1.2.3.1 0 .1.3-.1.1-.1 0-.2-.2-.2-.3-.3-.1 0-.1-.1-.2-.1 0-.1-.1 0-.1 0-.2 0-.1-.1-.2-.1 0-.2-.1-.2-.1 0-.1.2-.2.3-.2.4h-.1c-.1-.1-.1-.2-.1-.3 0-.1-.1-.1-.2-.1-.2 0-.1.2-.1.3.1 0-.1.1-.1.2-.2 0-.1-.2-.2-.3-.1-.1 0-.1-.1-.1 0 0 .1-.2 0-.2l-.2-.1c-.1 0-.3-.3-.4-.2 0 .1.1.1.1.2.1 0 .1.2.3.2v.1c.1 0 .1.1.1.1 0 .1-.1 0-.1 0 0 .1 0 0-.1.1 0-.1 0-.3-.1-.3-.1-.1-.2-.1-.3-.2-.1 0-.1-.2-.2-.2 0 .1-.1.1-.1.1-.1.1-.4 0-.4 0l-.2.4c0 .1-.1.1-.1.2.4.4 0 .4 0 .4-.2 0-.3-.1-.3-.3l.1-.4h.1c.1-.1.3 0 .3-.1.1 0 .1 0 .1.1.1 0 .2 0 .2-.1-.1 0-.1-.1-.1-.1.2-.2-.1-.3-.1-.4h-.1v-.1h-.1c-.1 0 0-.1 0-.2 0 0 .3.1.1 0 0-.2 0-.2-.2-.2 0-.1-.1-.1-.1-.2 0-.2.2 0 .2-.2.1 0 0 .1 0 .1V4c.1 0 .1-.1.2-.1 0 .1-.1.1 0 .2s.1.1.1.2c.1 0 .1.1.1.2.1 0 .2-.1.1-.1.2.1.1 0 .2-.1 0 .1.1-.1.2-.1.1-.1.3 0 .3-.1-.1 0-.1-.1-.1-.2.1 0 .2-.1.2 0v.2c.1.1.1 0 .1-.1 0 0-.1-.2-.1-.3 0 .1-.1.1-.1.1-.2 0-.3-.1-.4-.1l-.1-.2c-.1-.1.1-.1.1-.1 0-.1.5-.1.5-.3-.2 0 .2-.3.2-.3.1-.1.1-.2.3-.2.1 0 .7-.2.7-.1C14 4 14.9 5.8 15 7.8c-.1.1-.3.1-.3.2z" />
    </symbol>
  ),
  'globe--line': (
    <symbol id="globe--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-4.307 5.35A6.47 6.47 0 0 1 8 14.5c-.7 0-1.374-.11-2.006-.316.013-.043.106-.01.106-.084V14c.1-.1.1-.1.3-.1l.2-.1v-.2c0-.1.2-.1.2-.1.043-.043.067-.067.081-.096.02-.04.02-.089.02-.204 0-.1.1-.2.2-.2.05 0 .05-.025.05-.05s0-.05.05-.05c0-.1 0-.1.1-.1.069-.07.041-.188.018-.287A.564.564 0 0 1 7.3 12.4l.1-.1c.05 0 .075-.025.1-.05.025-.025.05-.05.1-.05 0-.1.3-.2.3-.2 0-.05.025-.1.05-.15.025-.05.05-.1.05-.15 0 0 .1-.3.1-.4l.1-.4c.196 0 .179-.043.143-.129A.413.413 0 0 1 8.3 10.6c0-.047.011-.106.023-.167.038-.2.083-.433-.223-.433-.064 0-.051-.044-.051-.044-.003-.002-.013.008-.049.044-.05 0-.075-.025-.1-.05-.025-.025-.05-.05-.1-.05 0 .1-.2 0-.1 0v-.2c0-.1 0-.2-.1-.3-.05-.05-.075-.05-.1-.05-.025 0-.05 0-.1-.05l-.1-.1s-.1-.1-.1 0c-.1 0-.1 0-.2-.1-.05 0-.05-.025-.05-.05S6.95 9 6.9 9c0 0-.1 0-.1-.1s-.1-.1-.1-.1 0-.1-.1-.1h-.4c-.2 0-.2-.2-.2-.2-.05 0-.075.025-.1.05-.025.025-.05.05-.1.05h-.2l-.1.1h-.1c-.037 0-.033.04-.028.091C5.38 8.88 5.39 9 5.2 9c0-.1 0-.2-.1-.2 0 .1-.2.1-.3.1 0-.1 0-.2-.1-.2 0-.05-.025-.1-.05-.15a.355.355 0 0 1-.05-.15c-.05 0-.05-.075-.05-.15s0-.15-.05-.15v.1h-.3a.144.144 0 0 0-.027-.082c-.02-.033-.035-.056.027-.118 0-.1.1-.2.1-.2s.1-.1.2-.1 0-.2 0-.1c0 0-.1 0-.1.1 0 0-.1.1-.1 0-.1.1-.2.3-.1.3H4c-.04 0-.08-.032-.12-.064-.06-.048-.12-.096-.18-.036 0-.05-.025-.1-.05-.15-.025-.05-.05-.1-.05-.15v-.4c0-.2.1-.4.4-.4.1 0 .1.1.1.1h.2c0-.1 0-.1-.1-.1.1 0 .3 0 .3.1a.315.315 0 0 0 .11-.027c.052-.02.09-.035.09.027 0 .05.025.1.05.15.025.05.05.1.05.15v.1c.1 0 .1-.1.1-.2s0-.3-.1-.3c0-.1.05-.15.1-.2.05-.05.1-.1.1-.2.067 0 .133-.089.2-.178.033-.044.067-.089.1-.122l.1-.1c0-.05.025-.075.05-.1.025-.025.05-.05.05-.1l.2-.1s0-.2.1-.3l.1-.1c.05 0 .1-.025.15-.05.05-.025.1-.05.15-.05v.1h.1v-.1s-.1 0-.1-.1c-.1 0-.1-.1-.1-.1H6c-.041 0-.083.034-.131.074-.069.057-.152.126-.269.126 0-.1.3-.4.4-.4.085-.043.189-.03.295-.019.143.017.29.034.405-.081 0 0 .3.1.3 0 0 0 0-.1.1-.1 0-.1-.1-.1-.2-.1 0-.1-.1 0-.1 0 0-.1 0-.1-.1-.1 0-.05-.05-.1-.1-.15-.05-.05-.1-.1-.1-.15-.1 0-.2-.3-.2-.3 0 .1-.1.2-.1.2 0 .062-.038.047-.09.027A.315.315 0 0 0 6 4v-.4c-.07.035-.091.046-.097.04-.003-.002-.003-.008-.003-.015 0-.025 0-.075-.1-.125-.067.133-.133.089-.2.044-.033-.022-.067-.044-.1-.044h-.1c0 .033.011.078.022.122.023.09.045.178-.022.178 0 .05.025.05.05.05s.05 0 .05.05c.067.067.045.133.022.2-.01.033-.022.067-.022.1.2.1-.1.2-.1.1-.1 0-.1.1 0 .2 0 .05 0 .075.013.087.012.013.037.013.087.013 0 .1-.2.1-.2.1 0-.1-.1-.2-.1-.2 0-.1-.2-.3-.2-.2-.1 0-.2 0-.2-.1 0 0-.1 0-.1-.1-.095 0-.144 0-.192-.01A.967.967 0 0 1 4.3 4c0-.05-.05-.1-.1-.15-.05-.05-.1-.1-.1-.15a.473.473 0 0 0-.011-.084c-.02-.1-.042-.216.111-.216l.2-.1c.045-.045.09-.03.126-.016.044.015.074.026.074-.084 0-.088.077-.175.096-.128a.953.953 0 0 1 .003.048c-.012.104-.105.28-.199.28.07.07.188.042.287.02.043-.01.083-.02.113-.02h.2c-.044-.044-.107-.068-.164-.09-.073-.03-.136-.054-.136-.11 0 0 .2 0 .2-.1v-.3h-.1v-.1c0 .1-.1 0-.1 0s.1.1 0 .1c0 .1 0 .2-.1.4v-.1a.077.077 0 0 0-.004-.028c-.008-.087-.03-.172-.096-.172 0 .187-.078.102-.16.011-.05-.054-.102-.111-.14-.111a.091.091 0 0 0-.07-.095A6.47 6.47 0 0 1 8 1.5a6.47 6.47 0 0 1 3.775 1.208c-.021.028-.043.06-.075.092 0 0-.4.3-.2.3 0 .117-.171.166-.314.206-.1.028-.186.053-.186.094 0 0-.2 0-.1.1l.1.2c.041 0 .083.017.132.037a.654.654 0 0 0 .268.063s.1 0 .1-.1c0 .1.1.3.1.3 0 .1 0 .2-.1.1v-.2c0-.062-.038-.047-.09-.027a.315.315 0 0 1-.11.027c0 .1 0 .2.1.2 0 .05-.05.05-.112.05-.063 0-.138 0-.188.05-.05 0-.1.05-.137.087-.038.038-.063.063-.063.013a.202.202 0 0 0-.053.099c-.012.041-.018.06-.105.02-.001-.01-.013-.019-.042-.019l.042.02c.001.029-.07.08-.142.08 0-.1 0-.2-.1-.2 0-.1 0-.1-.1-.2-.062-.062-.047-.085-.027-.118A.143.143 0 0 0 10.4 3.9c-.05 0-.075.025-.1.05-.025.025-.05.05-.1.05v-.1s.1-.1 0-.1c0 .1-.05.1-.1.1s-.1 0-.1.1c0 .05.025.075.05.1.025.025.05.05.05.1.2 0 .2 0 .2.2.2.1-.1 0-.1 0a.315.315 0 0 1-.027.109c-.02.053-.035.091.027.091h.1v.1h.1c0 .033.033.067.07.104.062.061.134.133.08.232A1.047 1.047 0 0 1 10.4 5l-.1.2-.019.038c-.02.012-.054.012-.093.012-.063 0-.138 0-.188.05h-.1l-.1.4c0 .2.1.3.3.3 0 0 .4 0 0-.4 0-.05.025-.075.05-.1.025-.025.05-.05.05-.1l.081-.162a.043.043 0 0 0 .02-.038c.1 0 .1 0 .1.1.1 0 .2 0 .2-.1-.1 0-.1-.1-.1-.1a.282.282 0 0 0 .049-.064c.09.014.198.016.25-.036 0 0 .1 0 .1-.1.05 0 .075.05.1.1.025.05.05.1.1.1.05.05.1.075.15.1.05.025.1.05.15.1.1 0 .1.2.1.3.05-.05.075-.05.088-.05l.008-.001c.004-.003.004-.013.004-.049 0 0 .1.1.1 0 0 0 0-.1-.1-.1v-.1c-.117 0-.166-.069-.206-.125-.028-.04-.053-.075-.094-.075 0-.05-.025-.075-.05-.1-.025-.025-.05-.05-.05-.1.06-.06.155.023.243.099.06.052.117.101.157.101l.2.1c.1 0 0 .2 0 .2.036 0 .046 0 .049.005l.001.007c0 .013 0 .038.05.088.04.04.048.094.056.147.012.08.023.153.144.153 0-.05.05-.1.088-.138.037-.037.062-.062.012-.062a.473.473 0 0 0-.011-.084c-.02-.1-.042-.216.111-.216.1 0 .2 0 .2.1s0 .2.1.3h.1c0-.062.038-.124.091-.209.033-.053.07-.115.11-.191 0-.2.1-.2.1 0 .04 0 .048.017.056.037.012.029.026.063.143.063 0 0 .1-.1.1 0 .05 0 .075.025.1.05.025.025.05.05.1.05a.463.463 0 0 0 .122.078c.09.044.178.089.178.222.2 0-.1.2-.1.1-.125.063-.172.007-.214-.043-.025-.03-.049-.057-.086-.057 0 .2-.1 0-.1 0 0 .047-.087.05-.19.05a.127.127 0 0 1-.01-.05H13a.81.81 0 0 1 .068.05c-.107 0-.22.003-.268.05l.2.1s.248 0 .068-.15h.042c.005.012.011.022.017.032.02.033.035.056-.027.118 0 .05-.025.075-.05.1-.025.025-.05.05-.05.1-.1 0-.1.1 0 .1 0 .1-.1.1-.2.1 0 .033.022.078.055.122C12.73 6.5 12.56 6.5 12.5 6.5c0-.1-.1-.1-.1-.1 0 .1-.3.2-.4.2-.1 0-.2 0-.2-.1h-.2s-.2-.4-.3-.4c-.028 0-.08-.008-.14-.017-.153-.023-.36-.055-.36.017-.1 0-.3.1-.3.2 0 0-.2.1-.2 0-.05 0-.075 0-.087.012-.013.013-.013.038-.013.088-.05 0-.075.025-.1.05-.025.025-.05.05-.1.05s-.05-.025-.05-.025 0 .025-.05.125l-.1.3V7a.559.559 0 0 0-.082.109c-.032.053-.056.091-.118.091-.064.064-.087.046-.095.051-.005.003-.005.013-.005.049 0 .05-.025.075-.05.1-.025.025-.05.05-.05.1-.1.1-.1.2-.1.4 0 .1-.1.1-.1.1 0 .05-.05.1-.1.15-.05.05-.1.1-.1.15-.1 0-.1.2 0 .2 0 .022.01.06.022.105.042.158.111.417-.122.495 0 .1.2.3.3.3 0 .1.2.4.2.3.045 0 .105-.005.171-.01.229-.02.53-.045.53.11h.3s0 .3-.1.4c0 .1 0 .3.1.3l.1.2c0 .09.06.099.126.109.082.012.173.026.173.191a.358.358 0 0 1-.037.131.65.65 0 0 0-.063.269s0 .4.1.4c0 .041.069.083.15.131.113.069.25.152.25.269l.1.2s.2.4.2.5l.1.2c0 .05.025.1.05.15a.579.579 0 0 1 .043.1Zm1.948-2.118a6.46 6.46 0 0 0 .64-1.553.882.882 0 0 1-.18.221 1.327 1.327 0 0 1-.123.1c-.089.067-.178.133-.178.2l.016-.016-.008.009c-.048.051-.288.307-.208.307 0 .028-.008.08-.017.14-.023.153-.055.36.017.36 0 0 .03.122.041.232Zm.818-2.497c.027-.236.04-.476.041-.72-.102.022-.2.071-.2.185a.844.844 0 0 0-.266.084c.081.131.287.337.366.416 0 0 .02 0 .059.035ZM1.746 6.223a6.502 6.502 0 0 0 3.795 7.796l.06-.119v-.4c0-.05.024-.1.05-.15.024-.05.05-.1.05-.15.116-.058.13-.32.142-.528.008-.15.015-.272.057-.272 0-.093.005-.17.01-.234.015-.213.02-.29-.21-.366l-.2-.2c-.2 0-.3-.4-.3-.4-.1 0-.1-.1-.1-.2l-.3-.4c-.124-.062-.094-.124-.054-.209A.437.437 0 0 0 4.8 10.2c-.1-.1 0-.4.1-.4l.1-.1c.1.1.2-.1.1-.1v-.3c.1-.1 0-.3-.1-.1-.1 0-.4 0-.4-.2 0-.1-.1-.3-.2-.3 0-.1-.3-.3-.4-.3 0-.1-.1-.1-.1-.1.03.03.043.043.041.044l-.016-.007C3.9 8.325 3.85 8.3 3.8 8.3c-.2 0-.4-.1-.4-.1 0-.056-.063-.08-.136-.11-.057-.022-.12-.046-.164-.09-.1 0-.2-.2-.2-.3 0-.2-.1-.4-.2-.4.3.4-.2.1-.2-.1-.1-.1-.2-.3-.2-.4 0-.1-.1-.3-.1-.3 0-.1-.1-.2-.3-.2l-.154-.077Z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'grid-2x2--fill': (
    <symbol id="grid-2x2--fill" viewBox="0 0 16 16">
      <path d="M7 1H1v6h6V1zm0 8H1v6h6V9zm2-8h6v6H9V1zm6 8H9v6h6V9z" />
    </symbol>
  ),
  'grid-2x2--line': (
    <symbol id="grid-2x2--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 7V1h6v6H1zm1.5-4.5h3v3h-3v-3zM1 15V9h6v6H1zm1.5-4.5h3v3h-3v-3zM9 1v6h6V1H9zm4.5 1.5h-3v3h3v-3zM9 15V9h6v6H9zm1.5-4.5h3v3h-3v-3z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'grid-3x3--fill': (
    <symbol id="grid-3x3--fill" viewBox="0 0 16 16">
      <path d="M1 1h3.5v3.5H1V1zm5.25 0h3.5v3.5h-3.5V1zM15 1h-3.5v3.5H15V1zM1 11.5h3.5V15H1v-3.5zm8.75 0h-3.5V15h3.5v-3.5zm1.75 0H15V15h-3.5v-3.5zm-7-5.25H1v3.5h3.5v-3.5zm1.75 0h3.5v3.5h-3.5v-3.5zm8.75 0h-3.5v3.5H15v-3.5z" />
    </symbol>
  ),
  'grid-3x3--line': (
    <symbol id="grid-3x3--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 1v3.5h3.5V1H1zm2.25 1.25h-1v1h1v-1zm3-1.25v3.5h3.5V1h-3.5zM8.5 2.25h-1v1h1v-1zm3 2.25V1H15v3.5h-3.5zm1.25-2.25h1v1h-1v-1zM1 11.5V15h3.5v-3.5H1zm2.25 1.25h-1v1h1v-1zm3 2.25v-3.5h3.5V15h-3.5zm1.25-2.25h1v1h-1v-1zm4-1.25V15H15v-3.5h-3.5zm2.25 1.25h-1v1h1v-1zM1 9.75v-3.5h3.5v3.5H1zM2.25 7.5h1v1h-1v-1zm4-1.25v3.5h3.5v-3.5h-3.5zM8.5 7.5h-1v1h1v-1zm3 2.25v-3.5H15v3.5h-3.5zm1.25-2.25h1v1h-1v-1z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'grid-mason-horizontal--fill': (
    <symbol id="grid-mason-horizontal--fill" viewBox="0 0 16 16">
      <path d="M9 7V1H1v6h8zm6 0V1h-4v6h4zm0 2v6H6V9h9zM4 15V9H1v6h3z" />
    </symbol>
  ),
  'grid-mason-horizontal--line': (
    <symbol id="grid-mason-horizontal--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 1h8v6H1V1zm6.5 1.5v3h-5v-3h5zM11 1h4v6h-4V1zm2.5 1.5v3h-1v-3h1zM15 9H7v6h8V9zm-1.5 4.5v-3h-5v3h5zM1 9h4v6H1V9zm2.5 1.5v3h-1v-3h1z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'grid-mason-vertical--fill': (
    <symbol id="grid-mason-vertical--fill" viewBox="0 0 16 16">
      <path d="M7 1H1v4h6V1zm0 6H1v8h6V7zm2-6h6v8H9V1zm6 10H9v4h6v-4z" />
    </symbol>
  ),
  'grid-mason-vertical--line': (
    <symbol id="grid-mason-vertical--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 5V1h6v4H1zm1.5-2.5h3v1h-3v-1zM1 15V7h6v8H1zm1.5-6.5h3v5h-3v-5zM9 1v8h6V1H9zm4.5 1.5h-3v5h3v-5zM9 15v-4h6v4H9zm1.5-2.5h3v1h-3v-1z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'headphones--fill': (
    <symbol id="headphones--fill" viewBox="0 0 16 16">
      <path d="M16 16h-5V8.5h3.481a6.5 6.5 0 10-12.962 0H5V16H0c.005-2.667 0-5.334 0-8a8 8 0 1116 0c0 2.666-.005 5.333 0 8z" />
    </symbol>
  ),
  'headphones--line': (
    <symbol id="headphones--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.481 8.5H11V16h5V8A8 8 0 100 8v8h5V8.5H1.519a6.5 6.5 0 1112.962 0zM14.5 10h-2v4.5h2V10zm-11 0v4.5h-2V10h2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'headphones-slash--fill': (
    <symbol id="headphones-slash--fill" viewBox="0 0 16 16">
      <path d="M10.723 2.096A6.5 6.5 0 001.52 8.5h2.8L0 12.82C.006 11.213 0 9.606 0 8A8 8 0 0111.84.98l-1.117 1.116zM0 16h5v-3.943l8.094-8.095A6.472 6.472 0 0114.481 8.5H11V16h5V8c0-1.94-.69-3.719-1.84-5.104L16 1.056 14.943 0 0 14.941V16z" />
    </symbol>
  ),
  'headphones-slash--line': (
    <symbol id="headphones-slash--line" viewBox="0 0 16 16">
      <path d="M2.82 10H1.5v1.32L0 12.82V8A8 8 0 0111.84.98l-1.117 1.116A6.5 6.5 0 001.52 8.5h2.8L2.82 10z" />
      <path
        fillRule="evenodd"
        d="M0 16h5v-3.943l8.094-8.095A6.472 6.472 0 0114.481 8.5H11V16h5V8c0-1.94-.69-3.719-1.84-5.104L16 1.056 14.943 0 0 14.941V16zm2.557-1.5H3.5v-.943l-.943.943zM14.5 10h-2v4.5h2V10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'headset--fill': (
    <symbol id="headset--fill" viewBox="0 0 16 16">
      <path d="M8 1.5c2.696 0 4.94 1.94 5.41 4.5H10v6.5h2.246c-.005.28-.02.518-.054.73-.051.312-.139.504-.264.644-.266.297-.952.626-2.928.626V16c1.987 0 3.302-.296 4.044-1.124.38-.423.549-.918.628-1.403a6.86 6.86 0 00.075-.973H15V7A7 7 0 001 7v5.5h5V6H2.59A5.502 5.502 0 018 1.5z" />
    </symbol>
  ),
  'headset--line': (
    <symbol id="headset--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 0a7 7 0 017 6.928V12.5h-1.253a6.86 6.86 0 01-.075.973c-.08.485-.248.98-.628 1.403C12.302 15.704 10.987 16 9 16v-1.5c1.976 0 2.662-.329 2.928-.626.125-.14.213-.332.264-.644.035-.212.049-.45.054-.73H10V6h3.41A5.502 5.502 0 002.59 6H6v6.5H1V6.929A7 7 0 018 0zM4.5 7.5V11h-2V7.5h2zm9 0V11h-2V7.5h2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'home--fill': (
    <symbol id="home--fill" viewBox="0 0 16 16">
      <path d="M.512 7.43L8 1.013l7.488 6.419-.976 1.138L14 8.131V15H9v-4H7v4H2V8.13l-.512.44-.976-1.14z" />
    </symbol>
  ),
  'home--line': (
    <symbol id="home--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 1.012l7.488 6.419-.976 1.138L14 8.131V15H2V8.13l-.512.44-.976-1.14L8 1.013zM3.5 6.845V13.5h3.75V10h1.5v3.5h3.75V6.845L8 2.988 3.5 6.845z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'image--fill': (
    <symbol id="image--fill" viewBox="0 0 16 16">
      <path d="M5.5 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      <path
        fillRule="evenodd"
        d="M0 2v12h16V2H0zm14 2H2v7.444L10 7l4 3.2V4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'image--line': (
    <symbol id="image--line" viewBox="0 0 16 16">
      <path d="M5.5 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
      <path
        fillRule="evenodd"
        d="M0 2v12h16V2H0zm14.5 1.5h-13v7.364L10.076 6.1 14.5 9.64V3.5zm0 8.06L9.924 7.9l-8.28 4.6H14.5v-.94z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'info-circle--fill': (
    <symbol id="info-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM7 3.25h1.75V5H7V3.25zm-1 3v1.5h1.25V11H6v1.5h4V11H8.75V6.25H6z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'info-circle--line': (
    <symbol id="info-circle--line" viewBox="0 0 16 16">
      <path d="M6 7.75h1.25V11H6v1.5h4V11H8.75V6.25H6v1.5zm2.75-4.5H7V5h1.75V3.25z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'layers-2--fill': (
    <symbol id="layers-2--fill" viewBox="0 0 16 16">
      <path d="M8 2.5l8 4-8 4-8-4 8-4z" />
      <path d="M16 10l-2-1-6 3-6-3-2 1 8 4 8-4z" />
    </symbol>
  ),
  'layers-2--line': (
    <symbol id="layers-2--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 2.5l8 4-8 4-8-4 8-4zm-4.646 4L8 4.177 12.646 6.5 8 8.823 3.354 6.5z"
        clipRule="evenodd"
      />
      <path d="M8 12L1.5 8.75 0 9.5l8 4 8-4-1.5-.75L8 12z" />
    </symbol>
  ),
  'layers-3--fill': (
    <symbol id="layers-3--fill" viewBox="0 0 16 16">
      <path d="M8 1l8 4-8 4-8-4 8-4z" />
      <path d="M14 7.5l2 1-8 4-8-4 2-1 6 3 6-3z" />
      <path d="M14 11l2 1-8 4-8-4 2-1 6 3 6-3z" />
    </symbol>
  ),
  'layers-3--line': (
    <symbol id="layers-3--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 1l8 4-8 4-8-4 8-4zM3.354 5L8 2.677 12.646 5 8 7.323 3.354 5z"
        clipRule="evenodd"
      />
      <path d="M1.5 7.25L8 10.5l6.5-3.25L16 8l-8 4-8-4 1.5-.75z" />
      <path d="M1.5 10.25L8 13.5l6.5-3.25L16 11l-8 4-8-4 1.5-.75z" />
    </symbol>
  ),
  'lightbulb--fill': (
    <symbol id="lightbulb--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14 6c0 2.22-1.207 4.16-3 5.197V13H5v-1.803A6 6 0 1114 6zM7.25 7v4h1.5V7h-1.5z"
        clipRule="evenodd"
      />
      <path d="M11 15v-1H5v1l1 1h4l1-1z" />
    </symbol>
  ),
  'lightbulb--line': (
    <symbol id="lightbulb--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5 11.197a6 6 0 116 0V13H5v-1.803zM7.25 7v3.438A4.501 4.501 0 018 1.5a4.5 4.5 0 01.75 8.938V7h-1.5z"
        clipRule="evenodd"
      />
      <path d="M5 14v1l1 1h4l1-1v-1H5z" />
    </symbol>
  ),
  'lightbulb-slash--fill': (
    <symbol id="lightbulb-slash--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.943 0L0 14.943 1.057 16 5 12.06V13h6v-1.803A5.998 5.998 0 0014 6a5.98 5.98 0 00-.511-2.428L16 1.057 14.943 0zM8.75 8.307l-1.5 1.5V11h1.5V8.307z"
        clipRule="evenodd"
      />
      <path d="M11.611 1.208a6 6 0 00-8.403 8.403l8.403-8.403zM11 14v1l-1 1H6l-1-1v-1h6z" />
    </symbol>
  ),
  'lightbulb-slash--line': (
    <symbol id="lightbulb-slash--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.943 0L0 14.943 1.057 16 5 12.06V13h6v-1.803A5.998 5.998 0 0014 6a5.98 5.98 0 00-.511-2.428L16 1.057 14.943 0zm-2.622 4.74L8.75 8.31v2.128a4.501 4.501 0 003.571-5.698zM7.25 9.81l-.51.511c.166.049.336.088.51.117V9.81z"
        clipRule="evenodd"
      />
      <path d="M8 1.5a4.48 4.48 0 012.537.783l1.074-1.075a6 6 0 00-8.403 8.403l1.075-1.074A4.5 4.5 0 018 1.5zM11 15v-1H5v1l1 1h4l1-1z" />
    </symbol>
  ),
  'lightning-bolt--fill': (
    <symbol id="lightning-bolt--fill" viewBox="0 0 16 16">
      <path d="M2 8l6 2-2 6 8-8-6-2 2-6-8 8z" />
    </symbol>
  ),
  'lightning-bolt--line': (
    <symbol id="lightning-bolt--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M10 0L2 8l6 2-2 6 8-8-6-2 2-6zm1.223 8.656l-5.12-1.707.465-1.395-1.791 1.79 5.12 1.707-.465 1.395 1.791-1.79z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'link--fill': (
    <symbol id="link--fill" viewBox="0 0 16 16">
      <path d="M12.596 10.475L11.182 9.06 12.242 8A3 3 0 008 3.757L6.94 4.818 5.525 3.404l1.061-1.06a5 5 0 017.071 7.07l-1.06 1.06zM8 12.243l1.06-1.061 1.415 1.414-1.06 1.06a5 5 0 11-7.072-7.07l1.061-1.06 1.414 1.413L3.758 8A3 3 0 108 12.243z" />
      <path d="M9.768 4.818l-4.95 4.95 1.414 1.414 4.95-4.95-1.414-1.414z" />
    </symbol>
  ),
  'link--line': (
    <symbol id="link--line" viewBox="0 0 16 16">
      <path d="M12.596 10.475l-1.06-1.06 1.06-1.061a3.5 3.5 0 10-4.95-4.95l-1.06 1.06-1.06-1.06 1.06-1.06a5 5 0 017.071 7.07l-1.06 1.06zm-4.242 2.121l1.06-1.06 1.061 1.06-1.06 1.06a5 5 0 11-7.072-7.07l1.061-1.06 1.06 1.06-1.06 1.06a3.5 3.5 0 004.95 4.95z" />
      <path d="M9.945 4.995l-4.95 4.95 1.06 1.06 4.95-4.95-1.06-1.06z" />
    </symbol>
  ),
  'link-broken--fill': (
    <symbol id="link-broken--fill" viewBox="0 0 16 16">
      <path d="M4.98.304l.5 2.5-1.96.392-.5-2.5L4.98.304zm10.891 11.268l-2.5-1-.743 1.857 2.5 1 .743-1.857zm-5.351 1.624l.5 2.5 1.96-.392-.5-2.5-1.96.392zM.128 4.428l2.5 1 .743-1.856-2.5-1-.743 1.856zM11.182 9.06l1.414 1.415 1.06-1.06a5 5 0 00-7.07-7.072l-1.06 1.06 1.413 1.415L8 3.758A3 3 0 0112.243 8l-1.061 1.06zM9.06 11.182L8 12.242A3 3 0 113.757 8l1.061-1.06-1.414-1.415-1.06 1.06a5 5 0 107.07 7.072l1.06-1.06-1.413-1.415z" />
      <path d="M9.768 4.818l-4.95 4.95 1.414 1.414 4.95-4.95-1.414-1.414z" />
    </symbol>
  ),
  'link-broken--line': (
    <symbol id="link-broken--line" viewBox="0 0 16 16">
      <path d="M4.455.5L3.167.845l.69 2.577 1.288-.345L4.455.5zM3.421 3.857l-2.576-.69L.5 4.455l2.576.69.345-1.288zm9.175 6.618l-1.06-1.06 1.06-1.061a3.5 3.5 0 10-4.95-4.95l-1.06 1.06-1.06-1.06 1.06-1.06a5 5 0 017.071 7.07l-1.06 1.06zm-4.242 2.121l1.06-1.06 1.061 1.06-1.06 1.06a5 5 0 11-7.072-7.07l1.061-1.06 1.06 1.06-1.06 1.06a3.5 3.5 0 004.95 4.95z" />
      <path d="M9.945 4.995l-4.95 4.95 1.06 1.06 4.95-4.95-1.06-1.06zm5.355 7.983l-2.576-.69L13.07 11l2.576.69-.345 1.288zM12.979 15.3l-1.288.345-.69-2.577 1.287-.345.69 2.576z" />
    </symbol>
  ),
  'list-ordered--fill': (
    <symbol id="list-ordered--fill" viewBox="0 0 16 16">
      <path d="M4.276 2v5.09H2.893V3.274L1.75 3.94V2.766L3.003 2h1.273zM7 3h7v2H7V3zm7 4H7v2h7V7zm0 4H7v2h7v-2zM1.6 13.006V14h3.907v-1.104H3.518l.478-.427c.388-.323.687-.602.897-.835.21-.234.356-.447.438-.64.08-.193.121-.388.121-.583a1.41 1.41 0 00-.246-.828 1.573 1.573 0 00-.693-.547c-.299-.131-.651-.197-1.06-.197-.394 0-.737.07-1.03.21a1.564 1.564 0 00-.682.596c-.16.258-.241.567-.241.925h1.313a.76.76 0 01.079-.363.535.535 0 01.224-.227.716.716 0 01.338-.077c.127 0 .24.026.338.077a.55.55 0 01.229.214.635.635 0 01.084.336.71.71 0 01-.074.325 1.113 1.113 0 01-.21.286c-.089.091-.196.19-.322.294l-1.9 1.57z" />
    </symbol>
  ),
  'list-ordered--line': (
    <symbol id="list-ordered--line" viewBox="0 0 16 16">
      <path d="M4.276 2v5.09H2.893V3.274L1.75 3.94V2.766L3.003 2h1.273zM14 4.75H7v-1.5h7v1.5zm0 4H7v-1.5h7v1.5zm-7 4h7v-1.5H7v1.5zm-5.4.256V14h3.907v-1.104H3.518l.478-.427c.388-.323.687-.602.897-.835.21-.234.356-.447.438-.64.08-.193.121-.388.121-.583a1.41 1.41 0 00-.246-.828 1.573 1.573 0 00-.693-.547c-.299-.131-.651-.197-1.06-.197-.394 0-.737.07-1.03.21a1.564 1.564 0 00-.682.596c-.16.258-.241.567-.241.925h1.313a.76.76 0 01.079-.363.535.535 0 01.224-.227.716.716 0 01.338-.077c.127 0 .24.026.338.077a.55.55 0 01.229.214.635.635 0 01.084.336.71.71 0 01-.074.325 1.113 1.113 0 01-.21.286c-.089.091-.196.19-.322.294l-1.9 1.57z" />
    </symbol>
  ),
  'list-prioritize--fill': (
    <symbol id="list-prioritize--fill" viewBox="0 0 16 16">
      <path d="M2.8 2.8L5.6 0 7 1.4 2.8 5.6 0 2.8l1.4-1.4 1.4 1.4zM6 11h8v2H6v-2zm-2 0H2v2h2v-2zM2 7h2v2H2V7zm12-4H8L6 5h8V3zM6 7h8v2H6V7z" />
    </symbol>
  ),
  'list-prioritize--line': (
    <symbol id="list-prioritize--line" viewBox="0 0 16 16">
      <path d="M7.03 2.53L5.97 1.47 3 4.44 1.53 2.97.47 4.03 3 6.56l4.03-4.03zM14 5.75H7v-1.5h7v1.5zM2 10V8h2v2H2zm0 4v-2h2v2H2zm4-4.25h8v-1.5H6v1.5zm8 4H6v-1.5h8v1.5z" />
    </symbol>
  ),
  'list-unordered--fill': (
    <symbol id="list-unordered--fill" viewBox="0 0 16 16">
      <path d="M2 3h2v2H2V3zm2 4H2v2h2V7zm-2 4h2v2H2v-2zm4 0h8v2H6v-2zm8-4H6v2h8V7zM6 3h8v2H6V3z" />
    </symbol>
  ),
  'list-unordered--line': (
    <symbol id="list-unordered--line" viewBox="0 0 16 16">
      <path d="M4 3H2v2h2V3zM2 7h2v2H2V7zm0 4h2v2H2v-2zm4-6.25h8v-1.5H6v1.5zm8 4H6v-1.5h8v1.5zm-8 4h8v-1.5H6v1.5z" />
    </symbol>
  ),
  'lock--fill': (
    <symbol id="lock--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4 7V4a4 4 0 118 0v3h2v9H2V7h2zm6-3v3H6V4a2 2 0 114 0zm-3 6v3h2v-3H7z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'lock--line': (
    <symbol id="lock--line" viewBox="0 0 16 16">
      <path d="M9 10v3H7v-3h2z" />
      <path
        fillRule="evenodd"
        d="M4 4v3H2v9h12V7h-2V4a4 4 0 00-8 0zm6.5 3V4a2.5 2.5 0 00-5 0v3h5zm-7 7.5v-6h9v6h-9z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'lock-open--fill': (
    <symbol id="lock-open--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 2c1.1 0 2 .9 2 2h2c0-2.2-1.8-4-4-4S4 1.8 4 4v3H2v9h12V7H6V4c0-1.1.9-2 2-2zm-1 8v3h2v-3H7z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'lock-open--line': (
    <symbol id="lock-open--line" viewBox="0 0 16 16">
      <path d="M9 10v3H7v-3h2z" />
      <path
        fillRule="evenodd"
        d="M10.5 4H12a4 4 0 00-8 0v3H2v9h12V7H5.5V4a2.5 2.5 0 015 0zm-7 10.5v-6h9v6h-9z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'magnifying-glass--fill': (
    <symbol id="magnifying-glass--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.177 12.577A6.915 6.915 0 017 14c-3.9 0-7-3.1-7-7s3.2-7 7-7 7 3.2 7 7a6.915 6.915 0 01-1.423 4.177L16 14.6 14.6 16l-3.423-3.423zM12 7c0-2.8-2.2-5-5-5S2 4.2 2 7s2.2 5 5 5 5-2.2 5-5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'magnifying-glass--line': (
    <symbol id="magnifying-glass--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.391 12.452a7 7 0 111.06-1.06L16 15l-1 1-3.609-3.548zM12.5 7a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'mail--fill': (
    <symbol id="mail--fill" viewBox="0 0 16 16">
      <path d="M16 2H0v2.992l8 3.2 8-3.2V2z" />
      <path d="M16 6.608l-8 3.2-8-3.2V14h16V6.608z" />
    </symbol>
  ),
  'mail--line': (
    <symbol id="mail--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 2h16v12H0V2zm1.5 1.5h13v2.092L8 8.192l-6.5-2.6V3.5zm0 3.708V12.5h13V7.208L8 9.808l-6.5-2.6z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'mail-open--fill': (
    <symbol id="mail-open--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 0L0 4v10h16V4L8 0zM1.665 7.17L8 10.339l6.335-3.167-.67-1.342L8 8.661 2.335 5.83l-.67 1.342z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'mail-open--line': (
    <symbol id="mail-open--line" viewBox="0 0 16 16">
      <path d="M2.665 7.67L8 10.339l5.335-2.667-.67-1.342L8 8.661 3.335 6.33l-.67 1.342z" />
      <path
        fillRule="evenodd"
        d="M16 4L8 0 0 4v10h16V4zM8 1.677l6.5 3.25V12.5h-13V4.927L8 1.677z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-back-10--fill': (
    <symbol id="media-back-10--fill" viewBox="0 0 16 16">
      <path d="M7 7L3.404 3.404A6.5 6.5 0 1112 13.124v1.806A8 8 0 102.343 2.343L0 0v7h7z" />
      <path d="M3.365 9v6.906H1.64v-5.348L0 11.502v-1.443L1.763 9h1.602z" />
      <path
        fillRule="evenodd"
        d="M5.627 15.582c.426.279.933.418 1.521.418.59 0 1.098-.138 1.521-.415.426-.279.754-.681.985-1.208.23-.527.346-1.161.346-1.903.002-.738-.112-1.366-.343-1.884-.23-.518-.56-.912-.988-1.182C8.243 9.136 7.736 9 7.15 9c-.59 0-1.096.136-1.522.408-.424.27-.75.664-.981 1.182-.228.516-.344 1.144-.346 1.884-.002.74.112 1.373.343 1.9.23.524.558.927.984 1.208zm2.374-1.452c-.217.358-.502.536-.853.536a.899.899 0 01-.616-.237c-.177-.16-.316-.402-.414-.727-.097-.325-.144-.735-.142-1.228.002-.73.11-1.27.326-1.62.215-.354.497-.53.846-.53.235 0 .44.078.616.233.175.156.313.393.411.712.1.316.149.717.149 1.205.002.744-.106 1.296-.323 1.656z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-back-10--line': (
    <symbol id="media-back-10--line" viewBox="0 0 16 16">
      <path d="M6.75 5.25v1.5H0V0h1.5v3.335A8 8 0 1112 14.93v-1.805A6.5 6.5 0 102.109 5.25H6.75z" />
      <path d="M3.365 9v6.906H1.64v-5.348L0 11.502v-1.443L1.763 9h1.602z" />
      <path
        fillRule="evenodd"
        d="M5.627 15.582c.426.279.933.418 1.521.418.59 0 1.098-.138 1.521-.415.426-.279.754-.681.985-1.208.23-.527.346-1.161.346-1.903.002-.738-.112-1.366-.343-1.884-.23-.518-.56-.912-.988-1.182C8.243 9.136 7.736 9 7.15 9c-.59 0-1.096.136-1.522.408-.424.27-.75.664-.981 1.182-.228.516-.344 1.144-.346 1.884-.002.74.112 1.373.343 1.9.23.524.558.927.984 1.208zm2.374-1.452c-.217.358-.502.536-.853.536a.899.899 0 01-.616-.237c-.177-.16-.316-.402-.414-.727-.097-.325-.144-.735-.142-1.228.002-.73.11-1.27.326-1.62.215-.354.497-.53.846-.53.235 0 .44.078.616.233.175.156.313.393.411.712.1.316.149.717.149 1.205.002.744-.106 1.296-.323 1.656z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-back-15--fill': (
    <symbol id="media-back-15--fill" viewBox="0 0 16 16">
      <path d="M2.343 2.343A8 8 0 1112 14.93v-1.806a6.5 6.5 0 10-8.596-9.72L7 7H0V0l2.343 2.343z" />
      <path d="M3.365 9v6.906H1.64v-5.348L0 11.502v-1.443L1.763 9h1.602zm3.86 7a3.36 3.36 0 01-1.389-.273 2.367 2.367 0 01-.96-.752 1.893 1.893 0 01-.363-1.1H6.19a.798.798 0 00.32.614c.2.153.44.23.716.23.217 0 .409-.046.576-.139a1 1 0 00.395-.387 1.14 1.14 0 00.14-.58 1.107 1.107 0 00-.144-.584.999.999 0 00-.398-.387 1.16 1.16 0 00-.58-.142 1.305 1.305 0 00-.589.132.983.983 0 00-.419.367l-1.525-.277L4.991 9h4.587v1.345H6.412l-.122 1.629c.119-.191.31-.348.572-.472.266-.126.567-.189.904-.189.428 0 .81.097 1.145.29.337.191.603.456.796.796.195.34.293.728.293 1.167 0 .474-.116.894-.349 1.26-.23.367-.554.655-.97.864-.414.207-.9.31-1.456.31z" />
    </symbol>
  ),
  'media-back-15--line': (
    <symbol id="media-back-15--line" viewBox="0 0 16 16">
      <path d="M6.75 5.25v1.5H0V0h1.5v3.335A8 8 0 1112 14.93v-1.805A6.5 6.5 0 102.109 5.25H6.75z" />
      <path d="M3.365 15.906V9H1.762L0 10.059v1.443l1.64-.944v5.348h1.725zm2.471-.179c.405.182.868.273 1.39.273.555 0 1.04-.103 1.455-.31.416-.21.74-.497.97-.863A2.3 2.3 0 0010 13.566c0-.439-.098-.828-.293-1.167a2.079 2.079 0 00-.796-.796 2.249 2.249 0 00-1.145-.29c-.337 0-.638.063-.904.189-.263.124-.453.28-.572.472l.122-1.629h3.166V9H4.992l-.311 3.723 1.525.276a.983.983 0 01.419-.367c.186-.09.383-.134.59-.132.219 0 .412.047.58.142.17.092.302.221.397.387a1.1 1.1 0 01.143.584 1.12 1.12 0 01-.14.58 1.005 1.005 0 01-.394.387c-.167.093-.36.139-.576.139-.277 0-.515-.077-.715-.23a.798.798 0 01-.321-.613H4.513c.01.413.13.78.363 1.099.235.32.555.57.96.752z" />
    </symbol>
  ),
  'media-back-5--fill': (
    <symbol id="media-back-5--fill" viewBox="0 0 16 16">
      <path d="M2.343 2.343A8 8 0 1112 14.93v-1.806a6.5 6.5 0 10-8.596-9.72L7 7H0V0l2.343 2.343z" />
      <path d="M2.719 16c-.523 0-.987-.091-1.393-.273a2.373 2.373 0 01-.962-.752 1.89 1.89 0 01-.364-1.1h1.68a.798.798 0 00.32.615c.2.153.44.23.718.23.216 0 .409-.046.577-.139a1 1 0 00.395-.387 1.13 1.13 0 00.14-.58 1.105 1.105 0 00-.143-.584 1 1 0 00-.4-.387 1.165 1.165 0 00-.58-.142 1.312 1.312 0 00-.591.132.985.985 0 00-.42.367l-1.53-.277L.48 9h4.598v1.345H1.903l-.122 1.629c.119-.191.31-.348.574-.472.266-.126.568-.189.906-.189.429 0 .812.097 1.147.29.339.191.605.456.798.796.196.34.294.728.294 1.167 0 .474-.117.894-.35 1.26-.23.367-.555.655-.973.864-.415.207-.901.31-1.458.31z" />
    </symbol>
  ),
  'media-back-5--line': (
    <symbol id="media-back-5--line" viewBox="0 0 16 16">
      <path d="M6.75 5.25v1.5H0V0h1.5v3.335A8 8 0 1112 14.93v-1.805A6.5 6.5 0 102.109 5.25H6.75z" />
      <path d="M1.326 15.727c.406.182.87.273 1.393.273.557 0 1.043-.103 1.458-.31.418-.21.742-.497.973-.863.233-.367.35-.787.35-1.261 0-.439-.098-.828-.294-1.167a2.082 2.082 0 00-.798-.796 2.259 2.259 0 00-1.147-.29c-.338 0-.64.063-.906.189-.264.124-.455.28-.574.472l.122-1.629h3.174V9H.479l-.311 3.723 1.529.276a.985.985 0 01.42-.367 1.31 1.31 0 01.591-.132c.22 0 .413.047.58.142a1 1 0 01.4.387c.098.167.145.361.143.584a1.13 1.13 0 01-.14.58 1.006 1.006 0 01-.395.387 1.18 1.18 0 0,1-.577.139 1.15 1.15 0 01-.718-.23.798.798 0 01-.322-.613H0c.01.413.13.78.364 1.099.235.32.556.57.962.752z" />
    </symbol>
  ),
  'media-forward-10--fill': (
    <symbol id="media-forward-10--fill" viewBox="0 0 16 16">
      <path d="M16 0l-2.343 2.343A8 8 0 104 14.93v-1.806a6.5 6.5 0 118.596-9.72L9 7h7V0z" />
      <path d="M9.364 9v6.906H7.64v-5.348L6 11.502v-1.443L7.763 9h1.601z" />
      <path
        fillRule="evenodd"
        d="M11.627 15.582c.426.279.933.418 1.521.418.59 0 1.098-.138 1.521-.415.426-.279.754-.681.985-1.208.23-.527.345-1.161.345-1.903.003-.738-.111-1.366-.342-1.884-.23-.518-.56-.912-.988-1.182-.426-.272-.933-.408-1.52-.408-.59 0-1.096.136-1.522.408-.424.27-.75.664-.981 1.182-.229.516-.344 1.144-.346 1.884-.002.74.112 1.373.342 1.9.231.524.56.927.985 1.208zm2.374-1.452c-.217.358-.502.536-.853.536a.9.9 0 01-.616-.237c-.177-.16-.316-.402-.414-.727-.097-.325-.144-.735-.142-1.228.002-.73.11-1.27.326-1.62.215-.354.497-.53.846-.53.235 0 .44.078.616.233.176.156.313.393.411.712.1.316.149.717.149 1.205.002.744-.106 1.296-.323 1.656z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-forward-10--line': (
    <symbol id="media-forward-10--line" viewBox="0 0 16 16">
      <path d="M13.891 5.25A6.5 6.5 0 104 13.124v1.806A8 8 0 1114.5 3.336V0H16v6.75H9.25v-1.5h4.641z" />
      <path d="M9.364 9v6.906H7.64v-5.348L6 11.502v-1.443L7.763 9h1.601z" />
      <path
        fillRule="evenodd"
        d="M11.627 15.582c.426.279.933.418 1.521.418.59 0 1.098-.138 1.521-.415.426-.279.754-.681.985-1.208.23-.527.345-1.161.345-1.903.003-.738-.111-1.366-.342-1.884-.23-.518-.56-.912-.988-1.182-.426-.272-.933-.408-1.52-.408-.59 0-1.096.136-1.522.408-.424.27-.75.664-.981 1.182-.229.516-.344 1.144-.346 1.884-.002.74.112 1.373.342 1.9.231.524.56.927.985 1.208zm2.374-1.452c-.217.358-.502.536-.853.536a.9.9 0 01-.616-.237c-.177-.16-.316-.402-.414-.727-.097-.325-.144-.735-.142-1.228.002-.73.11-1.27.326-1.62.215-.354.497-.53.846-.53.235 0 .44.078.616.233.176.156.313.393.411.712.1.316.149.717.149 1.205.002.744-.106 1.296-.323 1.656z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-forward-15--fill': (
    <symbol id="media-forward-15--fill" viewBox="0 0 16 16">
      <path d="M12.596 3.404A6.5 6.5 0 104 13.124v1.806a8 8 0 119.657-12.587L16 0v7H9l3.596-3.596z" />
      <path d="M9.364 9v6.906H7.64v-5.348L6 11.502v-1.443L7.763 9h1.601zm3.861 7a3.36 3.36 0 01-1.389-.273 2.367 2.367 0 01-.96-.752 1.893 1.893 0 01-.362-1.1h1.675c.014.255.12.46.32.614.201.153.44.23.716.23.217 0 .409-.046.576-.139a1 1 0 00.395-.387 1.14 1.14 0 00.14-.58 1.107 1.107 0 00-.144-.584.998.998 0 00-.398-.387 1.16 1.16 0 00-.58-.142 1.306 1.306 0 00-.589.132.984.984 0 00-.419.367l-1.525-.277.31-3.722h4.587v1.345h-3.166l-.122 1.629c.119-.191.31-.348.572-.472.266-.126.567-.189.904-.189.428 0 .81.097 1.145.29.338.191.603.456.796.796.195.34.293.728.293 1.167 0 .474-.116.894-.349 1.26-.23.367-.554.655-.97.864-.414.207-.9.31-1.456.31z" />
    </symbol>
  ),
  'media-forward-15--line': (
    <symbol id="media-forward-15--line" viewBox="0 0 17 16">
      <path d="M9 1.5a6.5 6.5 0 015.891 3.75H10.25v1.5H17V0h-1.5v3.335A8 8 0 105 14.93v-1.805A6.5 6.5 0 019 1.5z" />
      <path d="M10.364 9v6.906H8.64v-5.348L7 11.502v-1.443L8.763 9h1.601zm3.861 7a3.36 3.36 0 01-1.389-.273 2.367 2.367 0 01-.96-.752 1.893 1.893 0 01-.362-1.1h1.675c.014.255.12.46.32.614.201.153.44.23.716.23.217 0 .409-.046.576-.139a1 1 0 00.395-.387 1.14 1.14 0 00.14-.58 1.107 1.107 0 00-.144-.584.998.998 0 00-.398-.387 1.16 1.16 0 00-.58-.142 1.306 1.306 0 00-.589.132.984.984 0 00-.419.367l-1.525-.277.31-3.722h4.587v1.345h-3.166l-.122 1.629c.119-.191.31-.348.572-.472.266-.126.567-.189.904-.189.428 0 .81.097 1.145.29.338.191.603.456.796.796.195.34.293.728.293 1.167 0 .474-.116.894-.349 1.26-.23.367-.554.655-.97.864-.414.207-.9.31-1.456.31z" />
    </symbol>
  ),
  'media-forward-5--fill': (
    <symbol id="media-forward-5--fill" viewBox="0 0 16 16">
      <path d="M16 0l-2.343 2.343A8 8 0 104 14.93v-1.806a6.5 6.5 0 118.596-9.72L9 7h7V0z" />
      <path d="M11.826 15.727c.406.182.87.273 1.393.273.557 0 1.043-.103 1.459-.31a2.39 2.39 0 00.972-.863c.233-.367.35-.787.35-1.261 0-.439-.098-.828-.294-1.167a2.082 2.082 0 00-.798-.796 2.259 2.259 0 00-1.147-.29c-.338 0-.64.063-.906.189-.264.124-.455.28-.574.472l.122-1.629h3.174V9h-4.598l-.311 3.723 1.529.276a.985.985 0 01.42-.367 1.31 1.31 0 01.591-.132c.22 0 .413.047.58.142a1 1 0 01.4.387c.098.167.145.361.143.584a1.13 1.13 0 01-.14.58 1.007 1.007 0 01-.395.387 1.18 1.18 0 01-.577.139 1.15 1.15 0 01-.718-.23.798.798 0 01-.322-.613H10.5c.01.413.13.78.364 1.099.235.32.556.57.962.752z" />
    </symbol>
  ),
  'media-forward-5--line': (
    <symbol id="media-forward-5--line" viewBox="0 0 16 16">
      <path d="M13.891 5.25A6.5 6.5 0 104 13.124v1.806A8 8 0 1114.5 3.336V0H16v6.75H9.25v-1.5h4.641z" />
      <path d="M11.826 15.727c.406.182.87.273 1.393.273.557 0 1.043-.103 1.459-.31a2.39 2.39 0 00.972-.863c.233-.367.35-.787.35-1.261 0-.439-.098-.828-.294-1.167a2.082 2.082 0 00-.798-.796 2.259 2.259 0 00-1.147-.29c-.338 0-.64.063-.906.189-.264.124-.455.28-.574.472l.122-1.629h3.174V9h-4.598l-.311 3.723 1.529.276a.985.985 0 01.42-.367 1.31 1.31 0 01.591-.132c.22 0 .413.047.58.142a1 1 0 01.4.387c.098.167.145.361.143.584a1.13 1.13 0 01-.14.58 1.007 1.007 0 01-.395.387 1.18 1.18 0 01-.577.139 1.15 1.15 0 01-.718-.23.798.798 0 01-.322-.613H10.5c.01.413.13.78.364 1.099.235.32.556.57.962.752z" />
    </symbol>
  ),
  'media-pause--fill': (
    <symbol id="media-pause--fill" viewBox="0 0 16 16">
      <path d="M5 3v10h2V3H5zm4 0v10h2V3H9z" />
    </symbol>
  ),
  'media-pause--line': (
    <symbol id="media-pause--line" viewBox="0 0 16 16">
      <path d="M5.25 3v10h1.5V3h-1.5zm4 0v10h1.5V3h-1.5z" />
    </symbol>
  ),
  'media-pause-circle--fill': (
    <symbol id="media-pause-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zM9.25 4h1.5v8h-1.5V4zm-2.5 0h-1.5v8h1.5V4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-pause-circle--line': (
    <symbol id="media-pause-circle--line" viewBox="0 0 16 16">
      <path d="M9.25 4h1.5v8h-1.5V4zm-2.5 0h-1.5v8h1.5V4z" />
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-play--fill': (
    <symbol id="media-play--fill" viewBox="0 0 16 16">
      <path d="M4 2l10 6-10 6V2z" />
    </symbol>
  ),
  'media-play--line': (
    <symbol id="media-play--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4 2v12l10-6L4 2zm1.5 2.65v6.7L11.085 8 5.5 4.65z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-play-back--fill': (
    <symbol id="media-play-back--fill" viewBox="0 0 16 16">
      <path d="M2.25 2v12h1.5V2h-1.5zM4 8l10-6v12L4 8z" />
    </symbol>
  ),
  'media-play-back--line': (
    <symbol id="media-play-back--line" viewBox="0 0 16 16">
      <path d="M3.75 2v12h-1.5V2h1.5z" />
      <path
        fillRule="evenodd"
        d="M14 2L4 8l10 6V2zM6.915 8l5.585 3.35v-6.7L6.915 8z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-play-circle--fill': (
    <symbol id="media-play-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm4.5-8l-7-4v8l7-4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-play-circle--line': (
    <symbol id="media-play-circle--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5 3.5L13 8l-8 4.5v-9zM9.94 8L6.5 9.935v-3.87L9.94 8z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-play-next--fill': (
    <symbol id="media-play-next--fill" viewBox="0 0 16 16">
      <path d="M12 8L2 2v12l10-6zm1.75-6h-1.5v12h1.5V2z" />
    </symbol>
  ),
  'media-play-next--line': (
    <symbol id="media-play-next--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M2 2l10 6-10 6V2zm7.085 6L3.5 11.35v-6.7L9.085 8z"
        clipRule="evenodd"
      />
      <path d="M13.75 2h-1.5v12h1.5V2z" />
    </symbol>
  ),
  'media-record--fill': (
    <symbol id="media-record--fill" viewBox="0 0 16 16">
      <path d="M8 13.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11z" />
    </symbol>
  ),
  'media-record--line': (
    <symbol id="media-record--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 12a4 4 0 100-8 4 4 0 000 8zm5.5-4a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-stop--fill': (
    <symbol id="media-stop--fill" viewBox="0 0 16 16">
      <path d="M3 3h10v10H3V3z" />
    </symbol>
  ),
  'media-stop--line': (
    <symbol id="media-stop--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.5 4.5h-7v7h7v-7zM3 3v10h10V3H3z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-stop-circle--fill': (
    <symbol id="media-stop-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm3-11H5v6h6V5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'media-stop-circle--line': (
    <symbol id="media-stop-circle--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.5 4.5h7v7h-7v-7zM6 6h4v4H6V6z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'menu-bars--fill': (
    <symbol id="menu-bars--fill" viewBox="0 0 16 16">
      <path d="M15 3H1v2h14V3zm0 8H1v2h14v-2zM1 7h14v2H1V7z" />
    </symbol>
  ),
  'menu-bars--line': (
    <symbol id="menu-bars--line" viewBox="0 0 16 16">
      <path d="M15 4.75H1v-1.5h14v1.5zm0 4H1v-1.5h14v1.5zm-14 4h14v-1.5H1v1.5z" />
    </symbol>
  ),
  'mic--fill': (
    <symbol id="mic--fill" viewBox="0 0 16 16">
      <path d="M5 3a3 3 0 016 0v4a3 3 0 01-6 0V3z" />
      <path d="M8.75 12.954V16h-1.5v-3.046A6.001 6.001 0 012 7h1.5a4.5 4.5 0 009 0H14c0 3.06-2.29 5.585-5.25 5.954z" />
    </symbol>
  ),
  'mic--line': (
    <symbol id="mic--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 0a3 3 0 00-3 3v4a3 3 0 006 0V3a3 3 0 00-3-3zm1.5 7V3a1.5 1.5 0 10-3 0v4a1.5 1.5 0 103 0z"
        clipRule="evenodd"
      />
      <path d="M8.75 12.954V16h-1.5v-3.046A6.001 6.001 0 012 7h1.5a4.5 4.5 0 009 0H14c0 3.06-2.29 5.585-5.25 5.954z" />
    </symbol>
  ),
  'mic-slash--fill': (
    <symbol id="mic-slash--fill" viewBox="0 0 16 16">
      <path d="M0 14.943L1.057 16l3.855-3.855c.699.42 1.491.703 2.338.809V16h1.5v-3.046A6.001 6.001 0 0014 7h-1.5a4.5 4.5 0 01-6.484 4.04l1.156-1.156A3.002 3.002 0 0011 7v-.943l5-5L14.943 0 0 14.943zm10.827-12.95A3.001 3.001 0 005 3v4c0 .252.031.496.09.73l5.737-5.737zM3.92 8.9A4.483 4.483 0 013.5 7H2c0 1.097.295 2.126.809 3.01l1.11-1.11z" />
    </symbol>
  ),
  'mic-slash--line': (
    <symbol id="mic-slash--line" viewBox="0 0 16 16">
      <path d="M0 14.943L1.057 16l3.855-3.855c.699.42 1.491.703 2.338.809V16h1.5v-3.046A6.001 6.001 0 0014 7h-1.5a4.5 4.5 0 01-6.484 4.04l1.16-1.155A3.002 3.002 0 0011 7v-.94l5-5.003L14.943 0 0 14.943zM9.5 3v.32l1.327-1.327A3.001 3.001 0 005 3v4c0 .252.031.496.09.73L6.5 6.32V3a1.5 1.5 0 113 0zm-6 4c0 .679.15 1.323.42 1.9l-1.111 1.11A5.973 5.973 0 012 7h1.5z" />
    </symbol>
  ),
  'minus--fill': (
    <symbol id="minus--fill" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M14 9H2V7h12v2z" clipRule="evenodd" />
    </symbol>
  ),
  'minus--line': (
    <symbol id="minus--line" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M14 8.75H2v-1.5h12v1.5z" clipRule="evenodd" />
    </symbol>
  ),
  'minus-circle--fill': (
    <symbol id="minus-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zM3.5 8.75h9v-1.5h-9v1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'minus-circle--line': (
    <symbol id="minus-circle--line" viewBox="0 0 16 16">
      <path d="M3.5 8.75h9v-1.5h-9v1.5z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'moon--fill': (
    <symbol id="moon--fill" viewBox="0 0 16 16">
      <path d="M8.812 16c2.404 0 4.607-1.1 6.11-3 .2-.3 0-.7-.401-.6-3.806.7-7.311-2.2-7.311-6.2 0-2.3 1.201-4.3 3.104-5.4.3-.2.2-.6-.1-.7-.4-.1-.901-.1-1.402-.1C4.505 0 1 3.6 1 8s3.505 8 7.812 8z" />
    </symbol>
  ),
  'moon--line': (
    <symbol id="moon--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.52 12.4a6.379 6.379 0 01-1.15.104c-3.333-.006-6.16-2.712-6.16-6.304A6.171 6.171 0 0110.314.8c.3-.2.2-.6-.1-.7-.4-.1-.901-.1-1.402-.1C4.506 0 1 3.6 1 8s3.505 8 7.812 8a7.67 7.67 0 005.393-2.205 8.17 8.17 0 00.716-.795c.2-.3 0-.7-.4-.6zM7.107 1.743C4.471 2.511 2.5 5.011 2.5 8c0 3.607 2.868 6.5 6.312 6.5a6.14 6.14 0 002.846-.692C8.296 13.027 5.71 10 5.71 6.2a7.71 7.71 0 011.396-4.457z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'music-enter--fill': (
    <symbol id="music-enter--fill" viewBox="0 0 16 16">
      <path d="M5 2l11-2v11.25c0 1.243-1.343 2.25-3 2.25s-3-1.007-3-2.25S11.343 9 13 9c.35 0 .687.045 1 .128V3.364L7 4.636V7H5V2zm-.5 13.5V13H0v-2h4.5V8.5L8 12l-3.5 3.5z" />
    </symbol>
  ),
  'music-enter--line': (
    <symbol id="music-enter--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.5 4.773l-8 1.454V7H5V2l11-2v11.25c0 1.243-1.343 2.25-3 2.25s-3-1.007-3-2.25S11.343 9 13 9c.546 0 1.059.11 1.5.301V4.773zm0-1.525l-8 1.455V3.252l8-1.455v1.451zm0 8.002c0-.043-.02-.197-.279-.391S13.535 10.5 13 10.5s-.962.165-1.221.359c-.26.194-.279.348-.279.391 0 .043.02.197.279.391S12.465 12 13 12s.962-.165 1.221-.359c.26-.194.279-.348.279-.391z"
        clipRule="evenodd"
      />
      <path d="M5.19 12.75H0v-1.5h5.19L3.47 9.53l1.06-1.06L8.06 12l-3.53 3.53-1.06-1.06 1.72-1.72z" />
    </symbol>
  ),
  'music-exit--fill': (
    <symbol id="music-exit--fill" viewBox="0 0 16 16">
      <path d="M15 0L4 2v9.128A3.907 3.907 0 003 11c-1.657 0-3 1.007-3 2.25s1.343 2.25 3 2.25 3-1.007 3-2.25V4.636l7-1.272V7h2V0z" />
      <path d="M12.5 13H8v-2h4.5V8.5L16 12l-3.5 3.5V13z" />
    </symbol>
  ),
  'music-exit--line': (
    <symbol id="music-exit--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13.5 4.786L6 6.214v7.036c0 1.243-1.343 2.25-3 2.25s-3-1.007-3-2.25S1.343 11 3 11c.546 0 1.059.11 1.5.301V2L15 0v7.25h-1.5V4.786zm0-1.527L6 4.687V3.241l7.5-1.428v1.446zM4.221 13.64c.26-.194.279-.348.279-.391 0-.043-.02-.197-.279-.391S3.535 12.5 3 12.5s-.962.165-1.221.359c-.26.194-.279.348-.279.391 0 .043.02.197.279.391S2.465 14 3 14s.962-.165 1.221-.359z"
        clipRule="evenodd"
      />
      <path d="M12.94 12.75H8v-1.5h4.94l-1.72-1.72 1.06-1.06L15.81 12l-3.53 3.53-1.06-1.06 1.72-1.72z" />
    </symbol>
  ),
  'music-note--fill': (
    <symbol id="music-note--fill" viewBox="0 0 16 16">
      <path d="M4 2v9.6c-.3-.1-.6-.1-1-.1-1.7 0-3 1-3 2.2C0 14.9 1.3 16 3 16s3-1 3-2.2V5.5L14 4v5.2c-.3-.1-.6-.2-1-.2-1.7 0-3 1-3 2.2 0 1.2 1.3 2.2 3 2.2s3-1 3-2.2V0L4 2z" />
    </symbol>
  ),
  'music-note--line': (
    <symbol id="music-note--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14.5 4.76L6 6.24v7.51C6 14.993 4.657 16 3 16s-3-1.007-3-2.25 1.343-2.25 3-2.25c.546 0 1.059.11 1.5.301V2L16 0v11.25c0 1.243-1.343 2.25-3 2.25s-3-1.007-3-2.25S11.343 9 13 9c.546 0 1.059.11 1.5.301v-4.54zm0-1.522L6 4.717V3.262l8.5-1.479v1.455zm-.279 7.621c.26.194.279.348.279.391 0 .043-.02.197-.279.391S13.535 12 13 12s-.962-.165-1.221-.359c-.26-.194-.279-.348-.279-.391 0-.043.02-.197.279-.391S12.465 10.5 13 10.5s.962.165 1.221.359zM4.5 13.75c0 .043-.02.197-.279.391S3.535 14.5 3 14.5s-.962-.165-1.221-.359c-.26-.194-.279-.348-.279-.391 0-.043.02-.197.279-.391S2.465 13 3 13s.962.165 1.221.359c.26.194.279.348.279.391z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'node-tree-horizontal--fill': (
    <symbol id="node-tree-horizontal--fill" viewBox="0 0 16 16">
      <path d="M5 0h6v4H5V0zm2.25 7.5V5h1.5v2.5h4V11h-1.5V9h-6.5v2h-1.5V7.5h4zM15 16v-4H9v4h6zM1 12h6v4H1v-4z" />
    </symbol>
  ),
  'node-tree-horizontal--line': (
    <symbol id="node-tree-horizontal--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5 0v4h6V0H5zm4.5 1.5h-3v1h3v-1z"
        clipRule="evenodd"
      />
      <path d="M7.25 7.5V5h1.5v2.5h4V11h-1.5V9h-6.5v2h-1.5V7.5h4z" />
      <path
        fillRule="evenodd"
        d="M9 12h6v4H9v-4zm1.5 2.5v-1h3v1h-3zM1 12v4h6v-4H1zm4.5 1.5h-3v1h3v-1z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'node-tree-vertical--fill': (
    <symbol id="node-tree-vertical--fill" viewBox="0 0 16 16">
      <path d="M1 0h6v4H1V0zm2.25 5h1.5v2.25H8v1.5H4.75v4.5H8v1.5H3.25V5zM9 6h6v4H9V6zm6 6H9v4h6v-4z" />
    </symbol>
  ),
  'node-tree-vertical--line': (
    <symbol id="node-tree-vertical--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 0v4h6V0H1Zm4.5 1.5h-3v1h3v-1Z"
        clipRule="evenodd"
      />
      <path d="M3.25 5h1.5v2.25H8v1.5H4.75v4.5H8v1.5H3.25V5Z" />
      <path
        fillRule="evenodd"
        d="M9 6v4h6V6H9Zm4.5 1.5h-3v1h3v-1ZM9 12h6v4H9v-4Zm1.5 1.5h3v1h-3v-1Z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'node-t,ree-vertical--line': (
    <symbol id="node-t,ree-vertical--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 0v4h6V0H1zm4.5 1.5h-3v1h3v-1z"
        clipRule="evenodd"
      />
      <path d="M3.25 5h1.5v2.25H8v1.5H4.75v4.5H8v1.5H3.25V5z" />
      <path
        fillRule="evenodd"
        d="M9 6v4h6V6H9zm4.5 1.5h-3v1h3v-1zM9 12h6v4H9v-4zm1.5 1.5h3v1h-3v-1z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'number--fill': (
    <symbol id="number--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7 1H5l-.429 3H1v2h3.286l-.572 4H1v2h2.429L3 15h2l.429-3h4L9 15h2l.429-3H15v-2h-3.286l.572-4H15V4h-2.429L13 1h-2l-.429 3h-4L7 1zm2.714 9l.572-4h-4l-.572 4h4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'number--line': (
    <symbol id="number--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M9 15l.464-3.25H5.48L5.015 15H3.5l.464-3.25H1v-1.5h3.179l.642-4.5H1v-1.5h4.036L5.5 1h1.515l-.464 3.25h3.985L11 1h1.515l-.464 3.25H15v1.5h-3.163l-.643 4.5H15v1.5h-4.02L10.514 15H9zM6.337 5.75l-.643 4.5h3.985l.642-4.5H6.337z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'number-extension--fill': (
    <symbol id="number-extension--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5 1h2l-.429 3H15v2h-2.714L11 15H9l.429-3H1v-2h2.714L5 1zm4.714 9l.572-4h-4l-.572 4h4z"
        clipRule="evenodd"
      />
      <path d="M5.286 13L5 15H3l.286-2h2zM15 12h-2.571l.285-2H15v2zM3.571 4H1v2h2.286l.285-2zM11 1h2l-.286 2h-2L11 1z" />
    </symbol>
  ),
  'number-extension--line': (
    <symbol id="number-extension--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 11.75h8.464L9 15h1.515l1.322-9.25H15v-1.5H6.55L7.016 1H5.5l-1.321 9.25H1v1.5zm5.337-6l-.643 4.5h3.985l.642-4.5H6.337z"
        clipRule="evenodd"
      />
      <path d="M3.5 15l.321-2.25h1.516L5.015 15H3.5zm8.694-11.75h-1.515L11 1h1.515l-.321 2.25zm-.23 8.5H15v-1.5h-2.821l-.215 1.5zM1 4.25h3.036l-.215 1.5H1v-1.5z" />
    </symbol>
  ),
  'numpad--fill': (
    <symbol id="numpad--fill" viewBox="0 0 16 16">
      <path d="M5 1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 5.8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-3-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6 5.9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM14 10.2a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-6 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm1.5 2.8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </symbol>
  ),
  'numpad--line': (
    <symbol id="numpad--line" viewBox="0 0 16 16">
      <path d="M4.5 2.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm9 0a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM7.75 3.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM4.5 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm7.75 1.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM9 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM3.25 11.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zm10.25-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM7.75 11.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5zM9 14.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
    </symbol>
  ),
  'office-building--fill': (
    <symbol id="office-building--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 1h9.5v12.5H12V5h3v8.5h1V15H0v-1.5h1V1zm3 4.5h3.5V4H4v1.5zm3.5 3H4V7h3.5v1.5zm-3.5 3h3.5V10H4v1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'office-building--line': (
    <symbol id="office-building--line" viewBox="0 0 16 16">
      <path d="M4 5.5h3.5V4H4v1.5zm3.5 3H4V7h3.5v1.5zm-3.5 3h3.5V10H4v1.5z" />
      <path
        fillRule="evenodd"
        d="M1 13.5H0V15h16v-1.5h-1V4.25h-3.5v1.5h2v7.75h-3V1H1v12.5zm8-11H2.5v11H9v-11z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'operator--fill': (
    <symbol id="operator--fill" viewBox="0 0 16 16">
      <path d="M9 6.5a2.5 2.5 0 00-2-2.45V.024C7.187.008 7.377 0 7.569 0c3.34 0 6.097 2.429 6.514 5.572l1.848 2.831c.121.186.097.465-.185.582l-1.609.672V12c0 .884-.735 1.6-1.642 1.6h-2.12V16H3.463v-2.955c0-.945-.358-1.838-1.022-2.644A6.272 6.272 0 011 6.4C1 3.753 2.649 1.482 5 .508V4.5a2.5 2.5 0 002.558 4.266l2.088 2.088a.5.5 0 00.708-.708L8.368 8.161A2.49 2.49 0 009 6.5z" />
    </symbol>
  ),
  'operator--line': (
    <symbol id="operator--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M10.375 16v-2.4h2.12c.907 0 1.642-.716 1.642-1.6V9.657l1.609-.672c.282-.117.306-.396.185-.582l-1.848-2.831C13.666 2.429 10.908 0 7.569 0 3.94 0 1 2.865 1 6.4c0 1.514.54 2.905 1.441 4 .664.807 1.022 1.7 1.022 2.645V16h6.912zm2.22-10.23l.046.337 1.307 2.003-1.31.547V12c0 .015-.005.034-.028.057a.16.16 0 01-.115.043H8.876v2.4H4.963v-1.455c0-1.35-.518-2.57-1.363-3.597A4.772 4.772 0 012.5 6.4c0-1.782.995-3.369 2.5-4.226V4.5a2.5 2.5 0 002.558 4.266l2.088 2.088a.5.5 0 00.708-.708L8.368 8.161A2.5 2.5 0 007 4.05V1.53c.186-.02.376-.03.569-.03 2.607 0 4.711 1.891 5.027 4.27z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'paper-clip--fill': (
    <symbol id="paper-clip--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.414 2.828a2 2 0 00-2.828 0L3.989 7.425a3.5 3.5 0 004.95 4.95l5.303-5.304 1.415 1.414-5.304 5.304A5.5 5.5 0 112.575 6.01l4.596-4.596a4 4 0 115.657 5.657l-4.596 4.596a2.5 2.5 0 01-3.535-3.535L10 2.828l1.414 1.415-5.303 5.303a.5.5 0 00.707.707l4.596-4.596a2 2 0 000-2.829z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'paper-clip--line': (
    <symbol id="paper-clip--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.59 2.652a2.25 2.25 0 00-3.181 0L3.813 7.248a3.75 3.75 0 005.303 5.303l5.127-5.126 1.06 1.06-5.126 5.127a5.25 5.25 0 11-7.425-7.425l4.596-4.596a3.75 3.75 0 115.304 5.303l-4.597 4.597a2.25 2.25 0 11-3.182-3.182L10 3.182l1.06 1.06L5.934 9.37a.75.75 0 001.06 1.06l4.597-4.595a2.25 2.25 0 000-3.182z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'paper-plane--fill': (
    <symbol id="paper-plane--fill" viewBox="0 0 16 16">
      <path d="M1 8.75V16l15-8L1 0v7.25h7v1.5H1z" />
    </symbol>
  ),
  'paper-plane--line': (
    <symbol id="paper-plane--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 16V0l15 8-15 8zm1.5-8.75V2.5L12.813 8 2.5 13.5V8.75h5v-1.5h-5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'park-circle--fill': (
    <symbol id="park-circle--fill" viewBox="0 0 16 16">
      <path d="M9 8H7.25V5.5H9c.389 0 .697.099.895.264.174.145.355.416.355.986 0 .57-.181.841-.355.986C9.697 7.901 9.389 8 9 8z" />
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm-.75-3.75V9.5H9c.611 0 1.303-.151 1.855-.611.576-.48.895-1.209.895-2.139 0-.93-.319-1.659-.895-2.139C10.303 4.151 9.611 4 9 4H5.75v8.25h1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'park-circle--line': (
    <symbol id="park-circle--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7.25 12.25V9.5H9c.611 0 1.303-.151 1.855-.611.576-.48.895-1.209.895-2.139 0-.93-.319-1.659-.895-2.139C10.303 4.151 9.611 4 9 4H5.75v8.25h1.5zM9 8H7.25V5.5H9c.389 0 .697.099.895.264.174.145.355.416.355.986 0 .57-.181.841-.355.986C9.697 7.901 9.389 8 9 8z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pbx--fill': (
    <symbol id="pbx--fill" viewBox="0 0 16 16">
      <path d="M12.24 9.88s.128.063.192.128c.065.064.194 1.095-.257 1.546-1.353 1.288-2.705 1.674-5.99-1.546l-.193-.193c-3.22-3.285-2.834-4.702-1.546-5.99.451-.45 1.482-.322 1.546-.257.065 0 .129.193.129.193l.708 2.06-.901 1.16c-.13.129.129.966 1.03 1.803l.193.193c.773.838 1.74 1.03 1.804.966l1.288-.772 1.996.708zM0 0v5h1.5V1.5H5V0H0zm11 0v1.5h3.5V5H16V0h-5zm0 14.5V16h5v-5h-1.5v3.5H11zM0 16v-5h1.5v3.5H5V16H0z" />
    </symbol>
  ),
  'pbx--line': (
    <symbol id="pbx--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M6.647 2.895a.91.91 0 01.483.46l.043.097 1.442 2.35-1.048 1.287c.18.422.92 1.249 1.363 1.3l1.301-1.004 2.39 1.518c.02.011.05.027.081.046.05.03.163.1.263.2a.783.783 0 01.19.31c.018.051.03.1.037.135a2.4 2.4 0 01.037.237c.018.164.027.372.017.593a3.24 3.24 0 01-.108.723c-.08.288-.22.576-.439.785-.684.654-1.576 1.37-2.835 1.315-1.219-.053-2.557-.817-4.2-2.434l-.483-.486C3.566 8.674, 2.807 7.316 2.753 6.09c-.056-1.27.652-2.165 1.319-2.834.249-.25.563-.367.81-.426a3.25 3.25 0 01.747-.08c.229 0 .443.019.611.044.083.012.165.027.238.045a1.24 1.24 0 01.169.056zm5.1 7.23l-1.432-.91-.528.408a.982.982 0 01-.18.118 1.299 1.299 0 01-.224.088 1.564 1.564 0 01-.59.054c-.818-.078-1.354-.71-1.895-1.255-.507-.475-.792-.954-.84-1.44a1.308 1.308 0 01.324-1.02l.398-.489-.868-1.415a2.87 2.87 0 00-.283-.014c-.153 0-.291.013-.397.039a.467.467 0 00-.108.036c-.59.593-.9 1.09-.872 1.699.029.658.459 1.674 2 3.252l.467.47c1.576 1.55 2.57 1.975 3.21 2.002.594.026 1.083-.281 1.717-.884a.493.493 0 00.048-.122c.029-.104.047-.237.054-.383a2.683 2.683 0 000-.234z"
        clipRule="evenodd"
      />
      <path d="M0 5V0h5v1.5H1.5V5H0zm11-5v1.5h3.5V5H16V0h-5zm0 14.5V16h5v-5h-1.5v3.5H11zM0 16v-5h1.5v3.5H5V16H0z" />
    </symbol>
  ),
  'pencil--fill': (
    <symbol id="pencil--fill" viewBox="0 0 16 16">
      <path d="M9.5 3.5l2-2 3 3-2 2-3-3zm1.928 3.898L8.6 4.57 2 11.17v2.828h2.828l6.6-6.6z" />
    </symbol>
  ),
  'pencil--line': (
    <symbol id="pencil--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M2 11l9.5-9.502 3 3.002L5 13.998H2V11zm8.59-6.47l.91-.91.88.88-.91.909-.88-.88zM9.53 5.59L3.5 11.621v.877h.879l6.03-6.029-.88-.879z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'phone--fill': (
    <symbol id="phone--fill" viewBox="0 0 16 16">
      <path d="M14.895 11.123c-.1-.1-.3-.2-.3-.2l-3.106-1.102-2.004 1.202c-.1.1-1.603-.2-2.805-1.503l-.3-.3C4.976 7.918 4.575 6.615 4.775 6.415L6.18 4.612 5.077 1.406s-.1-.3-.2-.3c-.1-.101-1.703-.301-2.405.4C.47 3.51-.132 5.714 4.877 10.823l.3.3c5.11 5.01 7.213 4.408 9.317 2.405.701-.702.501-2.304.4-2.405z" />
    </symbol>
  ),
  'phone--line': (
    <symbol id="phone--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5.467 1.148c.098 0 .196.296.196.296l1.866 3.04L6.361 5.92c-.196.197-.639.94.736 2.22l.736.74c1.18 1.283 2.11.84 2.208.741l1.495-1.153 3.066 1.948s.197.098.295.197c.098.098.295 1.971-.393 2.661-2.063 1.972-4.31 3.2-9.32-1.729l-.735-.74C-.463 5.776.75 3.415 2.716 1.444c.688-.69 2.652-.395 2.75-.296zm.775 9.333c2.436 2.394 3.905 2.98 4.772 3.017.768.033 1.433-.345 2.385-1.244a.814.814 0 00.026-.078c.036-.13.062-.31.071-.52.003-.056.004-.112.004-.164l-1.88-1.195-.633.488a1.863 1.863 0 01-.337.22c-.124.063-.26.117-.404.16a2.767 2.767 0 01-1.045.096c-.822-.078-1.667-.5-2.45-1.343l-.698-.702c-.818-.768-1.32-1.58-1.406-2.446a2.369 2.369 0 01.583-1.837l.465-.57-1.139-1.856a4.068 4.068 0 00-.244-.007c-.222 0-.41.02-.54.051a.83.83 0 00-.057.016c-.866.882-1.248 1.555-1.213 2.344.04.898.635 2.403 3.015 4.84l.725.73z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'phone-answer-arrow--fill': (
    <symbol id="phone-answer-arrow--fill" viewBox="0 0 16 16">
      <path d="M11.2 3.9c0-.2-1.1-.9-2.9-.9h-.4C6.2 3 5 3.7 5 3.9L4.5 6 1.7 7.4s-.3.1-.4.1C1.2 7.5 0 6.6 0 5.6 0 2.9 1.1 1 7.8 1h.4C14.9 1 16 2.9 16 5.6c0 1.1-1.1 1.9-1.3 1.9-.1 0-.4-.1-.4-.1L11.5 6l-.3-2.1z" />
      <path d="M13 11H8.75v5h-1.5v-5H3l5-5 5 5z" />
    </symbol>
  ),
  'phone-answer-arrow--line': (
    <symbol id="phone-answer-arrow--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.53 8.229c.134 0 .334-.067.334-.067l3.4-.768.236-1.795c0-.133.333-1.064 2-1h1c1.8-.068 2 .734 2 1l.175 1.763 3.323.786s.266.133.333.066c.133 0 1.668-1.135 1.669-2.068.003-2.667-.767-5.087-7.5-5.146h-1C.767 1.074.07 3.43 0 6.164c-.001.933 1.398 2.065 1.53 2.065zm.37-1.613l2.013-.455.095-.721c.017-.174.059-.313.083-.388.043-.13.1-.263.17-.393.143-.261.356-.54.658-.79.622-.514 1.494-.807 2.608-.77h.946c1.082-.037 1.991.172 2.653.714a2.33 2.33 0 01.872 1.687l.064.649 1.945.46c.049-.044.098-.09.147-.14.128-.128.258-.267.346-.426-.01-1.172-.206-1.856-.736-2.341-.612-.56-2.011-1.173-5.27-1.202h-.986c-3.267.037-4.642.64-5.243 1.19-.526.482-.721 1.167-.762 2.407.076.162.198.305.318.436l.079.083z"
        clipRule="evenodd"
      />
      <path d="M8.002 7L13 11.95l-1.071 1.06-3.213-3.182V16H7.287V9.828l-3.216 3.185L3 11.953 8.002 7z" />
    </symbol>
  ),
  'phone-check--fill': (
    <symbol id="phone-check--fill" viewBox="0 0 16 16">
      <path d="m10.526 6.585 5.472-5.53L14.932 0l-4.423 4.47-2.02-1.978-1.05 1.071 3.087 3.022Zm3.068 5.338s.2.1.3.2c.101.1.301 1.704-.4 2.405-2.104 2.003-4.208 2.604-9.317-2.405l-.3-.3c-5.01-5.11-4.408-7.313-2.405-9.317.702-.701 2.304-.501 2.405-.4.1 0 .2.3.2.3l1.102 3.206-1.403 1.803c-.2.2.2 1.503 1.603 2.805l.3.3c1.203 1.303 2.706 1.603 2.806 1.503l2.004-1.202 3.105 1.102Z" />
    </symbol>
  ),
  'phone-check--line': (
    <symbol id="phone-check--line" viewBox="0 0 16 16">
      <path d="m10.526 6.585 5.472-5.53L14.932 0l-4.423 4.47-2.02-1.978-1.05 1.071 3.087 3.022Z" />
      <path
        fillRule="evenodd"
        d="M4.467 2.148c.098 0 .196.296.196.296l1.866 3.04L5.361 6.92C5.165 7.116 5 8 6.097 9.14l.736.74c1.167 1.12 2.11.84 2.208.74l1.495-1.153 3.066 1.948s.197.098.295.197c.098.098.295 1.971-.393 2.661-2.063 1.972-4.31 3.2-9.32-1.729l-.735-.74C-1.463 6.776-.25 4.415 1.716 2.444c.688-.69 2.652-.395 2.75-.296Zm.05 8.603.725.73c2.436 2.394 3.905 2.98 4.772 3.017.768.033 1.433-.345 2.385-1.244a.814.814 0 0 0 .026-.078c.036-.13.062-.31.071-.52.003-.056.004-.112.004-.164l-1.88-1.195-.639.492c-.196.16-.386.238-.46.267a2.368 2.368 0 0 1-.424.122 2.969 2.969 0 0 1-.975.013c-.738-.107-1.545-.478-2.328-1.23l-.777-.78c-.708-.736-1.113-1.498-1.248-2.234a2.79 2.79 0 0 1 0-1.055c.055-.273.18-.638.456-.952l.47-.578-1.14-1.855a4.067 4.067 0 0 0-.243-.007c-.222 0-.41.02-.54.051a.83.83 0 0 0-.057.016c-.866.882-1.248 1.555-1.213 2.344.04.898.635 2.403 3.015 4.84Z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'phone-hangup--fill': (
    <symbol id="phone-hangup--fill" viewBox="0 0 16 16">
      <path d="M8.3 7c1.8 0 2.9.7 2.9.9l.3 2.1 2.8 1.4s.3.1.4.1c.2 0 1.3-.8 1.3-1.9C16 6.9 14.9 5 8.2 5h-.4C1.1 5 0 6.9 0 9.6c0 1 1.2 1.9 1.3 1.9.1 0 .4-.1.4-.1L4.5 10 5 7.9C5 7.7 6.2 7 7.9 7h.4z" />
    </symbol>
  ),
  'phone-hangup--line': (
    <symbol id="phone-hangup--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.864 10.562s-.2.067-.333.067S-.001 9.498 0 8.564c.07-2.733.767-5.09 7.5-5.163h1c6.733.059 7.503 2.479 7.5 5.145-.001.934-1.536 2.069-1.67 2.069-.066.067-.332-.066-.332-.066l-3.322-.786L10.5 8c0-.267-.2-1.069-2-1h-1c-1.667-.065-2 .867-2 1l-.236 1.794-3.4.768zm2.049-2L1.9 9.016a3.448 3.448 0 01-.08-.083 1.817 1.817 0 01-.317-.436c.04-1.24.236-1.924.762-2.406.6-.551 1.976-1.153 5.243-1.19h.985c3.26.029 4.659.641 5.27 1.201.531.486.728 1.17.737 2.341-.088.16-.218.299-.346.427-.049.05-.098.096-.147.14l-1.945-.46-.064-.65a2.327 2.327 0 00-.872-1.686c-.662-.542-1.571-.75-2.653-.714h-.946c-1.114-.037-1.986.255-2.608.77-.302.25-.515.528-.658.79a2.32 2.32 0 00-.17.392 1.846 1.846 0 00-.083.389l-.095.72z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'phone-hangup-arrow--fill': (
    <symbol id="phone-hangup-arrow--fill" viewBox="0 0 16 16">
      <path d="M8.3 3c1.8 0 2.9.7 2.9.9l.3 2.1 2.8 1.4s.3.1.4.1c.2 0 1.3-.8 1.3-1.9C16 2.9 14.9 1 8.2 1h-.4C1.1 1 0 2.9 0 5.6c0 1 1.2 1.9 1.3 1.9.1 0 .4-.1.4-.1L4.5 6 5 3.9C5 3.7 6.2 3 7.9 3h.4z" />
      <path d="M7.25 11V6h1.5v5H13l-5 5-5-5h4.25z" />
    </symbol>
  ),
  'phone-hangup-arrow--line': (
    <symbol id="phone-hangup-arrow--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.53 8.229c.134 0 .334-.067.334-.067l3.4-.768.236-1.795c0-.133.333-1.064 2-1h1c1.8-.068 2 .734 2 1l.175 1.763 3.323.786s.266.133.333.066c.133 0 1.668-1.135 1.669-2.068.003-2.667-.767-5.087-7.5-5.146h-1C.767 1.074.07 3.43 0 6.164c-.001.933 1.398 2.065 1.53 2.065zm.37-1.613l2.013-.455.095-.721c.017-.174.059-.313.083-.388.043-.13.1-.263.17-.393.143-.261.356-.54.658-.79.622-.514 1.494-.807 2.608-.77h.946c1.082-.037 1.991.172 2.653.714a2.33 2.33 0 01.872 1.687l.064.649 1.945.46c.049-.044.098-.09.147-.14.128-.128.258-.267.346-.426-.01-1.172-.206-1.856-.736-2.341-.612-.56-2.011-1.173-5.27-1.202h-.986c-3.267.037-4.642.64-5.243 1.19-.526.482-.721 1.167-.762 2.407.076.162.198.305.318.436l.079.083z"
        clipRule="evenodd"
      />
      <path d="M8.002 16L13 11.05l-1.071-1.06-3.213 3.182V7H7.287v6.172L4.071 9.987 3 11.047 8.002 16z" />
    </symbol>
  ),
  'phone-inbound--fill': (
    <symbol id="phone-inbound--fill" viewBox="0 0 16 16">
      <path d="M8 1v7h7l-2.985-2.985L16 1l-1-1-4.046 3.955L8 1z" />
      <path d="M13.594 11.923s.2.1.3.2c.101.1.301 1.704-.4 2.405-2.104 2.003-4.208 2.604-9.317-2.405l-.3-.3c-5.01-5.11-4.408-7.313-2.405-9.317.702-.701 2.304-.501 2.405-.4.1 0 .2.3.2.3l1.102 3.206-1.403 1.803c-.2.2.2 1.503 1.603 2.805l.3.3c1.203 1.303 2.706 1.603 2.806 1.503l2.004-1.202 3.105 1.102z" />
    </symbol>
  ),
  'phone-inbound--line': (
    <symbol id="phone-inbound--line" viewBox="0 0 16 16">
      <path d="M9 7V.556h1.48v3.916L14.954 0 16 1.047 11.528 5.52H15.5V7H9z" />
      <path
        fillRule="evenodd"
        d="M4.663 2.444s-.098-.296-.196-.296c-.099-.099-2.063-.394-2.751.296-1.965 1.971-3.179 4.332 1.733 9.36l.736.74c5.01 4.93 7.256 3.701 9.319 1.73.688-.69.491-2.564.393-2.662-.098-.099-.295-.197-.295-.197l-3.066-1.948L9.04 10.62c-.097.1-1.04.38-2.207-.74l-.736-.74C5 8 5.165 7.116 5.361 6.92L6.53 5.484l-1.867-3.04zm.58 9.037l-.726-.73c-2.38-2.437-2.975-3.942-3.015-4.84-.035-.789.347-1.462 1.213-2.344a.83.83 0 01.057-.016c.13-.031.318-.051.54-.051.084 0 .167.003.244.007l1.139 1.855-.47.578c-.277.314-.4.679-.456.952a2.79 2.79 0 000 1.055c.135.736.54 1.498 1.248 2.233l.777.782c.783.751 1.59 1.122 2.328 1.23.359.052.69.04.975-.014.141-.027.285-.067.424-.122.074-.03.264-.107.46-.266l.638-.493 1.881 1.195c0 .052-.001.108-.004.164-.009.21-.035.39-.071.52a.814.814 0 01-.026.078c-.952.899-1.617 1.277-2.385 1.244-.867-.038-2.336-.623-4.772-3.017z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'phone-outbound--fill': (
    <symbol id="phone-outbound--fill" viewBox="0 0 16 16">
      <path d="M16 7V0H9l2.985 2.985L8 6.97l1.06 1.06 3.986-3.985L16 7Z" />
      <path d="M13.594 11.923s.2.1.3.2c.101.1.301 1.704-.4 2.405-2.104 2.003-4.208 2.604-9.317-2.405l-.3-.3c-5.01-5.11-4.408-7.313-2.405-9.317.702-.701 2.304-.501 2.405-.4.1 0 .2.3.2.3l1.102 3.206-1.403 1.803c-.2.2.2 1.503 1.603 2.805l.3.3c1.203 1.303 2.706 1.603 2.806 1.503l2.004-1.202 3.105 1.102Z" />
    </symbol>
  ),
  'phone-outbound--line': (
    <symbol id="phone-outbound--line" viewBox="0 0 16 16">
      <path d="M16 0v6.444h-1.48V2.528L10.046 7 9 5.953l4.472-4.472H9.5V0H16z" />
      <path
        fillRule="evenodd"
        d="M4.663 2.444s-.098-.296-.196-.296c-.099-.099-2.063-.394-2.751.296-1.965 1.971-3.179 4.332 1.733 9.36l.736.74c5.01 4.93 7.256 3.701 9.319 1.73.688-.69.491-2.564.393-2.662-.098-.099-.295-.197-.295-.197l-3.066-1.948L9.04 10.62c-.097.1-1.04.38-2.207-.74l-.736-.74C5 8 5.165 7.116 5.361 6.92L6.53 5.484l-1.867-3.04zm.58 9.037l-.726-.73c-2.38-2.437-2.975-3.942-3.015-4.84-.035-.789.347-1.462 1.213-2.344a.83.83 0 01.057-.016c.13-.031.318-.051.54-.051.084 0 .167.003.244.007l1.139 1.855-.47.578c-.277.314-.4.679-.456.952a2.79 2.79 0 000 1.055c.135.736.54 1.498 1.248 2.233l.777.782c.783.751 1.59 1.122 2.328 1.23.359.052.69.04.975-.014.141-.027.285-.067.424-.122.074-.03.264-.107.46-.266l.638-.493 1.881 1.195c0 .052-.001.108-.004.164-.009.21-.035.39-.071.52a.814.814 0 01-.026.078c-.952.899-1.617 1.277-2.385 1.244-.867-.038-2.336-.623-4.772-3.017z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'phone-slash--fill': (
    <symbol id="phone-slash--fill" viewBox="0 0 16 16">
      <path d="M0 14.943L1.057 16l4.505-4.505c4.832 4.606 6.882 3.985 8.932 2.033.701-.702.501-2.304.4-2.405-.1-.1-.3-.2-.3-.2L11.49 9.821l-2.004 1.202c-.088.088-1.267-.135-2.37-1.082L16 1.057 14.943 0 0 14.943zm4.776-8.528c-.118.118-.027.618.354 1.275L3.495 9.325C.007 5.259.676 3.302 2.472 1.505c.702-.7 2.304-.5 2.405-.4.1 0 .2.3.2.3l1.102 3.207-1.403 1.803z" />
    </symbol>
  ),
  'phone-slash--line': (
    <symbol id="phone-slash--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 15l1 1 4.322-4.322c4.914 4.773 7.138 3.549 9.182 1.595.688-.69.491-2.563.393-2.661-.098-.099-.295-.197-.295-.197l-3.066-1.948L10.04 9.62c-.094.095-.956.507-2.067-.594L16 1l-1-1L0 15zm6.383-4.383c2.351 2.28 3.78 2.844 4.631 2.881.768.033 1.433-.345 2.385-1.244a.814.814 0 00.026-.078c.036-.13.062-.31.071-.52.003-.056.004-.112.004-.164l-1.88-1.195-.633.488a1.863 1.863 0 01-.337.22c-.124.063-.26.117-.404.16a2.767 2.767 0 01-1.045.096c-.765-.073-1.55-.443-2.288-1.174l-.53.53z"
        clipRule="evenodd"
      />
      <path d="M4.647 6.77c.037.368.148.726.327 1.075l1.172-1.171c-.057-.4.113-.652.215-.755L7.53 4.485 5.663 1.444s-.098-.296-.196-.296c-.099-.099-2.063-.394-2.751.296C.925 3.24-.243 5.362 3.287 9.533l1.065-1.065c-1.42-1.7-1.818-2.829-1.85-3.557-.035-.789.347-1.462 1.213-2.344a.83.83 0 01.057-.016c.13-.031.318-.051.54-.051.084 0 .167.003.244.007l1.139 1.855-.465.571c-.325.36-.667.99-.583 1.837z" />
    </symbol>
  ),
  'phone-x--fill': (
    <symbol id="phone-x--fill" viewBox="0 0 16 16">
      <path d="M14.94 7.001l-2.44-2.44L10.06 7 8.999 5.94l2.44-2.44-2.44-2.442L10.059 0l2.44 2.44L14.94 0 16 1.059 13.56 3.5 16 5.94l-1.06 1.061zm-1.346 4.922s.2.1.3.2c.101.1.301 1.704-.4 2.405-2.104 2.003-4.208 2.604-9.317-2.405l-.3-.3c-5.01-5.11-4.408-7.313-2.405-9.317.702-.701 2.304-.501 2.405-.4.1 0 .2.3.2.3l1.102 3.206-1.403 1.803c-.2.2.2 1.503 1.603 2.805l.3.3c1.203 1.303 2.706 1.603 2.806 1.503l2.004-1.202 3.105 1.102z" />
    </symbol>
  ),
  'phone-x--line': (
    <symbol id="phone-x--line" viewBox="0 0 16 16">
      <path d="M14.94 7.001l-2.44-2.44L10.06 7 8.999 5.94l2.44-2.441-2.44-2.441 1.06-1.06 2.44 2.44L14.94 0 16 1.059 13.56 3.5 16 5.94l-1.06 1.061z" />
      <path
        fillRule="evenodd"
        d="M4.663 2.444s-.098-.296-.196-.296c-.099-.099-2.063-.394-2.751.296-1.965 1.971-3.179 4.332 1.733 9.36l.736.74c5.01 4.93 7.256 3.701 9.319 1.73.688-.69.491-2.564.393-2.662-.098-.099-.295-.197-.295-.197l-3.066-1.948L9.04 10.62c-.097.1-1.04.38-2.207-.74l-.736-.74C5 8 5.165 7.116 5.361 6.92L6.53 5.484l-1.867-3.04zm.58 9.037l-.726-.73c-2.38-2.437-2.975-3.942-3.015-4.84-.035-.789.347-1.462 1.213-2.344a.83.83 0 01.057-.016c.13-.031.318-.051.54-.051.084 0 .167.003.244.007l1.139 1.855-.47.578c-.277.314-.4.679-.456.952a2.79 2.79 0 000 1.055c.158.862.657 1.62 1.256 2.242l.77.773c.782.751 1.589 1.122 2.327 1.23.359.052.69.04.975-.014.141-.027.285-.067.424-.122.074-.03.264-.107.46-.266l.638-.493 1.881 1.195c0 .052-.001.108-.004.164-.009.21-.035.39-.071.52a.814.814 0 01-.026.078c-.952.899-1.617 1.277-2.385 1.244-.867-.038-2.336-.623-4.772-3.017z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pie-chart-100--fill': (
    <symbol id="pie-chart-100--fill" viewBox="0 0 16 16">
      <path d="M8 13A5 5 0 108 3a5 5 0 000 10z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pie-chart-100--line': (
    <symbol id="pie-chart-100--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13 8A5 5 0 113 8a5 5 0 0110 0zm-1.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pie-chart-25--fill': (
    <symbol id="pie-chart-25--fill" viewBox="0 0 16 16">
      <path d="M8 3a5 5 0 00-5 5h5V3z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pie-chart-25--line': (
    <symbol id="pie-chart-25--line" viewBox="0 0 16 16">
      <path d="M8 3a5 5 0 00-5 5h1.5A3.5 3.5 0 018 4.5V3z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pie-chart-50--fill': (
    <symbol id="pie-chart-50--fill" viewBox="0 0 16 16">
      <path d="M3 8a5 5 0 015-5v10a5 5 0 01-5-5z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pie-chart-50--line': (
    <symbol id="pie-chart-50--line" viewBox="0 0 16 16">
      <path d="M3 8a5 5 0 015-5v1.5a3.5 3.5 0 000 7V13a5 5 0 01-5-5z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pie-chart-75--fill': (
    <symbol id="pie-chart-75--fill" viewBox="0 0 16 16">
      <path d="M3 8a5 5 0 015-5v5h5A5 5 0 013 8z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pie-chart-75--line': (
    <symbol id="pie-chart-75--line" viewBox="0 0 16 16">
      <path d="M3 8a5 5 0 015-5v1.5A3.5 3.5 0 1011.5 8H13A5 5 0 013 8z" />
      <path
        fillRule="evenodd"
        d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pin-location--fill': (
    <symbol id="pin-location--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M2 6c0-3.3 2.7-6 6-6s6 2.7 6 6-5 10-6 10S2 9.3 2 6zm6 3.5A3.51 3.51 0 014.5 6 3.51 3.51 0 018 2.5 3.51 3.51 0 0111.5 6 3.51 3.51 0 018 9.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'pin-location--line': (
    <symbol id="pin-location--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 9.5A3.51 3.51 0 014.5 6 3.51 3.51 0 018 2.5 3.51 3.51 0 0111.5 6 3.51 3.51 0 018 9.5zM6 6c0 1.097.903 2 2 2s2-.903 2-2-.903-2-2-2-2 .903-2 2z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M2 6c0-3.3 2.7-6 6-6s6 2.7 6 6-5 10-6 10S2 9.3 2 6zm1.5 0c0-2.472 2.028-4.5 4.5-4.5s4.5 2.028 4.5 4.5c0 .507-.21 1.312-.668 2.347-.443.997-1.054 2.07-1.71 3.065-.655.996-1.33 1.875-1.88 2.488a9.996 9.996 0 01-.242.262 9.996 9.996 0 01-.243-.262c-.55-.613-1.224-1.492-1.88-2.488-.655-.994-1.267-2.068-1.709-3.065C3.71 7.312 3.5 6.507 3.5 6z"
        clipRule="evenodd"
      />
      ,
    </symbol>
  ),
  'pin-tack--fill': (
    <symbol id="pin-tack--fill" viewBox="0 0 16 16">
      <path d="M9.043 0L8 1.043l.696.696L4.87 5.565H2.087L.696 6.957l3.478 3.478L0 14.609 1.391 16l4.174-4.174 3.478 3.478 1.392-1.391V11.13l3.826-3.826.696.696L16 6.957 9.043 0z" />
    </symbol>
  ),
  'pin-tack--line': (
    <symbol id="pin-tack--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8.63 1.755l-3.86 3.86H1.963L.559 7.019l3.652 3.651L0 14.881 1.119 16l4.21-4.211 3.652 3.652 1.404-1.404V11.23l3.86-3.86.702.701L16 7.02 8.98 0 7.93 1.053l.701.702zM2.975 7.197l5.828 5.828v-2.45l4.258-4.258-3.378-3.378-4.257 4.258H2.975z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'plus--fill': (
    <symbol id="plus--fill" viewBox="0 0 16 16">
      <path d="M7 9v5h2V9h5V7H9V2H7v5H2v2h5z" />
    </symbol>
  ),
  'plus--line': (
    <symbol id="plus--line" viewBox="0 0 16 16">
      <path d="M7.25 8.75V14h1.5V8.75H14v-1.5H8.75V2h-1.5v5.25H2v1.5h5.25z" />
    </symbol>
  ),
  'plus-circle--fill': (
    <symbol id="plus-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm-.75-3.5V8.75H3.5v-1.5h3.75V3.5h1.5v3.75h3.75v1.5H8.75v3.75h-1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'plus-circle--line': (
    <symbol id="plus-circle--line" viewBox="0 0 16 16">
      <path d="M7.25 8.75H3.5v-1.5h3.75V3.5h1.5v3.75h3.75v1.5H8.75v3.75h-1.5V8.75z" />
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'plus-square--fill': (
    <symbol id="plus-square--fill" viewBox="0 0 16 16">
      <path d="M16 7V0H9l2.985 2.985L8 6.97l1.06 1.06 3.986-3.985L16 7Z" />
      <path d="M13.594 11.923s.2.1.3.2c.101.1.301 1.704-.4 2.405-2.104 2.003-4.208 2.604-9.317-2.405l-.3-.3c-5.01-5.11-4.408-7.313-2.405-9.317.702-.701 2.304-.501 2.405-.4.1 0 .2.3.2.3l1.102 3.206-1.403 1.803c-.2.2.2 1.503 1.603 2.805l.3.3c1.203 1.303 2.706 1.603 2.806 1.503l2.004-1.202 3.105 1.102Z" />
    </symbol>
  ),
  'plus-square--line': (
    <symbol id="plus-square--line" viewBox="0 0 16 16">
      <path d="M7.25 12V8.75H4v-1.5h3.25V4h1.5v3.25H12v1.5H8.75V12h-1.5z" />
      <path
        fillRule="evenodd"
        d="M1 15V1h14v14H1zM2.5 2.5h11v11h-11v-11z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'power--fill': (
    <symbol id="power--fill" viewBox="0 0 16 16">
      <path d="M7 0v7h2V0H7z" />
      <path d="M.5 8.648A7.252 7.252 0 014.854 2v2.269a5.25 5.25 0 106 .145v-2.32A7.25 7.25 0 11.5 8.648z" />
    </symbol>
  ),
  'power--line': (
    <symbol id="power--line" viewBox="0 0 16 16">
      <path d="M7.25 0v7h1.5V0h-1.5z" />
      <path d="M.5 8.648A7.252 7.252 0 014.854 2v1.68a5.75 5.75 0 106 .127V2.094A7.25 7.25 0 11.5 8.648z" />
    </symbol>
  ),
  'puzzle--fill': (
    <symbol id="puzzle--fill" viewBox="0 0 16 16">
      <path d="M4 2a2 2 0 114 0v1h5v4h1a2 2 0 110 4h-1v5H8v-.75a2 2 0 00-4 0V16H0v-5h.75a2 2 0 000-4H0V3h4V2z" />
    </symbol>
  ),
  'puzzle--line': (
    <symbol id="puzzle--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8.75 3v-.25a2.75 2.75 0 00-5.5 0V3H0v4.75h.75a1.25 1.25 0 110 2.5H0V16h4.75v-1a1.25 1.25 0 112.5 0v1H13v-4.25h.25a2.75 2.75 0 100-5.5H13V3H8.75zM6 1.5c-.69 0-1.25.56-1.25 1.25V4.5H1.5v1.854a2.751 2.751 0 010 5.292V14.5h1.795a2.75 2.75 0 015.41 0H11.5v-4.25h1.75a1.25 1.25 0 100-2.5H11.5V4.5H7.25V2.75c0-.69-.56-1.25-1.25-1.25z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'question-circle--fill': (
    <symbol id="question-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm.25-11.25c-1.013 0-1.75.758-1.75 1.594H5C5 4.59 6.501 3.25 8.25 3.25s3.25 1.34 3.25 3.094c0 .696-.248 1.421-.76 1.979-.477.519-1.154.86-1.986.918a5.895 5.895 0 00-.004.259v.5h-1.5c0-.465-.046-.962.1-1.409.06-.182.17-.406.388-.583.227-.184.497-.258.762-.258.551 0 .91-.197 1.135-.442A1.43 1.43 0 0010 6.344c0-.836-.737-1.594-1.75-1.594zM7 12a1 1 0 112 0 1 1 0 01-2 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'question-circle--line': (
    <symbol id="question-circle--line" viewBox="0 0 16 16">
      <path d="M8.25 4.75c-1.013 0-1.75.758-1.75 1.594H5C5 4.59 6.501 3.25 8.25 3.25s3.25 1.34 3.25 3.094c0 .696-.248 1.421-.76 1.979-.477.519-1.154.86-1.986.918a5.895 5.895 0 00-.004.259v.5h-1.5c0-.464-.046-.962.1-1.409.06-.182.17-.406.388-.583.227-.184.497-.258.762-.258.551 0 .91-.197 1.135-.442A1.43 1.43 0 0010 6.344c0-.836-.737-1.594-1.75-1.594zM8 11a1 1 0 100 2 1 1 0 000-2z" />
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'rocket--fill': (
    <symbol id="rocket--fill" viewBox="0 0 16 16">
      <path d="M4.813 14.028c-.785.785-3.833 2.56-4.617 1.776-.785-.784.99-3.832 1.775-4.617a2.01 2.01 0 0 1 2.842 2.841Zm3.551-1.42 1.776 3.196c.891-.89 2.432-3.061 1.9-4.971-2.065 1.238-3.676 1.775-3.676 1.775ZM3.392 7.636.196 5.86c.89-.891 3.061-2.432 4.971-1.9C3.93 6.024 3.392 7.635 3.392 7.635Z" />
      <path
        fillRule="evenodd"
        d="M15.822.178s-4.972-.71-6.393.71C5.878 4.439 4.457 8.7 4.457 8.7l2.841 2.841s4.262-1.42 7.814-4.972c1.42-1.42.71-6.392.71-6.392ZM10.85 5.15a1.507 1.507 0 1 0 2.131-2.131 1.507 1.507 0 0 0-2.13 2.13Z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'rocket--line': (
    <symbol id="rocket--line" viewBox="0 0 16 16">
      <path d="M10.85 5.15a1.507 1.507 0 1 0 2.131-2.131 1.507 1.507 0 0 0-2.13 2.13Z" />
      <path
        fillRule="evenodd"
        d="M15.111 6.57a20.533 20.533 0 0 1-2.521 2.135l.08-.04c.72 1.437.561 2.796.096 3.901-.455 1.082-1.21 1.938-1.736 2.464l-.703.703-2.45-4.41c-.368.149-.579.22-.579.22L4.457 8.7s.059-.176.182-.485L.335 6.303.9 5.55c.456-.607 1.34-1.368 2.448-1.82 1.062-.432 2.382-.6 3.733-.019A20.77 20.77 0 0 1 9.429.888c1.42-1.42 6.393-.71 6.393-.71s.71 4.972-.71 6.392ZM10.49 1.95c.036-.037.254-.185.832-.3.53-.107 1.176-.149 1.836-.149.463 0 .91.02 1.294.048.027.384.047.83.047 1.293 0 .66-.042 1.306-.148 1.837-.116.578-.264.795-.3.832-1.64 1.64-3.458 2.8-4.88 3.553-.592.313-1.109.552-1.507.724L6.213 8.335c.171-.398.41-.915.724-1.507.752-1.421 1.913-3.24 3.553-4.88Zm-1.24 8.757a23.714 23.714 0 0 0 2.157-1.204c.392.899.292 1.733-.023 2.482-.191.454-.46.869-.741 1.23l-1.393-2.51Zm-3-5.71c-.819-.276-1.62-.168-2.334.123a4.815 4.815 0 0 0-1.107.64l2.439 1.084c.262-.54.595-1.17 1.002-1.847Z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M.217 15.783c.872.871 4.258-1.101 5.13-1.973a2.232 2.232 0 1 0-3.157-3.156c-.872.871-2.844 4.257-1.973 5.129Zm1.934-1.694c.975-.452 1.868-1.074 2.135-1.34a.732.732 0 0 0-1.035-1.035c-.266.266-.888 1.16-1.34 2.135-.069.149-.13.29-.18.42.13-.05.271-.111.42-.18Z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'server--fill': (
    <symbol id="server--fill" viewBox="0 0 16 16">
      <path d="M3 1h10l3 6H0l3-6z" />
      <path
        fillRule="evenodd"
        d="M0 15h16V8.5H0V15zm14-2.25H9v-1.5h5v1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'server--line': (
    <symbol id="server--line" viewBox="0 0 16 16">
      <path d="M8 11.75h5v-1.5H8v1.5z" />
      <path
        fillRule="evenodd"
        d="M16 7l-3-6H3L0 7v8h16V7zm-3.927-4.5H3.927L1.677 7h12.646l-2.25-4.5zM1.5 13.5v-5h13v5h-13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'server-stack--fill': (
    <symbol id="server-stack--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M15 8.75V15H1V8.75h14zm-7 4h5v-1.5H8v1.5zm7-5.5V1H1v6.25h14zm-7-2.5h5v-1.5H8v1.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'server-stack--line': (
    <symbol id="server-stack--line" viewBox="0 0 16 16">
      <path d="M7 5.75h5v-1.5H7v1.5zm5 6H7v-1.5h5v1.5z" />
      <path
        fillRule="evenodd"
        d="M15 15V1H1v14h14zM2.5 2.5h11v4.75h-11V2.5zm0 6.25v4.75h11V8.75h-11z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'slider-bars--fill': (
    <symbol id="slider-bars--fill" viewBox="0 0 16 16">
      <path d="M13.5 0h-2v4H9v2h7V4h-2.5V0zm-11 12H0v-2h7v2H4.5v4h-2v-4zm9-4.5h2V16h-2V7.5zM4.5 0h-2v8.5h2V0z" />
    </symbol>
  ),
  'slider-bars--line': (
    <symbol id="slider-bars--line" viewBox="0 0 16 16">
      <path d="M3.25 0v8.5h1.5V0h-1.5zm8 0v4.25H9v1.5h6v-1.5h-2.25V0h-1.5zm-6.5 11.75H7v-1.5H1v1.5h2.25V16h1.5v-4.25zm8-4.25h-1.5V16h1.5V7.5z" />
    </symbol>
  ),
  'slider-knobs--fill': (
    <symbol id="slider-knobs--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.5 0h2v3.145a3.502 3.502 0 010 6.71V16h-2V9.855a3.502 3.502 0 010-6.71V0zM14 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-9.5 6.355a3.502 3.502 0 000-6.71V0h-2v6.145a3.502 3.502 0 000 6.71V16h2v-3.145zM5 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'slider-knobs--line': (
    <symbol id="slider-knobs--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7 10a3.001 3.001 0 00-2.25-2.905V0h-1.5v7.095a3.001 3.001 0 000 5.81V16h1.5v-3.095A3.001 3.001 0 007 10zm-1.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm7.25-1.095a3.001 3.001 0 000-5.81V0h-1.5v3.095a3.001 3.001 0 000 5.81V16h1.5V8.905zM13.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'speaking--fill': (
    <symbol id="speaking--fill" viewBox="0 0 16 16">
      <path d="M5.474 1c2.783 0 5.08 2.125 5.428 4.875l1.54 2.478c.102.163.081.406-.154.51l-1.34.587v2.05c0 .773-.613 1.4-1.369 1.4H7.813V15h-5.76v-2.586c0-.826-.299-1.608-.852-2.313A5.657 5.657 0 010 6.6C0 3.507 2.45 1 5.474 1zm8.935 13.33l-1.144-.98C14 12.297 14.5 11.016 14.5 9.635c0-1.54-.605-2.955-1.5-4.07L14.066 4.5C15.23 5.89 16 7.68 16 9.635c0 1.754-.634 3.377-1.591 4.695z" />
    </symbol>
  ),
  'speaking--line': (
    <symbol id="speaking--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8.204 15l.001-2.1H9.58c.756 0 1.369-.627 1.369-1.4V9.45l1.34-.588c.235-.103.256-.346.154-.51l-1.54-2.477C10.555 3.125 8.257 1 5.474 1 2.45 1 0 3.507 0 6.6c0 1.325.45 2.542 1.201 3.5.553.706.852 1.488.852 2.314V15h6.151zm1.21-8.937l.041.326L10.47 8.02l-1.022.448V11.4H6.706l-.001 2.1H3.553v-1.086c0-1.21-.443-2.31-1.171-3.239A4.157 4.157 0 011.5 6.6c0-2.297 1.811-4.1 3.974-4.1 1.991 0 3.683 1.527 3.94 3.563z"
        clipRule="evenodd"
      />
      <path d="M13.265 13.35l1.144.98C15.366 13.011 16 11.39 16 9.635c0-1.955-.77-3.746-1.934-5.135L13 5.566c.895 1.114 1.5 2.529 1.5 4.069 0 1.381-.5 2.662-1.235 3.715z" />
    </symbol>
  ),
  'star--fill': (
    <symbol id="star--fill" viewBox="0 0 16 16">
      <path d="M5.5 5.5L0 6l4 4-1 6 5-3 5 3-1-6 4-4-5.5-.5L8 0 5.5 5.5z" />
    </symbol>
  ),
  'star--line': (
    <symbol id="star--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5.5 5.5L0 6l4 4-1 6 5-3 5 3-1-6 4-4-5.5-.5L8 0 5.5 5.5zM8 3.625l-1.495 3.29-3.18.289 2.281 2.281-.592 3.558L8 11.25l2.986 1.792-.593-3.558 2.282-2.281-3.18-.29L8 3.625z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'sun--fill': (
    <symbol id="sun--fill" viewBox="0 0 16 16">
      <path d="M10 8a2 2 0 11-4 0 2 2 0 014 0z" />
      <path
        fillRule="evenodd"
        d="M12.71 6.025l2.978 1.481c.397.198.397.79.1.988l-2.98 1.481.994 3.062c.1.395-.298.79-.695.691l-3.078-.987-1.49 2.963c-.198.395-.794.395-.993 0l-1.49-2.963-3.077.987c-.397.1-.795-.296-.695-.691l.993-3.062-2.98-1.481c-.396-.198-.396-.79 0-.988l2.98-1.481-.993-3.062c-.1-.395.298-.79.695-.593l3.078.988L7.447.296c.199-.395.794-.395.993 0L9.93 3.26l3.077-.987c.398-.1.795.296.696.691l-.993 3.062zM11.5 8a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'sun--line': (
    <symbol id="sun--line" viewBox="0 0 16 16">
      <path d="M10 8a2 2 0 11-4 0 2 2 0 014 0z" />
      <path
        fillRule="evenodd"
        d="M12.71 6.025l.992-3.062c.1-.395-.297-.79-.695-.691l-3.078.987L8.44.296c-.198-.395-.793-.395-.992 0l-1.39 3.062L2.98 2.37c-.397-.197-.795.198-.695.593l.993 3.062-2.98 1.481c-.396.198-.396.79 0 .988l2.98 1.481-.993 3.062c-.1.395.298.79.695.691l3.078-.987 1.49 2.963c.198.395.794.395.992 0l1.49-2.963 3.078.987c.397.1.794-.296.695-.691l-.993-3.062 2.979-1.481c.297-.198.297-.79-.1-.988L12.71 6.025zm-1.826.767l2.479 1.233-2.38 1.183.82 2.527-2.538-.815-1.222 2.431-1.222-2.43-2.538.814.82-2.527L2.672 8l2.43-1.208-.784-2.416 2.551.818 1.117-2.459 1.18 2.345 2.537-.815-.82 2.527z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'system-windows-exit--fill': (
    <symbol id="system-windows-exit--fill" viewBox="0 0 16 16">
      <path d="M9.414 8l6.293 6.293-1.414 1.414L8 9.414l-6.293 6.293-1.414-1.414L6.586 8 .293 1.707 1.707.293 8 6.586 14.293.293l1.414 1.414L9.414 8z" />
    </symbol>
  ),
  'system-windows-exit--line': (
    <symbol id="system-windows-exit--line" viewBox="0 0 16 16">
      <path d="M9.06 8l6.47 6.47-1.06 1.06L8 9.06l-6.47 6.47-1.06-1.06L6.94 8 .47 1.53 1.53.47 8 6.94 14.47.47l1.06 1.06L9.06 8z" />
    </symbol>
  ),
  'system-windows-minimize--fill': (
    <symbol id="system-windows-minimize--fill" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M15 9H1V7h14v2z" clipRule="evenodd" />
    </symbol>
  ),
  'system-windows-minimize--line': (
    <symbol id="system-windows-minimize--line" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M15 8.75H1v-1.5h14v1.5z" clipRule="evenodd" />
    </symbol>
  ),
  'system-windows-restore--fill': (
    <symbol id="system-windows-restore--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13 3H3v10h10V3zM1 1v14h14V1H1z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'system-windows-restore--line': (
    <symbol id="system-windows-restore--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M13.5 2.5h-11v11h11v-11zM1 1v14h14V1H1z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'tag--fill': (
    <symbol id="tag--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M16 8l-8 8-7-7V1h8l7 7zM4.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'tag--line': (
    <symbol id="tag--line" viewBox="0 0 16 16">
      <path d="M5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      <path
        fillRule="evenodd"
        d="M8 16l8-8-7-7H1v8l7 7zm0-2.121L13.879 8l-5.5-5.5H2.5v5.879l5.5 5.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'terminal--fill': (
    <symbol id="terminal--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 15V1h16v14H0zm3-6.876L3.865 9l2.452-2.5L3.865 4 3 4.876 4.587 6.5 3 8.124zM7 10h4V8.5H7V10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'terminal--line': (
    <symbol id="terminal--line" viewBox="0 0 16 16">
      <path d="M3 8.124L3.865 9l2.452-2.5L3.865 4 3 4.876 4.587 6.5 3 8.124zM7 10h4V8.5H7V10z" />
      <path
        fillRule="evenodd"
        d="M0 15h16V1H0v14zM14.5 2.5v11h-13v-11h13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'text-align-center--fill': (
    <symbol id="text-align-center--fill" viewBox="0 0 16 16">
      <path d="M14 1H2v2h12V1zM4 5h8v2H4V5zm10 4H2v2h12V9zm-2 4H4v2h8v-2z" />
    </symbol>
  ),
  'text-align-center--line': (
    <symbol id="text-align-center--line" viewBox="0 0 16 16">
      <path d="M2 2.75h12v-1.5H2v1.5zm0 8h12v-1.5H2v1.5zm10-4H4v-1.5h8v1.5zm-8 8h8v-1.5H4v1.5z" />
    </symbol>
  ),
  'text-align-justify--fill': (
    <symbol id="text-align-justify--fill" viewBox="0 0 16 16">
      <path d="M14 1H2v2h12V1zM2 5h12v2H2V5zm12 4H2v2h12V9zm0 4H2v2h12v-2z" />
    </symbol>
  ),
  'text-align-justify--line': (
    <symbol id="text-align-justify--line" viewBox="0 0 16 16">
      <path d="M2 2.75h12v-1.5H2v1.5zm0 8h12v-1.5H2v1.5zm12-4H2v-1.5h12v1.5zm-12 8h12v-1.5H2v1.5z" />
    </symbol>
  ),
  'text-align-left--fill': (
    <symbol id="text-align-left--fill" viewBox="0 0 16 16">
      <path d="M14 1H2v2h12V1zM2 5h8v2H2V5zm12 4H2v2h12V9zm-4 4H2v2h8v-2z" />
    </symbol>
  ),
  'text-align-left--line': (
    <symbol id="text-align-left--line" viewBox="0 0 16 16">
      <path d="M2 2.75h12v-1.5H2v1.5zm0 8h12v-1.5H2v1.5zm8-4H2v-1.5h8v1.5zm-8 8h8v-1.5H2v1.5z" />
    </symbol>
  ),
  'text-align-right--fill': (
    <symbol id="text-align-right--fill" viewBox="0 0 16 16">
      <path d="M14 1H2v2h12V1zM6 5h8v2H6V5zm8 4H2v2h12V9zm0 4H6v2h8v-2z" />
    </symbol>
  ),
  'text-align-right--line': (
    <symbol id="text-align-right--line" viewBox="0 0 16 16">
      <path d="M2 2.75h12v-1.5H2v1.5zm0 8h12v-1.5H2v1.5zm12-4H6v-1.5h8v1.5zm-8 8h8v-1.5H6v1.5z" />
    </symbol>
  ),
  'text-bold--fill': (
    <symbol id="text-bold--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8.77 2H4v13h4.77c.669 0 1.67-.164 2.541-.697.924-.566 1.689-1.554 1.689-3.053 0-1.385-.653-2.333-1.481-2.916.565-.605.942-1.459.942-2.584 0-1.417-.599-2.404-1.417-3.006A3.962 3.962 0 008.77 2zm0 7.5H6V13h2.77c.407 0 1.02-.111 1.496-.403.422-.259.734-.646.734-1.347s-.312-1.088-.734-1.347C9.79 9.61 9.176 9.5 8.769 9.5zm1.09-2.356a1.97 1.97 0 01-1.09.356H6V4h2.77c.284 0 .736.096 1.09.356.303.223.601.611.601 1.394 0 .783-.298 1.17-.602 1.394z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'text-bold--line': (
    <symbol id="text-bold--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8.785 2H4v13h4.785c.674 0 1.684-.164 2.553-.687C12.25 13.764 13 12.815 13 11.36c0-1.49-.786-2.448-1.726-2.99.676-.587 1.156-1.48 1.156-2.73 0-1.391-.595-2.34-1.393-2.916A3.98 3.98 0 008.785 2zm0 7.28H5.588v4.16h3.197c.466 0 1.167-.122 1.723-.457.514-.31.904-.79.904-1.623s-.39-1.314-.904-1.623c-.556-.335-1.257-.457-1.723-.457zm1.311-1.98c-.43.31-.966.42-1.31.42H5.587V3.56h3.197c.345 0 .882.11 1.311.42.39.282.746.763.746 1.66 0 .897-.356 1.378-.746 1.66z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'text-color--fill': (
    <symbol id="text-color--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5 12H3L7 2h2l4 10h-2l-.75-2h-4.5L5 12zm3-8l1.5 4h-3L8 4z"
        clipRule="evenodd"
      />
      <path d="M14 15v-2H2v2h12z" />
    </symbol>
  ),
  'text-color--line': (
    <symbol id="text-color--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.5 12H3L7.25 2h1.5L13 12h-1.5l-.927-2.25H5.426L4.5 12zM8 3.5l1.956 4.75H6.044L8 3.5z"
        clipRule="evenodd"
      />
      <path d="M14 15v-1.5H2V15h12z" />
    </symbol>
  ),
  'text-indent--fill': (
    <symbol id="text-indent--fill" viewBox="0 0 16 16">
      <path d="M2 1h12v2H2V1zm12 4H8v2h6V5zM8 9h6v2H8V9zm6 4v2H2v-2h12zM6 8L2 4.5v7L6 8z" />
    </symbol>
  ),
  'text-indent--line': (
    <symbol id="text-indent--line" viewBox="0 0 16 16">
      <path d="M14 2.75H2v-1.5h12v1.5zm0 8H8v-1.5h6v1.5zm-6-4h6v-1.5H8v1.5zm-6 8v-1.5h12v1.5H2zm0-3.691L.941 9.987 2.883 8 .942 6.012 2 4.941 5 8l-3 3.059z" />
    </symbol>
  ),
  'text-italic--fill': (
    <symbol id="text-italic--fill" viewBox="0 0 16 16">
      <path d="M6 2h6v2H9.835l-1.637 9H10v2H4v-2h2.165l1.637-9H6V2z" />
    </symbol>
  ),
  'text-italic--line': (
    <symbol id="text-italic--line" viewBox="0 0 16 16">
      <path d="M6 2h6v1.5H9.671l-1.818 10H10V15H4v-1.5h2.329l1.818-10H6V2z" />
    </symbol>
  ),
  'text-outdent--fill': (
    <symbol id="text-outdent--fill" viewBox="0 0 16 16">
      <path d="M2 1h12v2H2V1zm12 4H8v2h6V5zM8 9h6v2H8V9zm6 4v2H2v-2h12zM2 8l4-3.5v7L2 8z" />
    </symbol>
  ),
  'text-outdent--line': (
    <symbol id="text-outdent--line" viewBox="0 0 16 16">
      <path d="M14 2.75H2v-1.5h12v1.5zm0 8H8v-1.5h6v1.5zm-6-4h6v-1.5H8v1.5zm-6 8v-1.5h12v1.5H2zm1.941-3.691L5 9.987l-1.941-1.988 1.94-1.988-1.058-1.071L.941 8l3 3.059z" />
    </symbol>
  ),
  'text-size--fill': (
    <symbol id="text-size--fill" viewBox="0 0 16 16">
      <path d="M1 2v2h4v11h2V4h4V2H1z" />
      <path d="M9 10V8h6v2h-2v5h-2v-5H9z" />
    </symbol>
  ),
  'text-size--line': (
    <symbol id="text-size--line" viewBox="0 0 16 16">
      <path d="M1 2v1.5h4.25V15h1.5V3.5H11V2H1z" />
      <path d="M9 9.5V8h6v1.5h-2.25V15h-1.5V9.5H9z" />
    </symbol>
  ),
  'text-strikethrough--fill': (
    <symbol id="text-strikethrough--fill" viewBox="0 0 16 16">
      <path d="M12.76 5.236l-2.17.393a2.65 2.65 0 00-.432-.811 2.147 2.147 0 00-.785-.63c-.33-.165-.744-.247-1.24-.247-.679 0-1.245.156-1.698.467-.454.306-.68.702-.68 1.188 0 .42.151.76.456 1.016.17.144.4.273.688.388H3.582a3.504 3.504 0 01-.222-1.273c0-.743.203-1.392.609-1.95.405-.556.966-.99 1.681-1.302C6.365 2.158 7.185 2 8.108 2c1.33 0 2.375.295 3.139.885.763.584 1.267 1.368 1.513 2.35zM15 8v1.5h-2.399c.266.457.399.993.399 1.609a3.35 3.35 0 01-.64 2.015c-.422.585-1.012 1.043-1.77 1.376-.753.333-1.625.5-2.618.5-1.377 0-2.5-.3-3.37-.901-.87-.606-1.405-1.466-1.602-2.58l2.314-.36c.144.616.44 1.083.889 1.4.448.311 1.032.467 1.753.467.785 0 1.412-.167 1.881-.5.47-.338.705-.75.705-1.237a1.3 1.3 0 00-.432-.991c-.283-.268-.718-.47-1.305-.606L7.949 9.5H1V8h14z" />
    </symbol>
  ),
  'text-strikethrough--line': (
    <symbol id="text-strikethrough--line" viewBox="0 0 16 16">
      <path d="M12.325 4.929l-1.301.376a3.535 3.535 0 00-.543-1.022 2.473 2.473 0 00-.917-.729c-.373-.18-.835-.27-1.388-.27-.83 0-1.511.202-2.043.606-.532.403-.798.924-.798 1.562 0 .54.181.98.543 1.318.089.08.19.157.302.23H4.24a3.22 3.22 0 01-.333-1.482c0-.693.183-1.3.55-1.824.367-.53.873-.944 1.516-1.244.644-.3 1.378-.45 2.203-.45 1.122 0 2.018.262 2.688.785.676.519 1.163 1.233 1.46 2.144zM15 8v1.5h-3.065c.377.51.565 1.125.565 1.843a3.23 3.23 0 01-.575 1.89c-.382.55-.917.984-1.603 1.3-.681.312-1.47.467-2.37.467-1.197 0-2.183-.275-2.96-.826-.777-.557-1.274-1.358-1.492-2.406l1.364-.343c.176.747.519 1.311 1.03 1.693.516.382 1.194.573 2.034.573.942 0 1.694-.215 2.258-.646.564-.437.846-.982.846-1.637 0-.507-.165-.932-.495-1.276-.249-.263-.595-.474-1.038-.632H1V8h14z" />
    </symbol>
  ),
  'text-underline--fill': (
    <symbol id="text-underline--fill" viewBox="0 0 16 16">
      <path d="M4 8V2h2v6a2 2 0 104 0V2h2v6a4 4 0 01-8 0zm10 7v-2H2v2h12z" />
    </symbol>
  ),
  'text-underline--line': (
    <symbol id="text-underline--line" viewBox="0 0 16 16">
      <path d="M4 8V2h1.5v6a2.5 2.5 0 005 0V2H12v6a4 4 0 01-8 0zm10 7v-1.5H2V15h12z" />
    </symbol>
  ),
  'thumb-down--fill': (
    <symbol id="thumb-down--fill" viewBox="0 0 16 16">
      <path d="M16 7.8c0-.2 0-.4-.1-.6l-2.2-5.3c-.2-.5-.7-.9-1.3-.9H5.5C4.7 1 4 1.7 4 2.5V10c0 .4.2.8.4 1.1L10 16l.8-.8c.2-.2.3-.5.3-.8v-.2L10 11h4.5c.8 0 1.5-.7 1.5-1.5V7.8zM0 12h3V2H0v10z" />
    </symbol>
  ),
  'thumb-down--line': (
    <symbol id="thumb-down--line" viewBox="0 0 17 16">
      <path
        fillRule="evenodd"
        d="M4 10c0 .4.2.8.4 1.1L10 16l.8-.8c.2-.2.3-.5.3-.8v-.2L10 11h4.5c.8 0 1.5-.7 1.5-1.5V7.8c0-.2 0-.4-.1-.6l-2.2-5.3c-.2-.5-.7-.9-1.3-.9H5.5C4.7 1 4 1.7 4 2.5V10zm10.5-2.26L12.325 2.5H5.5l.018 7.53s2.763 2.472 3.692 3.285L7.898 9.5h6.579c.01-.587.024-1.174.023-1.76z"
        clipRule="evenodd"
      />
      <path d="M0 12h3V2H0v10z" />
    </symbol>
  ),
  'thumb-up--fill': (
    <symbol id="thumb-up--fill" viewBox="0 0 16 16">
      <path d="M16 6.5c0-.8-.7-1.5-1.5-1.5H10l1.1-3.2v-.2c0-.3-.1-.6-.3-.8L10 0 4.4 4.9c-.2.3-.4.7-.4 1.1v7.5c0 .8.7 1.5 1.5 1.5h6.9c.6 0 1.1-.4 1.3-.9l2.2-5.3c.1-.2.1-.4.1-.6V6.5zM0 16h3V6H0v10z" />
    </symbol>
  ),
  'thumb-up--line': (
    <symbol id="thumb-up--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.1 1.8v-.2c0-.3-.1-.6-.3-.8L10 0 4.4 4.9c-.2.3-.4.7-.4 1.1v7.5c0 .8.7 1.5 1.5 1.5h6.9c.6 0 1.1-.4 1.3-.9l2.2-5.3c.1-.2.1-.4.1-.6V6.5c0-.8-.7-1.5-1.5-1.5H10l1.1-3.2zM7.898 6.5c1.063 0 6.591.01 6.591.01s.011 1.407.011 1.69v.06l-2.175 5.24c-1.212 0-6.814-.01-6.814-.01l.05-7.613L9.21 2.685 7.898 6.5z"
        clipRule="evenodd"
      />
      <path d="M0 16h3V6H0v10z" />
    </symbol>
  ),
  'trash--fill': (
    <symbol id="trash--fill" viewBox="0 0 16 16">
      <path d="M11 0H5v1H1v2h14V1h-4V0zM2 4h12v12H2V4z" />
    </symbol>
  ),
  'trash--line': (
    <symbol id="trash--line" viewBox="0 0 16 16">
      <path d="M5 0h6v1h4v2H1V1h4V0zM2 4.5h1.5v10h9v-10H14V16H2V4.5z" />
    </symbol>
  ),
  'trash-bars--fill': (
    <symbol id="trash-bars--fill" viewBox="0 0 16 16">
      <path d="M5 0h6v1h4v2H1V1h4V0zm4.25 4h-2.5v8h-1.5V4H2v12h12V4h-3.25v8h-1.5V4z" />
    </symbol>
  ),
  'trash-bars--line': (
    <symbol id="trash-bars--line" viewBox="0 0 16 16">
      <path d="M5 0h6v1h4v2H1V1h4V0zM2 4.5h1.5v10h9v-10H14V16H2V4.5z" />
      <path d="M9 11.5v-7h1.5v7H9zm-3.5-7v7H7v-7H5.5z" />
    </symbol>
  ),
  'trash-x--fill': (
    <symbol id="trash-x--fill" viewBox="0 0 16 16">
      <path d="M5 0h6v1h4v2H1V1h4V0z" />
      <path
        fillRule="evenodd"
        d="M2 4h12v12H2V4zm6.001 7.063l1.969 1.969 1.06-1.061-1.968-1.969 1.968-1.968-1.06-1.061L8 8.942 6.03 6.97 4.97 8.03l1.971 1.972-1.967 1.968 1.06 1.06 1.968-1.967z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'trash-x--line': (
    <symbol id="trash-x--line" viewBox="0 0 16 16">
      <path d="M11 0H5v1H1v2h14V1h-4V0zM3.5 4.5H2V16h12V4.5h-1.5v10h-9v-10z" />
      <path d="M9.97 12.562L8 10.593l-1.968 1.968-1.06-1.06L6.94 9.532 4.97 7.56 6.029 6.5l1.972 1.972L9.97 6.503l1.06 1.061-1.968 1.969L11.03 11.5l-1.06 1.061z" />
    </symbol>
  ),
  'two-way--fill': (
    <symbol id="two-way--fill" viewBox="0 0 16 16">
      <path d="M15 7V5H5.8l2.6-2.6L6.9 1 1 7h14zM1 9v2h9.2l-2.6 2.6L9.1 15 15 9H1z" />
    </symbol>
  ),
  'two-way--line': (
    <symbol id="two-way--line" viewBox="0 0 16 16">
      <path d="M8.03 2.53L6.97 1.47 1.69 6.75H15v-1.5H5.31l2.72-2.72zm.44 10.94l1.06 1.06 5.28-5.28H1.5v1.5h9.69l-2.72 2.72z" />
    </symbol>
  ),
  'upgrade--fill': (
    <symbol id="upgrade--fill" viewBox="0 0 16 16">
      <path d="M14 1H2v1.5h12V1zm-3 13.5V13H5v1.5h6zm2-6H8.75V12h-1.5V8.5H3l5-5 5 5z" />
    </symbol>
  ),
  'upgrade--line': (
    <symbol id="upgrade--line" viewBox="0 0 16 16">
      <path d="M15 1H1v1.5h14V1zm-4 12.5H5V15h6v-1.5zm-2.999-10l4.073 4.024-1.071 1.06-2.288-2.256V12H7.287V6.328L5 8.585 3.929 7.524 8 3.5z" />
    </symbol>
  ),
  'upload--fill': (
    <symbol id="upload--fill" viewBox="0 0 16 16">
      <path d="M3 6l5-5 5 5H8.75v5h-1.5V6H3zm-2 5v4h14v-4h-1.5v2.5h-11V11H1z" />
    </symbol>
  ),
  'upload--line': (
    <symbol id="upload--line" viewBox="0 0 16 16">
      <path d="M8.002 1L13 5.95l-1.071 1.06-3.213-3.182V11H7.287V3.828L4.071 7.013 3 5.953 8.002 1zM2.5 13.5h11V11H15v4H1v-4h1.5v2.5z" />
    </symbol>
  ),
  'upload-cloud--fill': (
    <symbol id="upload-cloud--fill" viewBox="0 0 16 16">
      <path d="M14.814 10.843a4.021 4.021 0 01-.547.453L7.985 5.015l-5.698 5.698A5.981 5.981 0 010 6a6 6 0 0111.664-1.986 4.031 4.031 0 013.164 1.158A3.987 3.987 0 0116 8a3.988 3.988 0 01-1.186 2.843z" />
      <path d="M12 11.5H8.75V16h-1.5v-4.5H4l4-4 4 4z" />
    </symbol>
  ),
  'upload-cloud--line': (
    <symbol id="upload-cloud--line" viewBox="0 0 16 16">
      <path d="M1.5 6c0 1.243.504 2.368 1.318 3.182l-1.06 1.06a6 6 0 119.906-6.229 4 4 0 013.15 6.83l-1.061-1.06A2.5 2.5 0 0010.5 6a4.502 4.502 0 00-9 0z" />
      <path d="M8.001 7.5l4.073 4.024-1.071 1.06-2.288-2.256V16H7.287v-5.672L5 12.585l-1.071-1.061L8 7.5z" />
    </symbol>
  ),
  'user--fill': (
    <symbol id="user--fill" viewBox="0 0 16 16">
      <path d="M8 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-2 1.5a4 4 0 00-4 4V16h12v-1.5a4 4 0 00-4-4H6z" />
    </symbol>
  ),
  'user--line': (
    <symbol id="user--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12.5 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-1.5 0a3 3 0 11-6 0 3 3 0 016 0zm-9 10a4 4 0 014-4h4a4 4 0 014 4V16H2v-1.5zm1.5 0A2.5 2.5 0 016 12h4a2.5 2.5 0 012.5 2.5h-9z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'user-admin--fill': (
    <symbol id="user-admin--fill" viewBox="0 0 16 16">
      <path d="M12.5 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6.444 6l-1.556 2L5.79 16H2v-3.5a2 2 0 012-2h2.056zm3.888 0l1.556 2-1.29 3.5H14v-3.5a2 2 0 00-2-2H9.944zM6 13l2-2.5 2 2.5-1.2 3H7.2L6 13z" />
    </symbol>
  ),
  'user-admin--line': (
    <symbol id="user-admin--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-1.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
      <path d="M5.237 14.5H3.5v-2A.5.5 0 014 12h.889l1.167-1.5H4a2 2 0 00-2 2V16h3.79l-.553-1.5zm5.526 0L10.21 16H14v-3.5a2 2 0 00-2-2H9.944l1.167 1.5H12a.5.5 0 01.5.5v2h-1.737zM6 13l2-2.5 2 2.5-1.2 3H7.2L6 13z" />
    </symbol>
  ),
  'user-admin-group--fill': (
    <symbol id="user-admin-group--fill" viewBox="0 0 16 16">
      <path d="M10.623 8.859A5.983 5.983 0 0012.5 4.5 5.98 5.98 0 0010.623.141a4.502 4.502 0 010 8.718z" />
      <path d="M11 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      <path
        fillRule="evenodd"
        d="M4.556 10.5L3 12.5 4.29 16H.5v-3.5a2 2 0 012-2h2.056zm3.888 0l1.556 2L8.71 16h3.79v-3.5a2 2 0 00-2-2H8.444zM14 16h1.5v-3.5a2 2 0 00-2-2h-.177c.415.367.677.903.677 1.5v4zm-7.5-5.5l-2 2.5 1.2 3h1.6l1.2-3-2-2.5z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'user-admin-group--line': (
    <symbol id="user-admin-group--line" viewBox="0 0 16 16">
      <path d="M10.623 8.859A5.983 5.983 0 0012.5 4.5 5.98 5.98 0 0010.623.141a4.502 4.502 0 010 8.718z" />
      <path
        fillRule="evenodd"
        d="M14 16h1.5v-3.5a2 2 0 00-2-2h-.177c.415.367.677.903.677 1.5v4zM3.737 14.5H2v-2a.5.5 0 01.5-.5h.889l1.167-1.5H2.5a2 2 0 00-2 2V16h3.79l-.553-1.5zm5.526 0L8.711 16H12.5v-3.5a2 2 0 00-2-2H8.444L9.611 12h.889a.5.5 0 01.5.5v2H9.263zm-2.763-4l-2 2.5 1.2 3h1.6l1.2-3-2-2.5zm0-3a3 3 0 100-6 3 3 0 000 6zm0 1.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'user-avatar-badge--fill': (
    <symbol id="user-avatar-badge--fill" viewBox="0 0 16 16">
      <path d="M10.5 2.5V0h-5v2.5h5z" />
      <path
        fillRule="evenodd"
        d="M4 1H2v15h12V1h-2v3H4V1zm4 9a2 2 0 100-4 2 2 0 000 4zm-1 .89c-1.105 0-2 .92-2 2.054V14.5h6v-1.556c0-1.135-.895-2.054-2-2.054H7z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'user-avatar-badge--line': (
    <symbol id="user-avatar-badge--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M5 11.944c0-1.135.895-2.054 2-2.054h2c1.105 0 2 .92 2 2.054V13.5H5v-1.556zm2-.554c-.24 0-.5.21-.5.554V12h3v-.056c0-.344-.26-.554-.5-.554H7zM8 9a2 2 0 100-4 2 2 0 000 4zm.5-2a.5.5 0 11-1 0 .5.5 0 011 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M4.5 0h7v1H14v15H2V1h2.5V0zM6 1.5h4V3H6V1.5zm-1.5 1h-1v12h9v-12h-1v2h-7v-2z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'user-avatar-circle--fill': (
    <symbol id="user-avatar-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM6.833 9C5.545 9 4.5 10.019 4.5 11.275V13h7v-1.725C11.5 10.02 10.455 9 9.167 9H6.833z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'user-avatar-circle--line': (
    <symbol id="user-avatar-circle--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.5 11.025C4.5 9.77 5.545 8.75 6.833 8.75h2.334c1.288 0 2.333 1.019 2.333 2.275v1.725h-7v-1.725zm2.333-.775c-.496 0-.833.383-.833.775v.225h4v-.225c0-.393-.337-.775-.833-.775H6.833zM8 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm1-2.5a1 1 0 11-2 0 1 1 0 012 0z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'user-group--fill': (
    <symbol id="user-group--fill" viewBox="0 0 16 16">
      <path d="M14 16h1.5v-1.71a4 4 0 00-3.422-3.958A5.984 5.984 0 0114 14.733V16zM.5 14.5a4 4 0 014-4h4a4 4 0 014 4V16H.5v-1.5zm10.123-5.641A5.983 5.983 0 0012.5 4.5 5.98 5.98 0 0010.623.141a4.502 4.502 0 010 8.718z" />
      <path d="M11 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
    </symbol>
  ),
  'user-group--line': (
    <symbol id="user-group--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M6.5 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-1.5a3 3 0 100-6 3 3 0 000 6zm-2 3a4 4 0 00-4 4V16h12v-1.5a4 4 0 00-4-4h-4zm0 1.5A2.5 2.5 0 002 14.5h9A2.5 2.5 0 008.5 12h-4z"
        clipRule="evenodd"
      />
      <path d="M12.5 4.5a5.98 5.98 0 01-1.877 4.359 4.502 4.502 0 000-8.717A5.983 5.983 0 0112.5 4.5zm3 11.5H14v-1.267c0-1.739-.74-3.305-1.922-4.401a4.001 4.001 0 013.422 3.959V16z" />
    </symbol>
  ),
  'user-minus--fill': (
    <symbol id="user-minus--fill" viewBox="0 0 16 16">
      <path d="M11.5 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-3.5 6H5a4 4 0 00-4 4V16h7v-5.5zM9.5 14H15v-1.5H9.5V14z" />
    </symbol>
  ),
  'user-minus--line': (
    <symbol id="user-minus--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M7 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-1.5a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      />
      <path d="M8 10.5H5a4 4 0 00-4 4V16h7v-1.5H2.5A2.5 2.5 0 015 12h3v-1.5zM9.5 14H15v-1.5H9.5V14z" />
    </symbol>
  ),
  'user-plus--fill': (
    <symbol id="user-plus--fill" viewBox="0 0 16 16">
      <path d="M7 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-2 1.5h3V16H1v-1.5a4 4 0 014-4zm6.5 3.5h-2v-1.5h2v-2H13v2h2V14h-2v2h-1.5v-2z" />
    </symbol>
  ),
  'user-plus--line': (
    <symbol id="user-plus--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.5 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-1.5 0a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      />
      <path d="M5 10.5h3V12H5a2.5 2.5 0 00-2.5 2.5H8V16H1v-1.5a4 4 0 014-4zm6.5 3.5h-2v-1.5h2v-2H13v2h2V14h-2v2h-1.5v-2z" />
    </symbol>
  ),
  'user-side-profile--fill': (
    <symbol id="user-side-profile--fill" viewBox="0 0 16 16">
      <path d="M3.5 16h7v-2.5h2A1.5 1.5 0 0014 12V9.5l2-.5-2-3c0-2.5-2.5-6-6.5-6S1 3.5 1 6.5s1.5 4 2 4.5c.4.4.5 1.5.5 2v3z" />
    </symbol>
  ),
  'user-side-profile--line': (
    <symbol id="user-side-profile--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M14 6c0-2.5-2.5-6-6.5-6S1 3.5 1 6.5c0 2.674 1.192 3.759 1.805 4.317.074.068.14.129.195.183.4.4.5 1.5.5 2v3h7v-2.5h2A1.5 1.5 0 0014 12V9.5l2-.5-2-3zm-.429 2.061L12.5 6.454V6c0-.799-.428-1.944-1.339-2.906C10.28 2.164 9.034 1.5 7.5 1.5c-3.027 0-5 2.676-5 5 0 1.23.301 1.948.578 2.382.227.357.423.536.662.755.098.089.203.185.32.302.305.305.48.66.583.924.11.279.181.564.23.815.096.497.127.995.127 1.322v1.5h4V12h3.5V8.329l1.071-.268z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'user-x--fill': (
    <symbol id="user-x--fill" viewBox="0 0 16 16">
      <path d="M7 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-2 1.5h3V16H1v-1.5a4 4 0 014-4zm7.25 3.81l-1.414 1.415-1.06-1.061 1.413-1.414-1.414-1.414 1.061-1.06 1.414 1.413 1.414-1.414 1.061 1.06-1.414 1.415 1.414 1.414-1.06 1.061-1.415-1.414z" />
    </symbol>
  ),
  'user-x--line': (
    <symbol id="user-x--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M11.5 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-1.5 0a3 3 0 11-6 0 3 3 0 016 0z"
        clipRule="evenodd"
      />
      <path d="M5 10.5h3V12H5a2.5 2.5 0 00-2.5 2.5H8V16H1v-1.5a4 4 0 014-4zm7.25 3.81l-1.414 1.415-1.06-1.061 1.413-1.414-1.414-1.414 1.061-1.06 1.414 1.413 1.414-1.414 1.061 1.06-1.414 1.415 1.414 1.414-1.06 1.061-1.415-1.414z" />
    </symbol>
  ),
  'video-fill': (
    <symbol id="video-fill" viewBox="0 0 16 16">
      <path d="M12 2H0v12h12v-4l4 2V4l-4 2V2z" />
    </symbol>
  ),
  'video-line': (
    <symbol id="video-line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M12 5.5L16 4v8l-4-1.5V14H0V2h12v3.5zm2.5.665v3.67L12 8.899V7.102l2.5-.938zm-4-2.665h-9v9h9v-9z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'video-slash-fill': (
    <symbol id="video-slash-fill" viewBox="0 0 16 16">
      <path d="M0 14.943L1.057 16l2-2H12v-4l4 2V4l-4 2v-.943l4-4L14.943 0 0 14.943zM10.82 2H0v10.82L10.82 2z" />
    </symbol>
  ),
  'video-slash-line': (
    <symbol id="video-slash-line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M0 14.943L1.057 16l2-2H12v-4l4 2V4l-4 2v-.943l4-4L14.943 0 0 14.943zM4.557 12.5H10.5V6.557L4.557 12.5zM14.5 9.573L12 8.323v-.646l2.5-1.25v3.146z"
        clipRule="evenodd"
      />
      <path d="M9.32 3.5H1.5v7.82L0 12.82V2h10.82l-1.5 1.5z" />
    </symbol>
  ),
  'voicemail--fill': (
    <symbol id="voicemail--fill" viewBox="0 0 16 16">
      <path d="M12.5 4C10.6 4 9 5.6 9 7.5c0 .5.1 1 .3 1.5H6.7c.2-.5.3-1 .3-1.5C7 5.6 5.4 4 3.5 4S0 5.6 0 7.5 1.6 11 3.5 11h9c1.9 0 3.5-1.6 3.5-3.5S14.4 4 12.5 4zm-9 5C2.7 9 2 8.3 2 7.5S2.7 6 3.5 6 5 6.7 5 7.5 4.3 9 3.5 9zm9 0c-.8 0-1.5-.7-1.5-1.5S11.7 6 12.5 6s1.5.7 1.5 1.5S13.3 9 12.5 9z" />
    </symbol>
  ),
  'voicemail--line': (
    <symbol id="voicemail--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M6.373 9.5A3.5 3.5 0 103.5 11h9a3.5 3.5 0 10-2.873-1.5H6.373zM3.5 9.5a2 2 0 100-4 2 2 0 000 4zm9 0a2 2 0 100-4 2 2 0 000 4z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'volume-1--fill': (
    <symbol id="volume-1--fill" viewBox="0 0 16 16">
      <path d="M12 8c0-1.5-.8-2.8-2-3.5v7.1c1.2-.8 2-2.1 2-3.6zM8 0L3 5H0v6h3l5 5V0z" />
    </symbol>
  ),
  'volume-1--line': (
    <symbol id="volume-1--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 5l5-5v16l-5-5H0V5h3zm.621 1.5L6.5 3.621v8.758L3.621 9.5H1.5v-3h2.121z"
        clipRule="evenodd"
      />
      <path d="M12 8c0 1.48-.804 2.773-2 3.465V9.5c.314-.418.5-.937.5-1.5s-.186-1.082-.5-1.5V4.535c1.196.692 2 1.984 2 3.465z" />
    </symbol>
  ),
  'volume-2--fill': (
    <symbol id="volume-2--fill" viewBox="0 0 16 16">
      <path d="M16 8c0 3.8-2.5 7-6 7.9V14c2.5-.9 4.2-3.2 4.2-6S12.5 2.8 10 2V.1c3.5.9 6 4.1 6 7.9zm-4 0c0-1.5-.8-2.8-2-3.5v7.1c1.2-.8 2-2.1 2-3.6zM8 0L3 5H0v6h3l5 5V0z" />
    </symbol>
  ),
  'volume-2--line': (
    <symbol id="volume-2--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 5H0v6h3l5 5V0L3 5zm.621 1.5H1.5v3h2.121L6.5 12.379V3.62L3.621 6.5z"
        clipRule="evenodd"
      />
      <path d="M10 15.748A8.003 8.003 0 0010 .252v1.561a6.503 6.503 0 010 12.373v1.562z" />
      <path d="M12 8c0 1.48-.804 2.773-2 3.465V9.5c.314-.418.5-.937.5-1.5s-.186-1.082-.5-1.5V4.535c1.196.692 2 1.984 2 3.465z" />
    </symbol>
  ),
  'volume-slash--fill': (
    <symbol id="volume-slash--fill" viewBox="0 0 16 16">
      <path d="M1.82 11L8 4.82V0L3 5H0v6h1.82zM11.936.884l-1.342 1.342A5.821 5.821 0 0010 2V.1a7.856 7.856 0 011.936.784zM0 14.943L1.057 16l3.471-3.472L8 16V9.057l2-2V11.6c1.2-.8 2-2.1 2-3.6 0-.84-.25-1.617-.682-2.261l1.623-1.623A6.493 6.493 0 0114.2 8c0 2.8-1.7 5.1-4.2 6v1.9c3.5-.9 6-4.1 6-7.9a8.25 8.25 0 00-1.783-5.16L16 1.057 14.943 0 0 14.943z" />
    </symbol>
  ),
  'volume-slash--line': (
    <symbol id="volume-slash--line" viewBox="0 0 16 16">
      <path d="M6.5 6.32v-2.7L3.621 6.5H1.5v3h1.82L1.82 11H0V5h3l5-5v4.82l-1.5 1.5z" />
      <path
        fillRule="evenodd"
        d="M4.528 12.528L8 16V9.057l2.216-2.216c.181.346.284.74.284 1.159 0 .563-.186 1.082-.5 1.5v1.965a3.998 3.998 0 001.307-5.716l1.787-1.787A6.503 6.503 0 0110 14.186v1.562a8.003 8.003 0 004.16-12.852L16 1.056 14.943 0 0 14.943 1.057 16l3.471-3.472zm1.061-1.06l.911.91v-1.821l-.911.91z"
        clipRule="evenodd"
      />
      <path d="M10.723 2.096L11.84.98A7.947 7.947 0 0010 .252v1.561c.248.08.49.175.723.283z" />
    </symbol>
  ),
  'volume-x--fill': (
    <symbol id="volume-x--fill" viewBox="0 0 16 16">
      <path d="M3 5l5-5v16l-5-5H0V5h3zm11.94 6.002l-1.938-1.939-1.938 1.938-1.06-1.061 1.937-1.938L10 6.061 11.06 5l1.942 1.942 1.938-1.939L16 6.063l-1.938 1.94 1.939 1.938-1.06 1.061z" />
    </symbol>
  ),
  'volume-x--line': (
    <symbol id="volume-x--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M3 5l5-5v16l-5-5H0V5h3zm.621 1.5L6.5 3.621v8.758L3.621 9.5H1.5v-3h2.121z"
        clipRule="evenodd"
      />
      <path d="M14.94 11.002l-1.938-1.939-1.938 1.938-1.06-1.061 1.937-1.938L10 6.061 11.06 5l1.942 1.942 1.938-1.939L16 6.063l-1.938 1.94 1.939 1.938-1.06 1.061z" />
    </symbol>
  ),
  'warning-circle--fill': (
    <symbol id="warning-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm-.5-6.5L7 3.25h2L8.5 9.5h-1zM7 12a1 1 0 112 0 1 1 0 01-2 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'warning-circle--line': (
    <symbol id="warning-circle--line" viewBox="0 0 16 16">
      <path d="M7.5 9.5L7 3.25h2L8.5 9.5h-1zM8 11a1 1 0 100 2 1 1 0 000-2z" />
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'warning-octagon--fill': (
    <symbol id="warning-octagon--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.7 0h6.6L16 4.7v6.6L11.3 16H4.7L0 11.3V4.7L4.7 0zm2.8 9.5L7 3.25h2L8.5 9.5h-1zM7 12a1 1 0 112 0 1 1 0 01-2 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'warning-octagon--line': (
    <symbol id="warning-octagon--line" viewBox="0 0 16 16">
      <path d="M7.5 9.5L7 3.25h2L8.5 9.5h-1zM8 11a1 1 0 100 2 1 1 0 000-2z" />
      <path
        fillRule="evenodd"
        d="M11.3 0H4.7L0 4.7v6.6L4.7 16h6.6l4.7-4.7V4.7L11.3 0zM5.321 1.5L1.5 5.321v5.358L5.321 14.5h5.358l3.821-3.821V5.32L10.679 1.5H5.32z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'warning-triangle--fill': (
    <symbol id="warning-triangle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M15.898 14.703L8.658.433A.82.82 0 008.38.116c-.364-.239-.828-.097-1.038.317l-7.24 14.27a.958.958 0 00-.102.432c0 .478.34.865.76.865h14.48a.69.69 0 00.38-.116c.363-.239.488-.768.278-1.181zM7.5 10.5l-.5-5h2l-.5 5h-1zM7 13a1 1 0 112 0 1 1 0 01-2 0z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'warning-triangle--line': (
    <symbol id="warning-triangle--line" viewBox="0 0 16 16">
      <path d="M7.5 10.5L7 6h2l-.5 4.5h-1zm-.5 2a1 1 0 112 0 1 1 0 01-2 0z" />
      <path
        fillRule="evenodd"
        d="M15.898 14.703L8.658.433A.82.82 0 008.38.116c-.364-.239-.828-.097-1.038.317l-7.24 14.27a.958.958 0 00-.102.432c0 .478.34.865.76.865h14.48a.69.69 0 00.38-.116c.363-.239.488-.768.278-1.181zm-1.785-.203L8 2.45 1.887 14.5h12.226z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'wifi--fill': (
    <symbol id="wifi--fill" viewBox="0 0 16 16">
      <path d="M8 2.5a9.985 9.985 0 018 4l-1.432 1.432A7.99 7.99 0 008 4.5a7.99 7.99 0 00-6.568 3.432L0 6.5a9.985 9.985 0 018-4z" />
      <path d="M13.124 9.626l-1.478 1.478a4 4 0 00-7.293 0L2.876 9.625A5.996 5.996 0 018 6.75c2.17 0 4.07 1.151 5.124 2.876z" />
      <path d="M8 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </symbol>
  ),
  'wifi--line': (
    <symbol id="wifi--line" viewBox="0 0 16 16">
      <path d="M16 6a9.985 9.985 0 00-8-4 9.985 9.985 0 00-8 4l1.073 1.073A8.49 8.49 0 018 3.5a8.49 8.49 0 016.927 3.573L16 6z" />
      <path d="M13.124 9.376L12.02 10.48a4.5 4.5 0 00-8.043 0L2.876 9.376A5.996 5.996 0 018 6.5c2.17 0 4.07 1.151 5.124 2.876zM9.5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </symbol>
  ),
  'wifi-warning--fill': (
    <symbol id="wifi-warning--fill" viewBox="0 0 16 16">
      <path d="M7.5 11h1l1-10h-3l1 10zM4.935 3.479A10.02 10.02 0 000 6.999l1.432 1.433a8.024 8.024 0 013.757-2.924l-.254-2.03zm5.877 2.029l.253-2.03A10.02 10.02 0 0116 7l-1.432 1.432a8.024 8.024 0 00-3.756-2.924zm-7.936 4.618a6.026 6.026 0 012.6-2.32l.267 2.14a4.016 4.016 0 00-1.39 1.658l-1.477-1.478zm7.381-.179l.267-2.142a6.025 6.025 0 012.6 2.321l-1.478 1.478a4.016 4.016 0 00-1.39-1.657zM9.5 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </symbol>
  ),
  'wifi-warning--line': (
    <symbol id="wifi-warning--line" viewBox="0 0 16 16">
      <path d="M7.5 11h1l1-10h-3l1 10zM4.935 3.479A10.02 10.02 0 000 6.999l1.073 1.074a8.523 8.523 0 014.052-3.074l-.19-1.52zm5.94 1.52l.19-1.52A10.02 10.02 0 0116 6.999l-1.073 1.074a8.523 8.523 0 00-4.052-3.074zm-7.999 5.377a6.025 6.025 0 012.63-2.334l.198 1.587a4.52 4.52 0 00-1.726 1.85l-1.102-1.103zm7.42-.746l.199-1.588a6.025 6.025 0 012.628 2.334l-1.102 1.103a4.521 4.521 0 00-1.725-1.85zM9.5 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </symbol>
  ),
  'window--fill': (
    <symbol id="window--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M15 1H1v14h14V1zm-1.5 5h-11v7.5h11V6z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'window--line': (
    <symbol id="window--line" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1 1h14v14H1V1zm1.5 1.5h11V6h-11V2.5zm0 5h11v6h-11v-6z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'window-new--fill': (
    <symbol id="window-new--fill" viewBox="0 0 16 16">
      <path d="M14.5 13V1.5H3V0h13v13h-1.5z" />
      <path
        fillRule="evenodd"
        d="M0 3h13v13H0V3zm1.5 5h10v6.5h-10V8z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'window-new--line': (
    <symbol id="window-new--line" viewBox="0 0 16 16">
      <path d="M14.5 1.5V13H16V0H3v1.5h11.5z" />
      <path
        fillRule="evenodd"
        d="M13 16H0V3h13v13zM11.5 4.5h-10v3h10v-3zM1.5 9v5.5h10V9h-10z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'x--line': (
    <symbol id="x--line" viewBox="0 0 16 16">
      <path d="M8 9.06l3.712 3.713 1.061-1.06L9.061 8l3.712-3.712-1.06-1.061L8 6.939 4.288 3.227l-1.061 1.06L6.939 8l-3.712 3.712 1.06 1.061L8 9.061z" />
    </symbol>
  ),
  'x--fill': (
    <symbol id="x--fill" viewBox="0 0 16 16">
      <path d="m8 9.414 3.536 3.536 1.414-1.414L9.414 8l3.536-3.535-1.414-1.415L8 6.586 4.465 3.05 3.05 4.465 6.586 8 3.05 11.536l1.415 1.414L8 9.414Z" />
    </symbol>
  ),
  'x-circle--fill': (
    <symbol id="x-circle--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm2.652-4.288L8 9.061l-2.65 2.651-1.061-1.06L6.939 8 4.288 5.348l1.06-1.06L8 6.939l2.652-2.651 1.06 1.06L9.062 8l2.651 2.652-1.06 1.06z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'x-circle--line': (
    <symbol id="x-circle--line" viewBox="0 0 16 16">
      <path d="M6.94 8L4.287 5.348l1.06-1.06L8 6.939l2.652-2.651 1.06 1.06L9.062 8l2.651 2.652-1.06 1.06L8 9.061l-2.652 2.651-1.06-1.06L6.939 8z" />
      <path
        fillRule="evenodd"
        d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-1.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'x-octagon--fill': (
    <symbol id="x-octagon--fill" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M4.7 0h6.6L16 4.7v6.6L11.3 16H4.7L0 11.3V4.7L4.7 0zm5.952 11.712L8 9.061l-2.65 2.651-1.061-1.06L6.939 8 4.288 5.348l1.06-1.06L8 6.939l2.652-2.651 1.06 1.06L9.062 8l2.651 2.652-1.06 1.06z"
        clipRule="evenodd"
      />
    </symbol>
  ),
  'x-octagon--line': (
    <symbol id="x-octagon--line" viewBox="0 0 16 16">
      <path d="M6.94 8L4.287 5.348l1.06-1.06L8 6.938l2.651-2.65 1.061 1.06L9.061 8l2.652 2.652-1.061 1.06L8 9.06l-2.652 2.652-1.06-1.06L6.938 8z" />
      <path
        fillRule="evenodd"
        d="M11.3 0H4.7L0 4.7v6.6L4.7 16h6.6l4.7-4.7V4.7L11.3 0zM5.321 1.5L1.5 5.321v5.358L5.321 14.5h5.358l3.821-3.821V5.32L10.679 1.5H5.32z"
        clipRule="evenodd"
      />
    </symbol>
  ),
};
