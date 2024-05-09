import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from "../../assest/logo.png"
import EmailIcon from '@mui/icons-material/Email';
import { useLocation, useNavigate } from 'react-router-dom';
const pages = [
    {
        tabName:"Home",
        active:true
    },
    {
        tabName:"About Us",
        active:false
    },
    {
        tabName:"Services",
        active:false
    },
    {
        tabName:"Industries",
        active:false
    },
    {
        tabName:"Jobs",
        active:false
    }
]
// const pages = ['Home', 'About Us', 'Services' , 'Industries' , 'Jobs' ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [data, setData] = React.useState(pages)
const navigate = useNavigate();
  const handletabClick = (tabName) => {
 
  
    if(tabName == "Jobs"){
      navigate("/job")
    }else  if(tabName == "Home"){
      navigate("/")
    }else if(tabName=="About Us"){
      navigate("/aboutus")
    }
    const updatedPages = pages.map(page => ({ ...page, active: false }));
    const index = updatedPages.map(e => e.tabName).indexOf(tabName);
    updatedPages[index].active = true;
    setData(updatedPages)
  }
  const location = useLocation()
  const getActiveTab = () => {
    const updatedPages = pages.map(page => ({ ...page, active: false }));
    if(location.pathname == "/"){
      updatedPages[0].active = true;
    }else if(location.pathname == "/job"){
      updatedPages[4].active = true;
    }else if(location.pathname == "/aboutus"){
      updatedPages[1].active = true;
    }
    setData(updatedPages)
  }

  React.useEffect(() =>{
      console.log("data",data)
      getActiveTab()
  },[data])
  return (
    <AppBar sx={{
        background:"white",boxShadow:"none",position:"relative"
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 10}}> 
          <img src={logo} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:"black"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {data.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" className='navbarText'>{page.tabName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}}> 
          <img src={logo} />
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {data.map((page) => (
              <Button
                key={page}
                onClick={() => handletabClick(page.tabName)}
                sx={{ my: 2,mx:1, color: 'white', display: 'block', 
                color:page.active == true ? "#28aa4a": "black" , 
                "&:hover":{
                    color:"#28aa4a",
                    background:"none"
                }
            
            }}

              >
                {page.tabName}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex',columnGap:10 },justifyContent:"center" }}>
            <Box sx={{display:"flex",mr:1,alignItems:"center"}}>
            <EmailIcon sx={{color:'#28aa4a',mr:1}}/>
                <Typography sx={{color:"black",height:"max-content"}}>
                    info@360hrp.com
                </Typography>
            </Box>
               
                <Button variant="contained" className='primaryButton'>Contact Us</Button>
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
