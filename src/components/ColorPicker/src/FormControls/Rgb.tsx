import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import { NumberInput } from '../../../NumberInput';
import { ColorPickerContext } from '../context';
import { ColorPickerContextProps } from '../types';
import { validateOpacity, validateRgbValues } from '../utils';

export const Rgb = () => {
  const context = useContext(ColorPickerContext) as ColorPickerContextProps;
  const { color, updateFromRgb } = context;

  const [rgb, setRgb] = useState(
    color ? color.rgb : { r: '', g: '', b: '', a: '' }
  );

  const standardizeRgbDataTypes = (rgb: {
    r: string | number;
    g: string | number;
    b: string | number;
    a: string | number;
  }) => ({
    r: Number(rgb.r),
    g: Number(rgb.g),
    b: Number(rgb.b),
    a: Number(rgb.a),
  });

  const handleChange =
    (colorValue: 'r' | 'g' | 'b' | 'a') =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const newRgb = rgb;
      const values = {
        r: () => {
          newRgb.r = validateRgbValues(e.target.value);
          setRgb({ ...newRgb });
          updateFromRgb(standardizeRgbDataTypes(newRgb));
        },
        g: () => {
          newRgb.g = validateRgbValues(e.target.value);
          setRgb({ ...newRgb });
          updateFromRgb(standardizeRgbDataTypes(newRgb));
        },
        b: () => {
          newRgb.b = validateRgbValues(e.target.value);
          setRgb({ ...newRgb });
          updateFromRgb(standardizeRgbDataTypes(newRgb));
        },
        a: () => {
          newRgb.a = e.target.value;
          setRgb({ ...newRgb });
          const opacityValidation = validateOpacity(newRgb.a);

          if (opacityValidation) {
            newRgb.a = opacityValidation;
            updateFromRgb(standardizeRgbDataTypes(newRgb));
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
    setRgb(color ? color.rgb : { r: '', g: '', b: '', a: '' });
  }, [color]);

  return (
    <div className="sds_colorPicker_menu_container_controls_inputBox">
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={rgb.r}
          maxLength={3}
          isWholeNumbersOnly
          onChange={handleChange('r')}
          onFocus={handleInputFocus}
          data-custom-testid="sds_colorPicker_rgb_rInput"
        />
      </NumberInput>
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={rgb.g}
          maxLength={3}
          isWholeNumbersOnly
          onChange={handleChange('g')}
          onFocus={handleInputFocus}
        />
      </NumberInput>
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={rgb.b}
          maxLength={3}
          isWholeNumbersOnly
          onChange={handleChange('b')}
          onFocus={handleInputFocus}
        />
      </NumberInput>
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={rgb.a}
          maxLength={4}
          onChange={handleChange('a')}
          onFocus={handleInputFocus}
        />
      </NumberInput>
    </div>
  );
};
