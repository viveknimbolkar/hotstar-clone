import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Component/Home";
import Search from "./Component/Search";
import Movies from "./Component/Movies";
import Category from "./Component/Category";
import Myspace from "./Component/Myspace";
import Sports from "./Component/Sports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/mypage"} element={<Myspace />} />
        <Route path={"/explore"} element={<Search />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/movies"} element={<Movies />} />
        <Route path={"/sports"} element={<Sports />} />
        <Route path={"/category"} element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
