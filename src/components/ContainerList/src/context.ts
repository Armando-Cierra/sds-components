import { createContext } from 'react';
import type { ContainerListContextProps } from './types';

export const ContainerListContext = createContext<
  ContainerListContextProps | undefined
>(undefined);
