import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { PaginationWithItemCount } from '../src/components/Pagination/PaginationWithItemCount';
import { PaginationWithItemCountProps } from '../src/components/Pagination/interface';
import {Popover} from '../src/components/Popover/Popover';
import SvgFaMoreVertical from '../src/assets/icons/svgComponents/FaMoreVertical';

const meta: Meta = {
  title: 'Popover',
  component: Popover,
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

const Template: Story<PaginationWithItemCountProps> = (
  args: PaginationWithItemCountProps
) => {
  return (
    <Popover {...args}>
      <>
        This is a sampleThis is a sampleThis is a sampleThis is a sampleThis is
        a sampleThis is a sample a sampleThis is a samplea sampleThis is a
        samplea sampleThis is a samplea sampleThis is a sample
      </>
    </Popover>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    icon : <SvgFaMoreVertical />
};
