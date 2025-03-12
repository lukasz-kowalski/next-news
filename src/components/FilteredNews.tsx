import { getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import NewsList from "@/components/NewsList";

interface Props {
  year: string | undefined;
  month: string | undefined;
}

export default async function FilteredNews({ year, month }: Props) {
  let news;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected period.</p>;

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}
