import { PostData } from "./posts";

export type Archive = {
  [year: string]: {
    [month: string]: PostData[];
  };
};

export function buildArchive(posts: PostData[]) {
  const archive: Archive = {};

  posts.forEach((post) => {
    const date = new Date(post.date);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });

    if (!archive[year]) archive[year] = {};
    if (!archive[year][month]) archive[year][month] = [];

    archive[year][month].push(post);
  });

  return archive;
}
