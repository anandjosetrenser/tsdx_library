import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import {SelectDropDown} from '../src/components/selectDropDown/SelectDropDown';
import { SelectProps } from '../src/components/selectDropDown/interface';
import { SelectInterface } from '../src/components/kebakMenu/interface';

const meta: Meta = {
  title: 'SelectDropDown',
  component: SelectDropDown,
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

const Template: Story<SelectProps> = (
  args: SelectProps
) => {
  const [value,setValue]=useState<string[]>([])
  const upargs ={...args,seletedItem:value,onChange:setValue}
  return (
    <SelectDropDown {...upargs}/>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const MultiSelect = Template.bind({});

MultiSelect.args = {
    label: "MultiSelect",
    options: [{value:"op1",label:"op1"},{value:"op2",label:"op2"},{value:"op3",label:"op3"},{value:"op4",label:"op4"}],
    seletedItem: [],
    onChange: ()=>{},
    multiple:true
};

export const SingleSelect = Template.bind({});

SingleSelect.args = {
    label: "MultiSelect",
    options: [{value:"op1",label:"op1"},{value:"op2",label:"op2"},{value:"op3",label:"op3"},{value:"op4",label:"op4"}],
    seletedItem: [],
    onChange: ()=>{},
    multiple:false
};
