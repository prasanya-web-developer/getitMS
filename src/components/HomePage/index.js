import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./index.css";

const HomePage = () => (
  <>
    <NavBar />

    <Carousel
      showStatus={false}
      autoPlay={true}
      interval={2000}
      infiniteLoop={true}
      showThumbs={false}
      className="carousel"
    >
      <div>
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1713798204/Tiles/Kitchen/fc9zqto2h7fnezyzidsq.jpg"
          className="carousel1"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1713798329/Tiles/Sanitary/bkttznqu39zenmbmpogc.jpg"
          className="carousel1"
        />
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/dffu1ungl/image/upload/v1713798277/Tiles/CP%20Fittings/hl61qsmbfiirkqyrsuwk.jpg"
          className="carousel1"
        />
      </div>
    </Carousel>

    <div className="Product-quality-container">
      <div className="image-content-container">
        <img
          src="https://static.wixstatic.com/media/dc8146_4428c3be2fdb4005be57865465b124c9~mv2.png/v1/fill/w_80,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/exceptional-removebg-preview.png"
          alt="products"
          className="quality-image"
        />
        <p>Exceptional products</p>
      </div>
      <div className="image-content-container">
        <img
          src="https://static.wixstatic.com/media/dc8146_cf900c10fc5f4288b1db7559569b09c2~mv2.png/v1/crop/x_0,y_19,w_256,h_237/fill/w_113,h_104,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/luxury-removebg-preview.png"
          alt="products"
          className="quality-image"
        />
        <p>Renowned luxury brands</p>
      </div>
      <div className="image-content-container">
        <img
          src="https://static.wixstatic.com/media/dc8146_967fa298addb48db846dfcbd9f2d68e2~mv2.png/v1/crop/x_0,y_51,w_481,h_397/fill/w_147,h_121,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/modern-store-removebg-preview.png"
          alt="products"
          className="quality-image"
        />
        <p>Modern storefronts</p>
      </div>
      <div className="image-content-container">
        <img
          src="https://static.wixstatic.com/media/dc8146_34bcdc39e3fb4d67a8af439d7fe6b919~mv2.png/v1/fill/w_113,h_113,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/customer_service-removebg-preview.png"
          alt="products"
          className="quality-image"
        />
        <p>Diligent customer service</p>
      </div>
    </div>
    <div className="description-main-container">
      <div className="carousels-container">
        <Carousel
          showStatus={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          className="carousel-second"
        >
          <div>
            <img
              src="https://static.wixstatic.com/media/dc8146_374606c3529b497f91151cd2b939d49d~mv2.jpg/v1/fill/w_671,h_579,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dc8146_374606c3529b497f91151cd2b939d49d~mv2.jpg"
              className="carousel2"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dffu1ungl/image/upload/v1713797690/Tiles/Others/kutxvyvk10nx1woahrgo.jpg"
              className="carousel2"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/dc8146_70fe7d13ac16442a988d0f0b40b393f8~mv2.jpg/v1/fill/w_671,h_579,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/dc8146_70fe7d13ac16442a988d0f0b40b393f8~mv2.jpg"
              className="carousel2"
            />
          </div>
        </Carousel>
      </div>
      <div className="description-content-container">
        <h1 className="description-heading">
          Immerse yourself in the world of <br />
          Bharathiya Tiles
        </h1>
        <hr className="horizontal-line" />
        <p className="description">
          Your house reflects your excellent taste. That's why, at Bharathiya
          Tiles, we're not simply concerned with what we sell or how we do it.
          We think that understanding your "why" is our raison d'être. Every
          decision we make is a conscious step closer to our mission of
          selecting, creating, and distributing the greatest brands and goods
          for homes with sophisticated preferences and an eye for the good life.
        </p>
        <p className="description">
          Bharathiya Tiles is the largest tiles shop in Pondicherry and is
          dedicated to giving the best goods and services to its clients. We
          also provide attentive and polite delivery services for your goods,
          including tiles wholesale in Pondicherry. Whichever tile patterns you
          choose, give our Tiles showroom a call or visit one of our Tiles
          stores. TILES WHOLESALERS / TILES SHOWROOM / TILES DEALERS IN
          PONDICHERRY
        </p>
        <div className="description-img-container">
          <div className="description-img-content">
            <img
              src="https://static.wixstatic.com/media/dc8146_3815f20231e54d269221b516163ab4af~mv2.png/v1/fill/w_63,h_63,al_c,lg_1,q_85,enc_auto/living-room.png"
              alt="img1"
              className="description-mg"
            />
            <p className="names-img">Living Room</p>
          </div>
          <div className="description-img-content">
            <img
              src="https://static.wixstatic.com/media/dc8146_4bcdb7418a6b4de8b58fd17f1186fc75~mv2.png/v1/fill/w_63,h_63,al_c,lg_1,q_85,enc_auto/pan.png"
              alt="img2"
              className="description-mg"
            />
            <p className="names-img">Kitchen</p>
          </div>
          <div className="description-img-content">
            <img
              src="https://static.wixstatic.com/media/dc8146_d992edb7b7bc43199b3b0481a1f61836~mv2.png/v1/fill/w_63,h_63,al_c,lg_1,q_85,enc_auto/bath-tub.png"
              alt="img3"
              className="description-mg"
            />
            <p className="names-img">Bathroom</p>
          </div>
          <div className="description-img-content">
            <img
              src="https://static.wixstatic.com/media/dc8146_1c7a0d93b6eb47d4810a1e256ff1faa5~mv2.png/v1/fill/w_63,h_63,al_c,lg_1,q_85,enc_auto/outdoor-cafe.png"
              alt="img4"
              className="description-mg"
            />
            <p className="names-img">Outdoor</p>
          </div>
          <div className="description-img-content">
            <img
              src="https://static.wixstatic.com/media/dc8146_0ea528d1834c43f4899b6bb5809d7a50~mv2.png/v1/fill/w_63,h_63,al_c,lg_1,q_85,enc_auto/bed%20(1).png"
              alt="img5"
              className="description-mg"
            />
            <p className="names-img">Bedroom</p>
          </div>
        </div>
      </div>
    </div>
    <div className="why-chooseus-container">
      <div className="why-chooseus-content-container">
        <h1 className="heading">Why To Choose Us</h1>
        <div className="why-choose-content">
          <div className="why-choose-row">
            <div className="why-choose-description">
              <div className="why-choose-sub-heading">
                <h1 className="why-choose-sub-content-heading">
                  Proper quality check
                </h1>
                <p className="why-choose-sub-content">
                  We take pleasure in the quality of our items at our firm. We
                  do several quality tests on all of our items to guarantee that
                  what we give to our clients is of the highest quality.
                </p>
              </div>
            </div>
            <div className="why-choose-description">
              <div className="why-choose-sub-heading">
                <h1 className="why-choose-sub-content-heading">
                  Free Consultation
                </h1>
                <p className="why-choose-sub-content">
                  At our store, you will be able to receive free professional
                  guidance on choosing the perfect home appliiance and other
                  modular components that suit your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="why-choose-row">
            <div className="why-choose-description">
              <div className="why-choose-sub-heading">
                <h1 className="why-choose-sub-content-heading">
                  Hassle free services
                </h1>
                <p className="why-choose-sub-content">
                  Our company offers convenient solutions that make your life
                  easier.
                </p>
              </div>
            </div>
            <div className="why-choose-description">
              <div className="why-choose-sub-heading">
                <h1 className="why-choose-sub-content-heading">
                  Smart Solution
                </h1>
                <p className="why-choose-sub-content">
                  Dynamic offers a smart solution for limited spaces. It is easy
                  to install and maintain with a contemporary design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="our-products-main-container">
      <h1 className="heading">Our Products</h1>
      <div className="our-produtcs-img">
        <img
          src="https://static.wixstatic.com/media/dc8146_c59150c732ae4f09b1b2bcdda17fef9d~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/516280.png"
          alt="img"
        />
        <img
          src="https://static.wixstatic.com/media/dc8146_da9a9600e2934d6cb536e4eb4c001b2f~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2203777.png"
          alt="img"
        />
        <img
          src="https://static.wixstatic.com/media/dc8146_5a05e68ee4bd47879e619ea92c1dc20b~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1444602.png"
          alt="img"
        />
        <img
          src="https://static.wixstatic.com/media/dc8146_26e5aa213a774d1b8528d05037eb1fec~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/900661.png"
          alt="img"
        />
        <img
          src="https://static.wixstatic.com/media/dc8146_55aab972512e497d82f74420e559247c~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1041779.png"
          alt="img"
        />
        <img
          src="https://static.wixstatic.com/media/dc8146_f1b7d84cd4c240ee9d82fb799d81329b~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1595245-200.png"
          alt="img"
        />
        <img
          src="https://static.wixstatic.com/media/dc8146_af473418454140769e429d9bdb79b0ec~mv2.png/v1/crop/x_0,y_4,w_200,h_188/fill/w_90,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/948928-200.png"
          alt="img"
        />
        <img
          src="https://static.wixstatic.com/media/dc8146_1e6a04cb41dd45c89b3ca56166b564b2~mv2.png/v1/fill/w_84,h_84,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/148281.png"
          alt="img"
        />
      </div>
      <table>
        <tr>
          <td>
            <Link to="/tiles" className="link">
              TILES
            </Link>
          </td>

          <td>SANITARYWARE</td>
          <td>KITCHEN SINK</td>
          <td>CP FITTINGS</td>
          <td>WATRE TANK</td>
          <td>MANHOLE COVERS</td>
          <td>DOORS</td>
        </tr>
      </table>
    </div>
    <div className="bottom-container">
      <div className="special-collection-container">
        <h1 className="heading center">We Specialize in Brand - Orientbell</h1>
        <p className="special-content">
          As authorized Orientbell dealers in Pondicherry, we offer a wide
          variety of top-quality tiles for all of your flooring and wall needs.
          Whether you're looking for modern or traditional styles, large or
          small tiles, we've got you covered. Visit our showroom today to see
          our exclusive selection, as well as to get expert advice from our
          knowledgeable staff.
        </p>
        <p className="special-content">
          At Orientbell, we are your one-stop-shop for all your tile needs. As
          the leading wholesaler of tiles in Pondicherry, we are dedicated to
          providing the best quality tiles to our customers. With a wide range
          of styles and designs, our showroom is sure to have something for
          everyone. Come and explore our collection today, and let us help you
          find the perfect tiles for your space.
        </p>
      </div>

      <div className="special-collection-container">
        <h1 className="heading center">
          Elevate Your Interiors with Our Collections
        </h1>
        <p className="special-content">
          As the premier sanitary wholesalers in Pondicherry, we offer an
          unparalleled selection of top-quality tiles and other sanitary
          products. Our sanitary showroom in Pondicherry is staffed by
          knowledgeable experts who can help you find the perfect products to
          meet your needs and budget. Whether you’re a homeowner or a business
          owner, we have the products and expertise to help you create the
          perfect space.
        </p>
        <p className="special-content">
          At our Kitchen Sink Dealers in Pondicherry, we pride ourselves on
          offering expert advice and high-quality kitchen sink options. Our
          knowledgeable staff is dedicated to helping you find the perfect sink
          to match your kitchen's style and needs. Come visit us today and
          discover the best kitchen sink options available in Pondicherry.
        </p>
        <p className="special-content">
          Transform your bathroom into an oasis of style and functionality with
          our Bath Fittings service in Pondicherry. Our showroom boasts a wide
          selection of high-quality bath fittings that are sure to impress. As
          authorized dealers, we can provide you with expert advice on the
          perfect fittings for your bathroom, ensuring that you get the best
          possible solution.
        </p>
      </div>
    </div>

    <Footer />
  </>
);

export default HomePage;
