import type { ReactNode } from 'react';

export interface BaseRgb {
  r: number;
  g: number;
  b: number;
}

export interface BaseHsl {
  h: number;
  s: number;
  l: number;
}

export interface PropRgb extends BaseRgb {
  a?: number;
}

export interface Rgb extends BaseRgb {
  a: number;
}

export interface PropHsl extends BaseHsl {
  a?: number;
}

export interface Hsl extends BaseHsl {
  a: number;
}

export interface Color {
  hex: string;
  rgb: Rgb;
  hsl: Hsl;
}

export type ColorFormat = 'rgb' | 'hsl' | 'hex';

export interface ColorPickerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  isDisabled?: boolean;
  ref?: never;
}

declare global {
  interface Window {
    EyeDropper?: boolean;
  }
}

export interface ColorPickerContextProps {
  selectedColorFormat: ColorFormat;
  color: Color | false;
  updateFromHex: (hex: string) => void;
  updateFromRgb: (rgb: Rgb) => void;
  updateFromHsl: (hsl: Hsl) => void;
}
