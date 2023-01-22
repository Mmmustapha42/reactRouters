import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="primary-nav">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            <Link to='/profile'>Profile</Link>
        </nav>
     );
}
 
export default Navbar;