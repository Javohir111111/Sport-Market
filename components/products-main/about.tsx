import Image from "next/image";
import img from "../../assets/images/star.svg";

export default function about() {
  return (
    <div className="flex items-center justify-around mb-[70px]">
      <div>
        <h1 className="xl:text-[24px] sm:text-[14px] font-semibold">
          Описание
        </h1>
        <div className="bg-white xl:w-[500px] sm:w-[300px] xl:h-[500px] sm:h-[300px] xl:py-[70px] sm:py-[20px] xl:px-[70px] sm:px-[20px]">
          <h1 className="xl:text-[24px] sm:text-[18px] font-semibold">
            Гантель виниловая, 2 х 3 кг
          </h1>
          <p className="xl:text-[18px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px]">
            В составе томатов в большом количестве содержатся сахара, клетчатка,
            пектины, бета-каротин, витамины.
          </p>

          <ul className="flex flex-wrap gap-4">
            <li className="xl:w-[150px] sm:w-[100px]">
              <h3 className="sm:text-[12px] xl:text-[20px]">Вес гантела:</h3>
              <p className="sm:text-[10px] xl:text-[18px]">5кг</p>
            </li>
            <li className="xl:w-[150px] sm:w-[100px]">
              <h3 className="sm:text-[12px] xl:text-[20px]">Цвета:</h3>
              <p className="sm:text-[10px] xl:text-[18px]">Синий, Красный</p>
            </li>
            <li className="xl:w-[150px] sm:w-[100px]">
              <h3 className="sm:text-[12px] xl:text-[20px]">Вес гантела:</h3>
              <p className="sm:text-[10px] xl:text-[18px]">5кг</p>
            </li>
            <li className="xl:w-[150px] sm:w-[100px]">
              <h3 className="sm:text-[12px] xl:text-[20px]">Цвета:</h3>
              <p className="sm:text-[10px] xl:text-[18px]">Синий, Красный</p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="xl:text-[24px] font-semibold sm:text-[16px]">
          Гантель виниловая, 2 х 3 кг
        </h1>
        <div className="xl:w-[500px] xl:h-[500px] bg-white xl:py-[40px] sm:py-[20px] xl:px-[70px] sm:px-[20px] sm:w-[300px] sm:h-[300px]">
          <div className="w-[400px]">
            <h1 className="xl:text-[20px] sm:text-[14px]">Шахзод Анваров</h1>
            <h2 className="xl:text-[16px] sm:test-[12px] opacity-[0.7] xl:mb-5 sm:mb-1">
              клиент
            </h2>
            <p className="xl:text-[18px] sm:text-[12px] sm:mt-[12px] sm:mb-[28px] xl:mt-[28px] xl:mb-[53px] sm:w-[250px] xl:w-[400px]">
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <Image src={img} alt="" className="xl:mt-5 sm:mb-1" />
          </div>
          <div className="w-[400px] xl:mt-6 sm:mt-2">
            <h1 className="xl:text-[20px] sm:text-[14px]">Шахзод Анваров</h1>
            <h2 className="xl:test-[16px] sm:test-[12px] opacity-[0.7] xl:mb-5 sm:mb-1">
              клиент
            </h2>
            <p className="xl:text-[18px] sm:text-[12px]">
              В составе томатов в большом количестве содержатся сахара,
              клетчатка, пектины, бета-каротин, витамины.
            </p>
            <Image src={img} alt="" className="xl:mt-5 sm:mb-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
