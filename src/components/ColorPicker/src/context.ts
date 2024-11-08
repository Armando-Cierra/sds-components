import { createContext } from 'react';
import type { ColorPickerContextProps } from './types';

export const ColorPickerContext = createContext<
  undefined | ColorPickerContextProps
>(undefined);
