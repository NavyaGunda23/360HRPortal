import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";

const InternData = () => {
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
           Intern Management 
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
         Dedicated supervision. Constructive feedback. And meaningful projects.<br/><br/>

This is the triumvirate needed for a successful internship. When referring to such, we at 360 HR Partners believe that to be truly symbiotic, the relationship between a company and the interns in their programs, need to be wholesome and well curated.<br/><br/>

This is where we come in.<br/><br/>

We work through meticulous check-lists to make sure we match the best possible interns with your detailed needs, to create a relationship that fits together like a puzzle.<br/><br/>

The companies we work with, view internships as investments in the future, and interns as possible leaders in that same future. The ideals, values and work ethic that you value in your employees, are all imparted at a grass roots level with the individuals in your program, opening up entire worlds of possibilities when it comes to moving forward.<br/><br/>

Short term internship programs versus longer stints in the company are all handled based on your individual needs. The level of involvement for upper or middle management, or a dedicated internship liaison are other factors taken into consideration during our customization meetings, to ensure you get the level of satisfaction we offer to our clients.
        </Typography>

        <Box>
          <Typography
            sx={{
              fontSize: "38px",
              fontFamily: "Poppins",
              fontWeight: "bold",
              mt: "20px",
              lineHeight: "40px",
              width: "500px",
            }}
          >
           Hospitality Internship 
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
            If you’re looking to roll out the red carpet for your career, a hospitality internship is a great place to start. As a hospitality intern, you’ll need to have first-rate customer service, communication, and organizational skills, as well as the ability to multi-task. Your daily duties will vary based on your internship, but no matter what, you should be ready to greet customers with a smile and help with day-to-day operations, whether it’s doing marketing or keeping things tidy. Are you ready to launch your career within the Hospitality industry?
          </Typography>
      </Box>
    )
}

export default InternData