"use client";
import { useState } from "react";

interface Props {
  value: number;
}

export const CartCounter = ({ value }: Props) => {
  const [countValue, setCountValue] = useState<number>(value);
  return (
    <>
      <span className="text-8xl"> {countValue} </span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCountValue(countValue - 1)}
        >
          {" "}
          -1{" "}
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={() => setCountValue(countValue + 1)}
        >
          {" "}
          +1{" "}
        </button>
      </div>
    </>
  );
};
