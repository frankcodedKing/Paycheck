import React, { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {HiOutlineArrowCircleRight} from 'react-icons/hi';
import Logo from "../assets/Rectangle.png"

const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }
  return (

    <div className='flex justify-between items-center bg-[#003300] p-8 w-full max-w-[1240px] h-14 mt-4 text-white'>
        {/* Put logo here in image tag */}
        <div>
            <img src={Logo} alt="paycheck logo" className='w-32 h-10' />

        </div>

        
        <div className='hidden md:flex'>

        <ul className='flex mx-auto'>
            <li className='p-4'>Company</li>
            <li className='p-4'>Products</li>
            <li className='p-4'>FAQ</li>
        </ul>

        </div>

        <div className='hidden md:flex'>
            <a href="#" className='bg-green-600 text-white px-4 mx-auto hover:scale-105 duration-100 p-2 mr-4 flex'>
                Join waitlist 
                <span className='flex items-center'>
                <i className='ml-2 mt-1'>
                    <HiOutlineArrowCircleRight />
                    </i>
                </span> 
                
                </a>
        </div>

        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose /> : <AiOutlineMenu /> }
            
        </div>

        <div className={!nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#003300] ease-in-out duration-500' : 'fixed left-[-100%]'}>

        <img src={Logo} alt="paycheck logo" className='w-32 h-10 m-4' />

        <ul className='px-2'>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Products</li>
            <li className='p-4 border-b border-gray-600'>FAQ</li>
        </ul>

        </div>
    </div>
  )
}

export default Navbar