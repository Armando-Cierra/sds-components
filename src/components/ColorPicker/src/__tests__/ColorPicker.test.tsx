import React from 'react';
import { fireEvent } from '@testing-library/react';
import { getComponent, forEachElement } from '../../../../TestUtils';
import { ColorPicker } from '../ColorPicker';
import type { ColorPickerProps } from '../types';

type TestsProps = Omit<ColorPickerProps, 'children'>;

const ColorPickerTest = ({ ...rest }: TestsProps) => {
  return (
    <ColorPicker {...rest}>
      <ColorPicker.Label>A label</ColorPicker.Label>
      <ColorPicker.Control
        defaultColorFormat="rgb"
        defaultRgb={{ r: 255, g: 255, b: 255, a: 1 }}
      />
      <ColorPicker.HelpText>Select a color.</ColorPicker.HelpText>
    </ColorPicker>
  );
};

describe('<ColorPicker />', () => {
  const colorPickerTestID = 'sds_colorPicker';
  const colorPickerLabel = 'sds_colorPicker_label';
  const colorPickerHelptext = 'sds_colorPicker_helptext';
  const colorPickerTrigger = 'sds_colorPicker_buttonTrigger';
  const colorPickerInput = 'sds_colorPicker_input';
  const popoverMenuTestId = 'sds_popoverMenu_customArea';
  const colorPickerToggleTestId = 'sds_colorPicker_colorModeToggle';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<ColorPickerTest />);
    const colorPicker = getByTestId(colorPickerTestID);
    const label = getByTestId(colorPickerLabel);
    const helptext = getByTestId(colorPickerHelptext);
    const trigger = getByTestId(colorPickerTrigger);
    const input = getByTestId(colorPickerInput);

    forEachElement([colorPicker, label, helptext, trigger, input], (el) => {
      expect(el).toBeInTheDocument();
    });
  });

  it('Popover menu should be opening when the ColorButton is clicked', () => {
    const { getByTestId } = getComponent(<ColorPickerTest />, 'document');
    const trigger = getByTestId(colorPickerTrigger);
    fireEvent.click(trigger);
    expect(getByTestId(popoverMenuTestId)).toBeInTheDocument();
  });

  it('Expect Color Picker to be setted on the correct color mode', () => {
    const { getByTestId } = getComponent(<ColorPickerTest />, 'document');
    const input = getByTestId(colorPickerInput);

    const trigger = getByTestId(colorPickerTrigger);
    fireEvent.click(trigger);

    const toggleBtn = getByTestId(colorPickerToggleTestId);
    expect((input as HTMLInputElement).value).toContain('rgb');
    expect(toggleBtn.innerHTML).toBe('rgb');
  });

  it('Expect Color Picker to change its color mode', () => {
    const { getByTestId } = getComponent(<ColorPickerTest />, 'document');
    const input = getByTestId(colorPickerInput);

    const trigger = getByTestId(colorPickerTrigger);
    fireEvent.click(trigger);
    const toggleBtn = getByTestId(colorPickerToggleTestId);
    fireEvent.click(toggleBtn);

    expect((input as HTMLInputElement).value).toContain('hsl');
    expect(toggleBtn.innerHTML).toBe('hsl');
  });

  it('Inputs inside the color picker menu should modify the color globally, reflecting changes on the input outside the menu', () => {
    const { getByTestId } = getComponent(<ColorPickerTest />, 'document');
    const trigger = getByTestId(colorPickerTrigger);
    fireEvent.click(trigger);

    const input = getByTestId(colorPickerInput);
    const rgbInput = document.querySelector(
      '[data-custom-testid="sds_colorPicker_rgb_rInput"]'
    );

    if (rgbInput) {
      fireEvent.change(rgbInput, {
        target: {
          value: '0',
        },
      });
    }

    expect((input as HTMLInputElement).value).toBe('rgb(0, 255, 255)');
  });

  it('Color picker input should modify the color globally, reflecting changes on the inputs inside the menu', () => {
    const { getByTestId } = getComponent(<ColorPickerTest />, 'document');
    const trigger = getByTestId(colorPickerTrigger);
    fireEvent.click(trigger);

    const input = getByTestId(colorPickerInput);
    const rgbInput = document.querySelector(
      '[data-custom-testid="sds_colorPicker_rgb_rInput"]'
    );

    if (input) {
      fireEvent.change(input, {
        target: {
          value: 'rgb(0, 255, 255)',
        },
      });
    }

    expect((rgbInput as HTMLInputElement).value).toBe('0');
  });

  it('Expect disabled state to work', () => {
    const { getByTestId } = getComponent(<ColorPickerTest isDisabled />);
    const colorpicker = getByTestId(colorPickerTestID);
    expect(colorpicker).toHaveAttribute('data-disabled', 'true');
  });
});
