import { createContext } from 'react';
import type { TableContextType, TableStackContextType } from './types';

export const TableContext = createContext<TableContextType | undefined>(
  undefined
);

export const TableStackContext = createContext<
  TableStackContextType | undefined
>(undefined);
