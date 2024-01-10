import React from "react";
import Sidenav from "../../component/Navbar/Sidenav";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Indexpage from "../../component/Indexpage";

function Home() {
  const BodyWrapper = styled(Box)`
    width: 100%;
    height:100%;
  `;
  return (
    <>
      <Indexpage year={"2024"} time={"2h 20min"} />    
      
    </>
  );
}

export default Home;
