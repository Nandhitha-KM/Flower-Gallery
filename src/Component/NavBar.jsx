import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <h1 className="main-title">
        🌷 Flower Information 🌷
      </h1>

      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/rose">Rose</NavLink>
        <NavLink to="/sunflower">Sunflower</NavLink>
        <NavLink to="/tulip">Tulip</NavLink>
      </nav>
    </>
  );
}

export default NavBar;