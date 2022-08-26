import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignIn.css";
import { Button, Card, Space } from "antd";
import "../styles/Main.css";

const Main = () => {
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate("/create");
  };
  const goToList = () => {
    navigate("/todos");
  };

  return (
    <div className="main">
      <Card
        className="main-content"
        title="What do you want to do?"
        size="large"
      >
        <Space size={20}>
          <Button size="large" onClick={goToList}>
            Manage Your ToDo List
          </Button>
          <Button size="large" onClick={goToCreate}>
            Create New Task
          </Button>
        </Space>
      </Card>
    </div>
  );
};

export default Main;
