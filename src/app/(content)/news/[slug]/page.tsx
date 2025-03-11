import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "../../../../../dummy-news";
import Link from "next/link";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>

      <p>News ID: {slug}</p>
    </article>
  );
}
