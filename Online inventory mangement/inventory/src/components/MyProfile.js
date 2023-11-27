import React from 'react';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Container,
  Typography,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  Avatar,
  
  Link,
  
  
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import { Email, LocationOn, Phone, ShoppingBasket } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { useState } from 'react';


const PageContainer = styled(Container)({
  marginTop: '0px',
});

const Section = styled('section')({
  marginBottom: '20px',
  padding: '20px',
});
const SearchBar = styled('input')({
  padding: '8px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginRight: '10px',
});
const Navbar = styled('nav')({
  backgroundColor: '#9e9e9e',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
const Footer = styled('footer')({
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
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

const MyProfile = () => {
  
    const userInfo = {
      name: 'John Doe',
      email: 'john@gmail.com',
      address: '123 Main St, Coimbatore, India',
      phone: '+1234567890',
      orders: [
        {
          id: 'ORD12345',
          date: '2023-11-01',
          items: ['Product A', 'Product B'],
          total: 10000,
          status: 'Delivered',
        },
      ],
     };
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className='profile'>
      <Navbar>
        <div>
          <SearchBar type="text" placeholder="Search..." />
          <button>Search</button>
        </div>
        <Avatar
            style={{ marginLeft: '5%', marginBottom: '-20%', marginTop: '-20%', cursor: 'pointer' }}
            onClick={handleClick}
          >
            <AccountCircleIcon />
          </Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={RouterLink} to="/MyProfile">
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/Home">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose} component={RouterLink} to="/Login">
              Logout
            </MenuItem>
            
          </Menu>
        
      </Navbar>
      <PageContainer>
        <Typography variant="h3" gutterBottom style={{ marginTop: '0px' }}>
          My Profile
        </Typography>
        <Section>
        <Paper elevation={10} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <List>
              <ListItem>
                <Avatar>
                  <Email />
                </Avatar>
                <ListItemText primary={<span style={{ marginLeft: '10px' }}>Email: {userInfo.email}</span>} />
              </ListItem>
              <ListItem>
                <Avatar>
                  <LocationOn />
                </Avatar>
                <ListItemText primary={<span style={{ marginLeft: '10px' }}>Address: {userInfo.address}</span>} />
              </ListItem>
              <ListItem>
                <Avatar>
                  <Phone />
                </Avatar>
                <ListItemText primary={<span style={{ marginLeft: '10px' }}>Phone: {userInfo.phone}</span>} />
              </ListItem>
            </List>
          </Paper>
        </Section>
        <Section>
        <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Order History
            </Typography>
            {userInfo.orders.map((order) => (
              <div key={order.id}>
                <Typography variant="subtitle1">
                  <Avatar>
                    <ShoppingBasket />
                  </Avatar>
                  Order #{order.id} ({order.date})
                </Typography>
                <List>
                  {order.items.map((item, index) => (
                    <ListItem key={index}>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
                <Typography variant="body1" gutterBottom>
                <strong>Total:</strong> ₹{order.total.toFixed(2)}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <strong>Status:</strong> {order.status}
                </Typography>
                <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
              </div>
            ))}
          </Paper>
        </Section>
      </PageContainer>
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

export default MyProfile;
