import { Box ,Typography,Button} from "@mui/material"
import Container from '@mui/material/Container';
import RateReviewIcon from '@mui/icons-material/RateReview';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import dots from "../../assest/dots.png"
import intern1 from "../../assest/intern1.jpg"
import Search from "../../assest/search.jpg"
import source from "../../assest/source.png"
import bulk from "../../assest/bulk.jpg"
import engage from "../../assest/enage.jpg"
import solution from "../../assest/enage.jpg"
import sme from "../../assest/sme.jpg"
import backgroun from "../../assest/h2_about_shape03.png"
import { useNavigate } from "react-router-dom";
const Services = () => {

    const serviceList = [
        {
            name:"360 Intern",
            description:"Dedicated supervision. Constructive feedback. And meaningful projects",
            customClass:"card1 bluecard",
            iconsName:intern1,
            serviceName:"intern"
        },
        {
            name:"360 Search",
            description:"We act as an extension of our clients business identifying and engaging suitable candidates.",
            customClass:"card1 purpleCard",
            iconsName:Search,
            serviceName:"search"
        },
        {
            name:"360 Source",
            description:"Dedicated supervision. Constructive feedback. And meaningful projects",
            customClass:"card1 greenCard",
            iconsName:source,
            serviceName:"sources"
        },
        {
            name:"360 Engage",
            description:"We offer the services of designing and creating employee management strategies.",
            customClass:"card1 redCard",
            iconsName:engage,
            serviceName:"hrsources"
        },
        {
            name:"360 Bulk",
            description:"We make sure to create a visceral sketch of the ideal hire, before beginning our filtering process.",
            customClass:"card1 greenCard",
            iconsName:bulk,
            serviceName:"bulkdata"
        },
        {
            name:"360 SME Solutions",
            description:"Specialises in handling start-ups & SME clients that need tailor-made solutions for hiring needs.",
            customClass:"card1 bluecard",
            iconsName:sme,
            serviceName:"sme"
        }
    ]

    const navigate = useNavigate()
    const handleViewDetails = (name) => {
        navigate(`/serviceDetails/${name}`)
    }
    return(
        <Box sx={{position:"relative",overflow:"hidden"}}>
            <Box className="rightani" sx={{position:"absolute",zIndex:0,right:0,bottom:-200}}>
            <img src={backgroun} />
           </Box>
           <Box className="rightani"  sx={{position:"absolute",zIndex:0,right:0,top:-200}}>
            <img src={backgroun} />
           </Box>
           <Box className="leftani1" sx={{position:"absolute",zIndex:0,left:0,bottom:-200,    transform: "rotate(155deg)"}}>
            <img src={backgroun} />
           </Box>
           <Box className="leftani" sx={{position:"absolute",zIndex:0,left:0,top:-200, transform: "rotate(250deg)"}}>
            <img src={backgroun} />
           </Box>
             <Container maxWidth="xl" sx={{display:"flex",flexDirection:"column",alignItems:"center",position:"relative",p:"100px"}}>
         
             <Box sx={{background:"#CAE3D1",padding:"5px 14px",borderRadius:"50px",width:"max-content"}}>
                        <Typography sx={{fontSize:"14px",color:"#28aa4a",fontWeight:"bold"}}>
                        WHAT WE DO FOR YOU
                        </Typography>
                    </Box>
                    <Typography sx={{fontSize:"38px",fontFamily: 'Poppins',fontWeight:"bold",mt:"10px",lineHeight:"55px",width:"600px",}}>
                    Discover The Services We Offer
                    </Typography>
                    <Box className="container" sx={{mt:"50px"}}>
                        {serviceList.map((services) => (
 <Box className={services.customClass}>
 <Box className="card__head">
    <img src={services.iconsName} className="icons" style={{width:"100px",height:"100px",borderRadius:"100%"}}/>
    {/* <RateReviewIcon  className="icons"></RateReviewIcon> */}
 {/* <ion-icon name="heart"></ion-icon> */}
     <Box className="rounded-border">
         <span className="circle"></span>
     </Box>
 </Box>
 <Box className="card__body">
 <Typography sx={{fontSize:"24px",color:"#000",fontWeight:"bold",mt:"30px"}}>
 {services.name}
                        </Typography>

                        <Typography sx={{fontSize:"18px",color:"#696666",mt:"10px"}}>
                        {services.description}
                        </Typography>
    

     <Button sx={{mt:"20px"}} onClick={() => handleViewDetails(services.serviceName)}>details</Button>
 </Box>

</Box>
                        ))}
           
        </Box>
             </Container>
           
        </Box>
    )
}

export default Services