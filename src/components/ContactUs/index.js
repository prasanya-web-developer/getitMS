import NavBar from "../NavBar";
import Footer from "../Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import "./index.css";

const ContactUs = () => (
  <>
    <NavBar />
    <div className="contact-us-container">
      <div className="inside-container">
        <h1 className="contact-us-heading">LET US KNOW WHAT YOU THINK!</h1>
        <hr className="horizontal-line-contact-us" />
        <p className="contact-us-content">
          Whether you have a query regarding the details, a product's
          description, or a price. Each one of us has ears. We have a team ready
          to address any of your inquiries.
        </p>
        <div className="contact-container">
          <div className="icon-container2">
            <FaPhoneAlt className="icon" />
            <p className="contact-icon">7500275005</p>
          </div>
          <div className="address-content-icon">
            <div className="container">
              <FaLocationDot className="icon" />
              <p className="contact-icon">
                146/5 , ECR ROAD, kottupalayam , Opp.
                <br />
                To Raja Rajeshwari Kalyana Mandapam, <br />
                Puducherry - 605008
              </p>
            </div>
            <div className="container">
              <FaEnvelope className="icon" />
              <p className="contact-icon">support@bttiles.com</p>
            </div>
          </div>
          <div className="icon-container2">
            <CiClock2 className="icon" />
            <p className="contact-icon">
              Mon - Sat : 9:30 am to 8 PM <br /> Sun - 9:30 am to 2 pm
            </p>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
);

export default ContactUs;
