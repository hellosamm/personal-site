"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import React from "react";

// const Projects = () => {
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const projects = [
//     // {
//     //   title: "PERSONAL CODING PROEJCTS",
//     //   description:
//     //     "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
//     //   languages: [],
//     //   bgColor: "#FBCDE1",
//     //   titleColor: "#DE1368",
//     //   languageColor: "black",
//     // },
//     {
//       title: "PERSONAL CODING PROEJCTS",
//       description:
//         "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
//       languages: [],
//       bgColor: "#F9F9F9",
//       titleColor: "black",
//       languageColor: "black",
//     },
//     // {
//     //   title: "PERSONAL CODING PROJECTS",
//     //   description:
//     //     "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
//     //   languages: [],
//     //   bgColor: "#E0F697",
//     //   titleColor: "#107930",
//     //   languageColor: "#107930",
//     // },
//     {
//       title: "COOKBOOK CLUB",
//       description: `When I noticed my cookbook club struggling with disjointed communication
//       and scattered docs I identified friction points and built a full-stack web app to
//       streamline planning and recipe sharing. I built the app with an API only  with a react
//       This app is powerd by an API-Only Rails backend with a React fronted, with data persisted in a PostgreSQL database
//       and images stored securely in an Amazon S3 bucket. Authenticate and user management are handled with Devise,
//       and the app is depolued on Render for reliability and scalability`,
//       languages: [
//         "React",
//         "Rails",
//         "PostgreSQL",
//         "Devise",
//         "Amazon S3",
//         "Render",
//       ],
//       bgColor: "#E7ADF0",
//       titleColor: "#9B0FB1",
//       languageColor: "#9B0FB1",
//     },
//     {
//       title: "PERSONAL SITE",
//       description:
//         "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
//       languages: ["TypeScript.js", "Vercel"],
//       bgColor: "#B8E7F6",
//       titleColor: "#1546A9",
//       languageColor: "#1546A9",
//     },

//     {
//       title: "INGREDIENT FINDER",
//       description:
//         "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
//       languages: ["Python", "React"],
//       bgColor: "#FFFDBA",
//       titleColor: "#F23",
//       languageColor: "#F23",
//     },
//   ];

//   const toggleExpand = (index: number) => {
//     setExpandedIndex(expandedIndex === index ? null : index);
//   };

//   return (
//     <div className={styles.projectsContainer}>
//       {projects.map((project, index) => (
//         <div
//           key={index}
//           className={`${styles.projectRow} ${
//             expandedIndex === index ? styles.expanded : ""
//           }`}
//           onClick={() => toggleExpand(index)}
//           style={{
//             backgroundColor: project.bgColor,
//           }}
//         >
//           <div className={styles.titleCard}>
//             <h3
//               className={styles.title}
//               style={{
//                 color: project.titleColor,
//               }}
//             >
//               {project.title}
//             </h3>
//             {expandedIndex !== index && <p className={styles.expandBtn}>+</p>}
//           </div>

//           {expandedIndex === index && (
//             <div className={styles.details}>
//               <div className={styles.languagesContainer}>
//                 {project.languages.map((lang, index) => (
//                   <span
//                     key={index}
//                     className={styles.languageTag}
//                     style={{ backgroundColor: project.languageColor }}
//                   >
//                     {lang}
//                   </span>
//                 ))}
//               </div>
//               <p>{project.description}</p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    // {
    //   title: "PERSONAL CODING PROEJCTS",
    //   description:
    //     "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
    //   languages: [],
    //   bgColor: "#FBCDE1",
    //   titleColor: "#DE1368",
    //   languageColor: "black",
    // },
    // {
    //   title: "PERSONAL CODING PROEJCTS",
    //   description:
    //     "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
    //   languages: [],
    //   bgColor: "#F9F9F9",
    //   titleColor: "black",
    //   languageColor: "black",
    // },
    // {
    //   title: "PERSONAL CODING PROJECTS",
    //   description:
    //     "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
    //   languages: [],
    //   bgColor: "#E0F697",
    //   titleColor: "#107930",
    //   languageColor: "#107930",
    // },
    {
      title: "COOKBOOK CLUB",
      description: `When I noticed my cookbook club struggling with disjointed communication and scattered docs I identified friction points and built a full-stack web app to streamline planning and recipe sharing.
      
      This app is powered by an API-Only Rails backend and a React fronted, with data persisted in a PostgreSQL database and images stored securely in an Amazon S3 bucket. Authenticate and user management are handled with Devise, and the app is deployed on Render.`,
      languages: [
        "React",
        "Rails",
        "PostgreSQL",
        "Devise",
        "Amazon S3",
        "Render",
      ],
      github: "https://github.com/hellosamm/cbc-v2",
      deployed: "https://cbc-v2.onrender.com",
      bgColor: "#E7ADF0",
      titleColor: "#9B0FB1",
      languageColor: "#9B0FB1",
    },
    {
      title: "PERSONAL SITE",
      description: `A personal portfolio site to showcase my work, experiment with frontend techniques, and have fun learning more about web development. I also included a space to share things I’m thinking about and highlight my hobbies and interests outside of work. `,
      languages: ["TypeScript", "Next.js", "Vercel"],
      github: "https://github.com/hellosamm/personal-site",
      deployed: "https://www.sammbakerr.com/",
      btnText: "You Are Here",
      bgColor: "#B8E7F6",
      titleColor: "#1546A9",
      languageColor: "#1546A9",
    },

    {
      title: "INGREDIENT FINDER",
      description:
        "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping me plan meals and reduce food waste",
      languages: ["Python", "React"],
      github: "https://github.com/hellosamm/ingredient_finder",
      deployed: "",
      bgColor: "#FFFDBA",
      titleColor: "#F23",
      languageColor: "#F23",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <div className={styles.title}>{project.title}</div>
          <div className={styles.languagesContainer}>
            {project.languages.map((lang, index) => (
              <div key={index} className={styles.languageTag}>
                {lang}
              </div>
            ))}
          </div>{" "}
          {project.description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))}
          <div className={styles.allBtns}>
            <a href={project.github} target="_blank" className={styles.btn}>
              Github
            </a>
            {project.deployed && (
              <a
                href={project.deployed}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btn}
              >
                {project.btnText || "Deployed Here"}
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
