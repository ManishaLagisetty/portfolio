import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={require(`../../assets/${skill.imageSrc}`)} alt={skill.title} />
                </div>
                <p style={{color: 'black'}}>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div>
        <ul>
          <li>AWS Certified Cloud Practitioner</li>
          <li>Microsoft Azure Fundamentals</li>
        </ul>
      </div> */}
    </section>
  );
};
