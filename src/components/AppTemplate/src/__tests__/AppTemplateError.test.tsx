import React from 'react';
import { AppTemplate } from '../../..';
import { expectError } from '../../../../TestUtils';

const PageWithoutChildrenError = () => {
  return <AppTemplate children></AppTemplate>;
};

const PageHeaderWithoutChildrenError = () => {
  return (
    <AppTemplate>
      <AppTemplate.Page>
        <AppTemplate.PageHeader>
          children
          {/* <AppTemplate.PageHeaderTitle>I am a title</AppTemplate.PageHeaderTitle> */}
        </AppTemplate.PageHeader>
        <AppTemplate.PageContent>Content</AppTemplate.PageContent>
      </AppTemplate.Page>
    </AppTemplate>
  );
};

const InvalidSidebarError = () => {
  return (
    <AppTemplate>
      <AppTemplate.Sidebar> </AppTemplate.Sidebar>
      <AppTemplate.Page>
        <AppTemplate.PageHeader>
          <AppTemplate.PageHeaderTitle>Title</AppTemplate.PageHeaderTitle>
        </AppTemplate.PageHeader>
        <AppTemplate.PageContent>Content</AppTemplate.PageContent>
      </AppTemplate.Page>
    </AppTemplate>
  );
};

const InvalidSidebarPropsError = () => {
  return (
    <AppTemplate isSidebarExpanded isSidebarFixed>
      <AppTemplate.Sidebar>
        <AppTemplate.SidebarContent>content</AppTemplate.SidebarContent>
      </AppTemplate.Sidebar>
      <AppTemplate.Page>
        <AppTemplate.PageHeader>
          <AppTemplate.PageHeaderTitle>Title</AppTemplate.PageHeaderTitle>
        </AppTemplate.PageHeader>
        <AppTemplate.PageContent>Content</AppTemplate.PageContent>
      </AppTemplate.Page>
    </AppTemplate>
  );
};

describe('AppTemplate tests', () => {
  it('Should throw error if children is undefined in page', () => {
    expectError(
      <PageWithoutChildrenError />,
      'The <AppTemplate.Page> subcomponent is required to render the component'
    );
  });

  it('Should throw error when header has no title', () => {
    expectError(
      <PageHeaderWithoutChildrenError />,
      'The <AppTemplate.PageHeaderTitle> subcomponent is required as a child elements for <AppTemplate.PageHeader>'
    );
  });

  it('Should throw error when sidebar has no content', () => {
    expectError(
      <InvalidSidebarError />,
      'The <AppTemplate.SidebarContent> subcomponent is a required child element for <AppTemplate.Sidebar>'
    );
  });

  it('Should throw error when sidebar has no content', () => {
    expectError(
      <InvalidSidebarError />,
      'The <AppTemplate.SidebarContent> subcomponent is a required child element for <AppTemplate.Sidebar>'
    );
  });

  it('Should throw error when sidebar has invalid props', () => {
    expectError(
      <InvalidSidebarPropsError />,
      'The properties "isSidebarExpanded", "collapsedSidebar", or "expandSidebar" cannot be used when the sidebar is fixed.'
    );
  });
});
