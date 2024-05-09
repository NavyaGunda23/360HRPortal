
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import intern1 from "../assest/intern1.jpg"
import Search from "../assest/search.jpg"
import source from "../assest/source.png"
import bulk from "../assest/bulk.jpg"
import engage from "../assest/enage.jpg"
import solution from "../assest/enage.jpg"
import sme from "../assest/sme.jpg"
import h2_circle from "../assest/h2_about_shape02.png"
import shadow from "../assest/shadow.png"
import shadowLight from "../assest/shadow_light.png"
import { useNavigate } from 'react-router-dom';
const ServicePage = () => {
    const serviceList = [
        {
            name:"360 Intern",
            description:"Dedicated supervision. Constructive feedback. And meaningful projects",
            iconsName:intern1,
            serviceName:"intern"
           
        },
        {
            name:"360 Search",
            description:"We act as an extension of our clients business identifying and engaging suitable candidates.",
            iconsName:Search,
            serviceName:"search"
        },
        {
            name:"360 Source",
            description:"Dedicated supervision. Constructive feedback. And meaningful projects",
            iconsName:source,
            serviceName:"sources"
        },
        {
            name:"360 Engage",
            description:"We offer the services of designing and creating employee management strategies.",
            iconsName:engage,
            serviceName:"hrsources"
        },
        {
            name:"360 Bulk",
            description:"We make sure to create a visceral sketch of the ideal hire, before beginning our filtering process.",
            iconsName:bulk,
            serviceName:"bulkdata"
        },
        {
            name:"360 SME Solutions",
            description:"Specialises in handling start-ups & SME clients that need tailor-made solutions for hiring needs.",
            iconsName:sme,
            serviceName:"sme"
        }
    ]

    const navigate = useNavigate()
    const handleViewDetails = (name) => {
        navigate(`/serviceDetails/${name}`)
    }
    return (
        <Box>
            <Header />
            <Container maxWidth="xl" sx={{ display: "flex", justifyContent: "center", alignItems: "center",flexDirection:"column" }}>
                <Box sx={{ paddingTop: "100px", paddingLeft: "0px",paddingRight: "0px",paddingBottom: "50px",display:"flex",justifyContent:"space-between" }}>
                <Box>
                    <Box sx={{ background: "#CAE3D1", padding: "5px 14px", borderRadius: "50px", width: "max-content" }}>
                       
                            <Typography sx={{ fontSize: "14px", color: "#28aa4a", fontWeight: "bold" }}>
                                Our Services
                            </Typography>
                           
                        


                    </Box>
                    <Typography sx={{ fontSize: "38px", fontFamily: 'Poppins', fontWeight: "bold", mt: "10px", lineHeight: "50px", width: "500px", }}>
                                Discover The Services <br /> We Offer
                            </Typography>
                            </Box>

                    <Typography sx={{ fontSize: "16px", fontFamily: 'Poppins', width: "600px", mt: "10px", lineHeight: "26px",mt:"50px" }}>
                        Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor amet, consectetuolor sit amet, consectetur adipiscing elita florai psum sit amet consecteturere.
                    </Typography>
                  

                </Box>
                <Box className="pageLevelServiceContainer" sx={{mb:"100px"}}>
                    {serviceList.map((service,index) => (
                        <Box sx={{position:"relative"}}>
                       
                           <Box className="pageLevelServiceCard" sx={{position:"relative"}}>
                            
                           <Box className="pageLevelServiceHeader" sx={{display:"flex",justifyContent:"space-between"}}>
                               <Box >
                               <Typography sx={{fontSize:"16px",fontFamily:"Poppins",color:"#28aa4a ",fontWeight:"300"}}>0{index+1}</Typography>
                               <Typography sx={{fontSize:"18px",fontFamily:"Poppins",color:"#221668 ",fontWeight:"600",mt:"20px"}}>{service.name}</Typography>
                               </Box>
                               <Box>
                               <img src={service.iconsName} className="icons" style={{width:"80px",height:"80px",borderRadius:"300px 100px 100px"}}/>

                               </Box>
                         </Box>
                         <Box className="pageLevelServiceContent" sx={{height:"100px"}}>
                         <Typography sx={{fontSize:"16px",fontFamily:"Poppins",color:"#5f5656 ",mt:"20px",fontWeight:"400"}}>{service.description}</Typography>
                         </Box>
                         <Box>
                         <Button sx={{mt:"10px"}} onClick={() => handleViewDetails(service.serviceName)}>View Details</Button>
                        
                         </Box>
                        
                        {/* <Box sx={{position:"absolute",right:"-2px",bottom:"-7px"}}>
                        <img src={shadowLight} />
                        </Box> */}
                        <Box sx={{position:"absolute",right:"0px",bottom:"0px"}}>
                        <Box sx={{width:"80px",height:"80px",backgroundColor:"#f4f4f4",borderRadius:"60px 0 0 0"}} className="customshape"></Box>
                        </Box>
                       </Box>
                       </Box>
                    ))}
                </Box>
             

            </Container>
            <Footer />

        </Box>
    )
}
export default ServicePage