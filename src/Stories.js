import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import styles from "./stories.module.css";
import Tile from "./shared/components/Tile/Tile";

import ProductRoutes from "./product/ProductRoutes/Product";
import SupportRoutes from "./support/SupportRoutes/Support";
import SearchRoutes from "./search/SearchRoutes/Search";
import MenuBarRoutes from "./menubar/MenuBarRoutes/MenuBar";
import Hamburger from "./shared/components/Hamburger/Hamburger";
import StoriesCard from "./shared/components/StoriesCard/StoriesCard";
import readStoriesRoutes from "./readStories/readStoriesRoutes/readStories";
class Stories extends React.Component {
  state = {
    visible: false,
  };

  render() {
    const menuContent = this.state.visible ? <MenuBarRoutes /> : null;
    return (
      <div className={styles.storiesHome}>
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
          <Hamburger
            onClick={() => {
              this.setState({
                visible: !this.state.visible,
              });
            }}
          />
        </header>
        {menuContent}
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
        <section className={styles.floatStories}>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/powerbeats-yuki.og.jpg")}
              headline={"The queen of all trades puts powerbeats to the test"}
            />
          </Link>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/card-belli-ellish.png")}
              headline={
                "Inside the creative process with billie eilish and solo pro"
              }
            />
          </Link>
        </section>
        <section className={styles.floatStories}>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/brodinski.jpg")}
              headline={"Brodinski: French electronics meets sourther trap"}
            />
          </Link>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/donwood.jpg")}
              headline={"Radiohead artist details his beats customs read"}
            />
          </Link>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/sacai.jpg")}
              headline={
                "Beats / sacai: a celebration of creativity and unique style"
              }
            />
          </Link>
        </section>
        <section className={styles.floatStories}>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/don-collar.png")}
              headline={
                "How don c's collab pays homage to the nba, chicago and music"
              }
            />
          </Link>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/listeningmodes.jpg")}
              headline={"control your sound with listening modes"}
            />
          </Link>
        </section>
        <section className={styles.floatStories}>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/zerodark.jpg")}
              headline={"a 24-hor relay chasing the icelanding sun"}
            />
          </Link>
          <Link to="/readStories">
            <StoriesCard
              img={require("./shared/assets/stories-assets/pharrell.jpg")}
              headline={
                "the process and inspiration behind pharrell's more matte collection"
              }
            />
          </Link>
        </section>
      </div>
    );
  }
}

export default function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Stories} />
      <Route path="/product" component={ProductRoutes} />
      <Route path="/support" component={SupportRoutes} />
      <Route path="/search" component={SearchRoutes} />
      <Route path="/menubar" component={MenuBarRoutes} />
      <Route path="/readStories" component={readStoriesRoutes} />
    </Switch>
  );
}
