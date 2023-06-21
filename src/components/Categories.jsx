import { useState } from "react";
import Img15 from "../static/Images/image15.jpg";
import Img16 from "../static/Images/image16.jpg";
import Img17 from "../static/Images/image17.jpg";
import Img18 from "../static/Images/image18.jpg";
import Img19 from "../static/Images/image19.jpg";
import Img20 from "../static/Images/image20.jpg";
import Img14 from "../static/Images/image14.jpg";
import Img13 from "../static/Images/image13.jpg";
import Img12 from "../static/Images/image12.jpg";
import Img11 from "../static/Images/image11.jpg";
import Img10 from "../static/Images/image10.jpg";
import Img9 from "../static/Images/image9.jpg";
import { Typography, Rate } from "antd";
import "../styles/Categories.css";
const { Text } = Typography;
const Categories = () => {
  const [value, setValue] = useState(4);

  return (
    <div>
      <div className="category-continer">
        <h2>Super Delicious</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img className="category-image" src={Img15} alt="hello" />
            <div style={{ marginBottom: "15px" }}>
              <div>
                <Rate
                  onChange={setValue}
                  value={value}
                  style={{ color: "orange" }}
                />
              </div>
              <Text className="category-text">Fruit Cake</Text>
            </div>
          </div>
          <div>
            <img className="category-image" src={Img16} alt="hello" />
            <div style={{ marginBottom: "15px" }}>
              <div>
                <Rate
                  onChange={setValue}
                  value={value}
                  style={{ color: "orange" }}
                />
              </div>
              <Text className="category-text">Mysore Masala Dosa</Text>
            </div>
          </div>
          <div>
            <img className="category-image" src={Img17} alt="hello" />
            <div style={{ marginBottom: "15px" }}>
              <div>
                <Rate
                  onChange={setValue}
                  value={value}
                  style={{ color: "orange" }}
                />
              </div>
              <Text className="category-text">Amritsari Kulcha</Text>
            </div>
          </div>
        </div>
        <h2>Sweet Tooth</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img className="category-image" src={Img18} alt="hello" />
            <div style={{ marginBottom: "15px" }}>
              <div>
                <Rate
                  onChange={setValue}
                  value={value}
                  style={{ color: "orange" }}
                />
              </div>
              <Text className="category-text">Chicken Shwarama</Text>
            </div>
          </div>
          <div>
            <img className="category-image" src={Img19} alt="hello" />
            <div style={{ marginBottom: "15px" }}>
              <div>
                <Rate
                  onChange={setValue}
                  value={value}
                  style={{ color: "orange" }}
                />
              </div>
              <Text className="category-text">Fried chicken strips</Text>
            </div>
          </div>
          <div>
            <img className="category-image" src={Img20} alt="hello" />
            <div style={{ marginBottom: "15px" }}>
              <div>
                <Rate
                  onChange={setValue}
                  value={value}
                  style={{ color: "orange" }}
                />
              </div>
              <Text className="category-text">Fried Rice</Text>
            </div>
          </div>
        </div>

        <h2>Popular Categories</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <img className="category-image-round" src={Img14} alt="hello" />
            <div className="category-image-round-text">
              <Text className="category-text">Cake</Text>
            </div>
          </div>
          <div>
            <img className="category-image-round" src={Img13} alt="hello" />
            <div className="category-image-round-text">
              <Text className="category-text">Pizza</Text>
            </div>
          </div>
          <div>
            <img className="category-image-round" src={Img12} alt="hello" />
            <div className="category-image-round-text">
              <Text className="category-text">Bread</Text>
            </div>
          </div>
          <div>
            <img className="category-image-round" src={Img11} alt="hello" />
            <div className="category-image-round-text">
              <Text className="category-text">Hotdog</Text>
            </div>
          </div>
          <div>
            <img className="category-image-round" src={Img10} alt="hello" />
            <div className="category-image-round-text">
              <Text className="category-text">role</Text>
            </div>
          </div>
          <div>
            <img className="category-image-round" src={Img9} alt="hello" />
            <div className="category-image-round-text">
              <Text className="category-text">chicken</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
