
import Button from "../Button";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import mobile from "/src/assets/mobile.png"


const Banner = () => {
  return (
    <div className="bg-[url('/src/assets/bannerBg.jpg')] py-[200px] bg-cover bg-no-repeat bg-center">
      <Container>
        <Flex>
          <div className="">
            <h1 className="text-6xl font-Inter font-extrabold w-[700px] leading-[75px]">
              Your mobile privacy is our mission
            </h1>
            <p className="text-[20px] font-Inter w-[560px] leading-[30px] my-20">
              Think your phone has been hacked? Our trusted apps make it easy
              for you to scan, detect and remove threats from your iPhone and
              Android devices.
            </p>
          </div>
          <div className="ml-10">
            <Image src={mobile}/>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Banner;
