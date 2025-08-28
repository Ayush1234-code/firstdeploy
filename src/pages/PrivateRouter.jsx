import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children}){
    const {auth} =useContext(AuthContext);
    if(!auth){
        return <Navigate to={"/login"}/>
    }
    return children;
}