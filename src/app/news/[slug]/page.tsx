import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "../../../../dummy-news";

type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function NewsDetailPage({ params }: PageProps) {
  const newsSlug = await params.slug;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>

      <p>News ID: {newsSlug}</p>
    </article>
  );
}
