import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/index";
import Intro from "./components/intro/index";
import About from "./components/about/index";
import Contact from "./components/contact/index";
import ProductList from "./components/ProductList/index";

function App() {
  return (
    <>
      <Layout path="/Anasayfa" />
      <Routes className="App">
        <Route path="/" element={<Intro />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/ProductList" element={<ProductList />} />
      </Routes>
    </>
  );
}

export default App;
