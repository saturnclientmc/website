
import smartSplit from "./smartSplit";

export interface News {
  authors: string[];
  title: string;
  description: string;
  image: string;
  date: string;
  id: string;
}

export function parseNews(news: string, id: string): News {
    const content = news.split("---", 2)[1];
  
    const params: News = {
      authors: [],
      title: "Undefined title",
      description: "",
      image: "/background.png",
      date: "Undefined date",
      id,
    };
  
    content.split("\n").forEach((v) => {
      const [key, value] = smartSplit(v, ":", 2).map((v) => v.trim());
      if (key === "authors") {
        params.authors = value.split(",").map((v) => v.trim());
      } else if (
        key === "title" ||
        key === "description" ||
        key === "image" ||
        key === "date"
      ) {
        params[key] = value;
      }
    });
  
    return params;
  }