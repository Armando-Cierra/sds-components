import { useState, useEffect, useCallback, ChangeEvent } from 'react';
import chroma from 'chroma-js';
import {
  chromaColorToColorObject,
  hslObjectToSimplifiedString,
  hslObjectToString,
  normalizeInitialColor,
  rgbObjectToSimplifiedString,
  rgbObjectToString,
  roundToWholeNumber,
  validateColor,
} from '../utils';
import type { UseControlColorPickerProps } from './types';
import type { Color, ColorFormat, Hsl, PropHsl, PropRgb, Rgb } from '../types';

export const useControl = ({
  defaultHex,
  defaultHsl,
  defaultRgb,
  controlledHex,
  controlledHsl,
  controlledRgb,
  defaultColorFormat,
  onColorChange,
}: UseControlColorPickerProps) => {
  //---VALIDATIONS
  //-------------
  const defaultColorModesArrayValidations = [];
  const controlledColorModesArrayValidations = [];

  defaultColorModesArrayValidations.push(!!defaultHex);
  defaultColorModesArrayValidations.push(!!defaultRgb);
  defaultColorModesArrayValidations.push(!!defaultHsl);

  controlledColorModesArrayValidations.push(!!controlledHex);
  controlledColorModesArrayValidations.push(!!controlledRgb);
  controlledColorModesArrayValidations.push(!!controlledHsl);

  //Validating there is only one default color mode value
  if (defaultColorModesArrayValidations.filter((item) => item).length > 1)
    throw new Error(
      'You can only use one "default" color value at the same time on the <ColorPicker.Control>'
    );

  //Validating there is only one controlled color mode value
  if (controlledColorModesArrayValidations.filter((item) => item).length > 1)
    throw new Error(
      'You can only use one color value at the same time on the <ColorPicker.Control>'
    );

  //---NORMALIZING COLORS
  //-------------
  //normalizeInitialColor can return three possible data types: undefined, false if the color is invalid and the Color type if it is valid.
  const defaultColor = normalizeInitialColor({
    hex: defaultHex,
    rgb: defaultRgb as PropRgb,
    hsl: defaultHsl as PropHsl,
  });
  const controlledColor = normalizeInitialColor({
    hex: controlledHex,
    rgb: controlledRgb as PropRgb,
    hsl: controlledHsl as PropHsl,
  });

  //---STATES
  //-------------
  const [selectedColorFormat, setSelectedColorFormat] = useState<ColorFormat>(
    defaultColorFormat ?? 'hex'
  );

  const [innerColor, setInnerColor] = useState<Color | false>(
    defaultColor === undefined
      ? chromaColorToColorObject(chroma('#ffffff'))
      : defaultColor
  );

  const color = controlledColor === undefined ? innerColor : controlledColor;

  //---ACTIONS
  const hasValidEyeDropper = !!window.EyeDropper;

  const toggleColorFormat = (activeColorFormat: ColorFormat) => () => {
    const colorModes = {
      hex: () => setSelectedColorFormat('rgb'),
      rgb: () => setSelectedColorFormat('hsl'),
      hsl: () => setSelectedColorFormat('hex'),
    };
    colorModes[activeColorFormat]();
  };

  const eyeDropperAction = async () => {
    if (!window.EyeDropper) return;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const eyeDropper = new EyeDropper();
    const value = await eyeDropper.open();

    setInnerColor(chromaColorToColorObject(chroma(value.sRGBHex)));
  };

  const updateFromHex = useCallback((hex: string) => {
    if (validateColor(hex)) {
      setInnerColor(chromaColorToColorObject(chroma(hex)));
    }
  }, []);

  const updateFromRgb = useCallback((rgb: Rgb) => {
    const rgbString = rgbObjectToString(rgb);
    if (validateColor(rgbString)) {
      setInnerColor(chromaColorToColorObject(chroma(rgbString)));
    } else {
      setInnerColor(false);
    }
  }, []);

  const updateFromHsl = useCallback((hsl: Hsl) => {
    const hslString = hslObjectToString(hsl);
    if (validateColor(hslString)) {
      setInnerColor(chromaColorToColorObject(chroma(hslString)));
    } else {
      setInnerColor(false);
    }
  }, []);

  const handleColorPickerChange = (hex: string) =>
    setInnerColor(chromaColorToColorObject(chroma(hex)));

  useEffect(() => {
    innerColor &&
      onColorChange?.({
        hex: innerColor.hex,
        rgb: innerColor.rgb,
        hsl: {
          h: roundToWholeNumber(innerColor.hsl.h),
          s: roundToWholeNumber(innerColor.hsl.s * 100),
          l: roundToWholeNumber(innerColor.hsl.l * 100),
          a: innerColor.hsl.a,
        },
      });
  }, [innerColor]);

  const getColorInputString = () => {
    if (color !== false) {
      const colorFormats = {
        hex: () => {
          const hexString = (color as Color).hex;
          if (hexString.length > 7) {
            const opacity = hexString.slice(7);
            if (opacity === 'ff') return (color as Color).hex.slice(0, 6);
            return (color as Color).hex;
          }

          return (color as Color).hex;
        },
        rgb: () => rgbObjectToSimplifiedString((color as Color).rgb),
        hsl: () => hslObjectToSimplifiedString((color as Color).hsl),
      };

      return colorFormats[selectedColorFormat]();
    }

    return 'Invalid Color';
  };

  const [inputValue, setInputValue] = useState(getColorInputString());

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const colorValidation = chroma.valid(value);

    if (colorValidation) {
      if (value.includes('rgb')) setSelectedColorFormat('rgb');
      if (value.includes('hsl')) setSelectedColorFormat('hsl');
      if (!value.includes('rgb') && !value.includes('hsl'))
        setSelectedColorFormat('hex');
      setInnerColor(chromaColorToColorObject(chroma(value)));
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const htmlElement = e.target;
    htmlElement.select();
  };

  useEffect(() => {
    setInputValue(getColorInputString());
  }, [color, selectedColorFormat]);

  const invalidHexColor = '#ffffff00';

  return {
    color,
    selectedColorFormat,
    hasValidEyeDropper,
    toggleColorFormat,
    eyeDropperAction,
    updateFromHex,
    updateFromRgb,
    updateFromHsl,
    handleColorPickerChange,
    setInnerColor,
    setSelectedColorFormat,
    inputValue,
    handleInputChange,
    handleInputFocus,
    invalidHexColor,
  };
};
