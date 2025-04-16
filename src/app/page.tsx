import Image from "next/image";
import Link from "next/link";
import {
  Book,
  BookOpen,
  BookOpenText,
  Github,
  House,
  Instagram,
  List,
  Text,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[url('/background.png')] bg-cover bg-center bg-no-repeat">
      {/* Header */}
      <header className="text-white bg-white/5 backdrop-blur-xl py-4 text-center w-max mx-auto px-6 rounded-2xl mt-2">
        <div className="flex flex-row w-max mx-auto gap-4">
          <Link href="/">
            <House className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
          </Link>

          <Link href="/blog">
            <BookOpenText className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
          </Link>
        </div>
      </header>

      <div className="flex-1 flex flex-col text-2xl mt-40 items-center">
        <Image src="/logo.png" alt="Logo" width={240} height={240} />
        <h1 className="text-5xl font-black">Saturn Client</h1>
        <p className="text-xl text-white mix-blend-difference">
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

      {/* Footer */}
      <footer className="text-white backdrop-blur-md py-4 text-center flex flex-row">
        <div className="flex flex-row w-max mx-auto gap-1">
          <p className="font-[mono]">&copy;</p> 2025 Saturn Client. All rights
          reserved.
        </div>

        <div className="flex flex-row gap-4 mr-4">
          <Link href="https://github.com/saturnclientmc" target="_blank">
            <Github className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
          </Link>

          <Link
            href="https://www.instagram.com/saturnclient/"
            target="_blank"
          >
            <Instagram className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
