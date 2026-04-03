import { FaStar } from "react-icons/fa";

export default function Slider() {
  return (
    <section className="bg-[#FDB235] py-12">
         <h2 className="font-Inter text-[36px] ml-33 font-extrabold">Loved by thousands of iPhone <br />and Android users alike</h2>
         <div className="flex items-center">
            <div className="bg-white p-10 rounded-4xl w-100 h-[305px]">
                <div className="flex items-center gap-x-2">
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                    <FaStar className="text-[#FFC247] text-2xl"/>
                </div>
                <p className="text-base font-Inter">Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check.is a great bonus. Check any email of they’ve ever been named in a data breach from years ago. Sweet tool. Love it highly recommend.</p>
            </div>
         </div>
    </section>
  )
}
