import React from "react";
import Container from "@mui/material/Container";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Typography from '@mui/material/Typography';


const DashContainer = styled(Container)`
  height: 800px;
  min-width: 100%;
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
  margin-left: 950px;
  height: 40px;
  width: 190px;
  padding: 20px;
  background: rgb(32, 40, 55);
  color: white;
  font-size: 14px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  text-transform: capitalize;
  border-radius: 5px;
`;

const QuestionMark = styled(HelpOutlineIcon)`
  height: 18px;
  margin-right: 5px;
  text-transform: lowercase;
`;
const CenterImage = styled(Box)`
  height: 120.75px;
  width: 320px;
`;
const Heading = styled(Typography)`
  color: #e1e6f0;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.2px;
  font-family: "Inter", sans-serif;
  margin-top: 20px;
`;
const Paragraph = styled(Typography)`
  color: #8f98b2;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  font-weight: 500;
  line-height: 10px;
  margin-bottom: 30px;
`;
const LoginButton = styled(Button)`
  align-items: center;
  background: linear-gradient(93.87deg, #095ae6, #062794);
  border-radius: 8px;
  color: #d1e8ff;
  display: flex;
  flex-direction: row;
  font-family: "Inter", sans-serif;
  font-size: 12px;
  font-weight: 600;
  justify-content: center;
  line-height: 14px;
  padding: 12px;
  width: 220px;
  text-transform: capitalize;
`;
function Myspace() {
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
            Login to Disney+ Hotstar
          </Heading>
          <Paragraph variant="p" gutterBottom>
            Start watching from where you left off, personalise for kids and
            more
          </Paragraph>
          <LoginButton variant="contained">Log In</LoginButton>
        </Login>
      </DashContainer>
    </>
  );
}

export default Myspace;
