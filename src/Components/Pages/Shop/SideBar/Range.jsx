import React, { useState } from 'react';

const PriceFilter = () => {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(500);

  const handleMinPriceChange = (e) => {
    const newMinPrice = parseInt(e.target.value);
    setMinPrice(newMinPrice);
    setMaxPrice(Math.max(maxPrice, newMinPrice + 100));
  };



  return (
    <div className="">
      <h1 className="text-[24px] font-[600]">Category</h1>
      <input
        type="range"
        className="w-[200px] text-green-600 my-4"
        min="300"
        max="2000"
        step="10"
        value={minPrice}
        onChange={handleMinPriceChange}
      />
      <p className="text-14px text-black/[0.50] italic">
        Price ${minPrice} - ${maxPrice}
      </p>
      <button
        className='text-[14px] text-white bg-[#2AC37D] py-2 px-6 rounded-[50px] w-[150px] mt-5 shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out'
        // onClick={}
      >
        Filter
      </button>
    </div>
  );
};

export default PriceFilter;
