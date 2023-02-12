import formatDate from '@/lib/utils/formatDate'
import Link from 'next/link'
import Tag from '@/components/Tag'

const PostCard = ({ slug, date, title, summary, tags }) => {
  return (
    <article>
      <div className="space-y-2">
        <div className="space-y-5 xl:col-span-3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
            </div>
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">{summary}</div>
          </div>
          <div className="flex items-center gap-5">
            <dl>
              <dt className="sr-only">Published on</dt>
              <dd className="text-[14px] leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
            <div className="flex flex-wrap text-[14px]">
              {tags.map((tag) => (
                <Tag key={tag} text={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PostCard
