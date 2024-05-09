
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import searchDataImage from "../../assest/executive-search.png"
const SearchData = () => {
    return(
        <Box
        sx={{
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingBottom: "50px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "38px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              mt: "10px",
              lineHeight: "40px",
              width: "500px",
            }}
          >
            Executive Search 
          </Typography>
        </Box>

        <Typography
          sx={{
            fontSize: "16px",
            fontFamily: "Poppins",
            lineHeight: "26px",
            mt: "20px",
          }}
        >
         Our consultants are experienced working with executive-level companies through to smaller specialist firms. They understand that every organization and person has their own requirements and ideals when it comes to hiring. We are devoted to establishing long-term relationships with our clients, and we ensure this by offering tailored solutions for our clients’ recruitment needs across all levels.<br /><br />

Senior managerial candidates can often be elusive in the job market, and in today’s highly competitive world your choice of an executive can make a huge impact on your organization’s future. To ensure we attract the high caliber of personnel that you require, our Executive Search Service develops a 360° marketing network to locate the professionals you need for your companys management positions. To ensure privacy for candidate and employer, we offer a completely confidential service. Our dedicated account managers have found candidates for every manner of role at every level of big, challenging organizations demanding nothing less than perfection<br /><br />

<b>Our Strategy</b><br /><br />

We engage a circle of people who have the networks and pull to fill the pipeline with excellent candidates.<br /><br />

We act as an extension of our clients business identifying and engaging suitable candidates on their behalf.
        </Typography>

        <Box>
          <Typography
            sx={{
              fontSize: "38px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              mt: "20px",
              lineHeight: "50px",
             mb:"30px"
            }}
          >
           Our executive search approach combines five key elements
          </Typography>
        </Box>
        <img src={searchDataImage} />


      </Box>
    )
}
export default SearchData