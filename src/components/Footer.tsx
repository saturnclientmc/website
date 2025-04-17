import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import Discord from "./Discord";

export default function Footer() {
  return (
    <div className="text-white py-4 flex w-max px-5 rounded-xl backdrop-blur-md mx-auto mb-3 fade-in-up">
      <div className="flex flex-row gap-4">
        <Link href="https://github.com/saturnclientmc" target="_blank">
          <Github className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
        </Link>

        <Link href="https://www.instagram.com/saturnclient/" target="_blank">
          <Instagram className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn" />
        </Link>

        <Link href="https://discord.gg/HFRsNxfCqT" target="_blank">
          <Discord className="transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn size-[24px]" />
        </Link>
      </div>
    </div>
  );
}
