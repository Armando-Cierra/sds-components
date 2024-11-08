import type { ColorFormat, Rgb, Hsl, Color } from '../types';

export interface ControlProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  className?: string;
  hex?: string;
  rgb?: Rgb;
  hsl?: Hsl;
  defaultHex?: string;
  defaultRgb?: Rgb;
  defaultHsl?: Hsl;
  defaultColorFormat?: ColorFormat;
  isDisabled?: boolean;
  ref?: never;
  onColorChange?: (e: Color) => void;
}

export interface UseControlColorPickerProps {
  controlledHex?: string;
  controlledRgb?: Rgb;
  controlledHsl?: Hsl;
  defaultHex?: string;
  defaultRgb?: Rgb;
  defaultHsl?: Hsl;
  defaultColorFormat?: ColorFormat;
  onColorChange?: (e: Color) => void;
}

export interface UseControlInputProps {
  color: Color | false;
  selectedColorFormat: ColorFormat;
  setInnerColor: React.Dispatch<React.SetStateAction<false | Color>>;
  setSelectedColorFormat: React.Dispatch<React.SetStateAction<ColorFormat>>;
}
