import React from "react";
import {Box} from "@mui/material"
import styled from "@emotion/styled";



const FooterDiv = styled(Box)`
border:1px solid red;
height:300px;
max-width:100%;
display:flex;

`;
const UpperDiv = styled(Box)`
border:1px solid yellow;
height:50%;
width:100%;
display:flex;

`;

const ComponentDiv = styled(Box)`
height:100%;
width:29%;
border:1px solid green;
`;

const LastDiv = styled(Box)`
width:15%;
border:1px solid gray;
`;

const CompanyDiv = styled(Box)`
display:flex;
flex-direction:column;
border:1px solid pink;
height:58%;
`;
const Div = styled(Box)`
height:25%;
width:100%;
color:white;

`;
const ViewWebsite = styled(Box)`
`;
const NeedHelp = styled(Box)`
`;
const ConnectDiv = styled(Box)`
`;
const FBIcon = styled(Box)`
`;
const TwitIcon = styled(Box)`
`;
function Footer(){
    return(<>

    <FooterDiv>
       <UpperDiv>
          <ComponentDiv>
            <h4 style={{color:"white"}}>Company</h4>
            <CompanyDiv>
                <Div>About Us</Div>
                <Div>Careers</Div>
            </CompanyDiv>
          </ComponentDiv>
          <ComponentDiv>
            <ViewWebsite>
                <h4 style={{color:"white"}}>View Website in</h4>
                <Div>English</Div>
            </ViewWebsite>
          </ComponentDiv>
          <ComponentDiv>
            <NeedHelp>
                <h4 style={{color:"white"}}>Need Help?</h4>
                <Div>Visit Help Center</Div>
                <Div>Share Feedback</Div>
            </NeedHelp>
          </ComponentDiv>
          <LastDiv>
            <h4 style={{color:"white"}}>Connect with Us</h4>
            <ConnectDiv>
                <FBIcon></FBIcon>
                <TwitIcon></TwitIcon>
            </ConnectDiv>
          </LastDiv>
       </UpperDiv>
    </FooterDiv>
    
    </>);
}

export default Footer;