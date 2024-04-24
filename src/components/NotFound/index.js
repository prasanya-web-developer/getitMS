import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => (
  <div className="not-found-page">
    <img
      src="https://img.freepik.com/premium-vector/gradient-no-data-illustration_52683-125203.jpg?w=826"
      alt="not-found-image"
      className="not-found-img"
    />
    <p>
      we are sorry, the page you requested could not be found. Please go back to
      the homepage.
    </p>

    <button type="button">
      <Link to="/" className="link">
        Go To Home
      </Link>
    </button>
  </div>
);

export default NotFound;
