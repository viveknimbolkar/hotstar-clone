import React from 'react'
import Sidenav from '../../component/Navbar/Sidenav'
import styled from '@emotion/styled'
import { Box } from '@mui/material'

function Home() {
  const BodyWrapper = styled(Box)`
  border: 2px solid red;
  width:20%;
  height:100%;
  `
  return (
    <h1>Home Test</h1>
  )
}

export default Home
