import React from 'react';
import classNames from 'classnames';
import { Button } from '../../Button';
import { useButtonGroup } from './useButtonGroup';
import type { ButtonGroupProps } from './types';
import './button-group.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/buttongroup)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/buttongroup-lj5mtl?file=/src/App.tsx:1,1)
*/

export const ButtonGroup = Object.assign(
  React.forwardRef<HTMLDivElement, ButtonGroupProps>(
    (
      {
        className: customClassName,
        children,
        size = 'default',
        ...rest
      }: ButtonGroupProps,
      ref
    ) => {
      const { content } = useButtonGroup(children, size);

      if (content.length === 0)
        throw new Error('At least one <Button> child should be passed');
      return (
        <div
          data-testid="sds_buttonGroup"
          className={classNames('sds_buttonGroup', {
            [customClassName as string]: customClassName,
            'sds_buttonGroup--individualButton': content.length === 1,
          })}
          ref={ref}
          {...rest}
        >
          {content}
        </div>
      );
    }
  ),
  {
    Button,
  }
);
