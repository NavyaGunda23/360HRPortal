import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Box } from "@mui/material";
import Container from "@mui/material/Container";
import { Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import InternData from "../components/servicesData/InternData";
import SearchData from "../components/servicesData/SearchData";
import HrServicesData from "../components/servicesData/HrServiceData";
import SmeData from "../components/servicesData/SmeData";
import SourceData from "../components/servicesData/SourceData";
import BulkData from "../components/servicesData/BulkData";
import { useLocation, useParams } from "react-router-dom";
const ServiceDetailsPage = () => {
  const servicesName = [
    {
      name: "360 Intern",
      selected: false,
      serviceName:"intern"
    },
    {
      name: "360 Search",
      selected: false,  serviceName:"search"
    },
    {
      name: "360 Source",
      selected: false,
      serviceName:"sources"
    },
    {
      name: "360 Engage",
      selected: false,
      serviceName:"hrsources"
    },
    {
      name: "360 Bulk",
      selected: false,
      serviceName:"bulkdata"
    },
    {
      name: "360 SME Solutions",
      selected: false,
      serviceName:"sme"
    },
  ];

  const location = useParams()
  console.log("location",location.name)
  const [selected,serviceName] = useState(location.name)
  const [servicesList,setServicesList] = useState(servicesName)
  const handleData = (serviceValue) => {
    const index = servicesList.map(e => e.serviceName).indexOf(serviceValue);
    serviceName(serviceValue)
    const updatedPages = servicesList.map((page) => ({ ...page, selected: false }));
    updatedPages[index].selected = true;
    console.log("index,indes",updatedPages)
    setServicesList(updatedPages)
  }
  
  useEffect(() => {
    handleData(selected)
  },[selected])
  
  useEffect(() => {

  },[servicesList])
  return (
    <Box>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          p: "50px",
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={4}>
            <Box
              sx={{
                background: "white",
                border: "1px solid #e2e2e2",
                borderRadius: "10px",
                p: "35px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              >
                Our Services
              </Typography>
              <Box
                sx={{
                  width: "30px",
                  height: "5px",
                  mt: "5px",
                  borderRadius: "5px",
                  background: "#28aa4a ",
                }}
              ></Box>
              <Box>
                <Box>
                  <Box sx={{ mt: "40px" }}>
                    {servicesList.map((service) => (
                      <Box
                        sx={{
                          border: "1px solid #e2e2e2",
                          borderRadius: "8px",
                          mt: "20px",
                          p: "15px 30px",
                          background:service.selected == true ? "#28aa4a " :"white",

                        }}
                        className="serviceDetailsContainer"
                        onClick={() =>  handleData(service.serviceName)}
                      >
                        <Box
                          sx={{
                            p: "5px 0px",
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography sx={{
                            fontSize:"16px",fontFamily:"Poppins",
                            color:service.selected == true ? "white " :"black"
                          }}>{service.name} </Typography>
                          <ArrowForwardIcon sx={{ 
                            color:service.selected == true ? "white " :"black"
                             }} />
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            {selected == "intern" && <InternData />}
            {selected == "search" && <SearchData />}
            {selected == "sources" && <SourceData />}
            {selected == "hrsources" && <HrServicesData />}
            {selected == "bulkdata" && <BulkData />}
            {selected == "sme" && <SmeData />}
         
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};
export default ServiceDetailsPage;
