import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { FloatingInput } from '../src/components/floatingInput/FloatingInput';
import { InputProps } from '../src/components/floatingInput/interface';

const meta: Meta = {
  title: 'FloatingInput',
  component: FloatingInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = (args) => {
  const [inp,setInput] = useState(args.value);
  const newArgs = {...args,value:inp,onChange:setInput};
  return <FloatingInput {...newArgs} />
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Spaghetti = Template.bind({});
Spaghetti.args = {
  label: 'Input Label',
  name: 'FloatingInput',
  value: "val"
};
