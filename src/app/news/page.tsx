import Footer from "@/components/Footer";
import Header from "@/components/Header";
import listNews from "@/lib/news";
import Image from "next/image";
import Link from "next/link";

// const newsList = [
//   {
//     authors: [],
//     title: "Hello World",
//     description: "lorem ipsum ipsum lorem",
//     image: "/background.png",
//     date: "2025-04-16",
//     id: "",
//   },
// ];

// const newsList = Array(3 * 6).fill({
//   authors: [],
//   title: "Hello World",
//   description: "lorem ipsum ipsum lorem",
//   image: "/background.png",
//   date: "2025-04-16",
//   id: "",
// });

const newsList = listNews();

export default function News() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col bg-[url('/background.png')] bg-center bg-no-repeat h-52">
        <Header />

        <h1 className="text-5xl font-black m-auto w-max font-['Panton']">
          CLIENT NEWS
        </h1>
      </div>

      <div className="py-8 px-5 w-full">
        TODO: implement search and filtering
      </div>

      <div className="py-8 px-5 w-full grid grid-rows-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {newsList.map((news, i) => (
          <Link
            href={`/news/${news.id}`}
            className="hover:scale-[1.02] transform transition duration-300"
            key={i}
          >
            <div
              style={{
                background: `url('${news.image}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="object-cover h-48 rounded-2xl p-4"
            >
              <h2 className="text-3xl font-black">{news.title}</h2>
              <p className="text-xl">{news.description}</p>
              <p className="text-md">{news.date}</p>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
