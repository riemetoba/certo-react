import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Button from "../Button";
import { FaArrowRightLong } from "react-icons/fa6";
import experience from "../../assets/experience.png"



export default function Experience() {
  return (
    <section className="py-20">
       <Container>
        <Flex className={"justify-between items-start gap-x-10"}>
           <div className="w-[50%]">
             <h3 className="text-4xl font-extrabold text-common font-Inter leading-[45px]">At Certo, mobile security <br />is not an afterthought, <br />it’s what we do.</h3>
             <p className="py-12 text-common text-xl font-Inter w-[430px] leading-[30px]">With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.</p>
               <div className={"flex flex-col gap-y-7 w-[50%]"}>
          <Button className="py-3 px-5 border-2 hover:bg-[#FFC247] hover:border-[#FFC247] duration-300 font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent flex items-center group">
            Get Certo for iPhone
            <FaArrowRightLong className="group-hover:ml-3 opacity-0 group-hover:opacity-100 duration-300" />
          </Button>
          <Button className="py-3 px-5 border-2 hover:bg-[#FFC247] hover:border-[#FFC247] duration-300 font-Inter font-extrabold rounded-[42px] cursor-pointer bg-transparent flex items-center group">
            Get Certo for Android
            <FaArrowRightLong className="group-hover:ml-3 opacity-0 group-hover:opacity-100 duration-300" />
          </Button>
        </div>
           </div>
           <div className="w-[50%]">
            <Image src={experience}/>
           </div>
        </Flex>
         
       </Container>
    </section>
  )
}
