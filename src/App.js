import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import Tiles from "./components/Tiles";
import TilesAdhesive from "./components/TilesAdhesive";
import ContactUs from "./components/ContactUs";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/aboutUs" component={AboutUs} />
    <Route exact path="/tiles" component={Tiles} />
    <Route exact path="/tiles-adhesive" component={TilesAdhesive} />
    <Route exact path="/contactUs" component={ContactUs} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
);

export default App;
