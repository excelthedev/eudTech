import Image from "next/image";
import Backdrop from "../../public/images/loginbg.jpeg";
import Learnicon from "../../public/images/learnicon.png";
import Collaborate from "../../public/images/onboarding icons.png";

export default function OnboardingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex items-center max-w-screen-2xl m-auto relative  ">
      <div>
        <Image
          alt="backdrop"
          src={Backdrop}
          quality={100}
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        {/* <div className="absolute top-0 left-[23px] my-[150px] w-full">
          <p className="text-2xl text-white text-center font-bold mb-10">
            Ed-Tech
          </p>
          <div className=" bg-[#EBEBEB] p-[40px] pr-0 w-[95%] rounded-3xl flex items-center justify-between ">
            <div className="bg-[#180235] rounded-2xl text-white py-[50px] px-[30px]">
              <Image src={Learnicon} alt="learnicon" />
              <p className="pt-3 font-bold text-xl">Learn from your </p>
              <p className=" font-bold text-xl">peers</p>
              <p className="pt-2">By scheduling and Downloading</p>
              <p>your courses, you can learn</p>
              <p> anywhereand any time</p>
            </div>
            <div className="bg-[#FBFBFB] p-[80px] rounded-2xl flex flex-col items-center">
              <Image
                src={Collaborate}
                alt="collaborate"
                className="bg-[#7734CC] py-3 rounded-lg px-2 w-[70px]"
              />

              <p className="pt-3 text-lg">collaborate</p>
            </div>
            <div className="bg-[#FBFBFB] p-[80px] pr-0 rounded-2xl flex flex-col items-center ">
              <Image
                src={Collaborate}
                alt="develop"
                className="bg-[#7734CC] py-3 rounded-lg px-2 w-[70px] "
              />

              <p className="text-lg text-end pt-3  pl-[35px]">Dev</p>
            </div>
          </div>
        </div> */}
      </div>

      {/* <div className="bg-red-300 w-[80%]">ED TECH</div> */}
      {children}
    </div>
  );
}
