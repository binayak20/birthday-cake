import React from "react";
import { Avatar, List } from "antd";
import { ImLocation, ImCalendar, ImLink, ImArrowRight2 } from "react-icons/im";
import SimpleTitle from "./SimpleTitle";

const data = [
  {
    title: "18 August 6:00PM",
    description: (
      <>
        to <strong>19 August 1:00PM</strong> UTC +10
      </>
    ),
    icon: <ImCalendar />,
  },
  {
    title: "Street name",
    description: "301 Rowes Lane, WA, 7183",
    icon: <ImLocation />,
  },
  {
    title: "Link",
    description: "netflix.com",
    icon: <ImLink />,
  },
];
export default function ListView() {
  return (
    <List
      itemLayout="horizontal"
      split={false}
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={[<ImArrowRight2 />]}>
          <List.Item.Meta
            avatar={<Avatar shape="square" icon={item.icon} />}
            title={<SimpleTitle title={item.title} size="15px" />}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
}
