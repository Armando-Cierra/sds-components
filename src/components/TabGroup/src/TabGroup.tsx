import React, { cloneElement, forwardRef } from 'react';
import classNames from 'classnames';
import { Badge } from '../../Badge';
import { Telicon } from '../../Telicon';
import { Loader } from '../../Loader';
import { Title } from './Title';
import { Tab } from './Tab';
import { Divider } from './Divider';
import { Content } from './Content';
import { useTabGroup } from './useTabGroup';
import type { TabGroupProps } from './types';
import './tab-group.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/tabgroup)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/tabgroup-p5yjth?file=/src/App.tsx:1,1)
*/

const TabGroup = Object.assign(
  forwardRef<HTMLDivElement, TabGroupProps>(
    (
      {
        children,
        isFlex,
        variant,
        selectedTab: controlledSelection,
        className: customClassName,
        defaultSelectedTab,
        paddingStart = true,
        ...rest
      }: TabGroupProps,
      ref
    ) => {
      const { tabsSection, content } = useTabGroup({
        children,
        controlledSelection,
        variant,
        defaultSelectedTab,
      });

      if (tabsSection.length === 0) {
        throw new Error(`
      Add at least one TabGroup.Tab (required)
      You should use the following subcomponents inside the TabGroup.Tab:
      TabGroup.Title (required),
      TabGroup.Content,
    `);
      }

      return (
        <div
          data-testid="sds_tabGroup"
          className={classNames('sds_tabGroup', {
            [customClassName as string]: customClassName,
            'sds_tabGroup--flex': isFlex,
          })}
          {...rest}
          ref={ref}
        >
          <div
            className={classNames('sds_tabGroup_container', {
              'sds_tabGroup_container--flex': isFlex,
            })}
          >
            <div
              className={classNames('sds_tabGroup_box', {
                'sds_tabGroup_box--flex': isFlex,
              })}
            >
              {paddingStart && !isFlex && (
                <div className="sds_tabGroup_initial"></div>
              )}
              {tabsSection.map((tab) => cloneElement(tab, { variant }))}
              {!isFlex && <div className="sds_tabGroup_complement"></div>}
            </div>
            <div data-testid="sds_tabGroup_body" className="sds_tabGroup_body">
              {content}
            </div>
          </div>
        </div>
      );
    }
  ),
  {
    Tab,
    Title,
    Divider,
    Content,
    Badge,
    Icon: Telicon,
    Loader,
  }
);

export { TabGroup };
