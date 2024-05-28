import SingIn from "../src/Home/Home.jsx";
import SingUp from "../src/Home copy/Home.jsx";
import React from "react";
import { Routes, Route } from "react-router-dom";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/singup" element={<SingUp />} />
    </Routes>
  );
}

export default MainRoutes;
