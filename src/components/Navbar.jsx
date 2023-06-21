import React from "react";
import "../styles/Navbar.css";
import { Select, Avatar, Typography, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Text } = Typography;

const Navbar = ({ setShow }) => {
  const option = [
    {
      value: "Home Page",
      label: "Home Page",
    },
    {
      value: "Recipe Page",
      label: "Recipe Page",
    },
    {
      value: "Pages",
      label: "Pages",
    },
  ];
  const clickHandler = () => {
    setShow(true);
  };
  return (
    <div className="nav-container">
      <div className="cont">
        <div className="nav-first-part">
          <img
            src="https://raw.githubusercontent.com/noven21/tastebite/master/src/assets/img/logo.png"
            alt="TasteBite"
          />
        </div>
        <div className="nav-middle-part">
          <div>
            <Select
              defaultValue="Home Page"
              bordered={false}
              options={option}
            />
          </div>
          <div>
            <Select
              defaultValue="Recipe Page"
              bordered={false}
              options={option}
            />
          </div>
          <div>
            <Select defaultValue="Pages" bordered={false} options={option} />
          </div>
          <div style={{ marginTop: "3.2px" }}>
            <Text style={{ fontSize: "16px" }}>Buy</Text>
          </div>
        </div>
        <div>
          <div className="nav-third-part">
            <Button onClick={clickHandler} style={{ border: "none" }}>
              <SearchOutlined height="20px" width="20px" />
            </Button>
            <Avatar
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1"
              style={{
                marginLeft: "30px",
              }}
              size="medium"
            >
              user
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
