import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypeExternalLinks from "rehype-external-links";

const postsDirectory = path.join(process.cwd(), "src/posts");

export type PostData = {
  slug: string;
  title: string;
  date: string;
  category: string;
  tags?: string[];
  contentHtml: string;
};

export function getThisWeekIMadePosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug: matterResult.data.slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        category: matterResult.data.category,
      };
    })
    .filter((post) => post.category.toLowerCase() === "this-week-i-made"); // Only TWIM posts

  return posts;
}

export function getOnMyMindPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      return {
        slug: matterResult.data.slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        category: matterResult.data.category,
      };
    })
    .filter((post) => post.category.toLowerCase() === "on-my-mind"); // Only TWIM posts

  return posts;
}

export async function getPostData(slug: string) {
  const fileNames = fs.readdirSync(postsDirectory);

  const matchFile = fileNames.find((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return matterResult.data.slug?.toLowerCase() === slug.toLowerCase();
  });

  if (!matchFile) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const fullPath = path.join(postsDirectory, matchFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const contentHtml = // await remark().use(html).process(matterResult.content)
    (
      await remark()
        .use(remarkParse)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeExternalLinks, {
          target: "_blank",
          rel: ["noopener", "noreferrer"],
        })
        .use(rehypeStringify)
        .process(matterResult.content)
    ).toString();

  return {
    slug,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    category: matterResult.data.category,
    tags: matterResult.data.tags,
  };
}

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory);

//   return fileNames.map((fileName) => {
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const matterResult = matter(fileContents);

//     return {
//       slug: matterResult.data.slug || fileName.replace(/\.md$/, ""),
//     };
//   });
// }

// export async function getPostData(slug: string) {
//   // Read the markdown file
//   const fullPath = path.join(postsDirectory, `${slug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   // Parse frontmatter (title, date, category, etc.)
//   const matterResult = matter(fileContents);

//   // Convert markdown content to HTML
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   // Return everything: slug, frontmatter data, and content
//   return {
//     slug,
//     title: matterResult.data.title,
//     date: matterResult.data.date,
//     contentHtml,
//     category: matterResult.data.category || null, // optional
//   };
// }
