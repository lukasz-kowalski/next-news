import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "../../../../../../dummy-news";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function ImagePage({ params }: Props) {
  const { slug } = await params;

  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
