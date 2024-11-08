import React from 'react';
import uniqid from 'uniqid';
import { Table } from '../../../../components';
import { forEachElement, getComponent } from '../../../../TestUtils';

type testProps = {
  fillStyle?: 'solid' | 'striped';
  borderStyle?: 'ruled' | 'grid' | 'none';
};

export function TableTest({ fillStyle, borderStyle }: testProps) {
  const elements = [
    {
      property1: 'Row 1',
      property2: 'Lorem',
      property3: 'Ipsum',
    },
    {
      property1: 'Row 2',
      property2: 'Lorem',
      property3: 'Ipsum',
    },
    {
      property1: 'Row 3',
      property2: 'Lorem',
      property3: 'Ipsum',
    },
  ];

  return (
    <>
      <Table>
        <Table.ControlBar>A control bar</Table.ControlBar>
        <Table.Title hasPadding>Simple Table (Ruled)</Table.Title>
        <Table.Content borderStyle={borderStyle} fillStyle={fillStyle}>
          <Table.Header>
            <Table.HeaderCell>Column 1</Table.HeaderCell>
            <Table.HeaderCell>Column 2</Table.HeaderCell>
            <Table.HeaderCell>Column 3</Table.HeaderCell>
          </Table.Header>
          <Table.Body>
            {elements.map((row) => (
              <Table.Row key={uniqid()}>
                <Table.Cell>{row.property1}</Table.Cell>
                <Table.Cell>{row.property2}</Table.Cell>
                <Table.Cell>{row.property3}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table>
    </>
  );
}

describe('Table tests', () => {
  const TableTestID = 'sds_table';
  const ContentTestID = 'sds_table_content';
  const BodyTestID = 'sds_table_body';
  const CellTestID = 'sds_table_cell';
  const ControlBarTestID = 'sds_table_controlBar';
  const HeaderTestID = 'sds_table_header';
  const RowTestID = 'sds_table_row';
  const TitleTestID = 'sds_table_title';

  it('Expect table to be rendering', () => {
    const { getByTestId, getAllByTestId } = getComponent(<TableTest />);
    const table = getByTestId(TableTestID);
    const content = getByTestId(ContentTestID);
    const body = getByTestId(BodyTestID);
    const ceil = getAllByTestId(CellTestID)[0];
    const row = getAllByTestId(RowTestID)[0];
    const controlbar = getByTestId(ControlBarTestID);
    const header = getByTestId(HeaderTestID);
    const title = getByTestId(TitleTestID);

    forEachElement(
      [table, content, body, ceil, controlbar, header, row, title],
      (el) => expect(el).toBeInTheDocument()
    );
  });

  it('Expect row amount to match', () => {
    const { getAllByTestId } = getComponent(<TableTest />);
    const rowLength = getAllByTestId(RowTestID).length;
    expect(rowLength).toBe(3);
  });

  it('Expect cell amount to match', () => {
    const { getAllByTestId } = getComponent(<TableTest />);
    const cellLength = getAllByTestId(CellTestID).length;
    expect(cellLength).toBe(9);
  });

  it('Expect grid border to be updated using the context', () => {
    const { getByTestId } = getComponent(<TableTest borderStyle="grid" />);
    const header = getByTestId(HeaderTestID);
    expect(header).toHaveClass('sds_table_header--grid');
  });

  it('Expect grid border to be updated using the context in the content subcomponent', () => {
    const { getByTestId } = getComponent(<TableTest borderStyle="grid" />);
    const content = getByTestId(ContentTestID);
    expect(content).toHaveClass('sds_table_content--fullBorder');
  });

  it('Expect no border style prop working on context as well', () => {
    const { getByTestId } = getComponent(<TableTest borderStyle="none" />);
    const body = getByTestId(BodyTestID);
    const content = getByTestId(ContentTestID);
    expect(content).toHaveClass('sds_table_content--noBorder');
    expect(body).toHaveClass('sds_table_body--noBorder');
  });

  it('Expect title to have padding', () => {
    const { getByTestId } = getComponent(<TableTest borderStyle="none" />);
    const title = getByTestId(TitleTestID);
    expect(title).toHaveClass('sds_table_title--hasPadding');
  });

  it('Expect filling styles to be working', () => {
    const { getByTestId } = getComponent(<TableTest fillStyle="striped" />);
    const body = getByTestId(BodyTestID);
    expect(body).toHaveClass('sds_table_body--striped');
  });
});
