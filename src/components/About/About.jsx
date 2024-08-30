import React from "react";
import styles from "./About.module.css";
import aboutMeImage from "../../assets/about/aboutMeImage.jpeg"

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        {/* <img
          src={aboutMeImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>Frontend Developer</h3> */}
              <p>
              A passionate data analyst and AI enthusiast with a knack for transforming complex data into actionable insights. I have a strong background in healthcare data analysis, predictive modeling, and developing interactive dashboards. Driven by a desire to leverage technology for impactful solutions, I actively seek opportunities to apply my expertise to real-world applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>UI Designer</h3> */}
              <p>
              Always eager to learn new technologies, I strive to expand my skill set and stay ahead in the ever-evolving tech landscape. Outside of work, I find joy in painting and crafts, which fuels my creativity and attention to detail in my analytical work.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
