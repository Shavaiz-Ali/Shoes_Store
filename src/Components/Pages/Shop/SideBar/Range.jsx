import { useState } from 'react';
import {useDispatch} from "react-redux";
import { filterByRange } from '../../../../Store/storeSlice';
const PriceFilter = () => {
  // const [filterByRange, setFilterByRange] = useState("")
  const [maxPrice, setMaxPrice] = useState(500);
  const dispatch = useDispatch()


  const handleFilter =(e) =>{
    setMaxPrice(e.target.value)
  }
  return (
    <div className="">
      <h1 className="text-[24px] font-[600]">Category</h1>
      <input
        type="range"
        className="w-[200px] text-green-600 my-4"
        min="300"
        max="1000"
        step="10"
        value={maxPrice}
        onChange={handleFilter}
      />
      <p className="text-14px text-black/[0.50] italic">
        Price $ ${maxPrice}
      </p>
      <button
       className='text-[14px] text-white bg-[#2AC37D] py-2 px-6 rounded-[50px] w-[150px] mt-5 shadow-black/[0.15] shadow-lg font-semibold hover:bg-[#30d68b] transition-all duration-300 ease-out'  
         onClick={() => dispatch(filterByRange(maxPrice))}
      >
        Filter
      </button>
    </div>
  );
};

export default PriceFilter;
