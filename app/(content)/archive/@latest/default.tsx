import NewsList from '@/components/news-list/news-list';
import { getLatestNews } from '@/lib/news';
import { NewsType } from '@/types/news.type';
import React from 'react';

export default function LatestNewsPage() {
  const latestNews: NewsType[] = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
