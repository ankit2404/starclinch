import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import CategorieScreen from "./pages/CategorieScreen";
import SearchResult from "./pages/SearchResult";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/category" element={<CategorieScreen />} />
        <Route path="/search" element={<SearchResult />} />
      </Routes>
    </Router>
  );
}

export default App;
