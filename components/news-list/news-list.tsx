import { NewsType } from '@/types/news.type'
import Image from 'next/image'
import Link from 'next/link'

export default function NewsList({ news }: { news: NewsType[] }) {
  return (
    <ul className="news-list">
      {news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              width={200}
              height={150}
            />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
