import logo from "../image/download.png"
import HomeCard from '../Component/HomeCard'
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../Component/CardFeature";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../Component/FilterProduct";
import AllProduct from "../Component/AllProduct";


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListSabji = productData.filter(
    (el) => el.category === "sabji",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };


 
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>
        <div className='md:w-1/2 '>
         <div className='flex gap-3 bg-slate-300 w-36 items-center rounded-full px-2'>
         <p className='text-sm font-medium text-slate-950'>Bike delivery</p>
          <img src={logo} className='rounded-full h-7'/>
         </div>
         <h2 className='text-4xl font-bold md:text-7xl py-3'>Fresh Food From
       <span className='text-green-500 '> Our kitchen to Your tiffin</span></h2>
       <p className='py-3 text-base'>Family flavour encourages our home chef to become entrepreneurs by assisting with zero commission which includes Food promotion, Food online delivery in india, Food licensing, Price suggestion, Menu Management, and Accounts Management.</p>
       <button className='font-bold text-slate-200 bg-red-500 px-4 py-2 rounded-md'>Order now</button>
        </div>

        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {
            homeProductCartList[0] ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading..."} />;
              })}
        </div>
      </div>

      <div className="">
        <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh sabji
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div>
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        >
          {
            homeProductCartListSabji[0] ? homeProductCartListSabji.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"sabji"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
        </div>
      </div>
      
      <AllProduct heading={"Your Product"}/>
    </div>
  );
};


export default Home