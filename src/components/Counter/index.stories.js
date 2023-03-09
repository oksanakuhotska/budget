import React from 'react';

import Counter from '.';

export default {
  title: 'Example/Counter',
  component: Counter,
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => <Counter {...args} />;

export const CounterTemp = Template.bind({});
CounterTemp.args = {};
