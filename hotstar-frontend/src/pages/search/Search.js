import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { Box, TextField, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const SearchDashContainer = styled(Container)`
  height: 800px;
  min-width: 94%;
  background: rgb(15, 16, 20);
  background: linear-gradient(
    180deg,
    rgba(15, 16, 20, 1) 0%,
    rgba(9, 14, 49, 1) %
  );
  display: flex;
  flex-direction: column;
`;

const InputDiv = styled(Box)`
  height: 65px;
  width: 95%;
  margin: 30px 38px;
  border-radius: 10px;
  background: #252833;
  display: flex;
`;
const MySearchIcon = styled(SearchIcon)`
  color: #666362;
  font-size: 40px;
  padding: 15px 0px;
  padding-left: 17px;
`;
const InputTextField = styled(TextField)`
  width: 70%;
  margin: 2px;
  background: #252833;
  color: #252833;
  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
  & .MuiOutlinedInput-root {
    font-size: 22px;
  }
`;
const HeadingDiv = styled(Box)`
  height: 35px;
  width: 70%;
  margin-left: 40px;
  color: #e1e6f0;
  letter-spacing: -0.2px;
  font-size: 20px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  margin-top: 25px;
`;

const WholeImagesContainer = styled(Box)`
  width: 94%;
  height: 800px;
  margin-left: 40px;
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;
const ImagePosterDiv = styled(Box)`
  height: 260px;
  width: 185px;
  border-radius: 5px;
  position: relative;
  object-fit: contain;
  &:hover .show-poster {
    display: block;
    cursor: pointer;
  }
`;
const HoverPoster = styled(Box)`
  position: absolute;
  height: 260px;
  width: 220px;
  border-radius: 10px;
  inset: 0;
  scale: 1.5;
  background: #252833;
  display: none;
  z-index: 100;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const movies = [
  {
    id: 1,
    src: "https://m.media-amazon.com/images/M/MV5BMmY1NTM1ZjctMzc5Mi00ZTA2LThhNmItNDZjNWMzZjk0Y2UxXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg",
    name: "Anupama",
    description: "Anupama serial..",
    language: "Hindi",
    year: "2024",
    url: "",
    channelName: "StarPlus",
    restriction: "U/A 13+",
  },
  {
    id: 2,
    src: "https://www.themoviedb.org/t/p/original/dvfd4FXQzrFoR4XQqjD7urojn7Y.jpg",
    name: "Dance+",
    description:
      "Dance+ reality ....",
    language: "Hindi",
    year: "2024",
    url: "",
    channelName: "StarPlus",
    restriction: "U/A 13+",
  },
  {
    id: 3,
    src: "https://m.media-amazon.com/images/M/MV5BNDNkM2JkYjEtZTRmMy00MzlkLTk4YzktMzQyYzQxODllMjE0XkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_FMjpg_UX1000_.jpg",
    name: "Gum hai",
    description: "Gum hai kisi ke pyar mai..",
    language: "Hindi",
    year: "2024",
    url: "",
    channelName: "StarPlus",
    restriction: "U/A 13+",
  },
];

function Search() {
  return (
    <>
      <SearchDashContainer>
        <InputDiv>
          <MySearchIcon></MySearchIcon>
          <InputTextField
            placeholder="Movies,shows and more"
            sx={{ input: { color: "#e1e6f0" } }}
            size="large"
          ></InputTextField>
        </InputDiv>
        <HeadingDiv>Popular Searches</HeadingDiv>
        <WholeImagesContainer>
          {movies.map((item, i) => {
            console.log("tejas");
            return (
              <Images
                key={`item-${item.id}`}
                src={item.src}
                year={item.year}
                language={item.language}
                channelName={item.channelName}
                restriction={item.restriction}
                description={item.description}
              />
            );
          })}
        </WholeImagesContainer>
      </SearchDashContainer>
    </>
  );
}

function Images({
  src,
  year,
  language,
  channelName,
  restriction,
  description,
}) {
  return (
    <>
      <ImagePosterDiv>
        <img
          className={"post-image"}
          style={{
            ObjectFit: "contain",
            minHeight: "100%",
            minWidth: "100%",
            height:"100%",
            borderRadius: "10px",
          }}
          src={src}
          alt="image"
        />
        <HoverPoster className={"show-poster"}>
          <HoverPosterInside
            src={src}
            year={year}
            language={language}
            channelName={channelName}
            restriction={restriction}
            description={description}
          />
        </HoverPoster>
      </ImagePosterDiv>
    </>
  );
}

const InsideImage = styled(Box)`
  max:height:100%;
  max-width:100%;
  height:100%;
  width:100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit:contain;
  display: flex;
  flex-direction: column;
`;

const ImageButtonDiv = styled(Box)`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const WatchNowButton = styled(Button)`
  height: 30px;
  width: 75%;
  display: flex;
  margin-left: 5px;
  margin-top:2px;
  background: #f9f6ee;
  font-size: 9px;
  font-weight: 600;
  color: black;
  padding-right: 10px;
`;
const AddButton = styled(Button)`
  height: 30px;
  min-width: 35px;
  margin-left: 6px;
  margin-top:2px;
  background: #747882;
  color: #f9f6ee;
`;

const PlayMyArrowIcon = styled(PlayArrowIcon)`
  font-size: 12px;
`;

const SubTitle = styled(Box)`
  margin-top: 10px;
  font-size: 11px;
  font-weight: 600;
  display: flex;
  color: #f9f6ee;
  font-family: "Inter", sans-serif;
`;
const Year = styled(Typography)`
  font-size: 11px;
  margin-left: 6px;
  font-weight: 600;
`;

const UlDiv = styled(Box)`
  display: flex;
  margin: -10px;
  margin-left: -22px;
`;

const DescriptionDiv = styled(Box)`
  font-size: 11px;
  color: #747882;
  font-family: "Inter", sans-serif;
  margin-top: 2px;
  margin-left: 6px;
  text-transform: capitalize;
`;

function HoverPosterInside({
  src,
  id,
  year,
  language,
  channelName,
  restriction,
  description,
}) {
  return (
    <>
      <InsideImage>
        <img
          src={src}
          style={{
            height: "130px",
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            objectFit: "contain",
          }}
          id={id}
        />
        <ImageButtonDiv>
          <WatchNowButton>
            <PlayMyArrowIcon></PlayMyArrowIcon>
            <span style={{ marginTop: "3px", marginLeft: "5px" }}>
              Watch Now
            </span>
          </WatchNowButton>
          <AddButton>+</AddButton>
        </ImageButtonDiv>
        <SubTitle>
          <Year>{year}</Year>
          <UlDiv>
            <ul style={{ display: "flex", gap: "20px" }}>
              <li>{language}</li>
              <li>{channelName}</li>
              <li>{restriction}</li>
            </ul>
          </UlDiv>
        </SubTitle>
        <DescriptionDiv>{description}</DescriptionDiv>
      </InsideImage>
    </>
  );
}
export default Search;
