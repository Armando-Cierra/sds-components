import React, { useMemo } from 'react';
import { Telicon } from '../../Telicon';
import { Loader } from '../../Loader';
import type { useButtonProps } from './types';

export const useButton = ({
  children,
  size,
  iconOnly,
  iconAfter,
  iconBefore,
  isLoading,
}: useButtonProps) => {
  const iconSize = useMemo(
    () => (size === 'large' ? 'medium' : 'default'),
    [size]
  );

  const getChildren = () => {
    if (!iconOnly) {
      return children;
    }

    return null;
  };

  const getIconOnly = () => {
    if (iconOnly) {
      if (isLoading) {
        return <Loader className="sds_button_loader" size={iconSize} />;
      }

      return (
        <Telicon
          className="sds_button_icon"
          iconName={iconOnly}
          size={iconSize}
        />
      );
    }

    return null;
  };

  const getIconBefore = () => {
    if (iconBefore && !iconOnly) {
      if (isLoading) {
        return <Loader className="sds_button_loader" size={iconSize} />;
      }

      return (
        <Telicon
          className="sds_button_icon"
          iconName={iconBefore}
          size={iconSize}
        />
      );
    }

    return null;
  };

  const getIconAfter = () => {
    if (iconAfter && !iconOnly) {
      if (iconBefore) {
        return (
          <Telicon
            className="sds_button_icon"
            iconName={iconAfter}
            size={iconSize}
          />
        );
      } else {
        if (isLoading) {
          return <Loader className="sds_button_loader" size={iconSize} />;
        }
        return (
          <Telicon
            className="sds_button_icon"
            iconName={iconAfter}
            size={iconSize}
          />
        );
      }
    }

    return null;
  };

  const getIsLoading = () => {
    if (!iconAfter && !iconBefore && !iconOnly && isLoading) {
      return <Loader className="sds_button_loader" size={iconSize} />;
    }
    return null;
  };

  return {
    getChildren,
    getIconOnly,
    getIconBefore,
    getIconAfter,
    getIsLoading,
  };
};
