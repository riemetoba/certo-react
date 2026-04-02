import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../Container";
import Flex from "../Flex";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/bannerBg.jpg')] py-18 lg:py-[200px] bg-cover bg-no-repeat bg-center">
      <Container>
        <div className="px-2 md:px-0">
          <h1 className="text-[26px] md:text-6xl font-Inter font-extrabold leading-[50px] md:leading-[75px]">
            Your mobile privacy <br /> is our mission
          </h1>
          <p className="text-base md:text-[20px] font-Inter w-full md:w-[560px] leading-6 md:leading-[30px] my-12 md:my-18">
            Think your phone has been hacked? Our trusted apps make it easy for
            you to scan, detect and remove threats from your iPhone and Android
            devices.
          </p>
        </div>
        <Flex className={"md:gap-x-6 md:flex-row flex-col gap-y-7 md:gap-y-0"}>
          <Button className="py-3 px-5 border-2 hover:bg-[#FFC247] hover:border-[#FFC247] duration-300 font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent flex items-center group">
            Get Certo for iPhone
            <FaArrowRightLong className="group-hover:ml-3 opacity-0 group-hover:opacity-100 duration-300" />
          </Button>
          <Button className="py-3 px-5 border-2 hover:bg-[#FFC247] hover:border-[#FFC247] duration-300 font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent flex items-center group">
            Get Certo for Android
            <FaArrowRightLong className="group-hover:ml-3 opacity-0 group-hover:opacity-100 duration-300" />
          </Button>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
