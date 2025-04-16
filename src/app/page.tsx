import Image from "next/image";
import Link from "next/link";
import {
  Book,
  BookOpen,
  BookOpenText,
  Download,
  Github,
  House,
  Instagram,
  List,
  Newspaper,
  Text,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
      <Header />

      <div className="flex-1 flex flex-col text-2xl mt-40 items-center">
        <Image src="/logo.png" alt="Logo" width={240} height={240} />
        <h1 className="text-5xl font-black font-['Panton']">Saturn Client</h1>
        <p className="text-xl text-white mix-blend-difference font-['Panton']">
          The best open source Minecraft client
        </p>

        {/* Download button */}
        <Link
          href="/download"
          className="hover:cursor-pointer mt-10 relative bg-red border text-white py-4 px-6 rounded-xl backdrop-blur-xs w-max group transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn"
        >
          Download
        </Link>
      </div>

      <Footer />
    </div>
  );
}
