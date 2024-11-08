import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { HexAlphaColorPicker } from 'react-colorful';
import { Button } from '../../../Button';
import { PopoverMenu } from '../../../PopoverMenu';
import { TextInput } from '../../../TextInput';
import { useControl } from './useControl';
import { Hex, Hsl, Rgb } from '../FormControls';
import { ColorPickerContext } from '../context';
import type { ControlProps } from './types';

export const Control = forwardRef<HTMLDivElement, ControlProps>(
  (
    {
      className: customClassName,
      hex: controlledHex,
      rgb: controlledRgb,
      hsl: controlledHsl,
      defaultHex,
      defaultHsl,
      defaultRgb,
      defaultColorFormat,
      isDisabled,
      onColorChange,
      ...rest
    },
    ref
  ) => {
    const {
      color,
      selectedColorFormat,
      hasValidEyeDropper,
      toggleColorFormat,
      eyeDropperAction,
      updateFromHex,
      updateFromRgb,
      updateFromHsl,
      handleColorPickerChange,
      inputValue,
      handleInputChange,
      handleInputFocus,
      invalidHexColor,
    } = useControl({
      defaultHex,
      defaultHsl,
      defaultRgb,
      controlledHex,
      controlledHsl,
      controlledRgb,
      defaultColorFormat,
      onColorChange,
    });

    return (
      <ColorPickerContext.Provider
        value={{
          color,
          updateFromHex,
          updateFromHsl,
          updateFromRgb,
          selectedColorFormat,
        }}
      >
        <div
          className={classNames('sds_colorPicker_control', {
            [customClassName as string]: customClassName,
          })}
          ref={ref}
          {...rest}
        >
          <PopoverMenu style={{ padding: 0 }} className="sds_colorPicker_menu">
            <PopoverMenu.Anchor>
              <div
                className={classNames(
                  'sds_colorPicker_currentColorBackground',
                  {
                    'sds_colorPicker_currentColorBackground--error':
                      color === false,
                  }
                )}
                data-testid="sds_colorPicker_buttonTrigger"
              >
                <Button
                  isDisabled={isDisabled}
                  variant="base"
                  className="sds_colorPicker_currentColor"
                  style={{
                    background: color !== false ? color.hex : invalidHexColor,
                  }}
                  scaleWhileActive={false}
                />
              </div>
            </PopoverMenu.Anchor>
            <PopoverMenu.CustomArea
              style={{ padding: 0 }}
              className="sds_colorPicker_menu_container"
            >
              <HexAlphaColorPicker
                className="sds_colorPicker_menu_container_colorpicker"
                color={color ? color.hex : invalidHexColor}
                onChange={handleColorPickerChange}
              />
              <div className="sds_colorPicker_menu_container_controls">
                <Button
                  data-testid="sds_colorPicker_colorModeToggle"
                  className={classNames(
                    'sds_colorPicker_menu_container_controls_colorFormat',
                    {
                      'sds_colorPicker_menu_container_controls_colorFormat--uppercase':
                        selectedColorFormat !== 'hex',
                    }
                  )}
                  scaleWhileActive={false}
                  onClick={toggleColorFormat(selectedColorFormat)}
                >
                  {selectedColorFormat}
                </Button>
                {selectedColorFormat === 'hex' && <Hex />}
                {selectedColorFormat === 'rgb' && <Rgb />}
                {selectedColorFormat === 'hsl' && <Hsl />}
              </div>
            </PopoverMenu.CustomArea>
          </PopoverMenu>
          <div className="sds_colorPicker_control_tools">
            {hasValidEyeDropper && (
              <Button
                isDisabled={isDisabled}
                className="sds_colorPicker_control_tools_eyePicker"
                iconOnly="eye-dropper--fill"
                onClick={eyeDropperAction}
                scaleWhileActive={false}
              />
            )}
            <TextInput
              className={classNames('sds_colorPicker_control_tools_input', {
                'sds_colorPicker_control_tools_input--noColorPicker':
                  !hasValidEyeDropper,
              })}
              isDisabled={isDisabled}
            >
              <TextInput.Control
                data-testid="sds_colorPicker_input"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </TextInput>
          </div>
        </div>
      </ColorPickerContext.Provider>
    );
  }
);
