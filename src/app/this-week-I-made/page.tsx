import React from "react";
import { getThisWeekIMadePosts, getPostData } from "@/lib/posts";
import style from "../styles/AllArticles.module.css";
import { formatDate } from "@/lib/date";

const ThisWeekIMade = async () => {
  const postsMetaData = getThisWeekIMadePosts();

  const posts = await Promise.all(
    postsMetaData.map(async (post) => await getPostData(post.slug))
  );

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container">
      <div className="sidebar">
        <h2>this week I made</h2>
      </div>
      <div className="main">
        {posts.map((post) => (
          <article key={post.slug} className={style.articleCard}>
            <div className={style.header}>
              <h2>{post.title}</h2>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            {/* <div>
              {post.tags.map((tag) => (
                <>{tag}</>
              ))}
            </div> */}
          </article>
        ))}
      </div>
    </div>
  );
};

export default ThisWeekIMade;
