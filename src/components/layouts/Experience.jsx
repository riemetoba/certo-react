import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import experience from "../../assets/experience.png"


export default function Experience() {
  return (
    <section className="py-12">
       <Container>
        <Flex>
           <div className="">
             <h3 className="text-4xl font-extrabold text-common font-Inter">At Certo, mobile security is not an afterthought, it’s what we do.</h3>
           </div>
           <div className="">
            <Image src={experience}/>
           </div>
        </Flex>
       </Container>
    </section>
  )
}
