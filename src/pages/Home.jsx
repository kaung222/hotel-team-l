import { useState } from "react"
import Navbar from "../components/Home/Navbar"
import { motion } from "framer-motion"
import {BsArrowUpRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const Home = () => {
  const [url,setUrl] = useState('');
  console.log(url)
  const [images,setImages] = useState([
    'https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg',
    'https://envato.bdevs.net/royel/wp-content/uploads/2023/05/room-view-2.jpg',
    'https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-3.jpg'
  ])
  const contentVariants = {
    hidden :{
      y:'10vh',
      opacity: 0
    },
    visible:{
      y:0,
      opacity:1,
      transition:{duration:2}
    }
  }
  useState(() => {
    setUrl('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg')
  },[url])
  return (
    <>
    <Navbar/>
      <div className="">
        {/* heroSection */}
        <div className="h-[60rem] text-white" style={{backgroundImage:`url(${url})`}}>
            <motion.h1
                    variants={contentVariants}
                    initial='hidden'
                    animate='visible'
            className=" pt-60 pl-10 text-2xl tracking-[.5rem]">THE NEW GENERATION OF LUXURY</motion.h1>
            <motion.h1
                    variants={contentVariants}
                    initial='hidden'
                    animate='visible'
            className=" pt-10 pl-10 text-[70px] ">LUXURY REDEFINED: </motion.h1>
            <motion.h1
                    variants={contentVariants}
                    initial='hidden'
                    animate='visible'
            className=" pl-10 text-[70px]">WELCOME TO ROYAL</motion.h1>
            <button className="transition duration-500 ease-in-out mt-20 ml-10 px-8 py-5 flex items-center gap-3 text-xl border border-white hover:bg-[#EEC78C] hover:text-black hover:border-black">CHECK AVAILABILITY <BsArrowUpRight /> </button>
            <div className=" flex justify-end text-2xl mt-32 gap-10 p-10">
              <div onClick={() => setUrl('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg')} className=" border border-2 p-2 rounded-full">
                <RxDotFilled />
              </div>
              <div onClick={() => setUrl('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/room-view-2.jpg')} className=" border border-2 p-2 rounded-full">
                <RxDotFilled />
              </div>
              <div onClick={() => setUrl('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-3.jpg')} className=" border border-2 p-2 rounded-full">
                <RxDotFilled />
              </div>
            </div>
        </div>
        <div className=" h-screen">bb</div>
      </div>
    </>
  )
}

export default Home