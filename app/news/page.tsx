import { DUMMY_NEWS } from "@/utils/dummy-news";
import Link from "next/link";
import Image from "next/image";

export default function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => (
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
    </>
  );
}
