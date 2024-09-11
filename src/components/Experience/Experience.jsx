import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={require(`../../assets/history/${historyItem.imageSrc}`)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role} (${historyItem.organisation})`}</h3>
                  {/* <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p> */}
                  <p>Analyzed intricate healthcare data to derive actionable insights and implemented SQL-based solutions, Python scripts, and ETL processes to streamline operations. Created KPIs and dashboards to drive business performance and collaborated with cross-functional teams to achieve enhanced results.</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
