import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Details from "./pages/Details";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/series" element={<Series />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:itemId" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
