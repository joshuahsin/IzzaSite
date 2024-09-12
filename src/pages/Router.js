import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Photos from "./Photos.js";
import Traits from "./Traits.js";
import Blindbox from "./Blindbox.js";

const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/photos' element={<Photos />} />
    <Route path='/traits' element={<Traits />} />
    <Route path='/blindbox' element={<Blindbox />} />
  </Routes>
);

export default Router;