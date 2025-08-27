import { getPostData, getThisWeekIMadePosts } from "@/lib/posts";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const allPosts = getThisWeekIMadePosts();

  return allPosts.map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await getPostData(params.slug);

  return (
    <article>
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>
      <p>{postData.category}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
