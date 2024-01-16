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
import Layout from "./component/layout/layout";
import Footer from "./component/footer/footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/mypage"} element={<Layout componentName={"mypage"} />} />
          <Route path={"/explore"} element={<Layout componentName={"explore"} />} />
          <Route path={"/home"} element={<Layout componentName={"home"}/>} />
          <Route path={"/movies"} element={<Layout componentName={"movies"}/>} />
          <Route path={"/sports"} element={<Layout componentName={"sports"}/>} />
          <Route path={"/category"} element={<Layout componentName={"category"}/>} />
          <Route path={"/footer"} element={<Footer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
