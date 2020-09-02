import React from "react";
import styles from "./footer.module.css";
import BackTopTop from "../Button/BackToTop";

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={styles.footerMob}>
          <div className={styles.footerMobIcons}>
            <i className={"fab fa-twitter"}></i>
            <i className={"fab fa-facebook-f"}></i>
            <i className={"fab fa-youtube"}></i>
            <i className={"fab fa-instagram"}></i>
          </div>
          <div className={styles.locationNewsletterMob}>
            <h4>Location</h4>
            <p>
              UNITED STATES <i className={"fas fa-chevron-right"}></i>
            </p>
          </div>
          <div className={styles.locationNewsletterMob}>
            <h4>Newsletter</h4>
            <p>
              SIGN UP <i className={"fas fa-chevron-right"}></i>
            </p>
          </div>
          <div className={styles.beatsCopyright}>
            <img
              className={styles.logobottom}
              src={require("../../assets/stories-assets/beats-logo.png")}
              alt="beats-logo"
            />
            <p>Copyright &copy; 2020 Apple Inc. All rights reserved </p>
          </div>
        </div>
        <div className={styles.footerTab}>
          <div className={styles.footerContent}>
            <h4 className={styles.footerHeading}>Products</h4>
            <ul className={styles.listLength}>
              <li>view all</li>
              <li>powerbeats</li>
              <li>powerbeats pro</li>
              <li>solopro</li>
              <li>beats solo&sup2; wireless</li>
              <li>beats studio&sup2; wireless</li>
              <li>beats&supX;</li>
              <li>beats ep</li>
              <li>urbeats&sup3;</li>
              <li>urbeats&sup3; with lighting connector</li>
              <li>beats pill+</li>
              <li>special offers</li>
            </ul>
          </div>
          <div className={styles.footerContent}>
            <h4 className={styles.footerHeading}>Support</h4>
            <ul className={styles.listLength}>
              <li>product help</li>
              <li>service & warranty</li>
              <li>register your beats</li>
              <li>update your beats</li>
              <li>authorized retailers</li>
              <li>contact support</li>
              <li>international numbers</li>
            </ul>
          </div>
          <div className={styles.footerContent}>
            <h4 className={styles.footerHeading}>Company</h4>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>careers</li>
            </ul>
            <div className={styles.footerContent}>
              <h4 className={styles.footerHeading}>Legal</h4>
              <ul>
                <li>Terms of use</li>
                <li>Privacy</li>
                <li>trademark</li>
                <li>promotion terms</li>
              </ul>
            </div>
          </div>
          <div className={styles.footerContent}>
            <h4 className={styles.footerHeading}>Follow Us</h4>
            <ul className={styles.IconsTab}>
              <li>
                <i className={"fab fa-twitter"}></i>
              </li>
              <li>
                <i className={"fab fa-facebook-f"}></i>
              </li>
              <li>
                <i className={"fab fa-youtube"}></i>
              </li>
              <li>
                <i className={"fab fa-instagram"}></i>
              </li>
            </ul>
            <div className={styles.footerContent}>
              <h4 className={styles.footerHeading}>Location</h4>
              <ul>
                <li>UNITED STATES | CHANGE</li>
              </ul>
            </div>
            <div className={styles.footerContent}>
              <h4 className={styles.footerHeading}>Newsletter</h4>
              <ul>
                <li>SIGN UP</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.beatsCopyright2}>
          <img
            className={styles.logobottom}
            src={require("../../assets/stories-assets/beats-logo.png")}
            alt="beats-logo"
          />
          <p>Copyright &copy; 2020 Apple Inc. All rights reserved </p>
          <BackTopTop />
        </div>
      </footer>
    );
  }
}
