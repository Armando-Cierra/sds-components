import React from 'react';
import classNames from 'classnames';
import { CustomArea } from '../CustomArea';
import { TextInput, TextInputControlProps } from '../../../TextInput';

export const Search = React.forwardRef<HTMLInputElement, TextInputControlProps>(
  ({ className: customClassName, ...rest }, ref) => {
    return (
      <CustomArea
        className="sds_menu_customArea--search"
        style={{ paddingTop: '0px' }}
      >
        <TextInput
          className="sds_menu_search"
          style={{
            width: '100%',
          }}
        >
          <TextInput.Control
            icon="magnifying-glass--fill"
            hasClearAction
            clearActionVisibility="always"
            className={classNames('sds_menu_search_input', {
              [customClassName as string]: customClassName,
            })}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
              e.stopPropagation()
            }
            ref={ref}
            {...rest}
          />
        </TextInput>
      </CustomArea>
    );
  }
);
