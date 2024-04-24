import { Link } from "react-router-dom";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./index.css";

const Tiles = () => (
  <>
    <NavBar />
    <img
      src="https://static.wixstatic.com/media/dc8146_267d2e5e2cd04bbfb5d11287a56bcac4~mv2.jpg/v1/fill/w_1558,h_418,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dc8146_267d2e5e2cd04bbfb5d11287a56bcac4~mv2.jpg"
      alt="tiles banner"
      className="tiles-banner-img"
    />
    <div className="tiles-description-main-container">
      <div className="carousel-conatiner-tile">
        <Carousel
          showStatus={false}
          autoPlay={true}
          interval={2000}
          infiniteLoop={true}
          showThumbs={false}
          className="carousel-top"
        >
          <div>
            <img
              src="https://static.wixstatic.com/media/dc8146_f15079b0dc2e442b8e90f907660e43d4~mv2.jpg/v1/fill/w_873,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dc8146_f15079b0dc2e442b8e90f907660e43d4~mv2.jpg"
              className="carousel1"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/dc8146_2d462c6463ba496882d41e6eb711b286~mv2.jpg/v1/fill/w_873,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dc8146_2d462c6463ba496882d41e6eb711b286~mv2.jpg"
              className="carousel1"
            />
          </div>
          <div>
            <img
              src="https://static.wixstatic.com/media/dc8146_bc35a8b061864c2bb7f0a4454fad3ed3~mv2.jpg/v1/fill/w_873,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dc8146_bc35a8b061864c2bb7f0a4454fad3ed3~mv2.jpg"
              className="carousel1"
            />
          </div>
        </Carousel>
      </div>
      <div className="tiles-description-content">
        <h1 className="tiles-heading">TILES</h1>
        <p className="tiles-content">
          Tiles are widely used for flooring in kitchen, bathrooms, parking
          lots, rooftops and also used as tabletops for dining rooms. Tiles are
          made from materials like ceramic, porcelain, glass, stone or metal. We
          can use tiles for any decorating style, as they are available in a
          number of sizes, shapes, colors, and textures
        </p>
        <p className="tiles-content">
          Your lingering taste to acquire the best in quality, design trend, we
          are sure your search will end at Taharat Sanitary’s wide range of
          vitrified, glazed vitrified with nano technology, high definition
          digital ceramic, matt, marble & wooden finished floor tiles, wall
          elevation tiles of different sizes and finish. The most stunning and
          in-demand digital picture print of wall and floor tiles is also
          available.
        </p>
        <p className="tiles-content">
          Tiles are gradually becoming the most popular choice for floors and
          walls due to their durability and simplicity of upkeep. Bharathiya
          Tiles offers a wide range of tiles in various materials, styles,
          colors, forms, sizes, and finishes.
        </p>
        <p className="tiles-content">
          Buyers like matte and glossy finish tiles, which are available in a
          variety of finishes. The tiles are also available in a variety of
          sizes ranging from large to little. The tiles are available in a wide
          range of colours and styles, including wooden, stone, 3D, and marble.
          Our Pondicherry Bharathiya Tiles store sells the whole tile line.{" "}
        </p>
      </div>
    </div>
    <div className="types-of-tile-heaidng-container">
      <div className="color-container">
        <h1 className="types-of-tiles-heading">Types Of Tiles And It's Uses</h1>
        <hr className="tile-hr-line" />
      </div>
    </div>
    <div className="type-of-tiles-main-container">
      <div className="types-content-img-container">
        <div className="types-content">
          <p>
            With more than 6000 years of function and development in its
            history, tile has truly withstood the test of time. And with a
            plethora of styles and sizes to choose from, tile has become more
            relevant and prevalent today than ever before. Tile has so much to
            offer: durability, ease-of-maintenance, and timeless beauty—an ideal
            choice for residential and commercial buildings alike.
          </p>
          <h2>Use Of Tiles</h2>
          <ul>
            <li>They’ll Look Good for Years</li>
            <li>Tiles Are Hypoallergenic</li>
            <li>Easy To Clean</li>
            <li>Versatile</li>
            <li>High-End Look</li>
            <li>Great for Underfloor Heating</li>
            <li>Something For Every Budget</li>
          </ul>
          <p>
            Tiles are widely used for flooring in kitchen, bathrooms, parking
            lots, rooftops and also used as tabletops for dining rooms. Tiles
            are made from materials like ceramic, porcelain, glass, stone or
            metal. We can use tiles for any decorating style, as they are
            available in a number of sizes, shapes, colors, and textures.
          </p>
        </div>
        <div className="types-of-tiles-images-container">
          <div className="first-container">
            <div className="image-type-list">
              <img
                src="https://static.wixstatic.com/media/dc8146_a245cb784d954e0f80d89eb2467d7a0e~mv2.webp/v1/fill/w_190,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/product-jpeg-500x500.webp"
                alt="image type"
                className="types-image"
              />
              <p>Glazed Vitrified Tiles</p>
            </div>
            <div className="image-type-list">
              <img
                src="https://static.wixstatic.com/media/dc8146_1bf0e76dd4414e65891f339f39330386~mv2.jpg/v1/fill/w_190,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Naomi-4.jpg"
                alt="image type"
                className="types-image"
              />
              <p>Polished Vitrified Tiles</p>
            </div>
            <div className="image-type-list">
              <img
                src="https://static.wixstatic.com/media/dc8146_4cd2d032a4fb444aa2c8c5d7b298b5c1~mv2.jpg/v1/crop/x_0,y_26,w_542,h_542/fill/w_190,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/COLORTILE-Ceramic-Wall-Tiles-Empire-Series-900x300.jpg"
                alt="image type"
                className="types-image"
              />
              <p>Ceramic Floor Tiles</p>
            </div>
          </div>
          <div className="first-container">
            <div className="image-type-list">
              <img
                src="https://static.wixstatic.com/media/dc8146_3253d624b15a452c9239aa230afb83da~mv2.webp/v1/fill/w_190,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Digital-Punch-Ceramic-Floor-Tile.webp"
                alt="image type"
                className="types-image"
              />
              <p>Ceramic Wall Tiles</p>
            </div>
            <div className="image-type-list">
              <img
                src="https://static.wixstatic.com/media/dc8146_0ebda7f5712e42eba721c54f3f962082~mv2.jpg/v1/crop/x_79,y_0,w_159,h_159/fill/w_190,h_190,al_c,lg_1,q_80,enc_auto/images.jpg"
                alt="image type"
                className="types-image"
              />
              <p>Elevation Tiles</p>
            </div>
            <div className="image-type-list">
              <img
                src="https://static.wixstatic.com/media/dc8146_16b3f1b672d6472db1a04f59e67f3835~mv2.webp/v1/fill/w_190,h_190,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/interlocking-parking-tile-1000x1000.webp"
                alt="image type"
                className="types-image"
              />
              <p>Parking Tiles</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <Link to="/tiles-adhesive">
          <button className="readmore-btn">Read More</button>
        </Link>
      </div>
    </div>
    <Footer />
  </>
);

export default Tiles;
