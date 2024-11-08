import React from 'react';
import { Table } from '../Table';
import { expectError } from '../../../../TestUtils';

const TableErrorTest = () => {
  return <Table> </Table>;
};

const EmptyTableContentError = () => {
  return (
    <Table>
      <Table.Content children></Table.Content>
    </Table>
  );
};

const EmptyTableBodyError = () => {
  return (
    <Table>
      <Table.Content borderStyle="ruled">
        <Table.Header children />
        <Table.Body children />
      </Table.Content>
    </Table>
  );
};

const EmptyTableRowError = () => {
  return (
    <Table>
      <Table.Content borderStyle="ruled">
        <Table.Header>
          <Table.HeaderCell>Column 1</Table.HeaderCell>
          <Table.HeaderCell>Column 2</Table.HeaderCell>
          <Table.HeaderCell>Column 3</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          <Table.Row children />
        </Table.Body>
      </Table.Content>
    </Table>
  );
};

describe('Table error tests', () => {
  it('No child error', () => {
    expectError(
      <TableErrorTest />,
      '<Table> requires <Table.Content> as a subcomponent'
    );
  });

  it('No child on content error', () => {
    expectError(
      <EmptyTableContentError />,
      '<Table.Content> requires as subcomponents the <Table.Header> and <Table.Body>'
    );
  });

  it('No child on body error', () => {
    expectError(
      <EmptyTableBodyError />,
      '<Table.Body> only accepts <Table.Row> as subcomponent.'
    );
  });

  it('No child on row error', () => {
    expectError(
      <EmptyTableRowError />,
      '<Table.Row> requires at least one <Table.Cell> subcomponent.'
    );
  });
});
