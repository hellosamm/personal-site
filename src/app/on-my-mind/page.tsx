import React from "react";
import { getOnMyMindPosts, getPostData } from "@/lib/posts";
import style from "../styles/AllArticles.module.css";

const OnMyMind = async () => {
  const postsMetaData = getOnMyMindPosts();

  const posts = await Promise.all(
    postsMetaData.map(async (post) => await getPostData(post.slug))
  );

  return (
    <div className="container">
      <div className="sidebar">
        <h2>on my mind</h2>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default OnMyMind;

// import React from "react";
// import { getThisWeekIMadePosts, getPostData } from "@/lib/posts";
// import style from "../styles/AllArticles.module.css";

// const ThisWeekIMade = async () => {
//   const postsMetaData = getThisWeekIMadePosts();

//   const posts = await Promise.all(
//     postsMetaData.map(async (post) => await getPostData(post.slug))
//   );

//   return (
//     <div className="container">
//       <div className="sidebar">
//         <h2>this week I made</h2>
//       </div>
//       <div className="main">
//         {posts.map((post) => (
//           <article key={post.slug} className={style.articleCard}>
//             <div className={style.header}>
//               <h2>{post.title}</h2>
//               <>{post.date}</>
//             </div>
//             <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
//             {/* <div>
//               {post.tags.map((tag) => (
//                 <>{tag}</>
//               ))}
//             </div> */}
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThisWeekIMade;
