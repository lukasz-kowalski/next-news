import sql from "better-sqlite3";

import { News } from "@/api/dto/News";

const db = sql("data.db");

export const getAllNews = async (): Promise<News[]> => {
  const news = db.prepare("SELECT * FROM news").all() as News[];

  // simulate api delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
};

export const getNewsItem = async (slug: string): Promise<News> => {
  const newsItem = db
    .prepare("SELECT * FROM news WHERE slug = ?")
    .get(slug) as News;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return newsItem;
};

export const getLatestNews = async (): Promise<News[]> => {
  const latestNews = db
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all() as News[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return latestNews;
};

export const getAvailableNewsYears = async (): Promise<string[]> => {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all() as { year: string }[];
  const mappedYears = years.map((year) => year.year);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return mappedYears;
};

export const getAvailableNewsMonths = (year: string): string[] => {
  const months = db
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year) as { month: string }[];

  return months.map((month) => month.month);
};

export const getNewsForYear = async (year: string): Promise<News[]> => {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year) as News[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
};

export const getNewsForYearAndMonth = async (
  year: string,
  month: string
): Promise<News[]> => {
  const news = db
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month) as News[];

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return news;
};
