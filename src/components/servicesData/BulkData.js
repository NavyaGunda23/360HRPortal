import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";

const BulkData = () => {
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
           Bulk Hiring
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
       There are multiple reasons for an organization to need a high volume, employee intake. A new branch opening? A new project?<br /><br/>

How do you ensure you are meeting your timelines while making sure not to compromise on quality?<br /><br/>

That’s where we come in.<br /><br/>

At 360, we offer customized consultations to our clients where we create a design template of your desired candidates. We make sure to create a visceral sketch of the ideal hire, before beginning our filtering process.<br /><br/>

While you are a part of the decision making process at every significant step, we free up as much of your bandwidth as possible, by pre-screening, and then consolidating every possibility.<br /><br/>

We remove the guesswork from your hiring flowchart, by making sure your choices are only those of the highest quality, with verifiable qualifications,<br /><br/>
</Typography>
     
      </Box>
    )
}

export default BulkData