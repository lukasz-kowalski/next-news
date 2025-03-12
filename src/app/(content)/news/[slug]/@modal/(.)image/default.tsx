import { notFound } from "next/navigation";

import ModalBackdrop from "@/components/ModalBackdrop";
import { getNewsItem } from "@/lib/news";

type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function InterceptedImagePage({ params }: Props) {
  const { slug } = await params;

  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
