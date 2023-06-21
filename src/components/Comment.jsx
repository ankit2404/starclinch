import React from "react";
import { Typography } from "antd";
import {
  MessageOutlined,
  HeartOutlined,
  MoreOutlined,
} from "@ant-design/icons";
const { Text } = Typography;

const Comment = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "start" }}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
            alt="image1"
            className="search-image"
          />
        </div>
        <div style={{ marginLeft: "30px" }}>
          <div>
            <Text style={{ fontWeight: "600" }}>Javascript lover</Text>
          </div>
          <div>
            <Text>45 Minutes Ago</Text>
          </div>
          <div style={{ marginTop: "10px" }}>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestias voluptatum. Animi id nobis qui ut rerum quos, tempore
            </Text>
          </div>
          <div style={{ marginTop: "15px" }}>
            <MessageOutlined />
            <Text style={{ marginLeft: "10px" }}>Ankit Mittal</Text>
            <HeartOutlined style={{ marginLeft: "30px" }} />
            <Text style={{ marginLeft: "10px" }}>48</Text>
            <MoreOutlined style={{ marginLeft: "30px" }} />
            <Text style={{ marginLeft: "10px" }}>25</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
