/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CSSProperties, isValidElement } from 'react';
import { Label } from './Label';
import { Bar } from './Bar';
import type { MeterProps } from './types';

export const useMeter = ({ children, labelPosition }: MeterProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  let label: React.ReactNode | null = null;
  let bar: React.ReactNode | null = null;

  childrenArray.forEach((item) => {
    if (isValidElement(item)) {
      if (item.type === Label) label = item;
      if (item.type === Bar) bar = item;
    }
  });

  const getStyles = () => {
    if (!label) return;

    const styles: CSSProperties = {
      display: 'flex',
    };

    if (labelPosition === 'before' || labelPosition === 'after') {
      styles.alignItems = 'center';
      if (labelPosition === 'after') {
        styles.flexDirection = 'row-reverse';
      }
    } else if (labelPosition === 'above') {
      styles.flexDirection = 'column';
    } else {
      styles.flexDirection = 'column-reverse';
    }

    return styles;
  };

  return {
    styles: getStyles(),
    label,
    bar,
  };
};
