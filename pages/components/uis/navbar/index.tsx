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
import btnstyles from '/styles/Home.module.css';
import { useState } from 'react';
import postpopup from '/styles/productpost.module.css';


// For the Popup form to display whenever the Add product button is clicked.

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


function PostProduct(props: any) {
  const [productname, setProductname] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [location, setLocation] = useState('')
  const [price, setPrice] = useState('')

  function handlePostProduct(e: { preventDefault: () => void; }) {
    
    props.toggle()
  }
  return(
    <div className={postpopup.popup}>
        <div className={postpopup.popupinner}>
            <h2>Add Product</h2>
            <form onSubmit={handlePostProduct}>
                <label>
                  Product Name: 
                  <input type='text' value={productname} onChange={e =>setProductname(e.target.value)} />
                </label>
                <label>
                  Image Link: 
                  <input type='text' value={imageUrl} onChange={e =>setImageUrl(e.target.value)} />
                </label>
                <label>
                  Location: 
                  <input type='text' value={location} onChange={e =>setLocation(e.target.value)} />
                </label>
                <label>
                  Price: 
                  <input type='text' value={price} onChange={e =>setPrice(e.target.value)} />
                  
                </label>
                <button type='submit'>Add product</button>
            </form>
            <button onClick={props.toggle}>Close</button>
        </div>
    </div>
  );
}
export default function NavigationBar() {
  const trigger = useScrollTrigger();

  const[seen, setSeen] = useState(false)
   
    function togglePop(){
      setSeen(!seen);
    }
  

  return (
    
    <StyledAppBar  position={ 'fixed'} >
      <StyledToolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <StyledTypography variant="h6" >
          
        </StyledTypography>
        <Typography variant="h6" component="div">
      <div>
        <button className={btnstyles.btnbuy} role='button' onClick={togglePop}> Add a Product for sell</button>
        {seen ? <PostProduct toggle={togglePop} /> : null}
      </div>
        </Typography>
        <Typography variant="h6" component="div">
          <ConnectButton />
        </Typography>
      </StyledToolbar>
    </StyledAppBar>
  );
}
