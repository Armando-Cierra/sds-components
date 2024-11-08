import React, { forwardRef } from 'react';
import { Tooltip } from '../../Tooltip';
import { Icon } from './Icon';
import { useTag } from './useTag';
import { Avatar } from '../../Avatar';
import type { TagProps } from './types';
import './tag.scss';
import classNames from 'classnames';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/tag)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/tag-lg7q2z?file=/src/App.tsx:1,1)
*/

const Tag = Object.assign(
  forwardRef<HTMLDivElement, TagProps>(
    (
      {
        className: customClassName,
        value,
        children,
        isRemovable = false,
        isSelectable = false,
        characterLimit = 15,
        defaultChecked = false,
        tooltipPosition,
        checked: controlledCheck,
        onChange,
        onRemove,
        onBlur,
        onFocus,
        ...rest
      }: TagProps,
      ref
    ) => {
      const {
        check,
        avatar,
        content,
        isSelectableValidation,
        truncatedContent,
        clickEvent,
        removeEvent,
        focusEvent,
        blurEvent,
        keyDownEvent,
      } = useTag({
        value,
        children,
        isSelectable,
        isRemovable,
        characterLimit,
        controlledCheck,
        defaultChecked,
        onRemove,
        onChange,
        onBlur,
        onFocus,
      });

      if (truncatedContent.length === 0)
        throw new Error('Add some text as content for the Tag component.');

      return (
        <Tooltip
          data-testid="sds_tag_tooltip"
          position={tooltipPosition}
          message={content.length > characterLimit ? content : ''}
        >
          <div
            data-testid="sds_tag"
            tabIndex={0}
            ref={ref}
            className={classNames('sds_tag', {
              [customClassName as string]: customClassName,
              'sds_tag--selectable': isSelectableValidation,
              'sds_tag--removable': isRemovable,
              'sds_tag--avatar': !!avatar,
              'sds_tag--checked': check,
            })}
            {...rest}
            onClick={clickEvent}
            onFocus={focusEvent}
            onBlur={blurEvent}
            onKeyDown={keyDownEvent}
          >
            {avatar}
            {truncatedContent}
            {isRemovable && (
              <div
                className="sds_tag_action"
                data-testid="sds_tag_action"
                onClick={removeEvent}
              >
                <Icon />
              </div>
            )}
          </div>
        </Tooltip>
      );
    }
  ),
  {
    Avatar,
  }
);

export { Tag };
