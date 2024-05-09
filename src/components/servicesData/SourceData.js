import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";

const SourceData = () => {
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
           Senior & Mid-Level Hiring
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
        The success rate of a corporation in the current competitive business atmosphere, centres on the efficiency, talent, and work ethic to be found in the senior and middle levels of its management. Great leadership can be wasted if not supported by highly motivated thinkers and creators, who can channel that vision forward.<br/> <br/>

Senior and mid-level management candidates are invaluable to a company, in the way arteries are to the human body. As far fetched as the comparison may sound, the middle levels of management perform the invaluable task of compilation, delegation and then execution of every single great idea.<br/> <br/>

Having a robust, established chain of command, as well as highly qualified and efficient players in the field, can make all the difference when a client is deciding between you and a competitor. We work with our clients to create an ecosystem where the highest echelons of your management levels, need only focus on ideation, conceptualization, and delegation.<br/> <br/>

We make sure that your senior and mid-level management are candidates that are fully equipped and wholly capable of driving each task forward at the appropriate paces, to make sure all the cogs are whirring in perfect synchronisation.  </Typography>

     
      </Box>
    )
}

export default SourceData