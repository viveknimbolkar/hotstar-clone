
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./component/layout/layout";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
