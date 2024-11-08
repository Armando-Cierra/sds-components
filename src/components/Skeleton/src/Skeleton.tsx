import React, { forwardRef } from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';
import { Telicon } from '../../Telicon';
import type {
  SkeletonBlockProps,
  SkeletonCircleProps,
  SkeletonFormFieldProps,
  SkeletonListProps,
  SkeletonParagraphProps,
  SkeletonTextProps,
} from './types';
import './skeleton.scss';

export const Skeleton = {
  Block: forwardRef<HTMLDivElement, SkeletonBlockProps>(
    (
      {
        className: customClassName,
        width,
        height,
        style,
        isImage = false,
        imageIconSize = 'medium',
        ...rest
      },
      ref
    ) => (
      <div
        data-testid="sds_skeleton"
        className={classNames('sds_skeleton sds_skeleton--block', {
          [customClassName as string]: customClassName,
        })}
        style={{
          width,
          height,
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        {isImage && (
          <Telicon
            data-testid="sds_skeleton_imageIcon"
            iconName="image--fill"
            size={imageIconSize}
          />
        )}
      </div>
    )
  ),
  Circle: forwardRef<HTMLDivElement, SkeletonCircleProps>(
    (
      {
        className: customClassName,
        size,
        style,
        isImage = false,
        imageIconSize = 'medium',
        ...rest
      },
      ref
    ) => (
      <div
        data-testid="sds_skeleton"
        className={classNames('sds_skeleton sds_skeleton--circle', {
          [customClassName as string]: customClassName,
        })}
        style={{
          width: size,
          height: size,
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        {isImage && (
          <Telicon
            data-testid="sds_skeleton_imageIcon"
            iconName="image--fill"
            size={imageIconSize}
          />
        )}
      </div>
    )
  ),
  Text: forwardRef<HTMLDivElement, SkeletonTextProps>(
    (
      { className: customClassName, width, style, isTitle = false, ...rest },
      ref
    ) => (
      <div
        data-testid="sds_skeleton"
        className={classNames('sds_skeleton sds_skeleton--text', {
          'sds_skeleton--textTitle': isTitle,
          [customClassName as string]: customClassName,
        })}
        style={{
          width,
          ...style,
        }}
        ref={ref}
        {...rest}
      />
    )
  ),
  Paragraph: forwardRef<HTMLDivElement, SkeletonParagraphProps>(
    ({ className: customClassName, width, style, lines = 5, ...rest }, ref) => (
      <div
        data-testid="sds_skeleton"
        className={classNames('sds_skeleton sds_skeleton--paragraph', {
          [customClassName as string]: customClassName,
        })}
        style={{
          width,
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        {Array.from({ length: lines }).map(() => (
          <div
            data-testid="sds_skeleton_paragraphLine"
            key={uniqid('sds_skeleton_paragraphLine_')}
            className="sds_skeleton_paragraphLine"
          />
        ))}
      </div>
    )
  ),
  FormField: forwardRef<HTMLDivElement, SkeletonFormFieldProps>(
    ({ className: customClassName, width, style, ...rest }, ref) => (
      <div
        data-testid="sds_skeleton"
        className={classNames('sds_skeleton sds_skeleton--formField', {
          [customClassName as string]: customClassName,
        })}
        style={{
          width,
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        <div className="sds_skeleton_label" />
        <div className="sds_skeleton_control" />
      </div>
    )
  ),
  List: forwardRef<HTMLDivElement, SkeletonListProps>(
    ({ className: customClassName, width, style, items = 5, ...rest }, ref) => (
      <div
        data-testid="sds_skeleton"
        className={classNames('sds_skeleton sds_skeleton--list', {
          [customClassName as string]: customClassName,
        })}
        style={{
          width,
          ...style,
        }}
        ref={ref}
        {...rest}
      >
        {Array.from({ length: items }).map(() => (
          <div
            data-testid="sds_skeleton_listItem"
            key={uniqid('sds_skeleton_listItem_')}
            className="sds_skeleton_listItem"
          >
            <div className="sds_skeleton_listItem_bullet" />
            <div className="sds_skeleton_listItem_content" />
          </div>
        ))}
      </div>
    )
  ),
};
