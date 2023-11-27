import React from 'react';
import { styled } from '@mui/system';
import { Menu, MenuItem } from '@mui/material';
import { Link} from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const AboutUsSection = styled('section')({
  padding: '100px',
  marginBottom: '120px',
  
});

const AboutUsHeading = styled('h2')({
  color: '#333',
  fontSize: '50px',
  textAlign: 'center',
});

const AboutUsContent = styled('p')({
  color: '#666',
  fontSize:"25px",
  lineHeight: '2.5',
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
const AboutUs = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className='about'>
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
            {/* Add more MenuItems as needed */}
          </Menu>
        
      </Navbar>
    <AboutUsSection className="full-background"> {/* Apply the class name here */}
      <AboutUsHeading>About Us</AboutUsHeading>
      <AboutUsContent>
      At  ASTRO ELECTRONICS, we specialize in revolutionizing electronic inventory management. With a passionate team dedicated to streamlining inventory processes, we offer cutting-edge solutions tailored for the modern era. Our innovative approach integrates advanced technologies, providing comprehensive tools to effortlessly monitor, track, and optimize electronic inventory. From efficient stock control to real-time analytics, we empower businesses to maximize efficiency and profitability. Committed to excellence, we continuously evolve our solutions to meet the dynamic needs of the electronic industry, ensuring seamless management and superior performance.
      </AboutUsContent>
    </AboutUsSection>
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

export default AboutUs;
