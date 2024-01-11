import React, { useState } from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { Box, Icon, TextField } from "@mui/material";
import { Button } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Link from "@mui/material/Link";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CallIcon from '@mui/icons-material/Call';
import CloseIcon from '@mui/icons-material/Close';


const DashContainer = styled(Container)`
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
const Login = styled(Box)`
  height: 500px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Help = styled(Box)`
  padding-top: 45px;
  text-align: center;
  background: url(https://www.hotstar.com/assets-x/web/assets-ui-lib/images/stars.9c90b28001575d3d107b.svg);
`;
const HelpButton = styled(Button)`
  margin-left: 1100px;
  margin-top: 15px;
  height: 50px;
  width: 240px;
  padding: 20px;
  background: rgb(32, 40, 55);
  color: white;
  font-size: 18px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 5px;
`;

const QuestionMark = styled(HelpOutlineIcon)`
  height: 22px;
  margin-right: 5px;
  text-transform: lowercase;
`;
const CenterImage = styled(Box)`
  height: 125px;
  width: 350px;
`;
const Heading = styled(Typography)`
  color: #e1e6f0;
  font-weight: 600;
  font-size: 27px;
  line-height: 32px;
  letter-spacing: -0.2px;
  font-family: "Inter", sans-serif;
  margin-top: 25px;
`;
const Paragraph = styled(Typography)`
  color: #8f98b2;
  font-family: "Inter", sans-serif;
  font-size: 17px;
  font-weight: 500;
  line-height: 10px;
  margin-bottom: 35px;
  margin-top: 10px;
`;
const LoginButton = styled(Button)`
  align-items: center;
  background: linear-gradient(93.87deg, #095ae6, #062794);
  border-radius: 8px;
  color: #d1e8ff;
  display: flex;
  flex-direction: row;
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  line-height: 24px;
  padding: 12px;
  width: 230px;
  text-transform: capitalize;
`;

const MainBox = styled(Box)`
  position: absolute;
  top: 17%;
  left: 22%;
  height: 480px;
  width: 850px;
  background: rgb(22 24 31);
  border: none;
  border-radius: 15px;
  display: flex;
`;

const ImageBox = styled(Box)`
  height: 100%;
  width: 45%;
  border-radius: 15px;
`;

const NumberBox = styled(Box)`
  height: 100%;
  width: 55%;
  border-radius: 15px;
`;

const EnterNumber = styled(Box)`
  height: 70%;
  width: 100%;
`;
const NumberHeading = styled(Typography)`
  font-family: "Inter", sans-serif;
  color: white;
  font-weight: 600;
  font-size: 21px;
  letter-spacing: -0.2px;
  line-height: 28px;
`;

const OtpWholeBox = styled(Box)`
  height: 90%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OtpBox = styled(Box)`
  height: 24%;
  width: 100%;
  display: flex;
  gap: 15px;
`;
const CountryDiv = styled(Box)`
  height: 75%;
  width: 20%;
  margin-top: 10px;
  border-radius: 8px;
  border: 1px solid gray;
  color: #666362;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

///have to change
const NumberDiv = styled(TextField)`
  height: 76%;
  width: 65%;
  margin-top: 9px;
  border-radius: 8px;
  & .MuiOutlinedInput-notchedOutline {
    border: 1px solid #666362;
  }
`;
const GetOtpButton = styled(Button)`
  background: linear-gradient(93.87deg, #095ae6, #062794);
  border-radius: 8px;
  color: #d1e8ff;
  font-size: 17px;
  font-weight: 600;
  font-family: "Inter", sans-serif;
  line-height: 24px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  text-transform: capitalize;
  width: 90%;
  margin-top: 100px;
`;
const GetHelpText = styled(Typography)`
  color: #8f98b2;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  margin: 15px 90px;
`;

function Myspace() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [activeScreen, setActiveScreen] = useState("ScreenOne");
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DashContainer>
        <Help>
          <HelpButton variant="contained">
            <QuestionMark></QuestionMark>
            Help & Support
          </HelpButton>
        </Help>
        <Login>
          <CenterImage>
            <img
              style={{ width: "100%", height: "100%" }}
              src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/feature/myspace/my_space_login_in.png"
            ></img>
          </CenterImage>
          <Heading variant="h5" gutterBottom>
            Login to Disney + Hotstar
          </Heading>
          <Paragraph variant="p" gutterBottom>
            Start watching from where you left off, personalise for kids and
            more
          </Paragraph>
          <LoginButton
            variant="contained"
            onClick={() => {
              setOpen(true);
            }}
          >
            Log In
          </LoginButton>
        </Login>
      </DashContainer>
      <Modal open={open} onClose={handleClose}>
        <MainBox>
          
          <ImageBox>
            <img
              src="https://faze.b-cdn.net/cms/wp-content/uploads/2016/05/pirates-on-stranger-tides-8.jpg"
              style={{ height: "100%", width: "90%" }}
            ></img>
          </ImageBox>
          {activeScreen === "ScreenOne" ? <ScreenOne setActiveScreen={setActiveScreen} handleClose={handleClose} input={input} setInput={setInput}/> : <ScreenTwo setActiveScreen={setActiveScreen} handleClose={handleClose} input={input} />}
        </MainBox>
      </Modal>
    </>
  );
}

