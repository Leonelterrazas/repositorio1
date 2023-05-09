import React from 'react';
import Photo1 from "../../img/plato2.png";
import {FaTimes, FaTrash } from "react-icons/fa";

const Card = (props) => {
    const {showOrder, setShowOrder} = props;

    const classBtn = 'text-[#ec7c6a] border border-gray-500 py-2 px-4 rounded-xl';
    return (
        <div className={`lg:col-span-2 fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50 ${showOrder ? "right-0" :"-right-full"}`}>
        {/* Orders */}
        <div className='relative pt-16 text-gray-300 p-8 h-full overflow-y-scroll'>
        <FaTimes onClick={() => setShowOrder(false)} className='absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl'/>
        <h1 className='text-2xl my-4'>Orders #151416</h1>
        {/* Pills */}
        <div className='flex items-center gap-4 flex-wrap mb-8'>
          <button className='bg-[#ec7c6a] text-white py-2 px-4 rounded-xl'>Dine in</button>
          <button className={classBtn}>To Go</button>
          <button className={classBtn}>Delivery</button>
        </div>
        {/* Car */}
        <div>
          <div className='grid grid-cols-6 mb-4 p-4 '>
            <h5 className='col-span-4 '>Item</h5>
            <h5>Qty</h5>
            <h5>Price</h5>
        </div>
        {/* Products */}
          <div className=' h-[400px] md:h-[650px] overflow-scroll'>
            {/* Product */}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
          <div className='grid grid-cols-6 mb-2'>
            {/* Product description */}
            <div className='col-span-4 flex items-center gap-3'>
              <img src={Photo1} className='w-10 h-10 object-cover'/>
              <div>
              <h5 className='text-sm'>Spacing Seasone sea...</h5>
              <p className='text-xs text-gray-500'>$2.29</p>
              </div>
            </div>
            {/* Qty */}
            <div className='items-center'>
              <span>2</span>
            </div>
            {/* Price */}
            <div>
              <span>$4.58</span>
            </div>
          </div>
          {/* Node */}
          <div className='grid grid-cols-6 items-center gap-2'>
            <form className='col-span-5'>
               <input type='text' className='bg-[#1F1D2B] p-1 px-4 rounded-lg outline-none' placeholder='Order node..'/>
            </form>
            <div>
              <button className='border border-red-500 p-2 rounded-lg'>
                <FaTrash className='text-red-500'/>
                </button>
            </div>
          </div>
            </div>
            {/* Product */}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
          <div className='grid grid-cols-6 mb-2'>
            {/* Product description */}
            <div className='col-span-4 flex items-center gap-3'>
              <img src={Photo1} className='w-10 h-10 object-cover'/>
              <div>
              <h5 className='text-sm'>Spacing Seasone sea...</h5>
              <p className='text-xs text-gray-500'>$2.29</p>
              </div>
            </div>
            {/* Qty */}
            <div className='items-center'>
              <span>2</span>
            </div>
            {/* Price */}
            <div>
              <span>$4.58</span>
            </div>
          </div>
          {/* Node */}
          <div className='grid grid-cols-6 items-center gap-2'>
            <form className='col-span-5'>
               <input type='text' className='bg-[#1F1D2B] p-1 px-4 rounded-lg outline-none' placeholder='Order node..'/>
            </form>
            <div>
              <button className='border border-red-500 p-2 rounded-lg'>
                <FaTrash className='text-red-500'/>
                </button>
            </div>
          </div>
            </div>
            {/* Product */}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
          <div className='grid grid-cols-6 mb-2'>
            {/* Product description */}
            <div className='col-span-4 flex items-center gap-3'>
              <img src={Photo1} className='w-10 h-10 object-cover'/>
              <div>
              <h5 className='text-sm'>Spacing Seasone sea...</h5>
              <p className='text-xs text-gray-500'>$2.29</p>
              </div>
            </div>
            {/* Qty */}
            <div className='items-center'>
              <span>2</span>
            </div>
            {/* Price */}
            <div>
              <span>$4.58</span>
            </div>
          </div>
          {/* Node */}
          <div className='grid grid-cols-6 items-center gap-2'>
            <form className='col-span-5'>
               <input type='text' className='bg-[#1F1D2B] p-1 px-4 rounded-lg outline-none' placeholder='Order node..'/>
            </form>
            <div>
              <button className='border border-red-500 p-2 rounded-lg'>
                <FaTrash className='text-red-500'/>
                </button>
            </div>
          </div>
            </div>
            {/* Product */}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
          <div className='grid grid-cols-6 mb-2'>
            {/* Product description */}
            <div className='col-span-4 flex items-center gap-3'>
              <img src={Photo1} className='w-10 h-10 object-cover'/>
              <div>
              <h5 className='text-sm'>Spacing Seasone sea...</h5>
              <p className='text-xs text-gray-500'>$2.29</p>
              </div>
            </div>
            {/* Qty */}
            <div className='items-center'>
              <span>2</span>
            </div>
            {/* Price */}
            <div>
              <span>$4.58</span>
            </div>
          </div>
          {/* Node */}
          <div className='grid grid-cols-6 items-center gap-2'>
            <form className='col-span-5'>
               <input type='text' className='bg-[#1F1D2B] p-1 px-4 rounded-lg outline-none' placeholder='Order node..'/>
            </form>
            <div>
              <button className='border border-red-500 p-2 rounded-lg'>
                <FaTrash className='text-red-500'/>
                </button>
            </div>
          </div>
            </div>
            {/* Product */}
            <div className='bg-[#262837] p-4 rounded-xl mb-4'>
          <div className='grid grid-cols-6 mb-2'>
            {/* Product description */}
            <div className='col-span-4 flex items-center gap-3'>
              <img src={Photo1} className='w-10 h-10 object-cover'/>
              <div>
              <h5 className='text-sm'>Spacing Seasone sea...</h5>
              <p className='text-xs text-gray-500'>$2.29</p>
              </div>
            </div>
            {/* Qty */}
            <div className='items-center'>
              <span>2</span>
            </div>
            {/* Price */}
            <div>
              <span>$4.58</span>
            </div>
          </div>
          {/* Node */}
          <div className='grid grid-cols-6 items-center gap-2'>
            <form className='col-span-5'>
               <input type='text' className='bg-[#1F1D2B] p-1 px-4 rounded-lg outline-none' placeholder='Order node..'/>
            </form>
            <div>
              <button className='border border-red-500 p-2 rounded-lg'>
                <FaTrash className='text-red-500'/>
                </button>
            </div>
          </div>
            </div>
          </div>
        </div>
        {/* Sutmit payment */}
        <div className='bg-[#262837] absolute w-full bottom-0 left-0 p-4 mb-'>
          <div className='flex items-center justify-between mb-4'>
            <span className='text-gray-400'>Discount</span>
            <span>$</span>
          </div>
          <div className='flex items-center justify-between mb-6'>
            <span className='text-gray-400'>SubTotal</span>
            <span>$201.03</span>
          </div>
          <div>
          <button className='bg-[#e18075] lg:static w-full py-2 px-4 rounded-lg'>Continue to payment</button>
          </div>
        </div>
      </div>
      </div>
    )
}

export default Card;