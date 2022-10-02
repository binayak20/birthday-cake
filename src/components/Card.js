import React from "react";
import { Avatar, List, Card } from "antd";
import SimpleTitle from "./SimpleTitle";
import ListView from "./ListView";
import ResponseCount from "./ResponseCount";

const { Meta } = Card;

const CardComponent = () => (
  <Card
    style={{
      width: 440,
      background: "#f2f5ff",
      borderRadius: 35,
    }}
    cover={
      <img
        alt="example"
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221002%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221002T085759Z&X-Amz-Expires=86400&X-Amz-Signature=16f9d1fd5342ac7efd681d52fe7be1a624f35c0bab94a5119d5ebf33adf109fe&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
      />
    }
  >
    <Meta
      // avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title={<SimpleTitle title="Movie night" size="24px" />}
      description={
        <>
          👋 Hosted by <strong>Elysia</strong>
        </>
      }
    />
    <ResponseCount />
    <ListView />
  </Card>
);

export default CardComponent;
