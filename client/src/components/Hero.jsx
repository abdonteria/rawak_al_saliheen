import { FaLocationArrow } from "react-icons/fa";
import heroImage from "../assets/images/hero.jpg";
import Hero2 from "../assets/images/Hero4.jpg";
import Hero3 from "../assets/images/hero5.jpg";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineCallReceived } from "react-icons/md";
import smHeroImage2 from "../assets/images/hero_image_2.jpg";
import smHeroImage3 from "../assets/images/hero_image_3.jpg";
import smHeroImage4 from "../assets/images/hero_image_4.jpg";

export default function Hero() {
  return (
    <div
      className={`bg-cover bg-center py-10`}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container mx-auto text-white flex xl:flex-row flex-col items-center justify-between xl:gap-3 gap-[10vh] px-3">
        <div className="flex flex-col  items-start">
          <h2 className="text-teal-500 text-xl font-bold">رواق الصالحين</h2>
          <p className="md:text-6xl text-5xl font-bold leading-[10vh]">
            مركز تحفيظ القرءان <br />
            بالتجويد وتعليم علومه المباركة
          </p>
          <div className="flex xl:flex-col justify-between items-center xl:items-start w-full">
            <h3 className="flex gap-2 items-center mt-2 px-3">
              <FaLocationArrow className="text-teal-500" />
              الشرقية, مركز الحسينية, امام بنك مصر
            </h3>
            <h3 className="flex gap-2 items-center mt-2 px-3">
              <MdOutlineDateRange className="text-teal-500" />
              كل الايام ما عدا الجمعة والثلاثاء
            </h3>
          </div>
          <button
            className={`px-10 py-3 transition-all bg-teal-500 text-lg font-semibold rounded-lg cursor-pointer xl:hover:px-15
                      text-white hover:bg-teal-400 translate-y-8 xl:mx-3 flex items-center gap-5 group xl:w-auto w-[90%] mx-auto justify-center xl:justify-baseline`}
          >
            التسجيل
            <MdOutlineCallReceived className="group-hover:rotate-90 transition" />
          </button>
        </div>
        <div className="xl:w-[1000px] w-[90%]">
          <div className="w-full p-10 rounded-xl bg-teal-500/10 backdrop-blur-lg shadow-lg">
            <h1 className="text-teal-500 text-xl font-bold pb-2">
              عن طريقة التحفيظ
            </h1>
            <p className="md:text-2xl text-xl font-semibold text-white">
              ننتهج طريقة مميزة في حفظ وتعليم القرءان الكريم حيث اننا نركز علي
              التجويد بشكل كبير ونلقن المتعلم بعناية عند حفظه للوح الجديد ولا
              نهمل الماضي ايضا
            </p>
          </div>
          <div className="overflow-hidden lg:grid grid-rows-2 hidden lg:grid-cols-2 w-full gap-5 mt-3 lg:h-[35vh]">
            {[Hero2, Hero3].map((ele, i) => [
              <img
                key={i}
                className="rounded-xl bg-cover border lg:h-[35vh] sm:h-[40vh] md:h-[50vh] h-[30vh] w-full"
                src={ele}
                alt="."
              />,
            ])}
          </div>
          <div className="overflow-hidden grid grid-cols-2 sm:grid-cols-3 space-y-7 mt-3">
            {[smHeroImage2, smHeroImage3, smHeroImage4].map((ele, i) => (
              <div className="" key={i}>
                <img
                  src={ele}
                  alt=".image"
                  className="md:h-[12rem] md:w-[12rem] w-[10rem] h-[10rem] lg:hidden bg-cover bg-center rounded-lg border mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
