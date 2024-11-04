import { NewsType } from "@/types/news.type";
import { DUMMY_NEWS } from "@/utils/dummy-news";
import Image from "next/image";



export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  console.log(slug, 'slug');

  const newsItem: NewsType | undefined = DUMMY_NEWS.find(
    (news) => news.slug === slug
  );

  console.log(newsItem);

  return (
    <article className="news-article">
      <header>
        <Image
          src={`/images/news/${newsItem?.image}`}
          alt={newsItem?.title ?? 'alt'}
          width={200}
          height={150}
        />
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
}
