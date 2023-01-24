import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Table } from '../src/components/table/Table';
import { TableProps, TableSchema } from '../src/components/table/interface';

const subTableSchema: TableSchema[] = [
  {
    header: () => 'Study Name',
    pathToValue: 'StudyName',
    searchField: 'input',
    isSortable: true,
    fieldName: 'StudyName',
  },
  {
    header: () => 'Study Id',
    pathToValue: 'studyId',
    searchField: 'input',
    isSortable: true,
    fieldName: 'studyId',
  },

  {
    header: () => 'Study Date',
    pathToValue: 'studyDate',
    searchField: 'input',
    isSortable: true,
    fieldName: 'studyDate',
  },
];

const studyListSchema: TableSchema[] = [
  {
    header: () => 'Patient Name',
    pathToValue: 'patientName',
    searchField: 'input',
    isSortable: true,
    fieldName: 'PatientName',
  },
  {
    header: () => 'MRN',
    pathToValue: 'mrn',
    searchField: 'input',
    isSortable: true,
    fieldName: 'PatientID',
  },

  {
    header: () => 'Accession',
    pathToValue: 'accession',
    searchField: 'input',
    isSortable: true,
    fieldName: 'AccessionNumber',
  },
];

const records = [
  { patientName: 'p1', mrn: 'm1', accession: 'a1' },
  { patientName: 'p2', mrn: 'm2', accession: 'a2' },
];

const subRecords = {
  m1: [
    { StudyName: 's1', studyId: 'Sid1', studyDate: '10/10/2020' },
    { StudyName: 's2', studyId: 'Sid2', studyDate: '10/10/2020' },
    { StudyName: 's2', studyId: 'Sid2', studyDate: '10/10/2020' },
  ],
};

const defaultQueries = { orderby: 'AccessionNumber', limit: 5, offset: 0 };

const studyListFields: Record<string, any> = {};
studyListSchema.forEach(schema => {
  if (schema.fieldName != null) {
    _.set(studyListFields, schema.fieldName, '');
  }
});

const meta: Meta = {
  title: 'Table',
  component: Table,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<TableProps> = (args: TableProps) => {
  const [quires, setQuires] = useState<Record<string, any>>({
    ...studyListFields,
    ...args.defaultQuires,
  });
  const onChangeQuires = (field: string, value: string) => {
    setQuires({ ...quires, [field]: value });
  };

  const updatedQueries = {
    ...args,
    setQuires: setQuires,
    onChange: onChangeQuires,
    searchQuires: quires,
  };
  return <Table {...updatedQueries} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const SimpleSearchTable = Template.bind({});

SimpleSearchTable.args = {
  tableSchema: studyListSchema,
  data: records,
  searchQuires: { orderby: 'AccessionNumber', limit: 5, offset: 0 },
  defaultQuires: defaultQueries,
  onChange: () => {},
  loadingStatus: 'idle',
  noDataMessage: 'No record found',
  actionFunction: () => {},
  totalRecordCount: 50,
  setQuires: () => {},
};

export const ExpandableSearchTable = Template.bind({});

ExpandableSearchTable.args = {
  tableSchema: studyListSchema,
  data: records,
  searchQuires: { orderby: 'AccessionNumber', limit: 5, offset: 0 },
  defaultQuires: defaultQueries,
  onChange: () => {},
  loadingStatus: 'idle',
  noDataMessage: 'No record found',
  actionFunction: () => {},
  totalRecordCount: 50,
  setQuires: () => {},
  expandedItem:["m1"],
  dataId:"mrn",
  subTableData:subRecords,
  subTableSchema:subTableSchema,
};
