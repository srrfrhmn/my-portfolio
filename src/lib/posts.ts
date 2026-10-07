import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostSummary {
  slug: string
  title: string
  date: string
  description: string
}

export interface Post extends PostSummary {
  content: string
}

export function getPost(slug: string): Post | null {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return null
  const filename = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(filename)) return null

  const { data, content } = matter(fs.readFileSync(filename, 'utf8'))
  if (typeof data.title !== 'string' || typeof data.date !== 'string' ||
      !/^\d{4}-\d{2}-\d{2}$/.test(data.date) || Number.isNaN(Date.parse(data.date)) ||
      typeof data.description !== 'string') {
    throw new Error(`Invalid post metadata in ${filename}: provide title, quoted YYYY-MM-DD date, and description.`)
  }
  return { slug, title: data.title, date: data.date, description: data.description, content }
}

export function getAllPosts(): PostSummary[] {
  return fs.readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const post = getPost(filename.slice(0, -3))
      if (!post) throw new Error(`Invalid post filename: ${filename}`)
      return { slug: post.slug, title: post.title, date: post.date, description: post.description }
    })
    .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug))
}
