import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BannerImage from "../../../assest/4178155.jpg"
import wave from "../../../assest/wave.png"
import dots from "../../../assest/dots.png"

const Banner = () => {
    return (
        <Box sx={{position:"relative"}}>
               <Container maxWidth="xl" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Box sx={{padding:"150px",paddingLeft:"0px"}}>
                <Box sx={{background:"#CAE3D1",padding:"5px 14px",borderRadius:"50px",width:"max-content"}}>
                        <Typography sx={{fontSize:"14px",color:"#28aa4a",fontWeight:"bold"}}>
                        WE ARE EXPERT IN THIS FIELD
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize:"38px",fontFamily: 'Poppins',fontWeight:"bold",mt:"10px",lineHeight:"50px",width:"500px",}}>
                    Recruit Top Talent For Your Company
                    </Typography>
                   
                    <Typography sx={{fontSize:"16px",fontFamily: 'Poppins',width:"600px",mt:"10px",lineHeight:"26px"}}>
                    We Create Immersive Experiences to recruit top talent or looking for support within a specific area of HR That Help Businesses
                    </Typography>
                    <Box sx={{mt:5}}>
                    <Button  variant="contained" className='primaryButton'>Contact Us</Button>
                    <Button variant="contained" className='secondaryButton' sx={{ml:3}}>Explore More</Button>
                    </Box>
                    
                </Box>
                <div className="banner-shape-wrap">
                <img src={wave} style={{width:"100px"} }/>
                <img src={dots} style={{width:"100px"} }/>
                </div>
               
                <Box sx={{height:"400px"}} >
                    <img src={BannerImage} className="mainBanner"style={{width:"inherit",height:"inherit",borderRadius:"300px 100px 100px"} }/>
                    
                </Box>
                
               </Container>
        </Box>
    )
}

export default Banner