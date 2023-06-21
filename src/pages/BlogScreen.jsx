import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Search from "../components/Search";
import BlogContent from "../components/BlogContent";
const BlogScreen = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show === false ? (
        <Navbar setShow={setShow} />
      ) : (
        <Search setShow={setShow} />
      )}
      <BlogContent />
      <Footer />
    </div>
  );
};

export default BlogScreen;
