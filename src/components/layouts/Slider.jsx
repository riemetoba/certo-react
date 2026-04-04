import { FaStar } from "react-icons/fa";

export default function Slider() {
  return (
    <section className="bg-[#FDB235] py-12">
         <h2 className="font-Inter text-[36px] ml-33 font-extrabold mb-10">Loved by thousands of iPhone <br />and Android users alike</h2>
         {/* main flex start */}
         <div className="flex items-center gap-x-7">
          {/* slider one  */}
            <div className="bg-white p-7 rounded-4xl w-[20%] h-[306px]">
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
          {/* slider two  */}
            <div className="bg-white p-7 rounded-4xl w-[20%] h-[306px]">
                <div className="flex items-center gap-x-2">
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                </div>
                <p className="text-base font-Inter my-8">Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.</p>
                <p>colinandmandy94</p>
            </div>
         </div>
    </section>
  )
}
