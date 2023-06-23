import React from 'react'
import Logo from "../assets/Rectangle.png"
import {HiOutlineArrowCircleRight} from 'react-icons/hi'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaGithubSquare,
} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-[#003300] text-white'>
         {/* Put logo here in image tag */}
         <div>
         <img src={Logo} alt="paycheck logo" className='w-32 h-10' />
        <p className='py-4 text-left font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse facilis minus quis corporis sit 
            vero velit magnam ullam saepe nemo, reiciendis delectus iure nulla dolor.</p>
        <div className='flex justify-between my-6 md:w-[75%]'>
        <FaFacebookSquare size={26} />
        <FaInstagram size={26} />
        <FaGithubSquare size={26} />
        <FaTwitterSquare size={26} />
        <FaGithubSquare size={26} />    
        </div>    

        </div>

           
        <div className='lg:col-span-2 justify-between flex'>

            <div className='max-w-[350px]'>

            <h1 className='text-4xl'>
                Simplify your finances with E-Naira
            </h1>

            <ul className=''>
                <li className='py-2 text-sm'>
                <a href="#" 
                className='bg-green-600 text-white px-7 mx-auto  w-[150px] hover:scale-105 duration-100 p-2 flex'>
                Join waitlist 
                <span className='flex items-center'>
                <i className='ml-2 mt-1'>
                    <HiOutlineArrowCircleRight />
                    </i>
                </span> 
                
                </a>
                </li>
             
            </ul>


            </div>

            
            <div>



            <ul className='font-light text-left'>
                <li className='py-2 text-sm'>Company</li>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Faqs</li>
                <li className='py-2 text-sm'>Products</li>
                
            </ul>


            </div>

            
            <div>

           

            <ul className='font-light text-left'>
                <li className='py-2 text-sm'>Email: hello@paycheck.com</li>
                <li className='py-2 text-sm'>Phone: +234 478348636</li>
           
                
            </ul>


            </div>
            
        </div>

    </div>
  )
}

export default Footer