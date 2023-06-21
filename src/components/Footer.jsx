import React from "react";
import "../styles/Footer.css";
import { Typography, Divider } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Text } = Typography;
const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <div>
              <div>
                <img
                  src="https://raw.githubusercontent.com/noven21/tastebite/master/src/assets/img/logo.png"
                  alt="TasteBite"
                />
              </div>
              <div style={{ width: "70%" }}>
                <Text style={{ color: "grey" }}>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi illo provident aut asperiores, dolor ducimus omnis
                  inventore autem cumque totam corporis praesentium ullam quia
                  rem reprehenderit, explicabo repellat! Necessitatibus
                  voluptatibus"
                </Text>
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-right-content">
              <div className="footer-first">
                <div className="footer-heading">TestBite</div>
                <div className="footer-option">About Us</div>
                <div className="footer-option">Carrers</div>
                <div className="footer-option">Contact Us</div>
                <div className="footer-option">Feedback</div>
              </div>
              <div className="footer-second">
                <div className="footer-heading">Legal</div>
                <div className="footer-option">Terms</div>
                <div className="footer-option">Conditions</div>
                <div className="footer-option">Cookies</div>
                <div className="footer-option">Copyright</div>
              </div>
              <div className="footer-third">
                <div className="footer-heading">Follow us</div>
                <div className="footer-option">Facebook</div>
                <div className="footer-option">Twitter</div>
                <div className="footer-option">Instagram</div>
                <div className="footer-option">Youtube</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-divider">
          <Divider />
        </div>
        <div className="footer-footer">
          <div>
            <Text>@ 2020 Testbite - All right reserved</Text>
          </div>
          <div style={{ width: "10%" }}>
            <div className="footer-footer">
              <div>
                <FacebookOutlined />
              </div>
              <div>
                <TwitterOutlined />
              </div>
              <div>
                <InstagramOutlined />
              </div>
              <div>
                <YoutubeOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
