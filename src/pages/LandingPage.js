import Box from '@mui/material/Box';
import Header from '../components/Header/Header';
import Banner from '../components/Header/Banner/Banner';
import GetToKnow from '../components/GetToKnowUs/GetToKnow';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

const LandingPage = () => {
    return(
        <Box>  
            <Header />
          <Banner />
          <GetToKnow />
          <Services />
          <Footer />
        </Box>
    )
}

export default LandingPage