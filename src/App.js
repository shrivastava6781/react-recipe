import React from "react";
import "./App.css";
import Header from "./components/Header";
import Suggestion from "./page/Suggestion";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="main-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/suggestion" element={<Suggestion/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
