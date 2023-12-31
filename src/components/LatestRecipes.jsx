import React from "react";
import { ImageData } from "../static/ImagesArray";
import { Button, Typography } from "antd";
import "../styles/LatestRecipe.css";
const { Text } = Typography;
const LatestRecipes = ({ heading }) => {
  return (
    <div>
      <div className="LatestRecipe-continer">
        <h2>{heading}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {ImageData.map((data, index) => (
            <div>
              <img className="latestRecipe-image" src={data.src} alt="hello" />
              <div style={{ marginBottom: "15px" }}>
                <Text className="latestRecipe-text">{data.content}</Text>
              </div>
            </div>
          ))}
        </div>
        <div className="latestResume-button-div">
          <Button size="large" className="latestResume-button">
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestRecipes;
