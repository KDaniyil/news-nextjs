import NewsList from '@/components/news-list/news-list'
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from '@/lib/news'
import { NewsType } from '@/types/news.type'
import Link from 'next/link'

export default async function FilteredNewsPage({
  params,
}: {
  params: { filter: string[] }
}) {
  let links = getAvailableNewsYears()
  const { filter } = await params

  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news: NewsType[] | undefined = undefined

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(+selectedYear)
    links = getAvailableNewsMonths(+selectedYear)
  } else if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(+selectedYear, +selectedMonth)
    links = []
  }

  let newsContent = <p>No news found for selected period</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(+selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid year')
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
              const href = selectedYear
                ? `/archive/${selectedYear}/${link}`
                : `/archive/${link}`
              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
