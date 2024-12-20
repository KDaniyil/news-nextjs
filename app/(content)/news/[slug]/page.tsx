import { NewsType } from '@/types/news.type'
import { DUMMY_NEWS } from '@/utils/dummy-news'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params

  const newsItem: NewsType | undefined = DUMMY_NEWS.find(
    (news) => news.slug === slug
  )

  if (!newsItem) {
    notFound()
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img
            src={`/images/news/${newsItem?.image}`}
            alt={newsItem?.title ?? 'alt'}
          />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  )
}
