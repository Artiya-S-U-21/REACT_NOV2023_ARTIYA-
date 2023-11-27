import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/system';
import {
  Container,
  
  Typography,
  Paper,
  Divider,
  Button,
  Avatar,
  Link
  
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';



const Header = styled('header')({
  backgroundColor: '#2979ff',
  color: 'white',
  padding: '20px',
  textAlign: 'center',
});
const Footer = styled('footer')({
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
});

const Navbar = styled('nav')({
  backgroundColor: '#9e9e9e',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SearchBar = styled('input')({
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginRight: '10px',
});

const AboutUs = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const FooterContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '20px',
  marginTop: '20px',
});

const FooterLink = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const FooterAdditionalContent = styled('div')({
  marginTop: '20px',
});



const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='ho'>
      <Header>
        <h1 style={{color:("#e1f5fe")}}>ASTRO ELECTRONICS</h1>
      </Header>

      <Navbar>
        <div>
          <SearchBar type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <AboutUs>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              component={RouterLink} to="/AboutUs"
            >
              <label>About Us</label>
            </Button>
            <Avatar
            style={{ marginLeft: '5%', marginBottom: '-10%', marginTop: '-20%', cursor: 'pointer' }}
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={RouterLink} to="/Myprofile">
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/Home">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/Login">
              Logout
            </MenuItem>
          </Menu>
        </AboutUs>
      </Navbar>

      <Container sx={{ marginTop: 5 }}>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Pending Orders
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Button variant="contained" color="primary" component={RouterLink} to="/PendingOrders">
          CLICK HERE!
        </Button>
      </Paper>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
        <Typography variant="h4" gutterBottom>
          Delivered Orders
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Button variant="contained" color="primary" component={RouterLink} to="/DeliveredOrders">
          CLICK HERE!
        </Button>
      </Paper>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Cancelled Orders
        </Typography>
        <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
        <Button variant="contained" color="primary" component={RouterLink} to="/CancelledOrders">
          CLICK HERE!
        </Button>
      </Paper>
    </Container>
     <Footer>
     <FooterContent>
          <div>
            <Typography variant="h6" gutterBottom>
              Astro Electronics
            </Typography>
            <Typography variant="body2" gutterBottom>
              Your go-to place for all electronics needs.
            </Typography>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <FooterLink href="#" component={RouterLink} to="/Home">Home |</FooterLink>
            <FooterLink href="#"> Products |</FooterLink>
            <FooterLink href="#" component={RouterLink} to="/AboutUs"> About Us |</FooterLink>
            <FooterLink href="#"> Contact </FooterLink>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <FooterLink href="#">Facebook |</FooterLink>
            <FooterLink href="#"> Twitter |</FooterLink>
            <FooterLink href="#"> Instagram </FooterLink>
          </div>
        </FooterContent>
        <FooterAdditionalContent>
          <Typography variant="body2" textAlign={'center'}>
               &copy; {new Date().getFullYear()} Astro Electronics - All Rights Reserved
          </Typography>
          <Typography variant="body2">
            Terms of Service | Privacy Policy
          </Typography>
        </FooterAdditionalContent>
        
      </Footer>
      
    </div>
  );
};

export default Home;
