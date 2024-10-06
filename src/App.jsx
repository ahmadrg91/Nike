import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import About from "./pages/about/About";

const App = () => (
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
);

export default App;
