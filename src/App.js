import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppThree from "./About/AppThree";
import AppTwo from "./Category/AppTwo";
import AppOne from "./Home/AppOne";
import MainNav from "./Home/MainNav";

import "./index.css";

function App() {
  return (
    <>

      <Router>

        <MainNav/>

        <Routes>
          <Route path="/home" element={<AppOne />} />
          <Route path="/category" element={<AppTwo />} />
          <Route path="/about" element={<AppThree />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
