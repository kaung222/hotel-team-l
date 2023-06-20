

import { useEffect, useState } from "react"

import Footer from "../components/Home/Footer"

import Navbar from "../components/Home/Navbar"
import { motion } from "framer-motion"
import {BsArrowUpRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import {BsArrowRight} from 'react-icons/bs'
import {FaPlay} from 'react-icons/fa'
import { Link } from "react-router-dom"

const Home = () => {
  const [url, setUrl] = useState("");
  const gallery = [
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-1-1.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-2.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-4.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-5.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-6.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-9.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-10.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-15.jpg",
    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/main-19.jpg",
  ];
  const contentVariants = {
    hidden: {
      y: "30vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
  };
  useEffect(() => {
    setUrl(
      "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg"
    );
  }, []);
  return (
    <>

    <Navbar/>

      <div className="">
        {/* heroSection */}
        <div className=" bg-black w-[450px] sm:w-60">
          <div
            className="h-[60rem] text-white transition-all duration-500"
            style={{ backgroundImage: `url(${url})` }}
          >
            {/* <div className=" mr-2`"> */}

            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className=" pt-60 pl-10 text-xl sm:text-2xl tracking-wider sm:tracking-[.5rem]"
            >
              THE NEW GENERATION OF LUXURY
            </motion.h1>
            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className=" pt-20 md:pt-20 pb-5 pl-10 text-4xl sm:text-[70px] "
            >
              LUXURY REDEFINED:{" "}
            </motion.h1>
            <motion.h1
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className=" pl-10 md:pt-10 text-4xl sm:text-[70px]"
            >
              WELCOME TO ROYAL
            </motion.h1>

            <button className="transition duration-500 ease-in-out mt-52 md:mt-20 ml-10 px-8 py-5 flex items-center gap-3 text-xl border border-white hover:bg-[#EEC78C] hover:text-black hover:border-black">
              CHECK AVAILABILITY <BsArrowUpRight />{" "}
            </button>
            {/* </div> */}
            <div className=" hidden md:flex justify-end text-2xl mt-32 gap-10 p-10">
              <div
                onClick={() =>
                  setUrl(
                    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-2.jpg"
                  )
                }
                className="  border-2 p-2 rounded-full"
              >
                <RxDotFilled />
              </div>
              <div
                onClick={() =>
                  setUrl(
                    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/room-view-2.jpg"
                  )
                }
                className="  border-2 p-2 rounded-full"
              >
                <RxDotFilled />
              </div>
              <div
                onClick={() =>
                  setUrl(
                    "https://envato.bdevs.net/royel/wp-content/uploads/2023/05/hero-bg-3.jpg"
                  )
                }
                className="  border-2 p-2 rounded-full"
              >
                <RxDotFilled />
              </div>
            </div>
          </div>
        </div>
        {/* service Section */}
        <div className="bg-[#F8F5F0] w-[450px] sm:w-full h-full md:h-[500px] cursor-pointer">
          <div className="flex flex-wrap items-center justify-between p-10 opacity-7\\\\5">
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img
                className=" w-[60px] md:w-[80px]"
                src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                alt=""
              />
              <p className=" text-[30px]">Pick Up & Drop</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img
                className=" w-[60px] md:w-[80px]"
                src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                alt=""
              />
              <p className=" text-[30px]">Parking Space</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img
                className=" w-[60px] md:w-[80px]"
                src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                alt=""
              />
              <p className=" text-[30px]">Breakfast</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img
                className=" w-[60px] md:w-[80px]"
                src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                alt=""
              />
              <p className=" text-[30px]">Swimming Pool</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img
                className="w-[60px] md:w-[80px]"
                src="https://cdn-icons-png.flaticon.com/256/2972/2972473.png"
                alt=""
              />
              <p className=" text-[30px]">Fiber Internet</p>
            </div>
            <div className="mt-[120px] flex-col justify-center flex gap-6 items-center hover:animate-bounce mx-auto">
              <img
                className="w-[60px] md:width-[80px]"
                src="https://cdn-icons-png.flaticon.com/256/2564/2564349.png"
                alt=""
              />
              <p className=" text-[30px]">Bar & Bbq</p>
            </div>
          </div>
        </div>
        {/* welcome Section */}
        <section className=" bg-[#F8F5F0] w-[450px] sm:w-full">
          <div className="container pt-2 md:pt-10 mb-20">
            <div className=" grid grid-cols-1 lg:grid-cols-2">
              {/* content */}
              <div className=" bg-white rounded ml-5 md:ml-[28] h-[70rem] flex flex-col justify-center md:justify-between">
                <div className=" p-10">
                  <div className=" text-xl text-gray-500 tracking-wider">
                    <span>5 STAR HOTEL IN DUBAI, UAE</span>
                  </div>
                  <div className=" text-[30px] md:text-[60px] tracking-wider mt-2 md:mt-[10]">
                    <span>Welcome To The Hotel Royel Palace</span>
                  </div>
                  <p className=" text-xl text-gray-500 mt-2 md:mt-[10]">
                    The Gage Hotel Offers Unforgettable Food And Drink Options.
                    Enjoy Dinner At The Award-Winning
                  </p>
                </div>
                <div className=" p-10">
                  <img
                    decoding="async"
                    src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/welcome.jpg"
                    alt="welcome thumb"
                  />
                </div>
              </div>
              <div
                className=" relative flex items-end"
                style={{
                  backgroundImage: `url('https://envato.bdevs.net/royel/wp-content/uploads/2023/05/welcome-bg.jpg')`,
                }}
              >
                {/* video */}
                <a href="https://www.youtube.com/watch?v=4K6Sh1tsAW4">
                  <div className=" text-white text-3xl absolute top-20 md:top-64 left-20 md:left-48 hover:bg-[#EEC78C] transition duration-150 ease-in-out border p-12 rounded-full">
                    <FaPlay className="" />
                  </div>
                </a>
                {/* contant */}
                <div className=" p-20 mt-60 sm:mt-[2]">
                  <div className=" bg-white p-10">
                    <span className=" block text-7xl mr-32">+76</span>
                    <span className=" text-3xl">Big Suites</span>
                  </div>
                  <div className="bg-[#EEC78C] p-10">
                    <span className=" block text-xl">Reservation</span>
                    <Link className=" text-2xl hover:text-white transition duration-200 ease-in-out">
                      (91) 2365 0003
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Rooms Section */}
        <section className="w-[450px] sm:w-full bg-black">
          <div
            className=""
            style={{
              backgroundImage: `url("https://envato.bdevs.net/royel/wp-content/uploads/2023/05/bd-room.jpg")`,
            }}
          >
            <div className=" text-white text-center p-32">
              <p className=" text-xl mb-7">ROOMS</p>
              <h1 className=" text-5xl">Our Rooms & Suites</h1>
            </div>
            <div className="">
              <div className=" grid grid-cols-1 lg:grid-cols-2">
                {/* card 1*/}
                <div className=" bg-white ml-10 mb-10 relative">
                  <div className="m-10 group">
                    <h4 className=" text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                      Premiere Deluxe Room
                    </h4>
                    <p className=" text-3xl mb-8">
                      $899
                      <span className=" text-xl text-gray-500 font-normal">
                        /NIGHT
                      </span>{" "}
                    </p>
                    {/* img and hover */}
                    <div className="">
                      <img
                        decoding="async"
                        className=" h-[450px]"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                        alt="image"
                      />

                      <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100 border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                        <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                          The Gage Hotel Offers Unforgettable Food And Drink
                          Options. A Memorable Stay With Delicious Breakfast
                          Join Us.
                        </p>
                        <div className=" grid grid-cols-2">
                          <div className=" grid grid-row-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Pick Up & Drop</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Parking Space</p>
                            </div>
                          </div>
                          <div className=" grid grid-rows-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Breakfast</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Swimming Pool</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-7 flex items-center gap-5 relative">
                      <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                        <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                          Room Detail
                        </span>
                      </Link>
                      <i className=" text-4xl absolute group-hover:left-[150px]">
                        <BsArrowRight className=" duration-1000" />
                      </i>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className=" bg-white ml-10 mb-10 relative">
                  <div className="m-10 group">
                    <h4 className=" text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                      Superior Site Room
                    </h4>
                    <p className=" text-3xl mb-8">
                      $899
                      <span className=" text-xl text-gray-500 font-normal">
                        /NIGHT
                      </span>{" "}
                    </p>
                    {/* img and hover */}
                    <div className="">
                      <img
                        decoding="async"
                        className=" h-[450px]"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/5-2.jpg"
                        alt="image"
                      />

                      <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                        <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                          The Gage Hotel Offers Unforgettable Food And Drink
                          Options. A Memorable Stay With Delicious Breakfast
                          Join Us.
                        </p>
                        <div className=" grid grid-cols-2">
                          <div className=" grid grid-row-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Pick Up & Drop</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Parking Space</p>
                            </div>
                          </div>
                          <div className=" grid grid-rows-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Breakfast</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Swimming Pool</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-7 flex items-center gap-5 relative">
                      <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                        <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                          Room Detail
                        </span>
                      </Link>
                      <i className=" text-4xl absolute group-hover:left-[150px]">
                        <BsArrowRight className=" duration-1000" />
                      </i>
                    </div>
                  </div>
                </div>
                {/* card 3 */}
                <div className=" bg-white ml-10 mb-10 relative">
                  <div className="m-10 group">
                    <h4 className=" text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                      Master Suite Room
                    </h4>
                    <p className=" text-3xl mb-8">
                      $899
                      <span className=" text-xl text-gray-500 font-normal">
                        /NIGHT
                      </span>{" "}
                    </p>
                    {/* img and hover */}
                    <div className="">
                      <img
                        decoding="async"
                        className=" h-[450px]"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/4-2.jpg"
                        alt="image"
                      />

                      <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                        <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                          The Gage Hotel Offers Unforgettable Food And Drink
                          Options. A Memorable Stay With Delicious Breakfast
                          Join Us.
                        </p>
                        <div className=" grid grid-cols-2">
                          <div className=" grid grid-row-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Pick Up & Drop</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Parking Space</p>
                            </div>
                          </div>
                          <div className=" grid grid-rows-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Breakfast</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Swimming Pool</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-7 flex items-center gap-5 relative">
                      <a className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                        <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                          Room Detail
                        </span>
                      </a>
                      <i className=" text-4xl absolute group-hover:left-[150px]">
                        <BsArrowRight className=" duration-1000" />
                      </i>
                    </div>
                  </div>
                </div>
                {/* card 4 */}
                <div className=" bg-white ml-10 mb-10 relative">
                  <div className="m-10 group">
                    <h4 className=" text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                      Junior Suite Rooms
                    </h4>
                    <p className=" text-3xl mb-8">
                      $899
                      <span className=" text-xl text-gray-500 font-normal">
                        /NIGHT
                      </span>{" "}
                    </p>
                    {/* img and hover */}
                    <div className="">
                      <img
                        decoding="async"
                        className=" h-[450px]"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/3.jpg"
                        alt="image"
                      />

                      <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                        <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                          The Gage Hotel Offers Unforgettable Food And Drink
                          Options. A Memorable Stay With Delicious Breakfast
                          Join Us.
                        </p>
                        <div className=" grid grid-cols-2">
                          <div className=" grid grid-row-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Pick Up & Drop</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Parking Space</p>
                            </div>
                          </div>
                          <div className=" grid grid-rows-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Breakfast</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Swimming Pool</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-7 flex items-center gap-5 relative">
                      <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                        <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                          Room Detail
                        </span>
                      </Link>
                      <i className=" text-4xl absolute group-hover:left-[150px]">
                        <BsArrowRight className=" duration-1000" />
                      </i>
                    </div>
                  </div>
                </div>
                {/* card 5 */}
                <div className=" bg-white ml-10 mb-10 relative">
                  <div className="m-10 group">
                    <h4 className=" text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                      Couple Sea View Room
                    </h4>
                    <p className=" text-3xl mb-8">
                      $899
                      <span className=" text-xl text-gray-500 font-normal">
                        /NIGHT
                      </span>{" "}
                    </p>
                    {/* img and hover */}
                    <div className="">
                      <img
                        decoding="async"
                        className=" h-[450px]"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/2.jpg"
                        alt="image"
                      />

                      <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                        <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                          The Gage Hotel Offers Unforgettable Food And Drink
                          Options. A Memorable Stay With Delicious Breakfast
                          Join Us.
                        </p>
                        <div className=" grid grid-cols-2">
                          <div className=" grid grid-row-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Pick Up & Drop</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Parking Space</p>
                            </div>
                          </div>
                          <div className=" grid grid-rows-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Breakfast</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Swimming Pool</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-7 flex items-center gap-5 relative">
                      <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                        <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                          Room Detail
                        </span>
                      </Link>
                      <i className=" text-4xl absolute group-hover:left-[150px]">
                        <BsArrowRight className=" duration-1000" />
                      </i>
                    </div>
                  </div>
                </div>
                {/* card 6 */}
                <div className=" bg-white ml-10 mb-10 relative">
                  <div className="m-10 group">
                    <h4 className=" text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
                      Queen Deluxe Rooms
                    </h4>
                    <p className=" text-3xl mb-8">
                      $899
                      <span className=" text-xl text-gray-500 font-normal">
                        /NIGHT
                      </span>{" "}
                    </p>
                    {/* img and hover */}
                    <div className="">
                      <img
                        decoding="async"
                        className=" h-[450px]"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/1-3.jpg"
                        alt="image"
                      />

                      <div className=" absolute bottom-[-150px] group-hover:bottom-[70px] duration-1000 opacity-0 group-hover:opacity-100  border border-gray-500 w-[350px] md:w-[670px] h-[450px] bg-gray-50">
                        <p className=" text-gray-500 text-lg p-7 border border-gray-500">
                          The Gage Hotel Offers Unforgettable Food And Drink
                          Options. A Memorable Stay With Delicious Breakfast
                          Join Us.
                        </p>
                        <div className=" grid grid-cols-2">
                          <div className=" grid grid-row-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/9575/9575966.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Pick Up & Drop</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/887/887258.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Parking Space</p>
                            </div>
                          </div>
                          <div className=" grid grid-rows-2">
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/985/985505.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Breakfast</p>
                            </div>
                            <div className="mt-[60px] flex-col justify-center flex gap-6 items-center mx-auto">
                              <img
                                className=" w-[30px] md:w-[40px]"
                                src="https://cdn-icons-png.flaticon.com/256/2784/2784593.png"
                                alt=""
                              />
                              <p className=" text-[15px]">Swimming Pool</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-7 flex items-center gap-5 relative">
                      <Link className="absolute left-[-150px] opacity-0 group-hover:opacity-100 group-hover:left-0 group-hover:flex duration-1000 ease-in-out">
                        <span className=" text-2xl hover:text-[#EEC78C] transition duration-200">
                          Room Detail
                        </span>
                      </Link>
                      <i className=" text-4xl absolute group-hover:left-[150px]">
                        <BsArrowRight className=" duration-1000" />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Book Now Section */}
        <section className=" mb-[200px]">
          <div className="">
            <div className=" text-start lg:text-center mx-5 mt-32">
              <span className=" text-xl">BOOK NOW</span>
              <div className=" mt-10 text-2xl w-[800px] mx-auto mb-20 tracking-wider ">
                <h2>Welcome To Royel Palace Hotel </h2>
                <h1 className=" mt-5">Book Your Stay Today.</h1>
              </div>
            </div>
            <div className="">
              <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className=" relative group overflow-hidden">
                  <img
                    decoding="async"
                    className="h-[600px] group-hover:scale-125 duration-300"
                    src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/pool.jpg"
                    alt="image not found"
                  />
                  {/* hover */}
                  <div className=" absolute group-hover:bottom-[50px] duration-1000 opacity-0 group-hover:opacity-100 bottom-[0px] bg-white m-10 rounded-md p-10">
                    <h4 className=" text-3xl my-5">Swimming Pool</h4>
                    <p className=" text-xl tracking-widest text-gray-600 mb-8">
                      These pools help hotels and resorts provide outstanding
                      entertainment experiences, which translates into customer
                      satisfaction,loyalty to the hotel and emphasize the resort
                      brand image
                    </p>
                    <div className=" text-xl mb-10 group">
                      <Link className=" flex items-center gap-3">
                        <span className="">Get the Servie</span>
                        <div className=" group-hover:rotate-45 duration-200">
                          {" "}
                          <BsArrowUpRight />{" "}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" overflow-hidden relative group hidden lg:block">
                  <img
                    decoding="async"
                    className="h-[600px] group-hover:scale-125 duration-300"
                    src="https://envato.bdevs.net/royel/wp-content/uploads/2023/05/gym.jpg"
                    alt="image not found"
                  />
                  <div className=" absolute group-hover:bottom-[50px] duration-1000 opacity-0 group-hover:opacity-100 bottom-[0px] bg-white m-10 rounded-md p-10">
                    <h4 className=" text-3xl my-5">Swimming Pool</h4>
                    <p className=" text-xl tracking-widest text-gray-600 mb-8">
                      These pools help hotels and resorts provide outstanding
                      entertainment experiences, which translates into customer
                      satisfaction,loyalty to the hotel and emphasize the resort
                      brand image
                    </p>
                    <div className=" text-xl mb-10 group">
                      <Link className=" flex items-center gap-3">
                        <span className="">Get the Servie</span>
                        <div className=" group-hover:rotate-45 duration-200">
                          {" "}
                          <BsArrowUpRight />{" "}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Food Menu Section */}
        <section className=" bg-black pb-20">
          <div className="">
            {/* content */}
            <div className=" text-white flex flex-col items-center p-2 md:p-32">
              <h3 className=" text-xl my-5">FOOD MENUS</h3>
              <p className=" text-2xl md:text-5xl mb-2 md:mb-10 mt-5 tracking-wider">
                Delicious Food Forever
              </p>
              <div className=" mt-2 hidden md:block">
                <ul className=" flex text-3xl gap-20">
                  <li className=" border-b-4 border-[#EEC78C] text-[#EEC78C]">
                    Salads
                  </li>
                  <li>Dessert</li>
                  <li>Starter</li>
                  <li>Main Dish</li>
                </ul>
              </div>
            </div>
            {/* Cards */}
            <div className=" grid grid-cols-1 md:grid-cols-3 p-10 gap-10">
              {/* card 1 */}
              <div className=" group">
                <div className=" border-gray-600 border">
                  <div className=" flex justify-center my-10">
                    <Link>
                      <img
                        className=" w-[200px] group-hover:scale-110 duration-200 "
                        height="800"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/pasta-plate.png"
                        alt=""
                        decoding="async"
                      />
                    </Link>
                  </div>
                  <div className=" text-white flex flex-col items-center gap-8 mb-10">
                    <h1 className=" text-3xl tracking-wider">Pasta Plate</h1>
                    <p className=" text-gray-400 text-xl">
                      Assertively conceptualize paralle
                    </p>
                    <p className=" text-lg text-[#EEC78C] font-bold">$50.00</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className=" group">
                <div className=" border-gray-600 border">
                  <div className=" flex justify-center my-10">
                    <Link>
                      <img
                        className=" w-[200px] group-hover:scale-110 duration-200 "
                        height="800"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/pineapple-wedges.png"
                        alt=""
                        decoding="async"
                      />
                    </Link>
                  </div>
                  <div className=" text-white flex flex-col items-center gap-8 mb-10">
                    <h1 className=" text-3xl tracking-wider">
                      Pineapple Wadges
                    </h1>
                    <p className=" text-gray-400 text-xl">
                      Assertively conceptualize parallel...
                    </p>
                    <p className=" text-lg text-[#EEC78C] font-bold">
                      {" "}
                      <span className=" line-through">$78.00</span> $65.00
                    </p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className=" group">
                <div className=" border-gray-600 border">
                  <div className=" flex justify-center my-10">
                    <Link>
                      <img
                        className=" w-[200px] group-hover:scale-110 duration-200 "
                        height="800"
                        src="https://envato.bdevs.net/royel/wp-content/uploads/2023/06/rice-bowl.png"
                        alt=""
                        decoding="async"
                      />
                    </Link>
                  </div>
                  <div className=" text-white flex flex-col items-center gap-8 mb-10">
                    <h1 className=" text-3xl tracking-wider">Rice Bowl</h1>
                    <p className=" text-gray-400 text-xl">
                      Assertively conceptualize parallel...
                    </p>
                    <p className=" text-lg text-[#EEC78C] font-bold">
                      <span className=" line-through">$78.00</span> $75.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* gallery Section */}
        <section className=" bg-white">
          <div className=" mt-10 mb-40">
            <div className=" p-20 flex items-center flex-col justify-center">
              <h1 className=" text-xl tracking-widest mb-5">GALLERY</h1>
              <h3 className=" text-6xl mb-5">Our Gallery</h3>
            </div>
            <div className=" p-5">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                <div className=" bg-black lg:col-span-2">
                  <img
                    src={gallery[0]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>
                <div className=" bg-black">
                  <img
                    src={gallery[1]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>
                <div className=" bg-black">
                  <img
                    src={gallery[2]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>

                <div className=" bg-black">
                  <img
                    src={gallery[3]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>
                <div className=" bg-black">
                  <img
                    src={gallery[4]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>
                <div className=" bg-black lg:col-span-2 ">
                  <img
                    src={gallery[5]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>

                <div className=" bg-black lg:col-span-2">
                  <img
                    src={gallery[6]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>
                <div className=" bg-black">
                  <img
                    src={gallery[7]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>
                <div className=" bg-black">
                  <img
                    src={gallery[8]}
                    className=" w-full hover:opacity-50 duration-200"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    <Footer/>

    </>
  );
};

export default Home;
