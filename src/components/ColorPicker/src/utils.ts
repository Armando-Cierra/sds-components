import chroma, { Color as ChromaColor } from 'chroma-js';
import type { Color, PropRgb, PropHsl, ColorFormat } from './types';

export const roundToMinMaxDecimals = (value: number) => {
  if (Number.isFinite(value)) {
    let roundedValue = parseFloat(value.toFixed(2));

    // if the rounded two decimal number ends in 0, simplify it to just use 1 decimal
    if (roundedValue === parseFloat(roundedValue.toFixed(1))) {
      roundedValue = parseFloat(roundedValue.toFixed(1));
    }

    return roundedValue;
  }
  return value;
};

export const roundToWholeNumber = (value: number) => {
  return Math.round(value);
};

export const validateColor = (color: string) => chroma.valid(color);

export const rgbObjectToString = (rgb: PropRgb) =>
  `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a ?? 1})`;

export const rgbObjectToSimplifiedString = (rgb: PropRgb) => {
  if (rgb.a === 1 || rgb.a === undefined)
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
};

export const hslObjectToString = (hsl: PropHsl) =>
  `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${hsl.a ?? 1})`;

export const hslObjectToSimplifiedString = (hsl: PropHsl) => {
  if (hsl.a === 1 || hsl.a === undefined)
    return `hsl(${roundToWholeNumber(hsl.h)}, ${roundToWholeNumber(
      hsl.s * 100
    )}%, ${roundToWholeNumber(hsl.l * 100)}%)`;

  return `hsla(${roundToWholeNumber(hsl.h)}, ${roundToWholeNumber(
    hsl.s * 100
  )}%, ${roundToWholeNumber(hsl.l * 100)}%, ${hsl.a ?? 1})`;
};

export const rgbArrayToRgbObject = (rgb: number[]) => {
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
    a: rgb[3] ?? 1,
  };
};

export const hslArrayToHslObject = (hsl: number[]) => {
  return {
    h: hsl[0],
    s: hsl[1],
    l: hsl[2],
    a: hsl[3] ?? 1,
  };
};

export const chromaColorToColorObject = (chromaColor: ChromaColor) => {
  const newColorObject = {
    hex: chromaColor.hex(),
    rgb: rgbArrayToRgbObject(chromaColor.rgba()),
    hsl: hslArrayToHslObject(chromaColor.hsl()),
  };

  newColorObject.hsl = {
    ...newColorObject.hsl,
    h: isNaN(newColorObject.hsl.h) ? 0 : newColorObject.hsl.h,
  };

  return newColorObject;
};

export const normalizeInitialColor = (color: {
  hex: string | undefined;
  rgb: PropRgb;
  hsl: PropHsl;
}): Color | undefined | false => {
  const { hex, rgb, hsl } = color;
  let chromaColor;

  if (hex === undefined && rgb === undefined && hsl === undefined)
    return undefined;

  if (hex) {
    if (validateColor(hex)) {
      chromaColor = chroma(hex);
    } else {
      return false;
    }
  }

  if (rgb) {
    const rgbString = rgbObjectToString(rgb);
    if (validateColor(rgbString)) {
      chromaColor = chroma(rgbString);
    } else {
      return false;
    }
  }

  if (hsl) {
    const hslString = hslObjectToString(hsl);
    if (validateColor(hslString)) {
      chromaColor = chroma(hslString);
    } else {
      return false;
    }
  }

  return chromaColorToColorObject(chromaColor as ChromaColor);
};

export const validateOpacity = (e: string) => {
  const regex = /^\d+(\.\d{1,2})?$/;
  let value: string | number = e.replace('-', '');

  if (value.startsWith('.')) value = value.replace('.', '0.');
  if (regex.test(value)) {
    value = Number(value);
    if (value > 1) value = 1;
    return value;
  }

  return false;
};

export const validateRgbValues = (e: string) => {
  const value = Number(e);
  if (value >= 0 && value <= 255) {
    return value;
  } else {
    if (value < 0) return 0;
    if (value > 255) return 255;
  }

  return 0;
};

export const validateHslHue = (e: string) => {
  const value = Number(e);
  if (value >= 0 && value <= 360) {
    return e;
  } else {
    if (value < 0) return 0;
    if (value > 360) return 360;
  }

  return 0;
};

export const validateHslPercentages = (e: string) => {
  const value = Number(e);
  if (value >= 0 && value <= 100) {
    return value;
  } else {
    if (value < 0) return 0;
    if (value > 100) return 100;
  }
  return 0;
};

export const colorPickerStringToColor = (
  colorString: string,
  format: ColorFormat
) => {
  const formats = {
    hex: () => chroma(colorString).hex(),
    rgb: () => chroma(colorString).rgba(),
    hsl: () => chroma(colorString).hsl(),
  };

  return formats[format]();
};
