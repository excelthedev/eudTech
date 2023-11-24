"use client";
import Image from "next/image";
import type { Metadata } from "next";
import React, { useState } from "react";
import Google from "../../../public/images/LOGO COMPONENT.png";
import Link from "next/link";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(login);
    setLogin({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {/* <div className="w-[40%] px-10 my-auto">
        <p className="text-lg text-center font-bold mb-10">Log In</p>
        <div className="w-full">
          <form>
            <div>
              <input
                type="email"
                required
                value={login.email}
                onChange={(e) =>
                  setLogin({
                    ...login,
                    email: e.target.value,
                  })
                }
                placeholder="Email Address"
                className="w-full outline-none p-2 rounded-md border-2 border-[#8D8D8D] focus:border-[#7734CC]  hover:border-[#7734CC]"
              />
            </div>
            <div className="pt-4">
              <input
                type="password"
                required
                value={login.password}
                onChange={(e) =>
                  setLogin({
                    ...login,
                    password: e.target.value,
                  })
                }
                placeholder="Password"
                className="w-full outline-none p-2 rounded-md border-2 border-[#8D8D8D] focus:border-[#7734CC]  hover:border-[#7734CC] "
              />
            </div>
          </form>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-[5px]">
              <input type="checkbox" id="remember-me" className="" />
              <label
                htmlFor="remember-me"
                className="font-[500] text-[#8D8D8D] text-[14px]"
              >
                Remember me
              </label>
            </div>

            <p className="text-[#7734CC] underline text-[14px]">
              Forgot Password
            </p>
          </div>

          <button
            className="bg-[#7734CC] text-white w-full rounded-md p-3 font-bold text-[14px] mt-4"
            onClick={handleLogin}
          >
            Login
          </button>

          <div>
            <p className="text-[14px] mt-3 text-[#8D8D8D] ">
              Not a member yet?{" "}
              <span className="text-[#7734cc] font-[600]">
                <Link href="/onboarding/signup">Create an account</Link>
              </span>
            </p>
          </div>

          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-[#8D8D8D]"></div>
            <span className="flex-shrink mx-4 text-[#8D8D8D] text-[14px]">
              or
            </span>
            <div className="flex-grow border-t border-[#8D8D8D]"></div>
          </div>

          <button className="text-white w-full rounded-md p-2 font-base text-[14px]  border-2 border-[#8D8D8D] mt-3 flex items-center justify-center gap-[10px]">
            <Image src={Google} alt="google" />
            <div>
              <span className="text-black">G</span>
              <span className="text-red-600">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-400">g</span>
              <span className="text-black">l</span>
              <span className="text-black">e</span>
            </div>
          </button>
        </div>
        <p className="text-[#8D8D8D] text-[14px] text-center pt-4">
          2023 COL23. All Righs Reserved
        </p>
      </div> */}
    </>
  );
};

export default Login;
