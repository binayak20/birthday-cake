import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function SimpleTitle({ title, size }) {
  return (
    <Title
      level={1}
      style={{
        margin: 0,
        fontWeight: 700,
        fontSize: size,
        color: "#240D57",
      }}
    >
      {title}
    </Title>
  );
}
