import { Box, Button, Typography } from "@mui/material"
import logo from "../../assest/white-logo.png"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
   return(
    <Box sx={{background:"#263238",display:"flex",justifyContent:"space-around",p:"50px"}}>
    <Box>
     <img src={logo} />
     <Typography sx={{fontSize:"16px",fontFamily:"Poppins",color:"white",mt:"20px"}}>360 HR Partners <br />
HR Outsourcing Middle East</Typography>
<Box sx={{display:"flex",columnGap:"20px",mt:"20px"}}>
 <Typography sx={{fontSize:"18px",fontFamily:"Poppins",color:"white"}}>Follow Us</Typography>
 <Box>
     <FacebookIcon sx={{color:"white",mr:1}}> </FacebookIcon>
     <LinkedInIcon sx={{color:"white",mr:1}}> </LinkedInIcon>
     <TwitterIcon sx={{color:"white",mr:1}}> </TwitterIcon>
     <InstagramIcon sx={{color:"white",mr:1}}> </InstagramIcon>
    
 </Box>
</Box>
    </Box>
    <Box>
     <Typography sx={{fontSize:"22px",fontFamily:"Poppins",color:"white"}}>Address Information</Typography>
     <Box sx={{display:"flex",mt:"10px"}}> <EmailIcon sx={{color:"white",mr:1}}></EmailIcon> <Typography sx={{fontSize:"14px",fontFamily:"Poppins",color:"white"}}>info@360hrp.com</Typography></Box>
     <Box sx={{display:"flex",mt:"10px"}}> <LocationOnIcon sx={{color:"white",mr:1}}></LocationOnIcon><Typography sx={{fontSize:"14px",fontFamily:"Poppins",color:"white"}}>info@360hrp.com</Typography></Box>
    </Box>
    <Box>
     <Typography sx={{fontSize:"22px",fontFamily:"Poppins",color:"white"}}>Useful Links</Typography>
     <Box>  <Typography sx={{fontSize:"14px",fontFamily:"Poppins",color:"white",mt:"10px"}}>About Us</Typography></Box>
     <Box>  <Typography sx={{fontSize:"14px",fontFamily:"Poppins",color:"white",mt:"10px"}}>Industries</Typography></Box>
     <Box>  <Typography sx={{fontSize:"14px",fontFamily:"Poppins",color:"white",mt:"10px"}}>Jobs</Typography></Box>
    </Box>
    <Box>
     <Typography sx={{fontSize:"22px",fontFamily:"Poppins",color:"white"}}>Contact us for Proposal</Typography>
     <Box>  <Typography sx={{fontSize:"14px",fontFamily:"Poppins",color:"white",width:"400px",mt:"10px"}}>Whether you’re in the market to recruit top talent or looking for support within a specific area of HR, 360 HR Partners can provide a flexible and customised solution to meet your needs.</Typography></Box>
     <Box>  <Button variant="contained" className='primaryButton'sx={{mt:"20px"}}>Contact </Button></Box>
    
    </Box>
 </Box>
   )
}

export default Footer