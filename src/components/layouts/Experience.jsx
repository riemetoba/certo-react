import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import experience from "../../assets/experience.png"


export default function Experience() {
  return (
    <section className="py-20">
       <Container>
        <Flex className={"justify-between items-start gap-x-10"}>
           <div className="w-[50%]">
             <h3 className="text-4xl font-extrabold text-common font-Inter leading-[45px]">At Certo, mobile security <br />is not an afterthought, <br />it’s what we do.</h3>
             <p className="py-10 text-common text-xl font-Inter w-[430px] leading-[30px]">With years of experience in mobile security and spyware detection, our products have helped countless people safeguard their devices and find peace of mind.</p>
           </div>
           <div className="w-[50%]">
            <Image src={experience}/>
           </div>
        </Flex>
       </Container>
    </section>
  )
}
