import Link from "next/link";

import { getAvailableNewsMonths, getAvailableNewsYears } from "@/lib/news";

interface Props {
  year: string | undefined;
  month: string | undefined;
}

export default async function FilterHeader({ year, month }: Props) {
  const availableYears = await getAvailableNewsYears();
  let links = availableYears;

  if (year) {
    if (
      !availableYears.includes(year) ||
      (month && !getAvailableNewsMonths(year).includes(month))
    ) {
      throw new Error("Invalid filter.");
    }
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
