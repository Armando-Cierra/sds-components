import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import { NumberInput } from '../../../NumberInput';
import {
  roundToWholeNumber,
  validateHslHue,
  validateHslPercentages,
  validateOpacity,
} from '../utils';
import { ColorPickerContext } from '../context';
import type { ColorPickerContextProps } from '../types';

export const Hsl = () => {
  const context = useContext(ColorPickerContext) as ColorPickerContextProps;
  const { color, updateFromHsl } = context;

  const [hsl, setHsl] = useState(
    color
      ? {
          ...color.hsl,
          h: roundToWholeNumber(color.hsl.h),
          s: roundToWholeNumber(color.hsl.s * 100),
          l: roundToWholeNumber(color.hsl.l * 100),
        }
      : { h: '', s: '', l: '', a: '' }
  );

  const standardizeHslDataTypes = (hsl: {
    h: string | number;
    s: string | number;
    l: string | number;
    a: string | number;
  }) => ({
    h: Number(hsl.h),
    s: Number(hsl.s),
    l: Number(hsl.l),
    a: Number(hsl.a),
  });

  const handleChange =
    (colorValue: 'h' | 's' | 'l' | 'a') =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const newHsl = hsl;
      const values = {
        h: () => {
          newHsl.h = validateHslHue(e.target.value);
          setHsl({ ...newHsl });
          updateFromHsl(standardizeHslDataTypes(newHsl));
        },
        s: () => {
          newHsl.s = validateHslPercentages(e.target.value);
          setHsl({ ...newHsl });
          updateFromHsl(standardizeHslDataTypes(newHsl));
        },
        l: () => {
          newHsl.l = validateHslPercentages(e.target.value);
          setHsl({ ...newHsl });
          updateFromHsl(standardizeHslDataTypes(newHsl));
        },
        a: () => {
          newHsl.a = e.target.value;
          setHsl({ ...newHsl });
          const opacityValidation = validateOpacity(newHsl.a);
          if (opacityValidation) {
            newHsl.a = opacityValidation;
            updateFromHsl(standardizeHslDataTypes(newHsl));
          }
        },
      };

      values[colorValue]();
    };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const htmlElement = e.target;
    htmlElement.select();
  };

  useEffect(() => {
    setHsl(
      color
        ? {
            ...color.hsl,
            h: roundToWholeNumber(color.hsl.h),
            s: roundToWholeNumber(color.hsl.s * 100),
            l: roundToWholeNumber(color.hsl.l * 100),
          }
        : { h: '', s: '', l: '', a: '' }
    );
  }, [color]);

  return (
    <div className="sds_colorPicker_menu_container_controls_inputBox">
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={hsl.h}
          maxLength={3}
          isWholeNumbersOnly
          onChange={handleChange('h')}
          onFocus={handleInputFocus}
        />
      </NumberInput>
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={hsl.s}
          maxLength={3}
          isWholeNumbersOnly
          onChange={handleChange('s')}
          onFocus={handleInputFocus}
        />
      </NumberInput>
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={hsl.l}
          maxLength={3}
          isWholeNumbersOnly
          onChange={handleChange('l')}
          onFocus={handleInputFocus}
        />
      </NumberInput>
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={hsl.a}
          maxLength={4}
          onChange={handleChange('a')}
          onFocus={handleInputFocus}
        />
      </NumberInput>
    </div>
  );
};
