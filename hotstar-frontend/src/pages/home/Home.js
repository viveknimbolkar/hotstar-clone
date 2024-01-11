import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Adv from "../../component/Adv";

function Home() {
  // // const BodyWrapper = styled(Box)`
  // // border: 2px solid red;
  // // width:20%;
  // // height:100%;
  // `
  return (
    <>
      <Adv
        src={
          "https://brand-img1.hotstarext.com/image/upload/v1585728139/Disnet%20Plus%20Hotstar%20Logo/D_Hotstar_logo_Dark_BG_120x120.png"
        }
        movie={"Movie name"}
        date={"janewari 6"}
      />
    </>
  );
}

export default Home;
