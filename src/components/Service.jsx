import React from "react";
import "../styles/Service.css";
import { Typography, Card } from "antd";
import delivery from "../static/Images/delivery.jpg";
import Food from "../static/Images/Food.jpg";
import Mask from "../static/Images/Mask-group.jpg";
const { Text } = Typography;
const Service = () => {
  return (
    <div>
      <div className="service-container">
        <div className="service-heading">
          <Text style={{ color: "orange" }}>Services</Text>
        </div>
        <div className="service-heading">
          <Text style={{ fontSize: "25px", fontWeight: "600" }}>
            Why Choose our Favourite Food
          </Text>
        </div>
        <div className="service-content">
          <Card className="service-card">
            <div className="service-img-div">
              <img className="service-img" src={Food} alt="food" />
            </div>
            <div className="service-heading">
              <Text className="service-card-text"> QualityFull Food</Text>
            </div>
            <div className="service-card-para">
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                et quo odio, veniam fugit ea architecto, delectus omnis porro
              </Text>
            </div>
          </Card>
          <Card className="service-card">
            <div className="service-img-div">
              <img className="service-img" src={Mask} alt="food" />
            </div>
            <div className="service-heading">
              <Text className="service-card-text"> Healthy Food</Text>
            </div>
            <div className="service-card-para">
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                et quo odio, veniam fugit ea architecto, delectus omnis porro
              </Text>
            </div>
          </Card>
          <Card className="service-card">
            <div className="service-img-div">
              <img className="service-img" src={delivery} alt="food" />
            </div>
            <div className="service-heading">
              <Text className="service-card-text"> Fast Delivery</Text>
            </div>
            <div className="service-card-para">
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
                et quo odio, veniam fugit ea architecto, delectus omnis porro
              </Text>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Service;
