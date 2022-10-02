import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function ButtonComponent({
  name,
  background,
  radius,
  size,
  to,
}) {
  return (
    <Button
      type="primary"
      size={size}
      style={{
        background: background,
        border: "1px #8456EC",
        borderRadius: radius,
        fontWeight: "bold",
      }}
    >
      <Link to={to}>{name}</Link>
    </Button>
  );
}
