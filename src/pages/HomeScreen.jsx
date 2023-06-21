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
      <LatestRecipes heading="Latest Recipes" />
      <Footer />
    </div>
  );
};

export default HomeScreen;
