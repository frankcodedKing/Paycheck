import React from 'react';
import appMock1 from '../assets/appmock1.png';
import hand from '../assets/hand.png';
import {FaCheck} from 'react-icons/fa'
import {BsFillCircleFill} from 'react-icons/bs'
import {HiOutlineArrowCircleRight} from 'react-icons/hi' 
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Main() {

  
  return (

    <div className='w-full bg-white'>

    {/* // SECTI0N one */}
        
    <div className='px-10 py-16'>
        
        <h1 className='text-3xl font-semibold'>
        We give you convenience and control over your money
        </h1>
         <br />
        <div className="mx-auto max-w-[1240px] grid md:grid-cols-2 mt-6">
            <div className='shadow-lg bg-gray-100 rounded-xl'>
            <img src={appMock1} alt="" className='w-[200px] mx-auto my-4'/>
            </div>

        <div className='text-left my-auto flex flex-col md:px-8 justify-center'>
            <h1 className='ml-4 font-semibold text-xl py-4'>Seamless Currency Swaps </h1>
            <ul>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est net</li>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est neque officia sjstt</li>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est neque officiaw mi minima exert</li>
            </ul>
        </div>
        </div>
    </div>

    {/* // SECTI0N TWO */}

    <div className='w-full bg-white px-10 py-16'>
        
        <div className="mx-auto max-w-[1240px] grid md:grid-cols-2 mt-6">

        <div className='text-left my-auto flex flex-col md:px-8 justify-center'>
            <h1 className='ml-4 font-semibold text-xl py-4'>Seamless Currency Swaps </h1>
            <ul>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est net</li>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est neque officia sjstt</li>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est neque officiaw mi minima exert</li>
            </ul>
        </div>

        <div className='shadow-lg bg-gray-100 rounded-xl'>
            <img src={appMock1} alt="" className='w-[200px] mx-auto my-4'/>
            </div>
        </div>
    </div>


    {/* // SECTION THREE */}

    <div className='w-full bg-white px-10 py-16'>
      
        <div className="mx-auto max-w-[1240px] grid md:grid-cols-2 mt-6">
            <div className='shadow-lg bg-gray-100 rounded-xl'>
            <img src={appMock1} alt="" className='w-[200px] mx-auto my-4'/>
            </div>

        <div className='text-left my-auto flex flex-col md:px-8 justify-center'>
            <h1 className='ml-4 font-semibold text-xl py-4'>Seamless Currency Swaps </h1>
            <ul>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est net</li>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est neque officia sjstt</li>
                <li className='flex p-4'> <span className='text-green-500 mt-2 text-lg mr-4'> <FaCheck /> </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident temporibus suscipit officia commodi est neque officiaw mi minima exert</li>
            </ul>
        </div>
        </div>
    </div>


    {/* DISCOVER AI */}
    {/* DISCOVER AI */}
    {/* DISCOVER AI */}

    <div class="w-full h-screen bg-white flex justify-center items-center">
  <div class="text-left bg-green-400 bg-gradient-to-b from-green-500
   to-green-950 rounded-xl w-[1000px] h-80 relative z-0">
    <div class="italic text-bold bd-red-100 text-right font-serif">
    <img src={hand} className='w-[500px]' style={{display: 'inline'}} alt="" />

    </div>
    <div class="absolute inset-0 flex justify-center i
    tems-center z-10">

      <div class="font-light my-auto text-white p-4 pr-24">
         <h1 className='font-semibold text-2xl text-left py-2'>
            Discover the advantages of the E-naira </h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ipsa aliquam, 
                repellendus amet aspernatur sint doloremque culpa natus ut iure non error dignissimos officiis, 
                fugit veniam odio id? Necessitatibus, accusamus?
                L
                
            
        </p>

        <a href="#" className='bg-white text-black p-2 w-[125px]  hover:scale-105 duration-100 mt-10 flex'>
                Join waitlist 
                <span className='flex items-center'>
                <i className='ml-2 mt-1'>
                    <HiOutlineArrowCircleRight />
                    </i>
                </span> 
                
                </a>

        

        
        
      </div>
    </div>
  </div>
</div>





    {/* HAND HERE */}
    {/* HAND HERE */}
   

   {/* // SECTION FAQS */}

   <div className='w-full bg-white px-10 py-4'>
      
      <div className="">
        

      <div className='my-auto flex flex-col md:px-8 justify-center'>
          <h1 className='font-semibold text-xl py-2'>Frequently Asked Questions</h1>
          <div className='text-left md:px-48'>
              {/* <li className='flex shadow-sm p-4 py-6'>
                 
                  </li> */}

                    <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
                
            <span className='text-green-500 flex mt-0.5 text-lg mr-4'> 
                    <BsFillCircleFill /> </span> <Typography> Lorem ipsum dolor shasdown wnoxheuis xbbss sit amet, consectetur adipiscing elit?</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
            </AccordionDetails>
        </Accordion>


            {/* break */}<br />

            <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        
                    <span className='text-green-500 flex mt-0.5 text-lg mr-4'> 
                            <BsFillCircleFill /> </span> <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* break */}<br />


                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        
                    <span className='text-green-500 flex mt-0.5 text-lg mr-4'> 
                            <BsFillCircleFill /> </span> <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* break */}<br />

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        
                    <span className='text-green-500 flex mt-0.5 text-lg mr-4'> 
                            <BsFillCircleFill /> </span> <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>

                {/* break */}<br />

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                        
                    <span className='text-green-500 flex mt-0.5 text-lg mr-4'> 
                            <BsFillCircleFill /> </span> <Typography> Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
              </div>
      </div>

      <div>
     
    </div>
      </div>
  </div>

    <br />

    
    </div>
  )
}

export default Main