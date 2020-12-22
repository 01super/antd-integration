import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Search, SearchProps } from "./index";

export default {
  title: "样式/Search",
  component: Search,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<SearchProps> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};
