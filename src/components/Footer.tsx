import { Github, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white backdrop-blur-md py-4 flex flex-row">
      <div className="flex flex-row gap-4 ml-4 absolute">
        <Link href="https://github.com/saturnclientmc" target="_blank">
          <Github className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
        </Link>

        <Link href="https://www.instagram.com/saturnclient/" target="_blank">
          <Instagram className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
        </Link>

        <Link href="https://www.instagram.com/saturnclient/" target="_blank">
          <Image
            src="/discord.svg"
            alt="Discord"
            className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn"
          />
        </Link>
      </div>

      <div className="flex flex-row w-max mx-auto gap-1">
        <p className="font-[mono]">&copy;</p> 2025 Saturn Client. All rights
        reserved.
      </div>
    </footer>
  );
}
