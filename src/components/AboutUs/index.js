import Footer from "../Footer";
import NavBar from "../NavBar";
import "./index.css";

const AboutUs = () => (
  <>
    <NavBar />
    <div className="about-banner-container">
      <h1 className="heading-main">ABOUT US</h1>
    </div>
    <div className="get-to-know-main-container">
      <div className="get-to-know-container">
        <p className="get-to-topic">THE COMPANY</p>
        <h1 className="heading">Get To Know Us</h1>
        <p className="get-to-content">
          Bharathiya Tiles was founded in 2003 out of a desire to provide design
          excellence and service. With 20 years of experience as a licenced
          decorator with Competitive price. Our 10000 sq ft showroom offers a
          wide selection of top-quality tile brands from around the world, with
          options to suit every style and budget.
        </p>
        <p className="get-to-content">
          The Bharathiya Tiles team is passionate about delivering outcomes for
          its customers. We are the best Shop in Pondicherry To purchase Tiles
          For Your Home. "Our goal is to provide customers with the most recent
          global products and trends, as well as the best advice from qualified
          designers and decorators." We handle things a little differently in
          that we don't just sell you tiles; we work with your project and your
          budget to get the aesthetic you want.
        </p>
        <p className="get-to-content">
          Our range of products caters to the contract, wellness, residential,
          medical and leisure industries, responding with aplomb to all kinds of
          requirements from building to living and commercial to luxury.
        </p>
      </div>
    </div>
    <div className="mission-vision-main-container">
      <div className="mission-left-container">
        <h1 className="heading">WHY TO CHOOSE US</h1>
        <div className="mission-container">
          <h1 className="mission-vision-heading">OUR MISSION</h1>
          <p className="mission-vision-content">
            Our mission is to put innovation and the latest technology in
            manufacturing processes available to the latest aesthetic trends in
            architecture and interior design.
          </p>
        </div>
        <div className="mission-container">
          <h1 className="mission-vision-heading">OUR VISION</h1>
          <p className="mission-vision-content">
            Our real challenge is to be able to help, and even inspire, our
            clients to design and build homes and spaces where they would like
            to live and work.
          </p>
        </div>
      </div>
      <img
        src="https://static.wixstatic.com/media/dc8146_01de9786448a425b9865d0480ee07498~mv2.webp/v1/fill/w_700,h_479,al_c,lg_1,q_80,enc_auto/our-value.webp"
        alt="mission image"
        className="mission-image"
      />
    </div>
    <div className="experience-clients-container">
      <div className="happ-clients-container">
        <h1 className="happy-clients-heading">
          Design Your Dream Space With Our Exquisite Tiles, Crafted To Exceed
          Your Expectations
        </h1>
        <div className="counts-container">
          <div className="count">
            <h1>20</h1>
            <h2>EXPERIENCE</h2>
          </div>
          <div className="count">
            <h1>1000</h1>
            <h2>HAPPY CLIENTS</h2>
          </div>
          <div className="count">
            <h1>500</h1>
            <h2>DESIGNS</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="our-strength-main-container">
      <div className="our-strength-container">
        <h1 className="heading">OUR STRENGTH</h1>
        <p className="our-strength-para">
          In our stores, we have all the contemporary sanitary equipment,
          beautiful tiles, and bathroom fixtures you could possibly want. making
          us the go-to tile source.
        </p>
        <p className="our-strength-para">
          We sell adhesives, grout and levelling compound, sealers, protectors,
          tile backing boards, and primers for underfloor heating systems, among
          other things.
        </p>
        <p className="our-strength-para">
          We are really delighted with the excellent level of service we give.
          We make every attempt to give our clients with a pleasant purchasing
          experience. Our standards and attention to detail are unrivaled,
        </p>
      </div>
    </div>
    <Footer />
  </>
);

export default AboutUs;
