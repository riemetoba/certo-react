import Flex from "../Flex";
import Image from "../Image";
import getCertoOne from "/src/assets/getCertoOne.png";
import getCertoTwo from "/src/assets/getCertoTwo.png";
import getCertoThree from "/src/assets/getCertoThree.png";
import getCertoFour from "/src/assets/getCertoFour.png";
import getCertoFive from "/src/assets/getCertoFive.png";
import getCertoSix from "/src/assets/getCertoSix.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../Button";

const GetCerto = () => {
  return (
    <div className="bg-[#E7EFFA] py-12 text-center px-2 md:px-0">
      <h2 className="font-Inter font-extrabold text-2xl md:text-4xl max-w-[738px] mx-auto mb-10">
        Get your freedom back, stop mobile spyware today
      </h2>
      <div className="bg-[#ffffff] max-w-[840px] w-full min-h-fit rounded-4xl md:rounded-[48px] mx-auto drop-shadow-xl p-8 md:p-20">
        {/* flex one start */}
        <Flex
          className={
            "md:justify-between flex-col md:flex-row gap-y-10 md:gap-y-0"
          }
        >
          <div className="flex flex-col items-center text-center">
            <Image className={"m-auto md:m-0"} src={getCertoOne} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Spyware detection
            </h3>
            <p className="font-Inter text-base text-common w-full max-w-[195px]">
              Our advanced spyware detection engine can identify if a device
              contains spyware or bugging software.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image className={"m-auto md:m-0"} src={getCertoTwo} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Keylogger detection
            </h3>
            <p className="font-Inter text-base text-common w-full max-w-[195px]">
              Find malicious keyboards installed on your device that could allow
              someone to record things you type (e.g. passwords).
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image className={"m-auto md:m-0"} src={getCertoThree} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Find tracking apps
            </h3>
            <p className="font-Inter text-base text-common w-full max-w-[195px]">
              Check which apps can access your location, microphone or camera.
              Get alerted if a known tracking app is installed.
            </p>
          </div>
        </Flex>
        {/* flex one start */}
        {/* flex two start */}
        <Flex
          className={
            "md:justify-between flex-col md:flex-row mt-10 md:mt-20 gap-y-10 md:gap-y-0"
          }
        >
          <div className="flex flex-col items-center text-center">
            <Image className={"m-auto md:m-0"} src={getCertoFour} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              OS integrity check
            </h3>
            <p className="font-Inter text-base text-common w-full max-w-[195px]">
              Analyze your operating system for signs of tampering that could
              compromise security, such as Jailbreaking.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image className={"m-auto md:m-0"} src={getCertoFive} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Threat removal
            </h3>
            <p className="font-Inter text-base text-common w-full max-w-[195px]">
              Our intelligent scan will either safely remove threats for you or
              provide easy-to-follow instructions.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image className={"m-auto md:m-0"} src={getCertoSix} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Easy to use
            </h3>
            <p className="font-Inter text-base text-common w-full max-w-[195px]">
              We create easy to use apps that can check your device for
              vulnerabilities in a matter of minutes.
            </p>
          </div>
        </Flex>
        {/* flex two end */}
        {/* Button  */}
         <Flex className={"md:gap-x-6 md:flex-row flex-col gap-y-7 md:gap-y-0 mt-12 justify-center"}>
          <Button className="py-3 px-5 border-2 hover:bg-[#FFC247] hover:border-[#FFC247] duration-300 font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent flex items-center group">
            Get Certo for iPhone
            <FaArrowRightLong className="group-hover:ml-3 opacity-0 group-hover:opacity-100 duration-300" />
          </Button>
          <Button className="py-3 px-5 border-2 hover:bg-[#FFC247] hover:border-[#FFC247] duration-300 font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent flex items-center group">
            Get Certo for Android
            <FaArrowRightLong className="group-hover:ml-3 opacity-0 group-hover:opacity-100 duration-300" />
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default GetCerto;
