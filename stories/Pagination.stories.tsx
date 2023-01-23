import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { PaginationWithItemCount } from '../src/components/Pagination/PaginationWithItemCount';
import { PaginationWithItemCountProps } from '../src/components/Pagination/interface';

const meta: Meta = {
  title: 'PaginationWithItemCount',
  component: PaginationWithItemCount,
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
    const [currOffset,changeCurrOffset] = useState<number>(args.offset)
    const updatedAttr = {...args,offset:currOffset,changeOffset:changeCurrOffset}
    return <PaginationWithItemCount {...updatedAttr} />;
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  totalRecords: 105,
  limit: 10,
  offset: 0,
  hidePagination: false,
  changeOffset: () => {},
};
