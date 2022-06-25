import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about";
import Bar from "./components/bar";
import Header from "./components/header";
import useWindowDimensions from "./utility/useWindowDimensions";
import Stickers from "./components/stickers";

function App() {
  const { width } = useWindowDimensions();
  const [bar, setBar] = useState(false);
  const barStatus = () => {
    if (width > 720) {
      return true;
    } else {
      return bar;
    }
  };
  return (
    <div className="app">
      <Router>
        <Header showBar={barStatus()} setShowBar={setBar} />
        <Bar showBar={barStatus()} setShowBar={setBar} />
        <div className="page">
          <Routes>
            <Route path="/" element={<About />}></Route>
            <Route path="/stickers" element={<Stickers />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
