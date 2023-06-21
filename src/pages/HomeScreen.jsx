import { useState } from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import LatestRecipes from "../components/LatestRecipes";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import HandPicked from "../components/HandPicked";
import Service from "../components/Service";
import Search from "../components/Search";
import pipe from "../static/Images/pipe.png";
const HomeScreen = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show === false ? (
        <>
          <Navbar setShow={setShow} />
          <Carousel />
        </>
      ) : (
        <Search setShow={setShow} />
      )}
      <Categories />
      <Contact />
      <HandPicked />
      <Service />
      <img
        src={pipe}
        alt="pipe"
        style={{
          width: "80%",
          margin: "auto",
          display: "flex",
          marginTop: "30px",
        }}
      />
      <LatestRecipes heading="Latest Recipes" />
      <Footer />
    </div>
  );
};

export default HomeScreen;
