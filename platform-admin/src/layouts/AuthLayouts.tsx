import { Outlet } from "react-router";
import reactLogo from "@/assets/react.svg";

export default function AuthLayouts() {
  return (
    <div className="flex min-h-svh">
      <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-[#06251A] to-[#10543A] p-12 lg:w-[440px] xl:w-[500px]">
        <div className="flex items-center gap-3">
          <img
            src={reactLogo}
            alt="Logo"
            className="size-12 roundd-xl shadow-lg shadow-black/20 "
          />
          <span className="text-base front-bold text-white">Admin section</span>
        </div>
        <div>
          <h1 className="max-w-[380px] leading-snug text-white front-bold text-2xl xl:text-5xl ">
            A better experience <br />
            for your users
          </h1>
          <p className="mt-3.5 max-w-[360px] text-sm leading-5 text-[#c7dccb]">
            The world's most powerful frontend platform, built for speed,
            scalability, and developer happiness.
          </p>
        </div>

        <p className="text-xs text-gray-400">
          &copy; 2026 Renting site with NK
        </p>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background p-8">
        <Outlet />
      </div>
    </div>
  );
}