const MyCloseIcon =styled(CloseIcon)`
font-size:40px;
margin-left:400px;
margin-top:15px;
color:#666362;
font-weight:0;
cursor:pointer;
`;

function ScreenOne({setActiveScreen,handleClose,setInput,input}) {
  
  return (
    <>
      <NumberBox>
        <MyCloseIcon onClick={() =>{handleClose(false)}}></MyCloseIcon>
        <EnterNumber>
          <NumberHeading>Log in or sign up to continue</NumberHeading>
          <OtpWholeBox>
            <OtpBox>
              <CountryDiv>+91</CountryDiv>
              <NumberDiv
                sx={{ input: { color: "#fff" } }}
                label="Enter mobile number"
                className="NumberDiv"
                InputLabelProps={{ className: "NumberDiv__label" }}
                value={input}
                onChange={(event) => {
                  if(event.target.value.split("").length >= 11 )
                  return;
                  setInput(event.target.value);
                }}
              />
            </OtpBox>
           
            {input === "" ? (
              ""
            ) : (
              <span
                style={{
                  color: "rgb(249, 246, 238)",
                  fontSize: "10px",
                  fontWeight: "400",
                }}
              >
                By proceeding you confirm that you are above 18 years of age and
                agree to the Privacy <br />
                Policy & Terms of Use.
              </span>
            )}
            {input.length === 10 ? (
              <GetOtpButton varient="contained" onClick={() =>{setActiveScreen("ScreenTwo")}}>Get OTP </GetOtpButton>
            ) : (
              ""
            )} 
          </OtpWholeBox>
        </EnterNumber>
        <GetHelpText>
          Having trouble logging in?{" "}
          <Link style={{ textDecoration: "none", cursor: "pointer" }}>
            Get Help
          </Link>
        </GetHelpText>
      </NumberBox>
    </>
  );
}
const OtpContainer = styled(Box)`
  height:100%;
  width:55%;
`;

const UpperContainer = styled(Box)`
  height:60%;
`;

const HeadingContainer = styled(Box)`
 height:16%;
 width:75%;
 display:flex;
 flex-direction:column;
 gap:10px;
`;

 const BackButton = styled(Button)`
  font-size:14px;
  text-transform:capitalize;
  height:10px;
  width:2px;
  margin:0px;
  color:#8f98b2;

`;
const BackArrowBackIcon = styled(ArrowBackIcon)`
  font-size:18px;
`;

const OtpDiv = styled(Box)`
  height:70px;
  width:75%;
  display:flex;
  gap:12px;

`;
const Div = styled(TextField)`
   height:55px;
   width:55px;
   color:white;
   border:1px solid #8f98b2;
   border-radius:5px;
   color:white;
   margin-top:10px;
   & .MuiOutlinedInput-notchedOutline {
    border: 1px solid #8f98b2 ;
  }

`;
const TextResend = styled(Box)`
 width:75%;
 margin-top:25px;
 display:flex;
 flex-direction:column;
`;

const ResendOtp = styled(Box)`

`
const ButtonDiv = styled(Box)`
display:flex;
gap:20px;
`;
const SmsButton=styled(Button)`
font-size:15px;
line-height:12px;
font-weight:600;
margin-top:8px;
`;

const SmsIcon = styled(PhoneIphoneIcon)`
height:20px;
`;
const CallButton = styled(Button)`
font-size:15px;
font-weight:600;
line-height:12px;
text-transform:capitalize;
margin-top:8px;
`;
const MyCallIcon =styled(CallIcon)`
height:20px;
`;
const GetHelp = styled(Box)`
text-align:center;
margin-top:40px;
font-size:19px;
font-family:'Inter',sans-serif;
`;

function ScreenTwo({value,setActiveScreen,handleClose,input}) { 
  console.log(input);
  return (
    <>
      <OtpContainer>
        <MyCloseIcon onClick={() =>{handleClose(false)}}></MyCloseIcon>
        <UpperContainer>
        <HeadingContainer>
          <BackButton onClick={() =>{setActiveScreen("ScreenOne")}}> 
            <BackArrowBackIcon></BackArrowBackIcon> Back</BackButton>
            <span style={{fontSize:"19px",fontWeight:"bold",fontFamily:"Inter,sans-serif",color:"#e1e6f0"}}>Enter OTP sent to +91{input}</span>
            </HeadingContainer>
          <OtpDiv>
             <Div sx={{ input: { color: "#fff" } }}></Div>
             <Div sx={{ input: { color: "#fff" } }}></Div>
             <Div sx={{ input: { color: "#fff" } }}></Div>
             <Div sx={{ input: { color: "#fff" } }}></Div>
          </OtpDiv>
          <TextResend>
           <ResendOtp>
            <span style={{color:'#8f98b2',fontSize:'16px',fontWeight:'500'}}>Resend OTP on : </span>
           </ResendOtp>
           <ButtonDiv>
             <SmsButton>
              <SmsIcon></SmsIcon>
              SMS</SmsButton> <CallButton>
                <MyCallIcon></MyCallIcon>Call</CallButton>
           </ButtonDiv>
          </TextResend>
          </UpperContainer>
          <GetHelp>
          <span style={{color:'#8f98b2',fontSize:'17px'}}>Having trouble logging in?
             <Link style={{fontWeight:'500', textDecoration:'none',cursor:'pointer'}}> Get Help
             </Link></span>
             </GetHelp>
      </OtpContainer>
    </>
  );
}

export default Myspace;
