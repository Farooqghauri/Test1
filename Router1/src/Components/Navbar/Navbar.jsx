import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          
        </ul>
    </div>
  )
}

export default Navbar