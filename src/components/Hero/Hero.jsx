import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Manisha Lagisetty</h1>
        <p className={styles.description}>
        Currently pursuing Master's in Data Analytics at San Jose State University.
        </p>
        <a href="src/data/resume.pdf" className={styles.contactBtn} target='_blank' rel='noopener noreferrer'>
          Resume
        </a>
      </div>
      <img
        src="../../assets/hero/my-profle-pic.jpg"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
