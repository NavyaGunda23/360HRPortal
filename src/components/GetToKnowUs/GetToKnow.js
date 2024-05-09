import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import about from "../../assest/abput.jpg"
import h2_circle from "../../assest/h2_about_shape02.png"
import dots from "../../assest/dots.png"
const GetToKnow = () => {
    return(
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
                        GET TO KNOW US
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize:"38px",fontFamily: 'Poppins',fontWeight:"bold",mt:"10px",lineHeight:"55px",width:"600px",}}>
                    Build a platform of sustainable and long-term associations with our clients
                    </Typography>
                   
                    <Typography sx={{fontSize:"16px",fontFamily: 'Poppins',width:"600px",mt:"10px",lineHeight:"26px"}}>
                    At 360, our mission is to build a platform of sustainable and long-term associations with our clients, on the pillars we hold most dear - trust, integrity and confidentiality, all delivered with the utmost professionalism.
                    <br/>  <br/>
The driving force behind our organization is our regard for each of our clients, and our determination to provide every single one with the most detailed HR services. We believe deeply in building relationships based on collaboration and confidentiality, empowering you to scale ever emerging heights in your respective industries.

                  </Typography>
                    <Typography sx={{display:"flex",mt:"20px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>360 Search
                    </Typography>
                    <Typography sx={{display:"flex",mt:"10px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>360 Source
                    </Typography>
                    <Typography sx={{display:"flex",mt:"10px"}}>
                        <TaskAltIcon sx={{color:"#28aa4a",mr:1}}/>360 Bulk
                    </Typography>

                    <Typography sx={{fontSize:"16px",fontFamily: 'Poppins',width:"600px",mt:"10px",lineHeight:"26px"}}>
                    Organizations do better business when people are engaged, motivated, and yes, talented. Having the right people in place at the right time is a key aspect of our continued growth and success.
  
                    </Typography>

            </Box>
             </Container>
           
        </Box>
    )
}

export default GetToKnow