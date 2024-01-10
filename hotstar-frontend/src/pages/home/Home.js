import React from "react";
import Sidenav from "../../component/Navbar/Sidenav";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Indexpage from "../../component/Indexpage";

function Home() {
  return (
    <>
      <Indexpage
        year={"2024"}
        time={"2h 20min"}
        language={"3 languages"}
        describe={"top cricketer and paravin tambe extraordinary journey proves his"}
      />
    </>
  );
}

export default Home;
