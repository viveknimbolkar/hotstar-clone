import styled from "@emotion/styled";
import React from "react";
import Sidenav from "../Navbar/Sidenav";
import Myspace from "../../pages/myspace/Myspace";
import Search from "../../pages/search/Search";
import Category from "../../pages/category/Category";
import Sports from "../../pages/sports/Sports";
import Movies from "../../pages/movies/Movies";
import Home from "../../pages/home/Home";
import { Box } from "@mui/material";


function Layout({ componentName }) {
  const RootLayout = styled(Box)`
    width: 100%;
    display:flex;
    // background:url("https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
  `;
  return (
    <RootLayout >
      <Sidenav />
      {componentName === "mypage" ? (
        <Myspace />
      ) : componentName === "explore" ? (
        <Search />
      ) : componentName === "home" ? (
        <Home />
      ) : componentName === "movies" ? (
        <Movies />
      ) : componentName === "sports" ? (
        <Sports />
      ) : componentName === "category" ? (
        <Category />
      ) : (
        ""
      )}
    </RootLayout>
    
  );
}

export default Layout;
