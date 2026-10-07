import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import PostDate from '@/components/PostDate'
import { getAllPosts, getPost, type Post } from '@/lib/posts'

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getAllPosts().map(({ slug }) => ({ params: { slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<{ post: Post }> = async ({ params }) => {
  const post = typeof params?.slug === 'string' ? getPost(params.slug) : null
  return post ? { props: { post } } : { notFound: true }
}

export default function BlogPost({ post }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <main id="main-content" className="main-cont">
      <Head>
        <title>{`${post.title} | Sarraf Rahman`}</title>
        <meta name="description" content={post.description} key="description" />
        <meta property="og:title" content={`${post.title} | Sarraf Rahman`} key="og-title" />
        <meta property="og:description" content={post.description} key="og-description" />
        <meta property="og:type" content="article" key="og-type" />
        <meta property="article:published_time" content={post.date} />
      </Head>
      <article>
        <header>
          <h1 className="text-4xl tracking-tighter">{post.title}</h1>
          <p className="blog-date mt-2"><PostDate date={post.date} /></p>
        </header>
        <hr className="page-divider" />
        <div className="blog-prose"><ReactMarkdown>{post.content}</ReactMarkdown></div>
      </article>
      <Link className="blog-back" href="/blog">← all posts</Link>
    </main>
  )
}
