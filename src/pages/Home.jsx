import { useEffect, useState } from "react"
import Navbar from "../components/Home/Navbar"
import { motion } from "framer-motion"
import {BsArrowUpRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Home = () => {
  const [url,setUrl] = useState('');
  console.log(url)
  const contentVariants = {
    hidden :{
      y:'30vh',
      opacity: 0
    },
    visible:{
      y:0,
      opacity:1,
      transition:{duration:2}
    }
  }
  useEffect(() => {
    setUrl('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg')
  },[])
  return (
    <>
    <Navbar/>
      <div className="">
        {/* heroSection */}
       <div className=" bg-black w-[450px] sm:w-full">
       <div className="h-[60rem] text-white opacity-75 " style={{backgroundImage:`url(${url})`}}>
          {/* <div className=" mr-2`"> */}

            <motion.h1
                    variants={contentVariants}
                    initial='hidden'
                    animate='visible'
                    className=" pt-60 pl-10 text-xl sm:text-2xl tracking-wider sm:tracking-[.5rem]">THE NEW GENERATION OF LUXURY</motion.h1>
            <motion.h1
                    variants={contentVariants}
                    initial='hidden'
                    animate='visible'
                    className=" pt-20 md:pt-20 pb-5 pl-10 text-4xl sm:text-[70px] ">LUXURY REDEFINED: </motion.h1>
            <motion.h1
                    variants={contentVariants}
                    initial='hidden'
                    animate='visible'
                    className=" pl-10 md:pt-10 text-4xl sm:text-[70px]">WELCOME TO ROYAL</motion.h1>

            <button className="transition duration-500 ease-in-out mt-52 md:mt-20 ml-10 px-8 py-5 flex items-center gap-3 text-xl border border-white hover:bg-[#EEC78C] hover:text-black hover:border-black">CHECK AVAILABILITY <BsArrowUpRight /> </button>
                    {/* </div> */}
            <div className=" hidden md:flex justify-end text-2xl mt-32 gap-10 p-10">
              <div onClick={() => setUrl('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg')} className="  border-2 p-2 rounded-full">
                <RxDotFilled />
              </div>
              <div onClick={() => setUrl('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/room-view-2.jpg')} className="  border-2 p-2 rounded-full">
                <RxDotFilled />
              </div>
              <div onClick={() => setUrl('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-3.jpg')} className="  border-2 p-2 rounded-full">
                <RxDotFilled />
              </div>
            </div>
        </div>
       </div>
       {/* service Section */}
        <div className="bg-[#F8F5F0] w-[450px] sm:w-full h-full md:h-[500px] cursor-pointer">
          <div className="flex flex-wrap items-center justify-between p-10 opacity-75">
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img className=" hover:animate-bounce w-[60px] md:w-[80px]" src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png" alt="" />
              <p className=" text-[30px]">Pick Up & Drop</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img className=" hover:animate-bounce w-[60px] md:w-[80px]" src="https://cdn-icons-png.flaticon.com/256/887/887258.png" alt="" />
              <p className=" text-[30px]">Parking Space</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img className=" hover:animate-bounce w-[60px] md:w-[80px]" src="https://cdn-icons-png.flaticon.com/256/985/985505.png" alt="" />
              <p className=" text-[30px]">Breakfast</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img className=" hover:animate-bounce w-[60px] md:w-[80px]" src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png" alt="" />
              <p className=" text-[30px]">Swimming Pool</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img className=" hover:animate-bounce w-[60px] md:w-[80px]" src="https://cdn-icons-png.flaticon.com/256/2972/2972473.png" alt="" />
              <p className=" text-[30px]">Fiber Internet</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img className=" hover:animate-bounce" width={'80px'} src="https://cdn-icons-png.flaticon.com/256/2564/2564349.png" alt="" />
              <p className=" text-[30px]">Bar & Bbq</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home