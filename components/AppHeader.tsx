import logo from "@/images/logo.svg";
import { selectAuthState } from "@/store/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

function ResponsiveAppBar() {
  const [, , removeCookie] = useCookies(["authToken", "Authorization"]);
  const authState = useSelector(selectAuthState);
  const navigation = useRouter();

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
        <Link href={"applications"}>Applications</Link>
      </div>
      <div className={"flex-grow"}>&nbsp;</div>
      {showLoginButton && (
        <div className={"mr-4 font-semibold"}>
          <Link href={"/login"}>Login</Link>
        </div>
      )}
      {showSignupButton && (
        <div className={"mr-4 font-semibold"}>
          <Link href={"/signup"}>Sign Up</Link>
        </div>
      )}
      {authState && (
        <div className={"mr-4 font-semibold cursor-pointer"}>
          <div onClick={handleLogout}>Logout</div>
        </div>
      )}
    </div>
  );
}

export default ResponsiveAppBar;
