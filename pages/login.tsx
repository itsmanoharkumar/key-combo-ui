import Button from "@/components/atoms/Button";
import errorIcon from "@/images/error.svg";
import { login } from "@/service/authentication";
import { selectAuthState } from "@/store/authSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [, setCookie] = useCookies(["authToken"]);
  const navigate = useRouter();
  const authState = useSelector(selectAuthState);
  if (authState) {
    navigate.replace("/");
  }

  useEffect(() => {
    setErrorMessage("");
    if (usernameOrEmail && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [usernameOrEmail, password]);

  async function handleLogin() {
    try {
      const response = await login({ identifier: usernameOrEmail, password });
      setCookie("authToken", response.jwt, { path: "/" });
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  }

  return (
    <div className={"h-[calc(100vh_-_80px)] flex justify-center"}>
      <div className={"mt-40"}>
        <div className={"w-[500px] border-[1px] rounded border-gray"}>
          <div
            className={"p-4 font-medium text-[18px] border-b-[1px] border-gray"}
          >
            Login
          </div>
          <div className={"px-4 mt-2"}>
            <input
              className={"border-[1px] rounded w-full border-gray p-2 my-2"}
              type="text"
              value={usernameOrEmail}
              placeholder={"Enter your username/email"}
              onChange={(e) => {
                setUsernameOrEmail(e.target.value);
              }}
            />

            <input
              className={"border-[1px] rounded w-full border-gray p-2 my-2"}
              type="password"
              value={password}
              placeholder={"Enter your password"}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className={"w-full px-4 py-2 my-2 flex justify-between"}>
            <div>
              {!!errorMessage && (
                <div
                  className={
                    "bg-pastelRed px-2 py-1 rounded flex justify-between items-center transition-all" +
                    " duration-75 ease-in-out"
                  }
                >
                  <Image
                    className={"w-[20px] h-[20px] mr-2"}
                    src={errorIcon}
                    alt={"error"}
                  />
                  {errorMessage}
                </div>
              )}
            </div>
            <Button
              isDisabled={isButtonDisabled}
              text="Login"
              onClick={() => {
                handleLogin();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
