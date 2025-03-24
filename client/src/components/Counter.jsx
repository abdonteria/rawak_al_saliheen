import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Counter() {
  const container = (delay) => ({
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

  return (
    <div className="bg-white/40">
      <div className="w-full xl:max-w-7xl sm:max-w-8xl mx-auto py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 space-y-[8vh] md:space-y-1 gap-10 mx-auto text-right px-5 font-semibold py-10 md:py-5">
          {[
            { end: 50, delay: 0.2, text: "حفظة القرآن \n الكريم" },
            { end: 6, delay: 0.5, text: "من لديهم \n إجازة" },
            { end: 12, delay: 0.8, text: "عدد \n الخاتمين" },
            { end: 7, delay: 1, text: "المسابقات و \n المشاركات" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={container(item.delay)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-center gap-3 mx-auto  w-full justify-center h-[50px] flex-col md:flex-row"
            >
              <span className="text-5xl font-semibold text-emerald-400">
                <CountUp
                  start={0}
                  end={item.end}
                  duration={3}
                  separator=","
                  delay={item.delay}
                />
                +
              </span>
              <p className="text-lg text-black whitespace-pre-line">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
