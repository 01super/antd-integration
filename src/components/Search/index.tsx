import React from "react";
import { Input, Button, Select, Form } from "antd";

const { Option } = Select;

export interface SearchProps {}

export const Search: React.FC<SearchProps> = () => {
  return (
    <div>
      <Input />
    </div>
  );
};
