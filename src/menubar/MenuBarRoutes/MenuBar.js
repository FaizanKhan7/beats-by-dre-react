import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import ProductRoutes from "../../product/ProductRoutes/Product";
import SupportRoutes from "../../support/SupportRoutes/Support";
import styles from "./menubar.module.css";
import Tile from "../../shared/components/Tile/Tile";
class MenuBar extends Component {
  state = {
    aboutCompany: false,
  };
  render() {
    const aboutMenuContent = this.state.aboutCompany
      ? aboutCompanyMenu()
      : null;
    return (
      <div>
        <ul className={styles.menuContent}>
          <Link to="/">
            <li>
              <Tile tileName="Stories" />
            </li>
          </Link>
          <Link to="/product">
            <li>
              <Tile tileName="Product" />
            </li>
          </Link>
          <Link to="/support">
            <li>
              <Tile tileName="Support" />
            </li>
          </Link>
          <li className={styles.companyStyles}>
            <Tile tileName="Company" />
            <i
              className={"fas fa-plus"}
              onClick={() => {
                this.setState({
                  aboutCompany: !this.state.aboutCompany,
                });
              }}
            ></i>
          </li>
          {aboutMenuContent}
        </ul>
      </div>
    );
  }
}

function aboutCompanyMenu() {
  return (
    <ul className={styles.aboutCompany}>
      <li>About Us</li>
      <li>Register Your Beats</li>
      <li>Special Offer</li>
      <li>Legal</li>
      <li>Trademark</li>
    </ul>
  );
}

export default function MenuRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={MenuBar} />
      <Route path="/product" component={ProductRoutes} />
      <Route path="/support" component={SupportRoutes} />
    </Switch>
  );
}
