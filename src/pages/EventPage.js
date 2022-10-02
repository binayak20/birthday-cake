import React from "react";
import ListView from "../components/ListView";
import SimpleTitle from "../components/SimpleTitle";
import { Row, Col, Image } from "antd";
import SubTitle from "../components/SubTitle";

export default function EventPage() {
  return (
    <div style={{ padding: "100px 160px 106px 170px" }}>
      <Row gutter={16}>
        <Col span={12}>
          <SimpleTitle title="Birthday Bash" />
          <SubTitle title="Hosted by Elysia" />
          <ListView />
        </Col>
        <Col span={12} className="right-align">
          <Image
            width={500}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
      </Row>
    </div>
  );
}
