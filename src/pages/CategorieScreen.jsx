import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryRecipes from "../components/CategoryRecipes";
import Search from "../components/Search";
const CategorieScreen = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show === false ? (
        <Navbar setShow={setShow} />
      ) : (
        <Search setShow={setShow} />
      )}
      <CategoryRecipes />
      <Footer />
    </div>
  );
};

export default CategorieScreen;
