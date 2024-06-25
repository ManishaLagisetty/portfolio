import React, { useState, useRef, useEffect } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { Dialog } from 'primereact/dialog';
        

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demos, source },
}) => {

  const [visible, setVisible] = useState(false);
  const videoRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState('');

  const playDemo = (url) => {
    setVideoUrl(url);
    setVisible(true);
  }

  useEffect(() => {
    if(visible) {
      setInterval(() => {
        videoRef?.current?.play();
      }, 1000);
    }
  }, [visible]);

  return (
    <>
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {
          demos.map((demo) => {
            return (
              <a href='javascript:void(0)' className={styles.link} onClick={() => playDemo(demo.url)}>
                {demo.title}
              </a>
            )
        })
      }
        <a href={source} className={styles.link} target="_blank">
          Source
        </a>
      </div>
    </div>
    <Dialog visible={visible} style={{ width: '50vw' }} 
    onHide={() => {if (!visible) return; setVisible(false); }}
    breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
      <video className={styles.demo_video} ref={videoRef} controls>
            <source src={videoUrl} type="video/mp4" />
      </video>
    </Dialog>
    </>
  );
};
