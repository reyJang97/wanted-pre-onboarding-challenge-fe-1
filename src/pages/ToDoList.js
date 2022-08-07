import React from "react";
import { Avatar, List, Space } from "antd";
import { MessageOutlined, StarOutlined } from "@ant-design/icons";
import "../styles/ToDoList.css";

const MOCK_DATA = Array.from({
  length: 23,
}).map((_, i) => ({
  href: "https://ant.design",
  title: `MOCK TODO ${i + 1}`,
  avatar: "https://joeschmoe.io/api/v1/random",
  description: "JUST RANDOM MOCK DATA",
  content:
    "JUST RANDOM MOCK DATA JUST RANDOM MOCK DATA JUST RANDOM MOCK DATA JUST RANDOM MOCK DATA JUST RANDOM MOCK DATA",
}));

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function ToDoList() {
  return (
    <div className="todo-list">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={MOCK_DATA}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </div>
  );
}

export default ToDoList;
