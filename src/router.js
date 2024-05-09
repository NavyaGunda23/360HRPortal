
import LandingPage from "./pages/LandingPage";
import JobPage from "./pages/JobPage";
import AboutUs from "./pages/AboutUsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RouterComponent = () =>{
    return(
        <Router>
        <Routes>
        <Route path="/"  element={<LandingPage />} ></Route>
        <Route path="/job"  element={<JobPage />} ></Route>
        <Route path="/aboutus"  element={<AboutUs />} ></Route>
        </Routes>
    </Router>

    )
  
}
export default RouterComponent