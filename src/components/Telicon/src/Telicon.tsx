import React from 'react';
import { iconList } from './List';
import type { TeliconProps } from './types';
import './telicon.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/telicon)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/telicon-cjrnkz?file=/src/App.tsx:1,1)
*/

const Telicon = React.forwardRef<SVGSVGElement, TeliconProps>((props, ref) => {
  const {
    className: customClassName,
    iconName,
    size = 'default',
    ...rest
  } = props;

  return (
    <svg
      data-testid="sds_telicon"
      className={classNames('sds_telicon', {
        [customClassName as string]: customClassName,
        [`sds_telicon--${size}`]: !!size,
      })}
      fill="currentColor"
      ref={ref}
      {...rest}
    >
      {iconList[iconName]}
      <use data-testid="sds_telicon_icon_name" href={`#${iconName}`} />
    </svg>
  );
});

export { Telicon };
