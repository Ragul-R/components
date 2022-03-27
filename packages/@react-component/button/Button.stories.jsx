import React from 'react';

import { Button } from './Button';


export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'tertiary',
  children: 'Button',
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: 'ghost',
  children: 'Button',
};