import styled from "@emotion/styled";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import Text from "../component/Text.webp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";

function Indexpage() {
  const Indexcont = styled(Box)`
    border: 2px solid red;
    height: 100vh;
    width: 100%;
    color: white;
      `;
  const Indexcontainer = styled(Box)`
    display: flex;
    align-items: center;
    border: 2px solid red;
    width: 400px;
    padding: 20px;
    flex-direction: column;
    margin-top: 300px;
    gap: 20px;
  `;
  const Textcont = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `;
  const Imgbox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Tcont = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  `;
  const Tbtn = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  `;
  return (
    <Indexcont>
      <Indexcontainer>
        <Imgbox>
          <Box
            component="Img"
            src={Text}
            alt=""
            sx={{
              height: "88px",
            }}
          />
        </Imgbox>
        <Textcont>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: "16px",
            }}
            year={"2022"}
            variant="h6"
          >
            2024
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: "16px",
            }}
            variant="h6"
          >
            2h 22m
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: "16px",
            }}
            variant="h6"
          >
            3 languages
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "hsla(0,0%,100%,.2)",
              textTransform: "capitalize",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              position: "relative",
              overflow: "hidden",
              opacity: "1",
              width: "90px",
              transition: ".3s",

              "&:hover": {
                transform: "scale(1.02)",
                background: "hsla(0,0%,100%,.2)",
                fontSize: "16px",
                transitionProperty: "transform ,background-color",
              },
            }}
          >
            U/A 7+
          </Button>
        </Textcont>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "13px",
            fontFamily: "sans-serif",
            fontWeight: "500",
            lineHeight: "16px",
          }}
          text={
            " top cricketer and paravin tambe extraordinary journey proves his"
          }
          component="p"
          variant="h6"
        >
          top cricketer and paravin tambe extraordinary journey proves his
          hardwork
        </Typography>
        <Tcont>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "600" }}>
            Biopic |
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "600" }}>
            Sports |
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "600" }}>
            Action |
          </Typography>
          <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "600" }}>
            Biographyical
          </Typography>
        </Tcont>
        <Tbtn>
          <Button
            variant="contained"
            sx={{
              background: "hsla(0,0%,100%,.2)",
              textTransform: "capitalize",
              width: "300px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              position: "relative",
              overflow: "hidden",
              opacity: "1",
              transition: ".3s",
              padding: "12px 16px",
              "&:hover": {
                transform: "scale(1.02)",
                background: "hsla(0,0%,100%,.2)",
                transitionProperty: "transform ,background-color",
              },
            }}
            startIcon={<PlayArrowIcon style={{ fontSize: "28px" }} />}
          >
            Watch for Free
          </Button>
          <Button
            sx={{
              background: "hsla(0,0%,100%,.2)",
              textTransform: "capitalize",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              position: "relative",
              overflow: "hidden",
              opacity: "1",
              transition: ".3s",
              padding: "12px 16px",
              "&:hover": {
                transform: "scale(1.1)",
                background: "hsla(0,0%,100%,.2)",
                fontSize: "16px",
                transitionProperty: "transform ,background-color",
              },
            }}
            variant="contained"
          >
            <AddIcon />
          </Button>
        </Tbtn>
      </Indexcontainer>
    </Indexcont>
  );
}

export default Indexpage;
