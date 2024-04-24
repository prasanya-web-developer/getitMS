import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./index.css";

const NavBar = () => (
  <>
    <nav className="address-nav">
      <p>
        <span className="icon-container">
          <FaPhoneAlt />
        </span>{" "}
        7500275005
      </p>

      <p>
        <span className="icon-container">
          <FaEnvelope />
        </span>{" "}
        support@WTTiles.com
      </p>

      <p>
        <span className="icon-container">
          <FaLocationDot />
        </span>{" "}
        146/5 , ECR ROAD , kottupalayam , Opp. To Raja Rajeshwari Kalyana
        Mandapam, Puducherry - 605008
      </p>
    </nav>

    <nav className="navbar-container">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1713881996/Designer__2_-removebg-preview_krlnql.png"
          alt="logo-img"
          className="logo"
        />
      </Link>

      <ul className="menu-section-container">
        <li>
          <NavLink to="/" exact className="list" activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aboutUs"
            exact
            className="list"
            activeClassName="active-link"
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tiles"
            exact
            className="list"
            activeClassName="active-link"
          >
            <div className="dropdown">
              <p>Tiles</p>
              <div className="dropdown-content">
                <NavLink exact to="/tiles-adhesive" className="anchor-ele">
                  TILES ADHESIVE
                </NavLink>
                <Link
                  activeClass="active"
                  to="sectionGrout"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="anchor-ele"
                >
                  TILES GROUT
                </Link>
                <Link
                  activeClass="active"
                  to="sectionBeading"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="anchor-ele"
                >
                  TILES BEADING
                </Link>
                <Link
                  activeClass="active"
                  to="sectionSpacers"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="anchor-ele"
                >
                  TILES SPACERS
                </Link>
              </div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="#" className="list">
            <div className="dropdown">
              <p>Products</p>
              <div className="dropdown-content">
                <Link to="/" className="anchor-ele">
                  SANITARY WARE
                </Link>
                <Link className="anchor-ele">KITCHEN SINKS</Link>
                <Link className="anchor-ele">MANHOLE COVERS</Link>
                <Link className="anchor-ele">CP FITTINGS</Link>
                <Link className="anchor-ele">WATER TANK</Link>
                <Link className="anchor-ele">PVC AND WOODEN DOOR</Link>
              </div>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contactUs"
            exact
            className="list"
            activeClassName="active-link"
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
    <div className="headline-container">
      <h1 className="headline">
        Experience the Magic of Our High-Quality Tiles and Transform Your Home
      </h1>
      <p>
        Discover the perfect blend of elegance and durability at our tiles
        showroom. Our diverse collection caters to every style, offering a range
        of stunning tiles that transform spaces. Step in to explore quality,
        beauty, and the potential to create your dream home.
      </p>
    </div>
  </>
);

export default NavBar;
