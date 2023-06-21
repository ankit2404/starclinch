import { Input, Button, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "../styles/Search.css";
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
      </div>
    </div>
  );
};

export default Search;
