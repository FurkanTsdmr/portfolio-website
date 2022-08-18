import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Intro from "./components/intro/index";
import About from "./components/about/index";
import Contact from "./components/contact/index";

function App() {
  return (
    <>
      <Layout path="/Anasayfa" />
      <Routes className="App">
        <Route path="/" element={<Intro />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
