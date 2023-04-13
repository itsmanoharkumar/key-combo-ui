import logo from "@/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

function ResponsiveAppBar() {
  return (
    <div
      className={
        "flex items-center sm:justify-start justify-center border-[1px] border-grey bg-white"
      }
    >
      <Link href={"/"}>
        <div className={"flex p-2 items-center ml-4"}>
          <Image src={logo} alt="logo" className={"w-[30px]"} />
          <div className={"font-extrabold text-lg ml-2 text-gray-700"}>
            KEY-COMBO
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ResponsiveAppBar;
