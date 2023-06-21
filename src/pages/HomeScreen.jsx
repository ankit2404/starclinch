import React from "react";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import LatestRecipes from "../components/LatestRecipes";
import Categories from "../components/Categories";
import Contact from "../components/Contact";
import HandPicked from "../components/HandPicked";
const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Categories />
      <Contact />
      <HandPicked />
      <LatestRecipes />
      <Footer />
    </div>
  );
};

export default HomeScreen;
