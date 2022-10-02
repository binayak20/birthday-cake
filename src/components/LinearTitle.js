import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export default function LinearTitle({ title, size }) {
  return (
    <Title
      level={1}
      style={{
        margin: 0,
        fontWeight: 700,
        fontSize: size,
        background: "linear-gradient(45deg, #8456EC , #E87BF8 )",
        backgroundSize: "100%",
        backgroundRepeat: "repeat",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        "-moz-background-clip": "text",
        "-moz-text-fill-color": "transparent",
      }}
    >
      {title}
    </Title>
  );
}
