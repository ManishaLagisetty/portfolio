import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to connect with me or explore my repositories to see some of my work. Let's collaborate and create something amazing!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:manishanari6@gmail.com">manishalagisetty@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            onClick={() => window.open('https://www.linkedin.com/in/manishalagisetty/')}
          />
          <a href="https://www.linkedin.com/in/manishalagisetty/">linkedin.com/manishalagisetty</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" onClick={() => window.open('https://github.com/ManishaLagisetty')}/>
          <a href="https://github.com/ManishaLagisetty" target="_blank">github.com/ManishaLagisetty</a>
        </li>
      </ul>
    </footer>
  );
};
