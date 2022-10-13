import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";


import Home from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="help" element={<Home />} />
        <Route path="contact-us" element={<Home />}>
          <Route index element={<Home />} />
          <Route path=":user" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
}
export default App;
