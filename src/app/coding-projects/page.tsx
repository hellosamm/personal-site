import React from "react";
import { getThisWeekIMadePosts, getPostData } from "@/lib/posts";
import style from "../styles/AllArticles.module.css";
import Projects from "../components/Projects";

const CodingProjects = async () => {
  const postsMetaData = getThisWeekIMadePosts();

  const posts = await Promise.all(
    postsMetaData.map(async (post) => await getPostData(post.slug))
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="">
      <div className="">
        <h2>projects</h2>
      </div>
      <div className="">
        <div>
          {/* <p>Rails</p>
          <p>React</p>
          <p>Render</p>
          <p>REST APIs</p> */}
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default CodingProjects;
