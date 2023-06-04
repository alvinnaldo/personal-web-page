import { Link, useNavigate } from 'react-router-dom';
import { GoThreeBars } from 'react-icons/go';
import { useState } from 'react';
import nameLogo from '../assets/name-logo.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <> 
    <div className="navbar">
      <div className="author-name" onClick={()=>navigate("/")}><img src={nameLogo} alt="name-logo" style={{width : "2.5rem", marginRight : "0.7rem"}} />Alvin Naldo</div>
      <div className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="three-bars" onClick={():void=> setOpen(!open)}><GoThreeBars /></div>
    </div>
    {open && <div className="open-menu">
        <Link to="/" onClick={():void=> setOpen(!open)}>Home</Link>
        <Link to="/portfolio" onClick={():void=> setOpen(!open)}>Portfolio</Link>
        <Link to="/contact" onClick={():void=> setOpen(!open)}>Contact</Link>
      </div>}
      
    </>
  )
}

export default Navbar