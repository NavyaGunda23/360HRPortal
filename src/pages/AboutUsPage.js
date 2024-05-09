
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BannerImage from "../assest/aboutus.png"
import wave from "../assest/wave.png"
import dots from "../assest/dots.png"

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import about from "../assest/whatweOffer.jpg"
import h2_circle from "../assest/h2_about_shape02.png"
import bgwave from "../assest/team_bg.jpg"

import vision from "../assest/vision.jpg"
const AboutUs = () => {
    return(
        <Box>
            <Header />
            <Box sx={{position:"relative"}}>
               <Container maxWidth="xl" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Box sx={{padding:"150px",paddingLeft:"0px"}}>
                <Box sx={{background:"#CAE3D1",padding:"5px 14px",borderRadius:"50px",width:"max-content"}}>
                        <Typography sx={{fontSize:"14px",color:"#28aa4a",fontWeight:"bold"}}>
                        GET TO KNOW MORE
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize:"38px",fontFamily: 'Poppins',fontWeight:"bold",mt:"10px",lineHeight:"50px",width:"500px",}}>
                    Who we are :
                    </Typography>
                   
                    <Typography sx={{fontSize:"16px",fontFamily: 'Poppins',width:"600px",mt:"10px",lineHeight:"26px"}}>
                    360 HR Partners is an HR Services company specializing in the ‘Human’ part of the HR. <br/>

We firmly believe in building sustainable, long-term associations with our clients and partners with trust, integrity, and professionalism at the core of all our interactions.
                    </Typography>
                    {/* <Box sx={{mt:5}}>
                    <Button  variant="contained" className='primaryButton'>Contact Us</Button>
                    <Button variant="contained" className='secondaryButton' sx={{ml:3}}>Explore More</Button>
                    </Box> */}
                    
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
        <Box sx={{background:"white",p:"10px",pt:"100px",pb:"100px"}}>
             <Container maxWidth="xl" sx={{display:"flex",justifyContent:"space-around",alignItems:"center"}}>
               
             <Box sx={{height:"600px",position:"relative"}} >
               
             <Box sx={{position:"absolute",right:0}}>
                    <img src={h2_circle} />
                   
                </Box>
                <Box sx={{position:"absolute",left:0,bottom:0}}>
                    <img src={dots} />
                   
                </Box>
                    <img src={about} className="mainBanner"style={{width:"inherit",height:"inherit",borderRadius:"300px 100px 100px"} }/>
                    
                </Box>
            <Box>
            <Box sx={{background:"#CAE3D1",padding:"5px 14px",borderRadius:"50px",width:"max-content"}}>
                        <Typography sx={{fontSize:"14px",color:"#28aa4a",fontWeight:"bold"}}>
                        WHAT SPECIALTY
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize:"38px",fontFamily: 'Poppins',fontWeight:"bold",mt:"10px",lineHeight:"55px",width:"600px",}}>
                    What We Do
                    </Typography>
                   
                    <Typography sx={{fontSize:"16px",fontFamily: 'Poppins',width:"600px",mt:"10px",lineHeight:"26px"}}>
                    We place the greatest emphasis on ensuring that every individual recruited by us, is fully invested in putting forth their best efforts into a rewarding and promising career at your company.
                  </Typography>
                  <Typography sx={{fontSize:"16px",fontFamily: 'Poppins',width:"600px",mt:"10px",lineHeight:"26px",fontWeight:"bold"}}>
                  The services we provide are:
                  </Typography>
                    <Typography sx={{display:"flex",mt:"20px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>Executive search
                    </Typography>
                    <Typography sx={{display:"flex",mt:"10px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>Senior & Mid Level Hiring
                    </Typography>
                    <Typography sx={{display:"flex",mt:"10px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>Senior & Mid Level Hiring
                    </Typography>
                    <Typography sx={{display:"flex",mt:"10px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>360 Intern Management
                    </Typography>
                    <Typography sx={{display:"flex",mt:"10px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>HR Services/Management
                    </Typography>
                    <Typography sx={{display:"flex",mt:"10px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>SME Solutions
                    </Typography>

                   

            </Box>
             </Container>
           
        </Box>
        <Box sx={{position:"relative"}}>
               <Container maxWidth="xl" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
               
                <Box sx={{padding:"50px",paddingLeft:"0px",zIndex:2,width:"100%",display:"flex",flexDirection:"column"}}>
                <Box sx={{background:"#CAE3D1",padding:"5px 14px",borderRadius:"50px",width:"max-content"}}>
                        <Typography sx={{fontSize:"14px",color:"#28aa4a",fontWeight:"bold"}}>
                        GET TO KNOW MORE
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize:"38px",fontFamily: 'Poppins',fontWeight:"bold",mt:"10px",lineHeight:"50px",width:"500px"}}>
                    Vision & Mission
                    </Typography>
                   
                    <Typography sx={{fontSize:"16px",fontFamily: 'Poppins',width:"700px",mt:"10px",lineHeight:"26px"}}>
                    360 HR Partners stay true to the promise made with our name. <br/><br/>

We cover every foreseeable aspect of HR services that your company needs to flourish in an ever more competitive market; all 360 degrees of it.<br/><br/>

Having the right fit for your corporate mission is essential to rising above the average, and offering your customers and clients the best you have to give.<br/><br/>

This is where we come in.<br/><br/>

We work with our clients to identify exactly what you need. We run through our checklists of how to meet those expectations, and then finally we help you find the best possible options for you to choose from.<br/><br/>

<b>Vision</b>: To be your first port of call when you need HR & Recruitment Services in the region.<br/><br/>

<b>Mission</b> : We are set on reinventing the traditional agency-client relationship, and developing a more organic collaboration where our successes are intertwined. The core of these relationships is ideals we hold above all others - trust, confidentiality, integrity, empowerment, and accountability.
                    </Typography>
                    {/* <Box sx={{mt:5}}>
                    <Button  variant="contained" className='primaryButton'>Contact Us</Button>
                    <Button variant="contained" className='secondaryButton' sx={{ml:3}}>Explore More</Button>
                    </Box> */}
                    
                </Box>
             
                
                <Box sx={{height:"400px"}} >
                    <img src={vision} className="mainBanner"style={{width:"inherit",height:"inherit",borderRadius:"300px 100px 100px"} }/>
                    
                </Box>
                
               </Container>
        </Box>
            <Footer />
        </Box>
    )
}
export default AboutUs