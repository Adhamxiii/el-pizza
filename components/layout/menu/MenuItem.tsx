import Image from "next/image";
import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
      <div className="text-center">
        <Image
          src="/pizza.png"
          alt="pizza"
          width={300}
          height={300}
          className="max-h-auto max-w-48 block mx-auto"
        />
      </div>
      <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
      <p className="text-center text-gray-500 text-sm mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
      <button className="bg-primary text-white px-8 py-2 rounded-full mt-4">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
