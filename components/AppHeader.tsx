import Select from "@/components/atoms/Select";
import logo from "@/images/logo.svg";
import { selectOperatingSystem, setOperatingSystem } from "@/store/appSlice";
import { selectAuthState } from "@/store/authSlice";
import { OPERATING_SYSTEM } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";

function ResponsiveAppBar() {
  const [, , removeCookie] = useCookies(["authToken", "Authorization"]);
  const authState = useSelector(selectAuthState);
  const operatingSystem = useSelector(selectOperatingSystem);
  const navigation = useRouter();
  const [os, setOs] = useState(operatingSystem);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setOperatingSystem(os));
  }, [os]);

  const operatingSystemList = [
    {
      label: "Mac",
      value: OPERATING_SYSTEM.MAC,
    },
    {
      label: "Windows",
      value: OPERATING_SYSTEM.WINDOWS,
    },
  ];
  const showLoginButton = !authState && navigation.pathname !== "/login";
  const showSignupButton = !authState && navigation.pathname !== "/signup";

  function handleLogout() {
    removeCookie("authToken", { path: "/" });
    removeCookie("Authorization", { path: "/" });
  }

  return (
    <div className={"flex items-center border-[1px] border-grey bg-white"}>
      <Link href={"/"}>
        <div className={"flex p-2 items-center ml-4"}>
          <Image src={logo} alt="logo" width={40} height={40} />
          <div className={"font-bold font-mono text-xl ml-2 text-gray-700"}>
            KEY-COMBO
          </div>
        </div>
      </Link>

      <div className={"ml-5"}>
        {/*<Link href={"/products"}>Applications</Link>*/}
      </div>
      <div className={"flex-grow"}>&nbsp;</div>
      <div className={"mr-4 font-semibold"}>
        <Select
          onChange={(value) => {
            setOs(value);
          }}
          value={os}
          label={"Operating System"}
          optionList={operatingSystemList}
        />
      </div>
      {/*{showLoginButton && (*/}
      {/*  <div className={"mr-4 font-semibold"}>*/}
      {/*    <Link href={"/login"}>Login</Link>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{showSignupButton && (*/}
      {/*  <div className={"mr-4 font-semibold"}>*/}
      {/*    <Link href={"/signup"}>Sign Up</Link>*/}
      {/*  </div>*/}
      {/*)}*/}
      {/*{authState && (*/}
      {/*  <div className={"mr-4 font-semibold cursor-pointer"}>*/}
      {/*    <div onClick={handleLogout}>Logout</div>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}

export default ResponsiveAppBar;
