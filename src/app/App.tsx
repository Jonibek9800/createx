import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./home/Home";
import AboutUs from "./aboutUs/AboutUs";
import Services from "./services/Services";
import Work from "./work/Work";
import News from "./news/News";
import Contacts from "./contacts/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
