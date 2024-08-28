"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="relative w-[100vw] h-[100vh] text-[#fff]">
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
        <nav className="flex gap-4 lg:gap-8">
          <div className="lg:flex items-center hidden gap-4 lg:gap-8">
            <Link href={"/pricing"} className="">
              PRICING
            </Link>
            <Link href={"/about"} className="">
              ABOUT
            </Link>
          </div>
          <button
            className="bg-[#00c46a] p-4 rounded-md font-medium"
            onClick={() => router.push("/login")}
          >
            LOGIN
          </button>
        </nav>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center space-y-2">
        <h2 className="text-3xl lg:text-4xl font-bold">
          GlobeTrek capture every step of your adventures.
        </h2>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences 🪂
        </p>
        <button className=" bg-[#00c46a] font-medium p-4 rounded-md mt-2">
          START TRACKING NOW
        </button>
      </div>
    </main>
  );
}
