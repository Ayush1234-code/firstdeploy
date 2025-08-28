import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"
export default function Login(){
    const {auth, login , logout} = useContext(AuthContext);
    return(
        <>
        <h1>Login Page</h1>
        <h2>Auth {auth ? "Yes" : "No"}</h2>
        <button onClick={login} disabled={auth}>
            Login
        </button>
        <hr />
         <button onClick={logout} disabled={!auth}>
            Logout
        </button>
        </>
    );
        
}