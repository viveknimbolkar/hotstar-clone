import React from 'react'
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const SearchDashContainer = styled(Container)`
height:800px;
min-width:94%;
background:rgb(15, 16, 20);
  background: linear-gradient(
    180deg,
    rgba(15, 16, 20, 1) 0%,
    rgba(9, 14, 49, 1) %
  );
  display: flex;
  flex-direction: column;
`;

const InputDiv = styled(Box)`
height:65px;
width:95%;
margin:30px 38px;
border-radius:10px;
background:#252833;
display:flex;
`;
const MySearchIcon = styled(SearchIcon)`
color:#666362;
font-size:40px;
padding:15px 0px;
padding-left:17px;
`;
const InputTextField = styled(TextField)`
width:70%;
margin:2px;
background:#252833;
color:#252833;
& .MuiOutlinedInput-notchedOutline {
  border: none;
}
& .MuiOutlinedInput-root{
  font-size:22px;
}
`;
const HeadingDiv = styled(Box)`
height:35px;
width:70%;
margin-left:40px;
color:#e1e6f0;
letter-spacing:-0.2px;
font-size:20px;
font-weight:600;
font-family:"Inter",sans-serif;
margin-top:25px;
`;

const WholeImagesContainer = styled(Box)`
width:94%;
height:800px;
margin-left:40px;
margin-top:10px;
display:flex;
gap:10px;
`;
const ImagePosterDiv = styled(Box)`
height:260px;
width:185px;
border-radius:5px;
`;
function Search() {
  return (
    <>
    <SearchDashContainer>
      <InputDiv>
      <MySearchIcon>
      </MySearchIcon>
      <InputTextField placeholder='Movies,shows and more' sx={{input:{color:"#e1e6f0"}}} size='large'></InputTextField>
      </InputDiv>
      <HeadingDiv>
       Popular Searches
      </HeadingDiv>
      <WholeImagesContainer>
        <Images src={"https://m.media-amazon.com/images/M/MV5BMmY1NTM1ZjctMzc5Mi00ZTA2LThhNmItNDZjNWMzZjk0Y2UxXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg"} />
        <Images src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTaYl3UxF__fX0klurUkgqRI8GFsghjexrpIGbwEy6e9_zC6GMmbgAmLdRU02bH6JhIQE&usqp=CAU"}/>
        <Images src={"https://m.media-amazon.com/images/M/MV5BNDNkM2JkYjEtZTRmMy00MzlkLTk4YzktMzQyYzQxODllMjE0XkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_QL75_UY281_CR11,0,190,281_.jpg"}/>
        <Images src={"https://m.media-amazon.com/images/M/MV5BNDBmYjg0ZjctMjU1Yy00ZjIwLWE4NjgtYmNlZDA3MzYzZmY1XkEyXkFqcGdeQXVyNzM4MjU3NzY@._V1_.jpg"}/>
      </WholeImagesContainer>
    </SearchDashContainer>
    </>
  )
}

function Images({src}){
   return(
    <>
     <ImagePosterDiv>
          <img style={{ObjectFit:"cover",minHeight:"100%",minWidth:"100%",maxHeight:"100%",minWidth:"100%",borderRadius:"10px" }} src={src} alt='image'/>
     </ImagePosterDiv>
    </>
   );
}
export default Search;
//https://m.media-amazon.com/images/M/MV5BMmY1NTM1ZjctMzc5Mi00ZTA2LThhNmItNDZjNWMzZjk0Y2UxXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg