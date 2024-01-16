import React from "react";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterDiv = styled(Box)`
  height: 300px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  background:#0f1014;
`;
const UpperDiv = styled(Box)`
  height: 50%;
  width: 100%;
  display: flex;
`;

const ComponentDiv = styled(Box)`
  height: 100%;
  width: 26%;
  display:flex;
  flex-direction:column;
  gap:10px;
`;

const LastDiv = styled(Box)`
  width: 22%;
  display:flex;
  flex-direction:column;
  gap:10px;
`;

const CompanyDiv = styled(Box)`
  display: flex;
  flex-direction: column;
  gap:10px;
  height: 58%;
  font-family:Inter,sans-serif;
  font-size:14px;
  font-weight:500;
  line-height:20px;
`;
const Div = styled(Box)`
  height: 25%;
  width: 100%;
  color: #8f98b2;
`;
const ViewWebsite = styled(Box)`
display: flex;
flex-direction: column;
height: 58%;
font-family:Inter,sans-serif;
font-size:14px;
font-weight:500;
line-height:20px;`;
const NeedHelp = styled(Box)`
display: flex;
flex-direction: column;
gap:10px;
height: 58%;
font-family:Inter,sans-serif;
font-size:14px;
font-weight:500;
line-height:20px;`
;
const ConnectDiv = styled(Box)`
  display: flex;
  gap: 20px;
 
`;
const FBIcon = styled(FacebookRoundedIcon)`
  color: white;
  cursor:pointer;
`;
const TwitIcon = styled(TwitterIcon)`
  color: white;
  cursor:pointer;
`;
const LowerDiv = styled(Box)`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const TermsPolicy = styled(Box)`
  height: 100%;
  width: 70%;
  color: white;
`;
const GooglePlayButton = styled(Box)`
  height: 100%;
  width: 30%;
  display: flex;
  gap: 20px;
`;
const GoogleButton = styled(Box)`
height:50%:
`;
const DownLoadStore = styled(Box)`
  height: 50%;
`;


const UlDiv = styled(Box)`
display:flex;
`;

function Footer() {
  return (
    <>
      <FooterDiv>
        <UpperDiv>
          <ComponentDiv>
            <h4 style={{ color: "#e1e6f0",fontFamily:"Inter,sans-serif",fontSize:"16px",fontWeight:"600",lineHeight:"24px"}}>Company</h4>
            <CompanyDiv>
              <Div>About Us</Div>
              <Div>Careers</Div>
            </CompanyDiv>
          </ComponentDiv>
          <ComponentDiv>
          <h4 style={{  color: "#e1e6f0",fontFamily:"Inter,sans-serif",fontSize:"16px",fontWeight:"00",lineHeight:"24px"}}>View Website in</h4>
            <ViewWebsite>
             
              <Div>English</Div>
            </ViewWebsite>
          </ComponentDiv>
          <ComponentDiv>
          <h4 style={{  color: "#e1e6f0",fontFamily:"Inter,sans-serif",fontSize:"16px",fontWeight:"600",lineHeight:"24px"}}>Need Help?</h4>
            <NeedHelp>
             
              <Div>Visit Help Center</Div>
              <Div>Share Feedback</Div>
            </NeedHelp>
          </ComponentDiv>
          <LastDiv>
            <h4 style={{  color: "#e1e6f0",fontFamily:"Inter,sans-serif",fontSize:"16px",fontWeight:"600",lineHeight:"24px"}}>Connect with Us</h4>
            <ConnectDiv>
              <FBIcon></FBIcon>
              <TwitIcon></TwitIcon>
            </ConnectDiv>
          </LastDiv>
        </UpperDiv>
        <LowerDiv>
          <TermsPolicy>
            <p style={{fontSize:"16px",fontWeight:"500",lineHeight:"14px",fontFamily:"Inter,sans-serif",color:"#8f98b2"}}>© 2024 STAR.All Rights Reserved.</p>
            <UlDiv>
            <ul style={{display:"flex",gap:"20px",padding:"0",marginTop:"0",color:"#8f98b2",fontSize:"16px",fontFamily:"Inter sans-serif",fontWeight:"500px",lineHeight:"20px",cursor:"pointer",textDecoration:"none"}}>
              <a style={{fontFamily:"Inter sans-serif"}}>Terms Of Use</a>
              <a>Privicy Policy</a>
              <a>FAQ</a>
            </ul>
            </UlDiv>
          </TermsPolicy>

          <GooglePlayButton>
            <GoogleButton>
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346101/google-playstore"
                style={{
                  height: "50px",
                  width: "150px",
                }}
              />
            </GoogleButton>
            <DownLoadStore>
              <img
                src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_256/v1661346071/ios-appstore"
                style={{
                  height: "50px",
                  width: "150px",
                }}
              />
            </DownLoadStore>
          </GooglePlayButton>
        </LowerDiv>
      </FooterDiv>
    </>
  );
}

export default Footer;
