
import LandingPage from "./pages/LandingPage";
import JobPage from "./pages/JobPage";
import AboutUs from "./pages/AboutUsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const RouterComponent = () =>{
    return(
        <Router>
        <Routes>
        <Route path="/" exact element={<LandingPage />} ></Route>
        <Route path="/job" exact element={<JobPage />} ></Route>
        <Route path="/aboutus" exact element={<AboutUs />} ></Route>
        </Routes>
    </Router>

    )
  
}
export default RouterComponent