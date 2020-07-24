import React from "react";
import styles from "./form.module.css";

function Form() {
  return (
    <div className={styles.form}>
      <h1 className={styles.header}> stay connected </h1>
      <h4 className={styles.news}> beates newsletter </h4>
      <p className={styles.statement}>
        sign up now to hear about new stories, product drops, collaborations,
        and all things beats - straight from your box
      </p>
      <input
        type="email"
        placeholder="Enter Your Email"
        className={styles.email}
      />
      <p>
        <input type="checkbox" />
        <span>*</span> I Am 16 Years Of Age Or Older And Agree With The Terms &
        Conditions And Privacy Policy
      </p>
      <p>
        <input type="checkbox" />
        <span>*</span> I Would Like To Receive Marketing Emails From Beats
      </p>
    </div>
  );
}

export default Form;
