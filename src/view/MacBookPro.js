import { Row, Col } from "antd";
import SimpleTitle from "../components/SimpleTitle";
import LinearTitle from "../components/LinearTitle";
import SubTitle from "../components/SubTitle";
import CardComponent from "../components/Card";
import ButtonComponent from "../components/Button";

function MacBookPro() {
  return (
    <div style={{ padding: "100px 160px 106px 170px" }}>
      <Row>
        <Col span={12}>
          <CardComponent />
        </Col>
        <Col span={12}>
          <header
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              padding: 0,
            }}
          >
            <SimpleTitle title="Image if" size="64px" />
            <LinearTitle title="Snapchat" size="64px" />
            <SimpleTitle title="had events." size="64px" />
            <SubTitle title="Easily host and share events with your friends across any social media." />
            <ButtonComponent
              name="🎉 Create my event"
              background="linear-gradient(90deg, #8456EC 3.25%, #E87BF8 100%)"
              radius="10px"
              size="large"
              to="/create-event"
            />
          </header>
        </Col>
      </Row>
    </div>
  );
}

export default MacBookPro;
