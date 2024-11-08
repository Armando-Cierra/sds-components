import React, { ReactNode, StrictMode } from 'react';
import { Switch, Telicon, Text } from '../../components';
import { useTemplate } from './useTemplate';
import './Template.scss';

export const Template = ({ children }: { children?: ReactNode }) => {
  const { icon, theme, handleChange } = useTemplate();

  return (
    <StrictMode>
      <main>
        <div className="container">{children}</div>
        <div className="themesBar">
          <Telicon iconName={icon} />
          <Text.Span variant="subtle">{theme} Theme</Text.Span>
          <Switch>
            <Switch.Control
              checked={theme === 'Light'}
              onChange={handleChange}
            />
          </Switch>
        </div>
      </main>
    </StrictMode>
  );
};
