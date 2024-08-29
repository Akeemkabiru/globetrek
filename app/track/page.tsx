import Image from "next/image";
import Link from "next/link";

export default function Track() {
  return (
    <div className="w-[100vw] h-[100vh] pt-4 pr-4 bg-slate-700 text-gray-300 flex flex-col justify-between">
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
      <div className="flex items-center justify-center">
        {" "}
        <form className="p-4 rounded-md bg-gray-700">
          <div>
            <label>Email address</label>
            <div>
              {" "}
              <input type="email" />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div>
              {" "}
              <input type="password" />
            </div>
          </div>
          <button className="bg-[#00c46a] p-2">LOGIN</button>
        </form>
      </div>
      <div>Nothing</div>
    </div>
  );
}
