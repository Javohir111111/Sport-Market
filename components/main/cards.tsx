"use client"
import Image from "next/image";
import img5 from "../../assets/images/pngegg (34) 3.png";
import img6 from "../../assets/images/pngegg (34) 9.png";
import img7 from "../../assets/images/pngegg (34) 10.png";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";
import { getProduct } from "@/service/product.service"; // Импорт функции getProduct из вашего API

interface Product {
  product_id: number;
  product_name: string;
  cost: number;
  discount: number;
  image_url: string[];
  liked: boolean;
}

export default function Cards() {
  const [data, setData] = useState<Product[]>([]);

  const getData = async () => {
    try {
      const response = await getProduct(4, 1); // Используем функцию getProduct
      if (response.status === 200) {
        const productsWithLikeState = response.data.products.map((product: any) => ({
          ...product,
          liked: false // Initialize the liked state
        }));
        setData(productsWithLikeState);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container mx-auto">
        <Section title="Акция" defaultImage={img5} data={data} setData={setData} />
      </div>
      <div className="container mx-auto mt-[70px]">
        <Section title="Новинки" defaultImage={img6} data={data} setData={setData} />
      </div>
      <div className="container mx-auto mt-[70px]">
        <Section title="Продукты" defaultImage={img7} data={data} setData={setData} />
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  defaultImage: any;
  data: Product[];
  setData: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Section({ title, defaultImage, data, setData }: SectionProps) {
  const handleLikeClick = async (productId: number) => {
    setData(prevData =>
      prevData.map((product: Product) =>
        product.product_id === productId ? { ...product, liked: !product.liked } : product
      )
    );

    try {
      const response = await http.post(`/like/${productId}`);
      if (!response.status === 200) {
        console.error(`Failed to like product with id ${productId}`);
      }
    } catch (error) {
      console.error(`Error liking product with id ${productId}:`, error);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h1 className="text-[24px]">{title}</h1>
        <div className="flex gap-3">
          <button className="bg-white w-[40px] h-[40px] rounded-full">
            {"<"}
          </button>
          <button className="bg-white w-[40px] h-[40px] rounded-full">
            {">"}
          </button>
        </div>
      </div>
      <div className="flex justify-around relative flex-wrap gap-4 md:gap-8">
        {data.map((product: Product) => (
          <div key={product.product_id} className="relative">
            <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative shadow-md">
              <div
                className="absolute right-[20px] top-[20px] cursor-pointer"
                onClick={() => handleLikeClick(product.product_id)}
              >
                {product.liked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined />}
              </div>
              <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                <Image
                  src={product.image_url[0] || defaultImage}
                  alt={product.product_name}
                  width={150}
                  height={194}
                />
              </div>
              <div className="px-3 text-center">
                <h1 className="text-[14px] sm:text-[16px] md:text-[18px]">
                  {product.product_name}
                </h1>
                <p className="text-red-700 font-bold text-[16px] sm:text-[18px] md:text-[20px]">
                  {product.cost} uzs
                </p>
                {title === "Акция" && product.discount > 0 && (
                  <span className="line-through opacity-50 text-[#1F1D14] text-[12px] sm:text-[14px] md:text-[16px]">
                    {Math.ceil(product.cost / (1 - product.discount / 100))} uzs
                  </span>
                )}
              </div>
              <Link
                onClick={() => Cookie.set("product_id", product.product_id)}
                href={`/${product.product_id}`}
                className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px]"
              >
                Корзина
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
