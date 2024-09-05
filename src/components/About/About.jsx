import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/laptopImage.png")}
          alt="Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I'm a full stack developer with With a proven track record
                spanning over 4+ years as a Full Stack Developer, I bring a
                wealth of experience in developing dynamic and efficient web
                applications. My expertise covers front-end technologies such as
                HTML5, CSS3, JavaScript, TypeScript, and ReactJS, alongside
                back-end frameworks like Spring Boot, Hibernate, and Node.js.
                I'm adept with cloud platforms including AWS, Microsoft Azure,
                and GCP, and skilled in leveraging Docker, Jenkins, and
                Kubernetes for deployment. Proficient in databases like MySQL,
                PostgreSQL, Oracle, and MongoDB, I deliver robust, scalable
                solutions that drive business growth and enhance client
                satisfaction.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer</h3>
              <p>
                I have developed intuitive and responsive user interfaces for
                various projects, utilizing HTML5, CSS3, and JavaScript along
                with tools like Figma and Adobe XD for creating wireframes and
                prototypes. My work has significantly enhanced user experience
                and satisfaction through effective collaboration with
                cross-functional teams and implementation of user feedback.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
