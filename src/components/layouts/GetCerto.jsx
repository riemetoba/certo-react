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
        
        {/* flex one */}
        <Flex className={"md:justify-between flex-col md:flex-row gap-y-10 md:gap-y-0"}>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image className={"m-auto md:m-0"} src={getCertoOne} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Spyware detection
            </h3>
            <p className="font-Inter text-base text-common w-full max-w-[195px]">
              Our advanced spyware detection engine can identify if a device
              contains spyware or bugging software.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Image className={"m-auto md:m-0"} src={getCertoTwo} />
            <h3 className="font-Inter font-bold text-[19px] text-common py-4">
              Keylogger detection
            </h3>
            <p className="font-Inter text-base text-common w-full max-w-[195px]">
              Find malicious keyboards installed on your device that could allow
              someone to record things you type (e.g. passwords).
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
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

        {/* Buttons Row */}
        <Flex className={"gap-y-4 sm:gap-y-0 sm:gap-x-6 mt-12 md:mt-15 flex-col sm:flex-row md:justify-center items-center"}>
          <Button className={'w-full sm:w-auto py-3 px-5 hover:bg-[#FFC247] hover:border-[#FFC247] flex items-center justify-center'}>
            Get Certo for iPhone
            <span className="inline-flex align-middle ml-3">
              <FaArrowRightLong />
            </span>
          </Button>
          <Button className={'w-full sm:w-auto py-3 px-5 hover:bg-[#FFC247] hover:border-[#FFC247]'}>
            Get Certo for Android
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default GetCerto;