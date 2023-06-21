import React from "react";
import "../styles/Contact.css";
import { Typography, Input, Button } from "antd";

const { Text } = Typography;
const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-content">
          <div>
            <Text className="contact-heading">Deliciousness on your inbox</Text>
          </div>
          <div>
            <Text className="contact-heading-secondary">
              Enjoy Weekly hand picked recipies and recommendation
            </Text>
          </div>
          <div className="contact-search">
            <div className="contact-input-div">
              <Input
                size="large"
                placeholder="Email Address"
                className="contact-input"
              />
            </div>
            <div className="contact-button-div">
              <Button className="contact-button">Join</Button>
            </div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Text>
              By Joining our news letter you agree to our terms and conditions
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
