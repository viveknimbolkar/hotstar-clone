import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import HotstarLogo from "../Navbar/Hotstarlogo.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
function Sidenav() {
  const NavBar = styled(Box)`
    background:transperent;
    width: 100px;
    z-index:5;
    height: 100vh;
    position:fixed;
    color: #9b9b9b;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Img = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 80px;
  `;
  const List = styled(Box)`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    padding: 20px 0;
    &:hover .list-item .list-title {
      opacity: 1 !important;
      transition: 0.3s;
      margin-left: 10px;
      font-size: 16px;
      font-weight: 600;
    }
  `;

  const ListItem = styled(Box)`
    display: flex;
    align-items: center;
    position: relative;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      fill: white;
    }
  `;
  return (
    <>
      <NavBar>
        <Img>
          <Box
            component="img"
            sx={{
              height: "70px",
            }}
            src={HotstarLogo}
            alt=""
          />
          <Button
            variant="outlined"
            endIcon={
              <ChevronRightOutlinedIcon
                style={{ color: "#ffcc75", paddingRight: "20px" }}
              />
            }
            sx={{
              width: "90px",
              height: "20px",
              backgroundColor: "rgba(255,204,117,.1)",
              border: "0px solid #D18E00",
              borderRadius: "18px",
              marginTop: "-8px",
              fontFamily: "sans-serif",
              "&:hover": {
                border: "0px solid #ffcc75",
                backgroundColor: "rgba(255,204,117,.1)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "12px",
                textTransform: "capitalize",
                color: "#ffcc75",
                textAlign: "center",
                paddingLeft: "20px",
              }}
            >
              {" "}
              Subscribe
            </Typography>
          </Button>
        </Img>
        <List className="list">
          <Link to={"/mypage"} style={{ color: "white" }}>
            <ListItem className="list-item">
              <AccountCircleOutlinedIcon />
              <Typography
                className="list-title"
                style={{
                  position: "absolute",
                  left: "100%",

                  opacity: 0,
                }}
                variant="h6"
              >
                Myspace
              </Typography>
            </ListItem>
          </Link>
          <Link to={"/explore"} style={{ color: "white" }}>
            <ListItem className="list-item">
              <SearchOutlinedIcon />
              <Typography
                className="list-title"
                style={{
                  position: "absolute",
                  left: "100%",

                  opacity: 0,
                }}
                variant="h6"
              >
                Search
              </Typography>
            </ListItem>
          </Link>
          <Link to={"/home"} style={{ color: "white" }}>
            <ListItem className="list-item">
              <HomeOutlinedIcon />
              <Typography
                className="list-title"
                style={{
                  position: "absolute",
                  left: "100%",

                  opacity: 0,
                }}
                variant="h6"
              >
                Home
              </Typography>
            </ListItem>
          </Link>
          <Link to={"/TV"} style={{ color: "white" }}>
            <ListItem className="list-item">
              <TvOutlinedIcon />
              <Typography
                className="list-title"
                style={{
                  position: "absolute",
                  left: "100%",

                  opacity: 0,
                }}
                variant="h6"
              >
                TV
              </Typography>
            </ListItem>
          </Link>
          <Link to={"/movies"} style={{ color: "white" }}>
            <ListItem className="list-item">
              <MovieCreationOutlinedIcon />
              <Typography
                className="list-title"
                style={{
                  position: "absolute",
                  left: "100%",

                  opacity: 0,
                }}
                variant="h6"
              >
                Movies
              </Typography>
            </ListItem>
          </Link>
          <Link to={"/sports"} style={{ color: "white" }}>
            <ListItem className="list-item">
              <SportsBaseballOutlinedIcon />
              <Typography
                className="list-title"
                style={{
                  position: "absolute",
                  left: "100%",

                  opacity: 0,
                }}
                variant="h6"
              >
                Sports
              </Typography>
            </ListItem>
          </Link>
          <Link to={"/category"} style={{ color: "white" }}>
            <ListItem className="list-item">
              <CategoryOutlinedIcon />
              <Typography
                className="list-title"
                style={{
                  position: "absolute",
                  left: "100%",

                  opacity: 0,
                }}
                variant="h6"
              >
                Categories
              </Typography>
            </ListItem>
          </Link>
        </List>
      </NavBar>
    </>
  );
}

export default Sidenav;
