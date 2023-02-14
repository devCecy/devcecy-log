import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { useTheme } from 'next-themes'

// components
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import PostCard from '@/components/PostCard'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const { theme } = useTheme()

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <Link key={slug} href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                <li
                  className={`${
                    theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
                  } mb-10 rounded-lg p-5`}
                >
                  <PostCard
                    key={slug}
                    slug={slug}
                    date={date}
                    title={title}
                    summary={summary}
                    tags={tags}
                  />
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end px-6 text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
