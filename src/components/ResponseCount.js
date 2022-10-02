import React from "react";
import { Row, Col } from "antd";
import ButtonComponent from "./Button";

export default function ResponseCount() {
  return (
    <div className="response-count">
      <Row>
        <Col span={18}>
          <div>
            <span style={{ color: "#240D57" }}>
              <strong>14</strong> response{" "}
            </span>{" "}
            <span style={{ color: "#8456EC" }}>. see guests </span>
          </div>
        </Col>
        <Col span={6} className="right-align">
          <ButtonComponent
            name="🤝 Invite"
            size="middle"
            background="#8456EC"
            radius="10px"
          />
        </Col>
      </Row>
    </div>
  );
}
