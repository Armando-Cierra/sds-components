import React from 'react';
import { HeaderProps } from './types';
import { Telicon } from '../../../Telicon';

export const useHeader = ({ icon, image }: Omit<HeaderProps, 'children'>) => {
  const renderIconOrImage = () => {
    if (icon && image)
      throw new Error('You can use either an icon or an image but not both.');
    if (icon)
      return (
        <Telicon
          className="sds_emptyMessage_icon"
          iconName={icon}
          size="large"
        />
      );
    return (
      <img
        data-testid="sds_emptyMessage_image"
        className="sds_emptyMessage_image"
        src={image}
      />
    );
  };

  const iconOrImage = renderIconOrImage();

  return {
    iconOrImage,
  };
};
