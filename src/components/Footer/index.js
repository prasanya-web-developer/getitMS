import { Link } from "react-router-dom";
import { LiaCopyrightSolid } from "react-icons/lia";
import "./index.css";

const Footer = () => (
  <>
    <div className="footer-container">
      <div className="footer-content-section">
        <div className="footer-content">
          <h1>About Us</h1>
          <p>
            Bharathiya Tiles was founded in 2003 out of a desire to provide
            design excellence and service. With 20 years of experience as a
            licenced decorator
          </p>
        </div>
        <div className="footer-content">
          <h1>Quick Links</h1>
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/aboutUs" className="link">
              <li>About</li>
            </Link>
            <Link to="/tiles" className="link">
              <li>Tiles</li>
            </Link>
            <Link to="/ContactUs" className="link">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
        <div className="footer-content margin-adjust">
          <h1>Products</h1>
          <ul>
            <Link to="#" className="link">
              <li>SanitaryWare</li>
            </Link>
            <Link to="#" className="link">
              <li>Tiles</li>
            </Link>
            <Link to="#" className="link">
              <li>Chimney Hob</li>
            </Link>
            <Link to="#" className="link">
              <li>Kitchen</li>
            </Link>
            <Link to="#" className="link">
              <li>Manhole Cover</li>
            </Link>
            <Link to="#" className="link">
              <li>CP Fitting</li>
            </Link>
            <Link to="#" className="link">
              <li>Water Tank</li>
            </Link>
            <Link to="#" className="link">
              <li>PVC & Wooden Door</li>
            </Link>
          </ul>
        </div>
        <div className="footer-content">
          <h1>Address</h1>
          <p>
            146/5 , ECR ROAD , kottupalayam , Opp. To Raja Rajeshwari Kalyana
            Mandapam, Puducherry - 605008 <br /> Call <br /> 7500275005
          </p>
        </div>
      </div>
    </div>
    <div className="my-container">
      <p className="copyrights-content">
        <LiaCopyrightSolid /> 2024 by Wonder Tiles | Developed by{" "}
        <a href="https://www.linkedin.com/in/prasanya-shankar/" target="_blank">
          Prasanya Shankar
        </a>
      </p>
    </div>
  </>
);

export default Footer;
