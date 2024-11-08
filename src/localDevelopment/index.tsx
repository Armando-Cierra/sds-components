import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import '@sipster/core/reset.scss';
import '@sipster/themes/themes.scss';

const container = document.getElementById('app');
const root = createRoot(container as HTMLElement);
root.render(<App />);
