import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import PostDate from '@/components/PostDate'
import { getAllPosts, type PostSummary } from '@/lib/posts'

export const getStaticProps: GetStaticProps<{ posts: PostSummary[] }> = async () => ({
  props: { posts: getAllPosts() },
})

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main id="main-content" className="main-cont">
      <h1 className="text-4xl tracking-tighter">my blog</h1>
      <hr className="page-divider" />
      <ul className="blog-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <div className="blog-list-row">
              <h2 className="text-xl tracking-tight">
                <Link className="blog-post-link" href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="blog-date"><PostDate date={post.date} /></p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
