import React from 'react';
import { FaHome, FaHistory, FaCanadianMapleLeaf, FaEnvelopeOpenText, FaWordpress, FaSlidersH, FaUndo} from "react-icons/fa";
const Sidebar = (props) => {
    const { showMenu } = props;


    return <div className={`bg-[#1F1D2B] fixed t-0 tp-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 ${showMenu ? "left-0" : "-left-full"}`}>
        <div>
        <ul className='pl-4'>
            <li className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</li>
            <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl text-white'>
                <a href='#' className='bg-[#e18075] p-4 flex justify-center rounded-2xl'>
                    <FaHome className='text-xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-[#e18075] p-4 flex justify-center rounded-2xl  text-[#e18075] group-hover:text-white transition-colors'>
                    <FaHistory className='text-xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-[#e18075] p-4 flex justify-center rounded-2xl  text-[#e18075] group-hover:text-white transition-colors'>
                    <FaCanadianMapleLeaf className='text-xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-[#e18075] p-4 flex justify-center rounded-2xl  text-[#e18075] group-hover:text-white transition-colors'>
                    <FaEnvelopeOpenText className='text-xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-[#e18075] p-4 flex justify-center rounded-2xl  text-[#e18075] group-hover:text-white transition-colors'>
                    <FaWordpress className='text-xl'/>
                </a>
            </li>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-[#e18075] p-4 flex justify-center rounded-2xl  text-[#e18075] group-hover:text-white transition-colors'>
                    <FaSlidersH className='text-xl'/>
                </a>
            </li>
        </ul>
        </div>
        <div>
            <ul className='pl-4'>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
                <a href='#' className='group-hover:bg-[#e18075] p-4 flex justify-center rounded-2xl  text-[#e18075] group-hover:text-white transition-colors'>
                    <FaUndo className='text-xl'/>
                </a>
            </li>
            </ul>
        </div>
    </div>
}

export default Sidebar;