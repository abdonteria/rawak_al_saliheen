import Counter from "../components/Counter";
import Hero from "../components/Hero";
import SpecialCard from "../components/SpecialCard";
import specialCardPhoto from "../assets/images/specialCard.jpg";
import specialCardPhoto2 from "../assets/images/Quran-Mus'haf_Al_Tajweed.jpg";
import specailPgoto3 from "../assets/images/tafseer.jpeg";

export default function Home() {
  return (
    <div>
      <Hero />
      <Counter />
      <div className="flex flex-col gap-10 w-full my-10">
        <SpecialCard
          h1={"رسالة"}
          title={"حفظ القرءان ليس مجرد هواية"}
          paragraph={`حفظ القرآن ليس مجرد هواية، بل هو نعمة عظيمة ومسؤولية كبيرة تتطلب
                      الإخلاص والمثابرة. فهو ينير القلب، ويهذب النفس، ويقوي الذاكرة
                      والفهم.`}
          img={specialCardPhoto}
          boxes={true}
        />
        <SpecialCard
          h1={"نصيحة"}
          title={"التجويد ضروري جداً"}
          paragraph={`تجويد القرآن يمنح التلاوة جمالًا وروحانية، فهو يساعد على النطق 
            الصحيح للحروف وإخراجها من مخارجها السليمة.`}
          img={specialCardPhoto2}
          boxes={false}
        />
        <SpecialCard
          h1={"نصيحة"}
          title={"لا بد من تعلم التفسير مع القرءان"}
          paragraph={`التفسير يساعد على فهم معاني القرآن الكريم وتدبر آياته، مما يمكن
            المسلم من تطبيق تعاليمه في حياته. فهو يكشف المقاصد الشرعية ويوضح الأحكام،
              مما يعزز الإيمان ويقوي الصلة بالله.`}
          img={specailPgoto3}
          boxes={false}
        />
      </div>
    </div>
  );
}
