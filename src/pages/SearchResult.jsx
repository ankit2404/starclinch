import { useState } from "react";
import Navbar from "../components/Navbar";
import LatestRecipes from "../components/LatestRecipes";
import Footer from "../components/Footer";
import Search from "../components/Search";
import { Input, Button, Divider } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const SearchResult = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show === false ? (
        <Navbar setShow={setShow} />
      ) : (
        <Search setShow={setShow} />
      )}
      <div>
        <div className="search-container" style={{ width: "65%" }}>
          <div className="search-search">
            <div className="search-first">
              <Input
                placeholder="Enter Dish Name"
                defaultValue="Cake"
                className="search-input"
                style={{ background: "none" }}
              />
            </div>
            <div>
              <Button className="search-button">
                <CloseOutlined />
              </Button>
            </div>
          </div>
          <div>
            <Divider style={{ backgroundColor: "black", marginTop: "5px" }} />
          </div>
        </div>
      </div>
      <LatestRecipes heading="Search Results" />
      <Footer />
    </div>
  );
};

export default SearchResult;
