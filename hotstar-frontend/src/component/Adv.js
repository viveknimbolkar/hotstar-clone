import styled from "@emotion/styled";
import React from "react";
import { Box, Button, Typography } from "@mui/material";

function Adv({src,movie,date}) {
  const Advcont = styled(Box)`
    height: 15rem;
    z-index:1;
    width: 80rem;
    display: flex;
    margin-left:10rem;
    gap:6rem;
    padding: 20px;
    margin-top:2rem;
    justify-content:flex-start;
    border-radius:8px;
    align-items: center;
    background:linear-gradient(270deg,#16181f,#0f1014);
  `;
  const Videocont = styled(Box)`
    display: flex;
    z-index:1;
    overflow:hidden;
    border-radius:18px;
    height: 14.5rem;
    width: 40rem;
  `;
  const Advtext= styled(Box)`
    display:flex;
    padding:5px;
    justify-content;center;
    align-items;center;
    flex-direction:column;
  `
  const Advtextcont = styled(Box)`
  display:flex;
  gap:5px;
  `;
  const Advcontainer = styled(Box)`
  height:12rem;
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  `
  return (
    <Advcont>
      <Videocont>
        <video
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          autoPlay="true"
          loop={"true"}

          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        ></video>
      </Videocont>
      <Advcontainer>
      <Advtextcont>
      <Box
        component="img"
        src={src}
        alt=""
        style={{height:"50px", Width:"2"}}
      />
      <Advtext>
      <Typography sx={{
        color:"white",
        fontFamily:"sans-serif",
        fontSize:"14px",
        lineHeight:"20px",
        fontWeight:"500",

      }} variant="h6" >{movie}</Typography>
      <Typography sx={{
        color:"#8f98b2",
        fontSize:"12px",
        fontWeight:"400",
        lineHeight:"18px",
        fontFamily:"sans-serif",
      }} variant="h6" >Streming from {date}</Typography>
      </Advtext>
      </Advtextcont>
      <Button sx={{
        borderRadius:"8px",
        width:"120px",
        fontSize:"14px",
        backgroundColor:"#252833",
        textTransform:"capitalize",
        "&:hover":{
            background:"#252833",
            transition:"0.02",
            transform:"scale(1.1)"
        }
      }} variant="contained">Teaser</Button>
      </Advcontainer>
    </Advcont>
  );
}

export default Adv;
