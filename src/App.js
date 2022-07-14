import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound";

export const CourseInfoContext = createContext();

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  return (
    <div className="wrapper">
      <CourseInfoContext.Provider value={items}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CourseInfoContext.Provider>
    </div>
  );
};

export default App;
