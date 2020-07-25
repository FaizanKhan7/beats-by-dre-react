import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import styles from "./stories.module.css";
import Tile from "./shared/components/Tile/Tile";
import ProductRoutes from "./product/ProductRoutes/Product";
import SupportRoutes from "./support/SupportRoutes/Support";
import SearchRoutes from "./search/SearchRoutes/Search";
import MenuBarRoutes from "./menubar/MenuBarRoutes/MenuBar";
import Hamburger from "./shared/components/Hamburger/Hamburger";
import Form from "./shared/components/Form/Form";

function Stories() {
  return (
    <div className={styles.storiesHome}>
      <Form />
      <header className={styles.headerStyles}>
        <Link to="/search">
          <i className={"fas fa-search"}></i>
        </Link>
        <Link to="/">
          <img
            src={require("./shared/assets/stories-assets/beats-logo.png")}
            alt="beats-logo"
          />
        </Link>
        <Link to="menuBar">
          <Hamburger />
        </Link>
      </header>
      <header className={styles.headerStylesTab}>
        <Link to="/">
          <img
            src={require("./shared/assets/stories-assets/beats-logo.png")}
            alt="beats-logo"
          />
        </Link>
        <Link to="/">
          <Tile tileName="Stories" />
        </Link>
        <Link to="/product">
          <Tile tileName="Products" />
        </Link>
        <Link to="/support">
          <Tile tileName="Support" />
        </Link>
        <Link to="/search">
          <i className={"fas fa-search"}></i>
        </Link>
      </header>
      <p>This is stories page</p>
    </div>
  );
}

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Stories} />
      <Route path="/product" component={ProductRoutes} />
      <Route path="/support" component={SupportRoutes} />
      <Route path="/search" component={SearchRoutes} />
      <Route path="/menubar" component={MenuBarRoutes} />
    </Switch>
  );
}
