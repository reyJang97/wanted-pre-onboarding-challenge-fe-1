import React from "react";
import { PageHeader } from "antd";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import { CalendarOutlined } from "@ant-design/icons";

function NavBar() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  return (
    <PageHeader
      className="nav-bar"
      title="ToDo Manager"
      onBack={goToMain}
      backIcon={<CalendarOutlined />}
    />
  );
}
export default NavBar;
