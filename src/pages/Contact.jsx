// import React from 'react'
import Navbar from '../components/Home/Navbar'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {FaStarOfLife} from 'react-icons/fa'
import { BsArrowUpRight } from 'react-icons/bs'

const Contact = () => {
  // EEC78C
  return (
    <div>
      <Navbar />
      <div className="">
        <div className=" flex flex-col justify-center items-center p-20 gap-8">
          <h1 className=' text-[65px]'>Contact</h1>
            <ul>
              <li className=' text-xl flex items-center'>
                <span className=' cursor-pointer hover:text-[#EEC78C] duration-300'>Royal</span>
                  <MdKeyboardArrowRight />
                <span>Contact</span>
              </li>
            </ul>
        </div>
        <section>
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 p-10">
            {/* form */}
            <div className=" border p-2">
                <h3 className=' p-5 text-4xl mb-5'>Contact Us Right Here</h3>
                <div className="">
                  <form action="">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Name <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            <input type="text" placeholder='Your Name' className=' text-xl outline-none border border-[#EEC78C] px-10 py-5 mt-4 mb-8' />
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Email <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            <input type="email" placeholder='Your Email' className=' outline-none border border-[#EEC78C] px-10 text-xl py-5 mt-4 mb-8' />
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Phone <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            <input type="text" placeholder=' Your Phone' className=' outline-none border border-[#EEC78C] px-10 text-xl py-5 mt-4 mb-8' />
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Subjects <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            <input type="text" placeholder='Your Subjects' className=' outline-none border border-[#EEC78C] px-10 text-xl py-5 mt-4 mb-8' />
                          </div>
                        </div>
                        <div className="">
                          <div className="">
                            <label htmlFor="" className=' flex text-xl text-gray-600'>Comments <FaStarOfLife className=' text-[#FF0000] text-[10px]' /> </label>
                            {/* <input type="text"  /> */}
                            <textarea className=' outline-none border border-[#EEC78C] px-10 text-xl py-5 mt-4 mb-8' placeholder='Message' name="" id="" cols="50" rows="8"></textarea>
                          </div>
                        </div>
                    </div>
                    <div className=" flex items-center text-xl text-black">
                          <input type="checkbox" className='w-20 h-8 ' />
                          <label htmlFor="">Save Your Data for Next Comments</label>
                    </div>
                   <button className="transition duration-500 ease-in-out mt-20 ml-10 px-8 py-5 flex items-center gap-3 text-xl border border-black hover:border-none hover:bg-[#EEC78C] hover:text-black">SEND NOW <BsArrowUpRight /> </button>
                  </form>
                </div>
            </div>
            <div className=" bg-red-300 h-screen"></div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
