import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";

const SmeData = () => {
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
          SME & Start-up Solutions :
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
         We at 360 HR Partners, strongly believe in creating value for our clients and associates. Our team specialises in handling start-ups & SME clients that need tailor-made solutions for their HR & hiring needs. <br /><br />

An SME is, by definition, an organization classified as such due to a limited number of employees. To stay within that classification, and exist within that stratosphere, requires goal management prioritized over all else. While this prioritization does not differ from the usual corporate process, the most significant factor that can affect a company’s output is bandwidth.<br /><br />

Having a restriction on the number of heads in a department or an organization is no reason to compromise on the quality of work being put out. In order to maximise the input from a well rounded and deeply invested workforce, we work with you to make sure that you have only the most suitable members of the job seeking population.<br /><br />

We place an emphasis on finding you only the highest qualified candidates for the posts you need filled. Management that is used to the fast paced environment of a quickly moving business enterprise. Service personnel that are intuitive and adaptive to constantly evolving business practices and fast paced decision making processes. Leaders who can interpret market conditions on the go, and quickly form strategies to conform to best practices, while meeting set goals. </Typography>
     
      </Box>
    )
}

export default SmeData