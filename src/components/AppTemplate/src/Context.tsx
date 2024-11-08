import { createContext } from 'react';
import type { AppTemplateContextType } from './types';

export const AppTemplateContext = createContext<
  AppTemplateContextType | undefined
>(undefined);
