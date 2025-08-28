import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact ";
import Login from "../pages/Login";
import User from "../pages/User";
import SingleUser from "../pages/SingleUser";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../pages/PrivateRouter";

export default function AllRouter() {
  return (
    <div style={{ textAlign: "center" }}>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
         <Route path="/user" element={
            <PrivateRoute> <User /></PrivateRoute> } />
          <Route path="/user/:user_id" element={<SingleUser />} />
           <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}
