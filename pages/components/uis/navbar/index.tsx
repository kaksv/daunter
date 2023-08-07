// import Box from "@mui/material/Box";
// import { ColorModeContext } from "../../../utils/theme";
// import { AppBar, Container, IconButton, Stack, Toolbar, Typography, useTheme } from "@mui/material";
// import { useContext } from "react";

// import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
// import Login from "@mui/icons-material/Login";



// function Navbar() {
//     const theme = useTheme();
//     const colorMode = useContext(ColorModeContext);
//   return (
//     <Box>
//         <AppBar position="fixed" color="inherit">
//             <Container maxWidth="lg">
//                 <Toolbar>
//                     <Typography variant="h4" component="div" sx={{ flexGlow: 1 }}>
//                         YOGROSTORE
//                     </Typography>
//                     <Stack direction="row" alignItems="center" spacing={1} >
//                         <IconButton onClick={ colorMode.toggleColorMode} color="inherit">
//                             {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
//                         </IconButton>

//                         <IconButton  color="inherit">
//                                     <Login />
//                                 </IconButton>

//                     </Stack>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     </Box>
//   );
// }

// export default Navbar();


import * as React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const StyledAppBar = styled(AppBar)({
    marginBottom: '10px',
  backgroundColor: '#fff',
  color: '#000',
  
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
});

export default function NavigationBar() {
  const trigger = useScrollTrigger();

  return (
    
    <StyledAppBar  position={ 'fixed'} >
      <StyledToolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <StyledTypography variant="h6" >
          
        </StyledTypography>
        {/* <Typography variant="h6" component="div">
          About
        </Typography> */}
        <Typography variant="h6" component="div">
          <ConnectButton />
        </Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
}
