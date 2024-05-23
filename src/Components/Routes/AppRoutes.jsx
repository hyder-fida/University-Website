import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Courses from "../../pages/Courses/Courses";
import About from "../../pages/About/About";
import Blog from "../../pages/Blog/Blog";
import Contact from "../../pages/Contact/Contact";
import Notifications from "../../pages/Notifications/Notifications";
import VcProfile from "../../pages/VcProfile/VcProfile";
import Login from "../../pages/LoginLogout/Login";
import EmpSec from "../EmployementSection/EmpSec";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/vcprofile" element={<VcProfile />} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/emp" element={<EmpSec/>} />

    </Routes>
  );
}

export default AppRoutes;