import React from "react";
import styles from "./form.module.css";
import MoreButton from "./../Button/MoreButton";

function Form() {
  return (
    <div className={styles.formbg}>
      <div className={styles.form}>
        <h1 className={styles.header}> stay connected </h1>
        <h3 className={styles.news}> beates newsletter </h3>
        <p className={styles.statement}>
          sign up now to hear about new stories, product drops, collaborations,
          and all things beats - straight from your box
        </p>
        <input
          type="email"
          placeholder="Enter Your Email"
          className={styles.email}
        />
        <div className={styles.terms}>
          <input type="checkbox" className={styles.check} />
          <p>
            <span>*</span> I Am 16 Years Of Age Or Older And Agree With The
            Terms & Conditions And Privacy Policy
          </p>
        </div>
        <p className={styles.terms}>
          <input type="checkbox" className={styles.check} />
          <span>*</span> I Would Like To Receive Marketing Emails From Beats
        </p>
        <MoreButton btnName="sign up" />
      </div>
    </div>
  );
}

export default Form;
