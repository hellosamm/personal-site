"use client";

import { useState } from "react";
import styles from "./Projects.module.css";
import React from "react";

const Projects = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const getColorForLanguage = (lang: string) => {
    const colors: Record<string, string> = {
      JavaScript: "#FDF68C",
      React: "#1749DF",
      Rails: "#FDF68C",
      Python: "#D069E0",
    };

    return colors[lang];
  };

  const projects = [
    {
      title: "COOKBOOK CLUB",
      description:
        "When I noticed my cookbook club struggling with disjointed communication and scattered docs I identified friction points and built a full-stack web app to streamline planning and recipe sharing.",
      languages: [
        "React",
        "Rails",
        "PostgreSQL",
        "Devise",
        "Amazon S3",
        "Render",
      ],
      bgColor: "#D069E0",
      titleColor: "#FFF",
    },
    {
      title: "PERSONAL SITE",
      description:
        "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
      languages: ["Python", "React"],
      bgColor: "#1749DF",
      titleColor: "#FFF",
    },
    {
      title: "INGREDIENT FINDER",
      description:
        "When I wanted an easier way to find recipes using ingredients I already had in my kitchen, I wrote a Python script to scrape data from my favorite recipe site and built a search feature that lets me search by ingredient, helping plan meals and reduce food waste",
      languages: ["Python", "React"],
      bgColor: "#2F9B50",
      titleColor: "#FFF",
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`${styles.projectRow} ${
            expandedIndex === index ? styles.expanded : ""
          }`}
          onClick={() => toggleExpand(index)}
          style={{
            backgroundColor: project.bgColor,
          }}
        >
          <h3
            className={styles.title}
            style={{
              color: project.titleColor,
            }}
          >
            {project.title}
          </h3>

          {expandedIndex === index && (
            <div className={styles.details}>
              <p>Languages: {project.languages.join(", ")}</p>
              <p>{project.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
