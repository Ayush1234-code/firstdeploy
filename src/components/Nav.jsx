import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const Links = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/login", title: "Login" },
    { path: "/user", title: "User" },
  ];
  const ActiveStyle={ textDecoration: "none", color:"red"}
  const INActiveStyle={ textDecoration: "none", color:"blue"}
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {/* <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/user"}>User</Link> */}

            {/* Method 2 */}
            
            {/* {Links.map(({path,title})=>(
                <Link to={path}>{title}</Link>
            ))} */}

            {/* Method 3 */}

            { Links.map(({path, title})=>(
                <NavLink 
                style={({isActive})=>{
    return isActive ? ActiveStyle : INActiveStyle ;
                }} to={path}>{title}</NavLink>
            ))}
    </div>
  );
}
