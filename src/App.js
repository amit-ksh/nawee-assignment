import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";


import Home from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/help" element={<Home />} />
      <Route path="/contact-us" element={<Home />} />
    </Routes>
  );
}
export default App;
