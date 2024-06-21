import React from "react";
import Slider from "../ui/slider";
import { Select } from "antd";

export default function aside() {
  return (
    <aside className="w-[260px] bg-white p-4">
      <h1 className="text-[24px]">Фильтр</h1>
      <div className="flex flex-col justify-between h-[350px]">
        <div>
          <h2 className="text-[14px]">Цена</h2>
          <Slider />
        </div>
        <div>
          <h2 className="mb-2 text-[14px]">Артикуль</h2>
          <Select className="w-[160px]">
            <option value="test-1">test-1</option>
            <option value="test-2">test-2</option>
            <option value="test-3">test-3</option>
          </Select>
        </div>
        <div>
          <h2 className="mb-2 text-[14px]">Выберите категорию:</h2>
          <Select className="w-[160px]">
            <option value="test-1">test-1</option>
            <option value="test-2">test-2</option>
            <option value="test-3">test-3</option>
          </Select>
        </div>
        <div>
          <h2 className="mb-2 text-[14px]">Новинка</h2>
          <Select className="w-[160px]">
            <option value="test-1">test-1</option>
            <option value="test-2">test-2</option>
            <option value="test-3">test-3</option>
          </Select>
        </div>
        <button>Показать Результат</button>
      </div>
    </aside>
  );
}
