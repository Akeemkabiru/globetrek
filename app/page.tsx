"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-[100vw] h-[100vh] lg:p-2 text-gray-300">
      <div
        className="w-full h-full pt-4 pr-4 flex flex-col justify-between"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image src="/logo.png" width={60} height={60} alt="logo" />
            <h1 className="font-medium text-3xl">GlobeTrek</h1>
          </div>
          <nav className="flex items-center gap-4 font-medium">
            <Link
              href=""
              className="hover:underline decoration-slate-300 decoration-[2px] transition-all duration-500"
            >
              ABOUT
            </Link>
            <Link
              href=""
              className="hover:underline decoration-slate-300 decoration-[2px] transition-all duration-500"
            >
              PRICING
            </Link>
            <button className="bg-[#00c46a] p-2 rounded-md font-medium text-[#000]">
              LOGIN
            </button>
          </nav>
        </div>
        <div className="text-center lg:space-y-8">
          <h1 className="text-6xl font-medium">
            GlobeTrek keeps track of your adventures.
          </h1>
          <p className="text-xl font-medium text-gray-400">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </p>
          <button
            onClick={() => router.push("/track")}
            className="bg-[#00c46a] p-2 font-medium rounded-md text-[#000]"
          >
            START TRACKING NOW
          </button>
        </div>
        <div className="opacity-0">Nothing</div>
      </div>
    </main>
  );
}
