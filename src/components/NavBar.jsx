import { NavLink } from "react-router-dom";

const NavBar = () => { 
    return (
<div className="navbar navbar-dark bg-dark">
 <div className="container">
<NavLink  className="btn btn-outline-primary" to="/">Incio</NavLink>
<NavLink  className="btn btn-outline-primary" to="/contacto">Contancto</NavLink>
<NavLink  className="btn btn-outline-primary" to="/vlog">Vlog</NavLink>
 </div>
</div>
    );
}
export default NavBar