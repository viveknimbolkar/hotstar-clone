import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import styled from "@emotion/styled";
import HomeIcon from "@mui/icons-material/Home";

const Navimg = styled(Box)``;
function Sidenav() {
  const NavBar = styled(Box)`
  background: black;
    width: 100px;
    height: 100vh;
    color: #9b9b9b;
    display: flex;
    flex-direction: columns;
    align-items: center;
    justify-content: center;
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
      font-size:16px;
      font-weight:600;
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
      color:white;
    }
  `;

  return (
    <>
      <NavBar>
        <List className="list">
          <ListItem className="list-item">
            <HomeIcon />
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
          <ListItem className="list-item">
            <HomeIcon />
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
          </ListItem>{" "}
          <ListItem className="list-item">
            <HomeIcon />
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
          </ListItem>{" "}
          <ListItem className="list-item">
            <HomeIcon />
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
          </ListItem>{" "}
          <ListItem className="list-item">
            <HomeIcon />
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
        </List>
      </NavBar>
    </>
  );
}

export default Sidenav;
