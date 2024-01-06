import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Movies from "./pages/movies/Movies";
import Category from "./pages/category/Category";
import Myspace from "./pages/myspace/Myspace";
import Sports from "./pages/sports/Sports";
import Sidenav from "./component/Navbar/Sidenav";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
