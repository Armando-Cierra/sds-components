import React, { useState, useEffect, useContext, ChangeEvent } from 'react';
import chroma from 'chroma-js';
import { TextInput } from '../../../TextInput';
import { NumberInput } from '../../../NumberInput';
import { validateColor, validateOpacity } from '../utils';
import { ColorPickerContext } from '../context';
import type { ColorPickerContextProps } from '../types';

export const Hex = () => {
  const context = useContext(ColorPickerContext) as ColorPickerContextProps;
  const { color, updateFromHex } = context;

  const [hex, setHex] = useState({
    value: color ? color.hex.slice(0, 7) : '',
    opacity: color ? color.rgb.a : '',
  });

  const handleHexChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHex((prevState) => ({
      ...prevState,
      value: value.charAt(0) !== '#' ? `#${value}` : value,
    }));

    if (validateColor(value) && value.length === 7) {
      updateFromHex(chroma(value).alpha(Number(hex.opacity)).hex());
    }
  };

  const handleOpacityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHex((prevState) => ({ ...prevState, opacity: value }));
    const validatedOpacity = validateOpacity(value);

    if (validatedOpacity)
      updateFromHex(chroma(hex.value).alpha(Number(validatedOpacity)).hex());
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const htmlElement = e.target;
    htmlElement.select();
  };

  useEffect(() => {
    setHex({
      value: color ? color.hex.slice(0, 7) : '',
      opacity: color ? color.rgb.a : '',
    });
  }, [color]);

  return (
    <div className="sds_colorPicker_menu_container_controls_inputBox sds_colorPicker_menu_container_controls_inputBox--simple">
      <TextInput className="sds_colorPicker_menu_container_controls_inputBox_input">
        <TextInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={hex.value}
          maxLength={7}
          onChange={handleHexChange}
          onFocus={handleInputFocus}
        />
      </TextInput>
      <NumberInput className="sds_colorPicker_menu_container_controls_inputBox_input sds_colorPicker_menu_container_controls_inputBox_input--hexOpacity">
        <NumberInput.Control
          className="sds_colorPicker_menu_container_controls_inputBox_input_control"
          value={hex.opacity}
          maxLength={4}
          onChange={handleOpacityChange}
          onFocus={handleInputFocus}
        />
      </NumberInput>
    </div>
  );
};
