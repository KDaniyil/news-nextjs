import { DUMMY_NEWS } from '@/utils/dummy-news'
import NewsList from '@/components/news-list/news-list'

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  )
}
