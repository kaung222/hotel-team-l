// import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const RoomCard = ({imgSrc,title}) => {
  return (
    <div className=" bg-white mr-20 lg:mr-1 ml-2 md:ml-10 mb-10 relative text-center">
    <div className="m-10 group">
      <h4 className=" hero text-xl md:text-4xl mb-8 font-normal hover:text-[#EEC78C] duration-200 cursor-pointer">
        {title}
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
          className=" h-[300px] w-full lg:w-[600px]"
          src={imgSrc}
          alt="image"
        />

        <div className="w-[300px] lg:w-[410px] xl:w-[450px] h-[460px] absolute bottom-[-150px] group-hover:bottom-[65px] duration-1000 opacity-0 group-hover:opacity-100 shadow-2xl  bg-gray-50">
          <p className=" text-gray-500 text-md md:text-lg p-7 border border-gray-500">
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
  )
}

export default RoomCard
