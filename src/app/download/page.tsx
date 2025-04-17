import Footer from "@/components/Footer";
import Header from "@/components/Header";
import listNews from "@/lib/news";
import Image from "next/image";
import Link from "next/link";

export default function Download() {
  return (
    <div className="flex-1 flex flex-col h-screen">
      <div className="flex flex-col bg-[url('/background.png')] bg-center bg-no-repeat h-52">
        <Header />

        <h1 className="text-5xl font-black m-auto w-max font-['Panton']">
          DOWNLOAD
        </h1>
      </div>

      <div className="w-full h-full flex flex-col items-center pt-6">
        Release downloads aren't available yet :(
        <Link
          href="https://github.com/saturnclientmc/saturnclient/releases/"
          target="_blank"
          className="hover:cursor-pointer mt-10 relative bg-red border text-white py-4 px-6 rounded-xl backdrop-blur-xs w-max group transition-colors duration-300 hover:text-[#e2bf7d] animate-fadeIn"
        >
          Download on GitHub
        </Link>
        <div className="flex flex-col items-center mt-4 gap-2">
          <p>Step 1: Download the latest release from GitHub</p>
          <p>Step 2: Locate your Minecraft mods folder (fabric required)</p>
          <p>Step 3: Place the downloaded release into the mods folder</p>
          <p>
            Step 4: Launch the game on the official minecraft launcher (fabric)
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
