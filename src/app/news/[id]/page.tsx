"use client";

import { useEffect, useState } from "react";
import smartSplit from "@/lib/smartSplit";
import { parseNews } from "@/lib/newsParser";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Md from "./Markdown";

export default function News({ params }: { params: Promise<{ id: string }> }) {
  const [newsData, setNewsData] = useState<{
    authors: string[];
    title: string;
    description: string;
    image: string;
    date: string;
    content: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const resolvedParams = await params;
        const response = await fetch(`/news-md/${resolvedParams.id}.md`);
        const contents = await response.text();
        console.log(contents);
        const { authors, title, description, image, date } = parseNews(
          contents,
          resolvedParams.id
        );
        const content = smartSplit(contents, "---", 3)[2];
        setNewsData({ authors, title, description, image, date, content });
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [params]);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (!newsData) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <p>Failed to load news article</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="bg-center bg-no-repeat h-96 flex-shrink-0"
        style={{ backgroundImage: `url(${newsData.image})` }}
      >
        <Header />

        <h1 className="font-black m-auto w-max font-['Panton'] !text-5xl mt-14">
          {newsData.title}
        </h1>

        <p className="m-auto w-max !text-xl mt-5">{newsData.description}</p>
        <p className="m-auto w-max !text-lg">
          written by {newsData.authors.join(", ")}
        </p>
      </div>

      <div className="w-[54rem] mx-auto mt-5">
        <div className="rounded-2xl bg-[#111] p-5 markdown">
          <Md>{newsData.content}</Md>
        </div>
      </div>

      <Footer />
    </div>
  );
}
