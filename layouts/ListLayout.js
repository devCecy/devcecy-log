import { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

// components
import Pagination from '@/components/Pagination'
import SimplePostCard from '@/components/SimplePostCard'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const { theme } = useTheme()
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-gray-200 px-6 dark:divide-gray-700">
        <div className="space-y-4 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="키워드를 검색해 보세요!"
              className="block w-full rounded-md border border-gray-300 bg-white p-6 px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              // eslint-disable-next-line @next/next/link-passhref
              <Link key={slug} href={`/blog/${slug}`} aria-label={`Read "${title}"`}>
                <li
                  key={slug}
                  className={`${
                    theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-800'
                  } mb-10 rounded-lg py-5 sm:px-5`}
                >
                  <SimplePostCard
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
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
