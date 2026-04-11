import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from "../Image";
import cnba from "../../assets/cnba.png"
import newYorkPost from "../../assets/newYorkPost.png"
import financialTimes from "../../assets/financialTimes.png"
import readerDigest from "../../assets/readerDigest.png"
import zdNet from "../../assets/zdNet.png"
import wired from "../../assets/wired.png"

export default function Review() {
  return (
    <section className="bg-[#FDB235] py-12">
         <h2 className="font-Inter text-[36px] ml-33 font-extrabold mb-10">Loved by thousands of iPhone <br />and Android users alike</h2>
         {/* main flex start */}
         <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper"
          >
         <div className="flex items-center gap-x-7">
           {/* slider one start */}
           <SwiperSlide>
            <div className="bg-white p-7 rounded-4xl h-[308px]">
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
            </SwiperSlide>
          {/* slider two start  */}
          <SwiperSlide>
            <div className="bg-white p-7 rounded-4xl h-[308px]">
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
         </SwiperSlide>
          {/* slider three start */}
          <SwiperSlide>
            <div className="bg-white p-7 rounded-4xl h-[308px]">
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
            </SwiperSlide>
              {/* slider four start */}
              <SwiperSlide>
            <div className="bg-white p-7 rounded-4xl h-[308px]">
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
            </SwiperSlide>
            {/* slider five  */}
          <SwiperSlide>
            <div className="bg-white p-7 rounded-4xl h-[308px]">
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
         </SwiperSlide>
         {/* slider six start  */}
          <SwiperSlide>
            <div className="bg-white p-7 rounded-4xl h-[308px]">
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
         </SwiperSlide>
         </div>
         </Swiper>
         <div className="flex items-center pt-10 gap-x-10 ml-33">
          <h5 className="font-Inter text-common text-[23px] font-extrabold">Featured in:</h5>
          <div className="flex gap-x-7">
            <Image src={cnba}/>
            <Image src={newYorkPost}/>
            <Image src={financialTimes}/>
            <Image src={readerDigest}/>
            <Image src={zdNet}/>
            <Image src={wired}/>
          </div>
         </div>
    </section>
  )
}
