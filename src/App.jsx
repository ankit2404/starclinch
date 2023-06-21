import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import CategorieScreen from "./pages/CategorieScreen";
import SearchResult from "./pages/SearchResult";
import BlogScreen from "./pages/BlogScreen";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/category" element={<CategorieScreen />} />
        <Route path="/search" element={<SearchResult />} />
        <Route path="/blog" element={<BlogScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
