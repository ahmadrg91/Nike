import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Products from "./pages/products/Products";

const App = () => (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
);

export default App;
