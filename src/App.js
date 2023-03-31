import React from "react";
import Xheader from "./About/Xheader/Xheader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppThree from "./About/AppThree";
import AppTwo from "./Category/AppTwo";
import AppOne from "./Home/AppOne";

import "./index.css";

function App() {
  return (
    <>
   <Xheader/>
      <Router>
     
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
