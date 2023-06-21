import React from "react";
import { Card, Button, Typography } from "antd";
import "../styles/HandPicked.css";
import Img15 from "../static/Images/image7.jpg";
import Img14 from "../static/Images/image6.jpg";
import Img17 from "../static/Images/image17.jpg";
import Img18 from "../static/Images/image18.jpg";
const { Text } = Typography;
const HandPicked = () => {
  return (
    <div>
      <div className="handpicked-container">
        <h2 style={{ fontSize: "30px" }}>Hand Picked Collection</h2>
        <div className="handpicked-content">
          <Card
            hoverable
            className="handpicked-card-div"
            cover={<img alt="example" src={Img15} />}
          >
            <div className="handpicked-card">
              <div>
                <Text className="handpicked-text">
                  Sushi Combo for next party
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "end" }}>
                <Button style={{ borderRadius: "0px" }}>156 Recipes</Button>
              </div>
            </div>
          </Card>
          <Card
            hoverable
            className="handpicked-card-div"
            cover={<img alt="example" src={Img14} />}
          >
            <div className="handpicked-card">
              <div>
                <Text className="handpicked-text">
                  Sushi Combo for next party
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "end" }}>
                <Button style={{ borderRadius: "0px" }}>156 Recipes</Button>
              </div>
            </div>
          </Card>
          <Card
            hoverable
            className="handpicked-card-div"
            cover={<img alt="example" src={Img17} />}
          >
            <div className="handpicked-card">
              <div>
                <Text className="handpicked-text">
                  Sushi Combo for next party
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "end" }}>
                <Button style={{ borderRadius: "0px" }}>156 Recipes</Button>
              </div>
            </div>
          </Card>
          <Card
            hoverable
            className="handpicked-card-div"
            cover={<img alt="example" src={Img18} />}
          >
            <div className="handpicked-card">
              <div>
                <Text className="handpicked-text">
                  Sushi Combo for next party
                </Text>
              </div>
              <div style={{ display: "flex", alignItems: "end" }}>
                <Button style={{ borderRadius: "0px" }}>156 Recipes</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HandPicked;
