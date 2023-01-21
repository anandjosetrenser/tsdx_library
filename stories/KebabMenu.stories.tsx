import React from 'react';
import { Meta, Story } from '@storybook/react';

import { KebabMenu } from '../src/components/kebakMenu/KebabMenu';
import { KebabMenuProps } from '../src/components/kebakMenu/interface';
import { FaMonitorView } from '../src/assets/icons/svgComponents';

const meta: Meta = {
  title: 'KebabMenu',
  component: KebabMenu,
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

const Template: Story<KebabMenuProps> = (args:KebabMenuProps) => <div style={{marginLeft:"750px",marginTop:"0px"}}><KebabMenu {...args} /></div>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
    selectedId: "",
    menuOptions: [{label:"l1",icon:<FaMonitorView />},{ label: "First", icon: <FaMonitorView />,subMenu:[{value:"label1",label:"value1"},{value:"label2",label:"value2"}] }],
    data: {a:"a",b:"b"},
    actionFunction:(event,study)=>{},
    isSelected: false
};
