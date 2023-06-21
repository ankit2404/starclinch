import { Input, Button, Divider, Typography } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import Img1 from "../static/Images/image1.jpg";
import Img2 from "../static/Images/image2.jpg";
import Img3 from "../static/Images/image3.jpg";
import Img4 from "../static/Images/image4.jpg";
import "../styles/Search.css";
const { Text } = Typography;
const Search = ({ setShow }) => {
  const clickHandler = () => {
    setShow(false);
  };
  return (
    <div className="search-main">
      <div className="search-container">
        <div className="search-search">
          <div className="search-first">
            <Input placeholder="Enter Dish Name" className="search-input" />
          </div>
          <div>
            <Button className="search-button" onClick={clickHandler}>
              <CloseOutlined />
            </Button>
          </div>
        </div>
        <div>
          <Divider style={{ backgroundColor: "black", marginTop: "5px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <div>
            <img src={Img2} alt="image1" className="search-image" />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div>
              <Text style={{ fontWeight: "600" }}>Black Forest Birthday</Text>
            </div>
            <div>
              <Text>Category</Text>
            </div>
          </div>
        </div>
        <div>
          <Divider style={{ marginTop: "5px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <div>
            <img src={Img1} alt="image1" className="search-image" />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div>
              <Text style={{ fontWeight: "600" }}>
                Blueberry Delicious Cake
              </Text>
            </div>
            <div>
              <Text>Category</Text>
            </div>
          </div>
        </div>
        <div>
          <Divider style={{ marginTop: "5px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <div>
            <img src={Img3} alt="image1" className="search-image" />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div>
              <Text style={{ fontWeight: "600" }}>Cranberry Cake</Text>
            </div>
            <div>
              <Text>Spunge Cake</Text>
            </div>
          </div>
        </div>
        <div>
          <Divider style={{ marginTop: "5px" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "start" }}>
          <div>
            <img src={Img4} alt="image1" className="search-image" />
          </div>
          <div style={{ marginLeft: "30px" }}>
            <div>
              <Text style={{ fontWeight: "600" }}>
                Butterscoth thin Crust Cake
              </Text>
            </div>
            <div>
              <Text>Cupcake</Text>
            </div>
          </div>
        </div>
        <div>
          <Divider style={{ marginTop: "5px" }} />
        </div>
      </div>
    </div>
  );
};

export default Search;
