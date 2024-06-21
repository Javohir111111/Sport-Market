"use client"
import { Select } from "antd";
import Aside from "../../components/products-main/aside";
import Card from "@/components/ui/card";
import { useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [cardsLoaded, setCardsLoaded] = useState(12); 

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setCardsLoaded(cardsLoaded + 12); 
      setLoading(false);
    }, 1000); 
  };

  return (
    <main className="container mx-auto flex mt-[70px] mb-[70px]">
      <Aside />
      <section className="w-full">
        <div className="flex mb-2 justify-between mx-auto xl:w-[1050px] sm:w-[auto] ml-2 flex-wrap ">
          <div className="flex gap-2">
            <Select
              className="w-[150px]"
              defaultValue="Сортировать"
            >
              <Select.Option value={12}>12</Select.Option>
              <Select.Option value={20}>20</Select.Option>
            </Select>
            <Select className="w-[150px]" defaultValue="Все продукты">
              <Select.Option value="">test-1</Select.Option>
            </Select>
          </div>
          <div className="flex gap-2">
            <Select className="w-[150px]" defaultValue="Кард">
              <Select.Option value="">test-1</Select.Option>
            </Select>
            <Select className="w-[150px]" defaultValue="Лист  ">
              <Select.Option value="">test-1</Select.Option>
            </Select>
          </div>
        </div>
        <div className="flex flex-wrap justify-between ml-2 gap-2">
          <Card count={cardsLoaded} /> 
        </div>
        <div className="w-full">
          <button
            className="bg-white px-4 py-2 rounded-md xl:w-[1050px] sm:w-auto mt-2 ml-2"
            onClick={handleLoadMore} 
            disabled={loading} 
          >
            {loading ? "Loading..." : "Load more"}
          </button>
        </div>
      </section>
    </main>
  );
}
