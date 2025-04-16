import { Download, House, Newspaper } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="text-white bg-white/5 backdrop-blur-xl py-4 text-center w-max mx-auto px-6 rounded-2xl mt-2">
      <div className="flex flex-row w-max mx-auto gap-4">
        <Link href="/">
          <House className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
        </Link>

        <Link href="/news">
          <Newspaper className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
        </Link>

        <Link href="/download">
          <Download className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
        </Link>
      </div>
    </header>
  );
}