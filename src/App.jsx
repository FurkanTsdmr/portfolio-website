import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Intro from "./components/intro/Intro";
import Toggle from "./components/toggle/Toggle";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Layout path="/Anasayfa" />
      <Routes className="App">
        <Route path="/" element={<Intro />} />
        <Route path="/Toggle" element={<Toggle />} />
        <Route path="/About" element={<About />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
