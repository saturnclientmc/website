import Footer from "@/components/Footer";
import Header from "@/components/Header";
import listNews from "@/lib/news";
import Link from "next/link";

const newsList = listNews();

export default function News() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="flex flex-col bg-[url('/background.png')] bg-center bg-no-repeat h-52">
        <Header />

        <h1 className="text-5xl font-black m-auto w-max font-['Panton'] fade-in">
          CLIENT NEWS
        </h1>
      </div>

      <div className="py-8 px-5 w-full">
        TODO: implement search and filtering
      </div>

      <div className="py-8 px-5 w-full grid grid-rows-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 fade-in-up">
        {newsList.map((news, i) => (
          <Link
          href={`/news/${news.id}`}
          className="block"
          key={i}
        >
          <div className="h-48 rounded-2xl overflow-hidden relative group p-4">
            {/* Zoomable background image layer */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
              style={{
                backgroundImage: `url('${news.image}')`,
              }}
            />
            
            {/* Content layer, above the image */}
            <div className="relative z-10 text-white">
              <h2 className="text-3xl font-black">{news.title}</h2>
              <p className="text-xl">{news.description}</p>
              <p className="text-md">{news.date}</p>
            </div>
          </div>
        </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
