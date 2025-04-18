import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
      <Header />

      <div className="flex-1 flex flex-col text-2xl mt-40 items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={240}
          height={240}
          className="fade-in-up"
        />
        <h1 className="text-5xl font-black font-['Panton'] fade-in-up">
          Saturn Client
        </h1>
        <p className="text-xl text-white font-['Panton'] font-bold mix-blend-difference fade-in-up">
          The best open source Minecraft client
        </p>

        {/* Download button */}
        <Link
          href="/download"
          className="hover:cursor-pointer mt-10 relative bg-red border text-white py-4 px-6 rounded-xl backdrop-blur-xs w-max group transition-colors duration-300 hover:text-[#e2bf7d] fade-in"
        >
          Download
        </Link>
      </div>

      <Footer />
    </div>
  );
}
