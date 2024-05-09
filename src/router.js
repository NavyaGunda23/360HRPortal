
import LandingPage from "./pages/LandingPage";
import JobPage from "./pages/JobPage";
import AboutUs from "./pages/AboutUsPage";
import ServicePage from "./pages/ServicePage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";

const RouterComponent = () =>{
    return(
        <Router>
        <Routes>
        <Route path="/"  element={<LandingPage />} ></Route>
        <Route path="/job"  element={<JobPage />} ></Route>
        <Route path="/aboutus"  element={<AboutUs />} ></Route>
        <Route path="/services"  element={<ServicePage />} ></Route>
        <Route path="/serviceDetails/:name"  element={<ServiceDetailsPage />} ></Route>
        </Routes>
    </Router>

    )
  
}
export default RouterComponent