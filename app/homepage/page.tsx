import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import bgImg from "../../public/images/bgimg.jpeg";
import hero from "../../public/images/hero.svg";
import person_1 from "../../public/images/person1.svg";
import person_2 from "../../public/images/person2.svg";
import person_3 from "../../public/images/person3.svg";
import person_4 from "../../public/images/person4.svg";
import person_5 from "../../public/images/person5.svg";
import person_6 from "../../public/images/person6.svg";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="bg-[#0B0415] px-20 py-5 flex items-center justify-between font-medium">
        <Image src={Logo} alt="logo" />
        <div className="">
          <ul className="flex items-center justify-between gap-20 text-white">
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex items-center justify-between gap-10 text-white">
            <li className="inline-block px-10 py-2 rounded-md border-2 border-white">
              Log In
            </li>
            <li className="bg-[#EFE7F9] text-[#5B0BC1] rounded-md inline-block px-10 py-2 border-2 border-[#EFE7F9]">
              Get Started
            </li>
          </ul>
        </div>
      </div>

      <div>
        <div className="relative ">
          <Image src={bgImg} alt="heroimg" sizes="100vw" />
          <div className="absolute top-10 text-white left-0 w-full text-center text-5xl ">
            <p>Connecting Young Talents</p>
            <p>for Collaboration</p>
            <p className="text-[#7734CC] font-bold">using AI</p>
            <div className="text-center text-lg mt-10">
              <p>
                We will help you connect, learn and interact with your peers
              </p>
              <p>from any part of the world</p>
              <button className="p-2 rounded-md border-2 border-white mt-6 font-semibold">
                Request A Demo &rarr;
              </button>
            </div>
          </div>
          <div className="max-w-screen-lg">
            <div className="absolute bottom-0 left-16">
              <Image src={hero} alt="heroimg" style={{ objectFit: "cover" }} />
            </div>
            <div className="absolute top-[550px] left-[80px]">
              <Image
                src={person_1}
                alt="heroimg"
                style={{
                  width: "80px",
                }}
              />
            </div>
            <div className="absolute bottom-[485px] left-[300px]">
              <Image
                src={person_2}
                alt="heroimg"
                style={{
                  width: "80px",
                }}
              />
            </div>
            <div className="absolute top-[340px] left-[590px]">
              <Image
                src={person_3}
                alt="heroimg"
                style={{
                  width: "60px",
                }}
              />
            </div>
            <div className="absolute top-[360px] right-[570px]">
              <Image
                src={person_4}
                alt="heroimg"
                style={{
                  width: "60px",
                }}
              />
            </div>
            <div className="absolute top-[320px] right-[420px]">
              <Image
                src={person_5}
                alt="heroimg"
                style={{
                  width: "60px",
                }}
              />
            </div>
            <div className="absolute top-[530px] right-[190px]">
              <Image
                src={person_6}
                alt="heroimg"
                style={{
                  width: "60px",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Pool of Talents</p>
        <p>
          Here you will find a lot of talented people like you in different
          level and tracks
        </p>
      </div>
    </div>
  );
};

export default Homepage;
