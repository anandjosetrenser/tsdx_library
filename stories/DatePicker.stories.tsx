import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { CustomDatePicker } from '../src/components/datePicker/DatePicker';

const meta: Meta = {
  title: 'CustomDatePicker',
  component: CustomDatePicker,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const TemplateDatePicker: Story = (args: { date: Date | null; setDate: Function }) => {
  const [inpDate,setInpDate]  = useState<Date | null>(args.date);
  return <CustomDatePicker date={inpDate} setDate={setInpDate} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const SingleDatePicker = TemplateDatePicker.bind({});
SingleDatePicker.args = {
  date: null,
  setDate: () => {},
};

const TemplateDateTimePicker: Story = (args: { 
  selectsRange: boolean,
  startDate : Date| null,
  endDate : Date | null,
  setDateRange : Function,
}) => {
  const [dateRange, changeDateRange] = useState([args.startDate, args.endDate]);
  const [startDateState, endDateState] = dateRange;
  return <CustomDatePicker startDate={startDateState} endDate={endDateState} setDateRange={changeDateRange} selectsRange={args.selectsRange} />;
};

export const MultiDatePicker = TemplateDateTimePicker.bind({});
MultiDatePicker.args = {
    selectsRange : true,
    startDate : null,
    endDate : null,
    setDateRange : ()=>{}
};


