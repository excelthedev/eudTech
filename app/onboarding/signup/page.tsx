"use client";
import Image from "next/image";
import React, { useState } from "react";
import Google from "../../../public/images/LOGO COMPONENT.png";
import Link from "next/link";
import { sign } from "crypto";

const Signup = () => {
  const [signup, SetSignup] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });

  const handleSignup = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(signup);
  };

  return (
    <div className="w-[40%] px-10 my-auto">
      <p className="text-lg text-center font-bold mb-10">Sign Up</p>
      <div className="w-full">
        <form>
          <div className="flex items-center justify-between pb-4 gap-[20px]">
            <input
              type="text"
              required
              value={signup.fullName.firstName}
              onChange={(e) =>
                SetSignup({
                  ...signup,
                  fullName: { ...signup.fullName, firstName: e.target.value },
                })
              }
              placeholder="First Name"
              className="w-full outline-none p-2 rounded-md border-2 border-[#8D8D8D] focus:border-[#7734CC]  hover:border-[#7734CC]"
            />
            <input
              type="text"
              required
              value={signup.fullName.lastName}
              onChange={(e) =>
                SetSignup({
                  ...signup,
                  fullName: { ...signup.fullName, lastName: e.target.value },
                })
              }
              placeholder="Last Name"
              className="w-full outline-none p-2 rounded-md border-2 border-[#8D8D8D] focus:border-[#7734CC]  hover:border-[#7734CC]"
            />
          </div>
          <div>
            <input
              type="email"
              required
              value={signup.email}
              onChange={(e) =>
                SetSignup({
                  ...signup,
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
              value={signup.password}
              onChange={(e) =>
                SetSignup({
                  ...signup,
                  password: e.target.value,
                })
              }
              placeholder="Password"
              className="w-full outline-none p-2 rounded-md border-2 border-[#8D8D8D] focus:border-[#7734CC]  hover:border-[#7734CC]"
            />
          </div>
          <div className="pt-4">
            <input
              type="password"
              required
              placeholder="Confirm Password"
              className="w-full outline-none p-2 rounded-md border-2 border-[#8D8D8D] focus:border-[#7734CC]  hover:border-[#7734CC]"
            />
          </div>
        </form>

        <div className="pt-4">
          <div className="flex items-center gap-[5px]">
            <input type="checkbox" id="terms" className="" />
            <label
              htmlFor="terms"
              className="font-[500] text-[#8D8D8D] text-[14px]"
            >
              <p>
                Accept COL23{" "}
                <span className="text-[#7734CC] underline text-[14px]">
                  Terms and Conditions
                </span>
              </p>
            </label>
          </div>
        </div>

        <button
          className="bg-[#7734CC] text-white w-full rounded-md p-3 font-bold text-[14px] mt-4"
          onClick={handleSignup}
        >
          Create Account
        </button>

        <div>
          <p className="text-[14px] mt-3 text-[#8D8D8D] ">
            Already a member?{" "}
            <span className="text-[#7734cc] font-[600]">
              <Link href="/onboarding/login">Log in</Link>
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
    </div>
  );
};

export default Signup;
