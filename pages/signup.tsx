import Button from "@/components/atoms/Button";
import errorIcon from "@/images/error.svg";
import { register } from "@/service/authentication";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setErrorMessage("");
    if (email && password && confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password, confirmPassword]);

  async function handleSignup() {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    try {
      const response = await register({ username, email, password });
      console.log(response);
    } catch (err: any) {
      setErrorMessage(err.message);
    }
  }

  return (
    <div className={"h-[calc(100vh_-_80px)] flex justify-center"}>
      <div className={"mt-40"}>
        <div className={"w-[500px] border-[1px] rounded border-gray"}>
          <div
            className={"p-4 font-medium text-[18px] border-b-[1px] border-gray"}
          >
            Signup
          </div>
          <div className={"px-4 mt-2"}>
            <input
              className={"border-[1px] rounded w-full border-gray p-2 my-2"}
              type="text"
              value={username}
              placeholder={"Enter your username"}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              className={"border-[1px] rounded w-full border-gray p-2 my-2"}
              type="text"
              value={email}
              placeholder={"Enter your email"}
              onChange={(e) => {
                setEmail(e.target.value);
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
            <input
              className={"border-[1px] rounded w-full border-gray p-2 my-2"}
              type="password"
              value={confirmPassword}
              placeholder={"Confirm your password"}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
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
              text="Signup"
              onClick={() => {
                handleSignup();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
