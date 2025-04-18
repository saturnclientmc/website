import { readdirSync, readFileSync } from "fs";
import { News, parseNews } from "./newsParser";

export default function listNews(): News[] {
  const newsIdList = readdirSync("public/news-md");

  if (newsIdList === null) return [];

  return newsIdList.map((v) => {
    return parseNews(
      readFileSync(`public/news-md/${v}`, "utf-8"),
      v.replaceAll(".md", "")
    );
  });
}
