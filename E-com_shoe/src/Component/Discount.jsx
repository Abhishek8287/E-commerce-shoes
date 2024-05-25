import React from "react";
import image from "../assets/Image/img3.jpg";
function Discount() {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="top-0 left-0 w-full h-screen object-cover "
          src={image}
          alt="/"
        />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
        <div className="absolute top-0 w-full h-full flex flex-col item-center justify-center text-white">
          <div className="md:left-[15%] max-w-[1100px] m-auto absolute  mt-20">
            <p>All Inclusive</p>
            <h1 className="font-bold font-pop  text-5xl md:text-7xl drop-shadow-2xl">
              Get{" "}
              <span className="bg-red-700 font-pop text-black ">Discount</span>{" "}
              For Membership
            </h1>
            <div className="flex flex-col text-2xl items-center justify-center">
              <p className="max-w-[600px] drop-shadow-2xl py-4 text-xl">
                New membership will get 20% discount for first purchase
              </p>
              <button className="bg-white hover:bg-black shadow-lg shadow-black hover:text-white text-black font-bold p-4  border-2 border-black my-3 font-pop">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Discount;
