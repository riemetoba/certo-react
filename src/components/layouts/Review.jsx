import { FaStar } from "react-icons/fa";

export default function Review() {
  return (
    <section className="bg-[#FDB235] py-12">
         <h2 className="font-Inter text-[36px] ml-33 font-extrabold mb-10">Loved by thousands of iPhone <br />and Android users alike</h2>
         {/* main flex start */}
         <div className="flex items-center gap-x-7">
           {/* slider one  */}
            <div className="bg-white p-7 rounded-4xl w-[20%] h-[308px]">
                <div className="flex items-center gap-x-2">
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                </div>
                <p className="text-base font-Inter my-5">Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.</p>
                <p>colinandmandy94</p>
            </div>
          {/* slider two  */}
            <div className="bg-white p-7 rounded-4xl w-[20%] h-[308px]">
                <div className="flex items-center gap-x-2">
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                </div>
                <p className="text-base font-Inter my-5">Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check.is a great bonus. Check any email of they’ve ever been named in a data breach from years ago. Sweet tool. Love it highly recommend.</p>
                <p>Jennifer Black</p>
            </div>
         
          {/* slider three  */}
            <div className="bg-white p-7 rounded-4xl w-[20%] h-[308px]">
                <div className="flex items-center gap-x-2">
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                </div>
                <p className="text-base font-Inter my-5">This app is good if you need to identify certain vulnerabilities on your iPhone. If you have any issues, their customer service was quite helpful and responsive.</p>
                <p>Phillip Colligan</p>
            </div>
              {/* slider four  */}
            <div className="bg-white p-7 rounded-4xl w-[20%] h-[308px]">
                <div className="flex items-center gap-x-2">
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                </div>
                <p className="text-base font-Inter my-5">I wish they had a VPN, I’d be signing up for that too. Apart from that the app is top notch. I had Certo on my last phone and it was the first app I put on this phone when I got it from the store. The scanner and other parts of the app are really easy and simple to use, even for a non-techie like me</p>
                <p>Leslie Carrillo</p>
            </div>
         </div>
    </section>
  )
}
