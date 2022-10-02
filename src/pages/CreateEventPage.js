// import React from "react";

// export default function CreateEventPage() {
//   return (
//     <div style={{ padding: "100px 160px 106px 170px" }}>
//       Event name, Host name, Start and End time/date, Location and Event photo.

//     </div>
//   );
// }
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, DatePicker, Upload, Card } from "antd";
import ButtonComponent from "../components/Button";

const { RangePicker } = DatePicker;

const CreateEventPage = () => {
  return (
    <div style={{ padding: "100px 160px 106px 170px" }}>
      <Card>
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          // onValuesChange={onFormLayoutChange}
          //  disabled={componentDisabled}
        >
          <Form.Item label="Event name">
            <Input />
          </Form.Item>
          <Form.Item label="Host name">
            <Input />
          </Form.Item>

          <Form.Item label="Start and End time/date">
            <RangePicker />
          </Form.Item>

          <Form.Item label="Upload" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Event photo
                </div>
              </div>
            </Upload>
          </Form.Item>
        </Form>
        <div className="right-align">
          <ButtonComponent
            name="Next"
            radius="10px"
            size="large"
            background="#8456EC"
            to="/event"
          />
        </div>
      </Card>
    </div>
  );
};

export default () => <CreateEventPage />;
