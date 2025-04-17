import { readFileSync } from "fs";
import smartSplit from "@/lib/smartSplit";
import { parseNews } from "@/lib/news";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Md from "./Markdown";

export default async function News({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const contents = readFileSync(`news/${(await params).id}.md`, "utf-8");

  const { authors, title, description, image, date } = parseNews(
    contents,
    (await params).id
  );

  return (
    <div className="flex-1 flex flex-col h-screen">
      <div
        className="bg-[url('/background.png')] bg-center bg-no-repeat h-96"
        style={{ backgroundImage: `url(${image})` }}
      >
        <Header />

        <h1 className="font-black m-auto w-max font-['Panton'] !text-5xl mt-14">
          {title}
        </h1>

        <p className="m-auto w-max font-['Panton'] !text-2xl mt-5">
          {description}
        </p>
        <p className="m-auto w-max font-['Panton'] !text-xl">
          written by {authors.join(", ")}
        </p>
      </div>

      <div className="w-[54rem] mx-auto mt-5">
        <div className="rounded-2xl bg-[#111] p-5 markdown">
          <Md>{smartSplit(contents, "---", 3)[2]}</Md>
        </div>
      </div>

      <Footer />
    </div>
  );
}
