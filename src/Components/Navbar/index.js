import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import "./navbar.css";

const Navbar = ({ setSearch }) => {
  const [open, setOpen] = useState(false);

 const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/", { replace: true });
};

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-left">
        <span className="logo-icon"><img src="https://i.pinimg.com/736x/d8/77/bd/d877bd32c898a457f997c83d6a0b3d1d.jpg" className="logo-icon"/></span>
       
      </div>

      {/* Search */}
      <div className="nav-search">
        <input type="text" placeholder="Search products..." onChange={(e)=>setSearch(e.target.value)}/>
        <button className="search-btn">🔍</button>
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "open" : ""}`}>
        <a href="#about">About</a>

        <div className="cart">
          🛒 <span className="cart-count">2</span>
        </div>
        <div onClick={handleLogout} >
          <button className="logout-btn" ><span className="span">Logout</span><LogoutIcon/></button>
        </div>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
