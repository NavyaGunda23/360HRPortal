import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";

const HrServicesData = () => {
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
          HR Services
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
          Human resources are the backbone of your organization, not just from a management perspective, but from your employees’ as well. <br/><br />

Having satisfied and happy employees improve efficiency, quality of work, and even the volume of completed assignments.<br/><br />

Studies have shown that having a system in place that prioritizes work culture, employee satisfaction and well-being, contributes to a much more celebratory bottom line. For this reason, the industry has seen an uptick in the number of companies who are willing to farm out their Human Resource department when they are unable to create enough bandwidth to do the same.<br/><br />

We offer the services of designing and creating employee management strategies that would create a beneficial relationship for both, capitalizing on the resulting strengthening of bonds to ensure the company’s longevity in the current corporate scenario.<br/><br />

We manage HR operations on a planned timeline basis to ensure smooth operations. Create a space where you and your employees can produce excellent work and perform to the best of their abilities with the right strategies, to make it work.
       </Typography>
     
      </Box>
    )
}

export default HrServicesData