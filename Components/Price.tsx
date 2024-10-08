"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const handleIncrement = () => {
    setQuantity(prev => (prev < 9 ? prev + 1 : prev))
}

const handleDecrement = () => {
 setQuantity(prev => (prev > 1 ? prev - 1 : prev))}

    

  

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">&#8358; {total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-6 items-center ">
        {options?.map((option,index) => (
          <button
            key={option.title}
            className={`ring-1 min-w-[6rem] ring-brown py-2 px-3 rounded-md ${selected === index ? 'bg-yellow-500 text-brown' : 'white'} `} onClick={() => setSelected(index)}
            >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-brown">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={handleDecrement}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={handleIncrement}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button className="uppercase w-56 bg-yellow-500 text-brown p-3 ring-1 ring-brown">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;