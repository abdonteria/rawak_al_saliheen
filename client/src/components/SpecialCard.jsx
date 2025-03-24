import { FaRegHeart } from "react-icons/fa";

export default function SpecialCard({ h1, title, paragraph, img, boxes }) {
  const handleboxes = (boxes) => {
    if (!boxes) return null; // تجنب الأخطاء في حالة عدم وجود `boxes`

    return [
      { title: "جزء", num: 30 },
      { title: "حزب", num: 60 },
      { title: "ربع", num: 240 },
      { title: "سورة", num: 114 },
    ].map((ele, i) => (
      <div
        key={i}
        className="xl:w-22 xl:h-22 rounded-2xl xl:flex items-center justify-center flex-col bg-white/10"
      >
        <div className="text-teal-500 font-bold text-3xl">{ele.num}</div>
        <div className="font-semibold text-lf">{ele.title}</div>
      </div>
    ));
  };

  const boxElements = handleboxes(boxes); // ✅ استدعاء الدالة هنا

  return (
    <div className="mx-auto px-4">
      <div className="container mx-auto flex items-center w-full justify-between bg-black rounded-2xl">
        <div className="rounded-2xl sm:block hidden w-[18rem]">
          <img
            src={img}
            className="h-[18rem] w-[18rem] bg-cover bg-center rounded-r-2xl"
            alt="."
          />
        </div>
        <div className="h-[18rem] flex items-center px-10 bg-black text-white justify-between mx-auto flex-1 rounded-2xl">
          <section className="lg:max-w-2xl max-w-4xl">
            <h1 className="lg:text-xl md:text-lg text-sm text-teal-500 font-bold mb-2">
              {h1}
            </h1>
            <h2 className="lg:text-2xl md:text-xl text-md font-bold mb-3">
              {title}
            </h2>
            <p className="lg:text-2xl md:text-xl sm:text-md text-sm font-light">
              {paragraph}
            </p>
            <div className="flex mt-7">
              <button className="lg:px-4 h-13 px-3 transition-all bg-teal-500 text-lg font-semibold rounded-lg border-teal-500 cursor-pointer text-black hover:border-teal-500 hover:bg-transparent hover:text-teal-500 border-2">
                ابدأ رحلتك الان
              </button>
              <div className="h-13 px-4 cursor-pointer hover:bg-teal-500 flex items-center justify-center rounded-lg bg-white mr-5 group">
                <FaRegHeart className="text-teal-500 text-2xl group-hover:text-white" />
              </div>
            </div>
          </section>
          <section className="rounded-2xl min-w-[300px] xl:block hidden">
            <div className="grid grid-cols-2 p-10 gap-6">
              {boxElements} {/* ✅ الآن ستظهر العناصر بشكل صحيح */}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
