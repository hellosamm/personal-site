import React from "react";
import { getOnMyMindPosts, getPostData } from "@/lib/posts";
import style from "../styles/AllArticles.module.css";
import { formatDate } from "@/lib/date";
import OnMyMind2Btn from "../components/OnMyMind2Btn";

const OnMyMind = async () => {
  const postsMetaData = getOnMyMindPosts();

  const posts = await Promise.all(
    postsMetaData.map(async (post) => await getPostData(post.slug))
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container">
      <div className="sidebar">
        <div className="side-logo">
          <OnMyMind2Btn />
          {/* <img
            src="/hand-drawn-circle.svg"
            className={style.circle}
            width={300}
          />
          <h2 className={style.h2}>on my mind</h2> */}
        </div>
      </div>
      <div className="main">
        {posts.map((post) => (
          <article key={post.slug} className={style.articleCard}>
            <div className={style.header}>
              <h2>{post.title}</h2>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default OnMyMind;
