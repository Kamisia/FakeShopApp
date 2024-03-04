import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>

          <NavLink to="/products" className="nav-link">
            Our Products
          </NavLink>
          <NavLink to="/cart" className="nav-link">
            Cart
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
