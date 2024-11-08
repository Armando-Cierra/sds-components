import { createContext } from 'react';
import type { ListContextProps } from './types';

export const ListContext = createContext<ListContextProps | undefined>(
  undefined
);
