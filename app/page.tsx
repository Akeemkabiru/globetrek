"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="relative w-[100vw] h-[100vh] text-gray-300">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/vid.mp4" type="video/mp4" />
      </video>
      <div className="flex items-center justify-between relative pt-4 pr-4">
        <div className="flex items-center">
          <Image src={"/logo.png"} alt="logo" width={60} height={60} />
          <h1 className="font-semibold text-xl">GlobTrek</h1>
        </div>
        <nav className="flex gap-4 md:gap-8">
          <div className="md:flex items-center hidden gap-4 md:gap-8">
            <Link href={"/pricing"} className="">
              PRICING
            </Link>
            <Link href={"/about"} className="">
              ABOUT
            </Link>
          </div>
          <button
            className="bg-[#00c46a] p-4 rounded-md font-medium text-[#000]"
            onClick={() => router.push("/login")}
          >
            LOGIN
          </button>
        </nav>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center w-[100vw] flex items-center justify-center md:px-32">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-6xl font-bold px-1">
            GlobeTrek capture every step of your adventures
          </h2>
          <p className="md:text-xl text-base px-1">
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.🪂
          </p>
          <button className=" bg-[#00c46a] font-medium p-4 rounded-md text-[#000]">
            START TRACKING NOW
          </button>
        </div>
      </div>
    </main>
  );
}
