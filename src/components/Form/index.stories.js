import React from 'react';

import Form from '.' ;

export default {
  title: 'Example/Form',
  component: Form,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Form {...args} />;

export const FormTemp = Template.bind({});
FormTemp.args = {
  onChange: () => {}
};
