import { NavLink } from "react-router-dom";

function Nav() {
    
    return (
        <div className="nav-wrapper">
            <ul>
                <li><NavLink to={'/'}>Current</NavLink></li>
                <li><NavLink to={'/my-locations'}>Locations</NavLink></li>
            </ul>
        </div>
    );
}
export default Nav;