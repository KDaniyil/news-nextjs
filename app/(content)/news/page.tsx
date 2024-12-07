import NewsList from '@/components/news-list/news-list'
import { getAllNews } from '@/lib/news'
import { NewsType } from '@/types/news.type'

export default async function NewsPage() {
  const news: NewsType[] = await getAllNews()

  return (
    <>
      <h1>The News Page</h1>
      <NewsList news={news} />
    </>
  )
}
