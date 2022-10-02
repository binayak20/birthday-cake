import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

export default function SubTitle({ title }) {
  return <Paragraph>{title}</Paragraph>;
}
