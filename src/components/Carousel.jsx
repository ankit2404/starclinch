import React from "react";
import "../styles/Carousel.css";
import { Carousel, Typography } from "antd";
const { Text } = Typography;
const CarouselComp = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        <Carousel autoplay>
          <div className="carousel-item">
            <div>
              <img
                src="https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="first"
                style={{ height: "400px", width: "auto" }}
              />
            </div>
            <div className="carousel-second">
              <h4>85% would maje this gain</h4>
              <Text
                style={{
                  fontSize: "40px",
                  fontFamily: "cursive",
                  fontWeight: "500",
                }}
              >
                Mighty Super ChoclateCake
              </Text>
              <p style={{ width: "80%" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur labore cumque perferendis ratione rerum, cum vel
                repudiandae, totam reprehenderit
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img
                src="https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="first"
                style={{ height: "400px", width: "auto" }}
              />
            </div>
            <div className="carousel-second">
              <h4>75% would maje this loss</h4>
              <Text
                style={{
                  fontSize: "40px",
                  fontFamily: "cursive",
                  fontWeight: "500",
                }}
              >
                Delicious Super FruitCake
              </Text>
              <p style={{ width: "80%" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur labore cumque perferendis ratione rerum, cum vel
                repudiandae, totam reprehenderit
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="first"
                style={{ height: "400px", width: "auto" }}
              />
            </div>
            <div className="carousel-second">
              <h4>850% would maje this gain</h4>
              <Text
                style={{
                  fontSize: "40px",
                  fontFamily: "cursive",
                  fontWeight: "500",
                }}
              >
                Pizza with Delicious Topping
              </Text>
              <p style={{ width: "80%" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur labore cumque perferendis ratione rerum, cum vel
                repudiandae, totam reprehenderit
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div>
              <img
                src="https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="first"
                style={{ height: "400px", width: "auto" }}
              />
            </div>
            <div className="carousel-second">
              <h4>15% would maje this gain</h4>
              <Text
                style={{
                  fontSize: "40px",
                  fontFamily: "cursive",
                  fontWeight: "500",
                }}
              >
                Pan Pizza with Cheese
              </Text>
              <p style={{ width: "80%" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur labore cumque perferendis ratione rerum, cum vel
                repudiandae, totam reprehenderit
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComp;
