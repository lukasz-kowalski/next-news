import { Suspense } from "react";

import FilteredNews from "@/components/FilteredNews";
import FilterHeader from "@/components/FilterHeader";

type Props = {
  params: { filter: string[] | undefined };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function FilteredNewsPage({ params }: Props) {
  const { filter } = await params;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
