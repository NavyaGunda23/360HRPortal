import Box from '@mui/material/Box';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';

import Jobs from "../assest/IT-consulting.png"
import wave from "../assest/wave.png"
import dots from "../assest/dots.png"
import Grid from '@mui/material/Grid';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

import frontend from "../assest/frontEnd.png"
import backEnd from "../assest/backend.jpg"
import Designer from "../assest/design.jpg"
const JobPage = () => {
    const jobData =[
        {
            designation:"Front End Developer",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.",
            postedOn:"12/03/2024",
            type:"Developer",
            imagesrc:frontend
        },
        {
            designation:"Back End Developer",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.",
            postedOn:"12/03/2024",
            type:"Developer",
            imagesrc:backEnd
        },{
            designation:"Front End Developer",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.",
            postedOn:"12/03/2024",
            type:"Tester",
            imagesrc:frontend
        },
        {
            designation:"Front End Developer",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.",
            postedOn:"12/03/2024",
            type:"Developer",
            imagesrc:backEnd
        },
        {
            designation:"Designer",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.",
            postedOn:"12/03/2024",
            type:"Designer",
            imagesrc:Designer
        },
        {
            designation:"Front End Developer",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.",
            postedOn:"12/03/2024",
            type:"Architect",
            imagesrc:backEnd
        }
    ]
    return (
        <Box>
            <Header />
            <Box sx={{position:"relative"}}>
               <Container maxWidth="xl" sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Box sx={{padding:"100px 150px",paddingLeft:"0px"}}>
                <Box sx={{background:"#CAE3D1",padding:"5px 14px",borderRadius:"50px",width:"max-content"}}>
                        <Typography sx={{fontSize:"14px",color:"#28aa4a",fontWeight:"bold"}}>
                        Join Us
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize:"38px",fontFamily: 'Poppins',fontWeight:"bold",mt:"10px",lineHeight:"50px",width:"500px",}}>
                    We are looking for talented people like you
                    </Typography>
                   
                    <Typography sx={{fontSize:"16px",fontFamily: 'Poppins',width:"600px",mt:"10px",lineHeight:"26px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.Sed finibus efficitur mattis. Praesent pharetra erat et mi consequat tincidunt.
                    </Typography>
                    <Box sx={{mt:5}}>
                    <Button  variant="contained" className='primaryButton'>See Jobs</Button>
                    </Box>
                    
                </Box>
                <div className="banner-shape-wrap">
                <img src={wave} style={{width:"100px"} }/>
                <img src={dots} style={{width:"100px"} }/>
                </div>
               
                <Box sx={{height:"400px"}} >
                    <img src={Jobs} className="mainBanner"style={{width:"inherit",height:"inherit",borderRadius:"300px 100px 100px"} }/>
                    
                </Box>
                
               </Container>
        </Box>
        <Box sx={{background:"white",pt:"50px",pb:"50px"}}>
        <Container maxWidth="xl" sx={{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column "}}>
        <Box sx={{background:"#CAE3D1",padding:"5px 14px",borderRadius:"50px",width:"max-content"}}>
                        <Typography sx={{fontSize:"14px",color:"#28aa4a",fontWeight:"bold"}}>
                       We are Hiring!
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize:"38px",fontFamily: 'Poppins',fontWeight:"bold",mt:"10px",lineHeight:"55px",width:"600px",}}>
                    Job List
                    </Typography>
                    <Typography sx={{fontSize:"14px",mb:"20px",fontFamily: 'Poppins',fontWeight:"normal",mt:"10px",lineHeight:"normal",width:"100%",}}>
                    Ready to make a change? Come be part of our amazing team. We're all about creating, innovating, and growing. If You're passionate about pushing boundaries and want to be part of something exciting,let's team up! Your journey starts here. Join us today!
                    </Typography>
                    <Grid container spacing={2}>
  <Grid item xs={9.5}>
  <Box  
            className="jobCardContainer" sx={{display:"none"}}>
                {jobData.map((jobdata) => (
    <Box className="jobCard" sx={{position:"relative"}}>
    <Typography sx={{background:"#28aa4a",position:"absolute",top:"10px",left:"10px",fontSize:"12px",zIndex:1,padding:"3px 6px",color:"white",borderRadius:"30px",width:"max-content"}}>
        {jobdata.type}
        </Typography>
    <img src={jobdata.imagesrc} />
    <Box className="jobdesc">
        <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}> {jobdata.designation}</Typography>
        <Typography sx={{fontSize:"14px",fontFamily:"Poppins",fontWeight:"normal",mt:"10px"}}>{jobdata.description}</Typography>
        <Typography sx={{fontSize:"14px",fontFamily:"Poppins",fontWeight:"normal",mt:"10px"}}><b>Posted On:</b> {jobdata.postedOn}</Typography>
        <Button  variant="contained" className='primaryButton'sx={{mt:"20px",mb:"30px"}}>View Details</Button>
    </Box>
</Box>
                ))}
        
            
            </Box>

            <Box  
            className="jobCardContainer" sx={{gridTemplateColumns:"repeat(auto-fill, 100%)"}}>
                {jobData.map((jobdata) => (
    <Box className="jobCard" sx={{position:"relative",display:"flex",flexDirection:"row",alignItems:"center"}}>
    <Typography sx={{background:"#28aa4a",position:"absolute",top:"10px",left:"10px",fontSize:"12px",zIndex:1,padding:"3px 6px",color:"white",borderRadius:"30px",width:"max-content"}}>
        {jobdata.type}
        </Typography>
    <img src={jobdata.imagesrc} style={{height:"220px",width:"220px",borderBottom:"0px",borderRight:"1px solid #e2e2e2"}}/>
    <Box className="jobdesc" sx={{p:"20px 50px !important"}}>
        <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}> {jobdata.designation}</Typography>
        <Typography sx={{fontSize:"14px",fontFamily:"Poppins",fontWeight:"normal",mt:"10px"}}>{jobdata.description}{jobdata.description}</Typography>
        <Typography sx={{fontSize:"14px",fontFamily:"Poppins",fontWeight:"normal",mt:"10px"}}><b>Posted On:</b> {jobdata.postedOn}</Typography>
        <Button  variant="contained" className='primaryButton'sx={{mt:"20px"}}>View Details</Button>
    </Box>
</Box>
                ))}
        
            
            </Box>
           
  </Grid>
  <Grid item xs={2.5}>
    <Box>
    <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Search Here</Typography>
    <Box sx={{width:"30px",height:"5px",mt:"5px",borderRadius:"5px",background:"#28aa4a "}}></Box>
    <Input
          id="input-with-icon-adornment"
          placeholder='Search'
          sx={{mt:"20px",width:"100%"}}
          className='customInput'
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />

    <Box sx={{mt:"40px"}}>
    <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Categories</Typography>
    <Box sx={{width:"30px",height:"5px",mt:"5px",borderRadius:"5px",background:"#28aa4a "}}></Box>
    <Box sx={{border:"1px solid #e2e2e2",borderRadius:"8px",mt:"20px",p:"15px 30px"}}>
        <Box sx={{p:"15px 0px", borderBottom:"1px solid #e2e2e2",display:"flex",justifyContent:"space-between"}}>
        <Typography>Development </Typography>
        <Typography>3</Typography>
        </Box>
        <Box sx={{p:"15px 0px", borderBottom:"1px solid #e2e2e2",display:"flex",justifyContent:"space-between"}}>
        <Typography>Designer </Typography>
        <Typography>3</Typography>
        </Box>
        <Box sx={{p:"15px 0px", display:"flex",justifyContent:"space-between"}}>
        <Typography>Tester </Typography>
        <Typography>3</Typography>
        </Box>
       
    </Box>
    </Box>

    <Box sx={{mt:"40px"}}>
    <Typography sx={{fontSize:"18px",fontFamily:"Poppins",fontWeight:"600"}}>Tag Cloud</Typography>
    <Box sx={{width:"30px",height:"5px",mt:"5px",borderRadius:"5px",background:"#28aa4a "}}></Box>
    <Box sx={{border:"1px solid #e2e2e2",borderRadius:"8px",mt:"20px",p:"30px 30px",}} className="tabCloud">
    <Typography sx={{background:"#28aa4a",fontSize:"14px",zIndex:1,padding:"10px 15px",color:"white",borderRadius:"30px",width:"max-content"}}>Development </Typography>
    <Typography sx={{background:"#28aa4a",fontSize:"14px",zIndex:1,padding:"10px 15px",color:"white",borderRadius:"30px",width:"max-content"}}>Designer </Typography>
    <Typography sx={{background:"#28aa4a",fontSize:"14px",zIndex:1,padding:"10px 15px",color:"white",borderRadius:"30px",width:"max-content"}}>Tester </Typography>
    <Typography sx={{background:"#28aa4a",fontSize:"14px",zIndex:1,padding:"10px 15px",color:"white",borderRadius:"30px",width:"max-content"}}>Development </Typography>
    <Typography sx={{background:"#28aa4a",fontSize:"14px",zIndex:1,padding:"10px 15px",color:"white",borderRadius:"30px",width:"max-content"}}>Development </Typography>
        
    </Box>
    </Box>
     
    </Box>

  </Grid>
</Grid>
         
        </Container>

        </Box>
            <Footer />
        </Box>
    )
}

export default JobPage