import React from "react";
import { ImageData } from "../static/ImagesArray";
import { Typography } from "antd";
import "../styles/CategoryRecipes.css";
const { Text } = Typography;

function CategoryRecipes() {
  return (
    <div>
      <div className="LatestRecipe-continer">
        <h1>Categories</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {ImageData.map((data, index) => (
            <div>
              <img
                className="CategoryRecipe-image"
                src={data.src}
                alt="hello"
              />
              <div style={{ marginBottom: "15px" }}>
                <Text className="latestRecipe-text">{data.content}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryRecipes;
