import { DUMMY_NEWS } from '@/utils/dummy-news'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export default async function NewsImagePage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params

  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug)

  if (!newsItem) {
    notFound()
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  )
}
