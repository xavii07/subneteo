import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import NavbarC from "./components/Navbar";
import Home from "./pages/Home";
import LastSearchs from "./pages/LastSearchs";

const App = () => {
  return (
    <div className="App w-100 ">
      <BrowserRouter>
        <NavbarC />
        <div className="contenedor">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ultimos" element={<LastSearchs />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
