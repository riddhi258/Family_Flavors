import React from 'react'
import a5 from '../image/a5.png'
import a1 from '../image/a1.png'
import a2 from '../image/a2.png'
import a3 from '../image/a3.png'
import a4 from '../image/a4.png'
import a6 from '../image/a6.png'

const About = () => {
  return (
    <div className=" font-sans flex flex-col justify-between items-center pt-4 relative pl-10 pr-10 2xl:text-3xl ">
    <div className="relative h-auto md:w-[600px] w-full flex flex-col justify-between items-center pt-8 p-4 m-3 ">
        <div className="flex font-bold text-2xl md:text-4xl text-blue-950  w-full justify-center xl:text-center md:ps-4 md:pe-4 2xl:ps-64 2xl:pe-64 ">
           About us
          </div>
            <div className="flex md:flex-row flex-col md:w-[1000px] sm:w-[100%] xl:w-[1200px] w-full h-auto border-2  pt-2 rounded-[85px] justify-normal shadow-blue-950 drop-shadow xl:h-[600px] xl:text-3xl 2xl:text-6xl">
          <div className="flex-1 text-blue-950 font-semibold text-lg md:text-xl ps-4 md:ps-8 text-justify p-2 m-4 pb-2">
            <p className="text-justify text-blue-950 text-xl">
              Family flavour is a platform that serves delicious home food to our home food cravers. You can order your craving food from a home chef of your selection in your locality and enjoy the home meal to get healthier every day by eating yummy, tasty, healthy food. The food is prepared at chefs' homes where they put in all the love and care to make the food fresh, and we deliver in neatly packed meal boxes. Each plate of food is prepared using fresh and locally grown vegetables with authentic regional recipes. We have created a platform wherein you can register as a Home Chef in a few clicks and prepare your signature dishes by serving the customer. We assist you in delivering the food to the cravers.
            </p>
          </div>
          <div className="flex-1 text-blue-950 font-semibold text-lg md:text-xl ps-4 md:ps-8 text-justify m-4 p-2 pb-2">
            <p className="text-justify text-blue-950 text-xl">
              Family flavour encourages our home chef to become entrepreneurs by assisting with zero commission which includes Food promotion, Food online delivery in Bangalore, Food licensing, Price suggestion, Menu Management, and Accounts Management.
              <br /><br />
              Our vision is to provide an opportunity to the Homemakers by creating a source of financial stability for them. Our Home Chefs can serve any homemade food items to customers. Customers can order food by choosing dishes from a chef's menu. We are determined to provide our cravers with quality service, convenient delivery, and pick up from all of their favored homemade food.
            </p>
          </div>
        </div>
      </div>
      <div className="relative font-sans flex flex-col justify-between items-center ">
        <div className=" flex justify-center font-bold text-2xl md:text-4xl  xl:w-[800px] xl:h-[12px] text-blue-950 pt-6 w-full  xl:text-center ">
          Why Family flavour?
        </div>
        <div className="">
          <div className="flex md:flex-row flex-col md:w-[1000px] xl:w-[1200px] sm:w-[100%] w-full h-auto border-2 p-4 m-3 md:m-16 pt-2 rounded-[85px] justify-normal shadow-blue-950 drop-shadow xl:h-auto xl:text-3xl 2xl:text-6xl">
            <img src={a5} alt="a5" className="h-20 w-20" />
            <div className="text-justify text-blue-950 text-3xl ps-4">
              Eat Healthily <br />
              <p className="text-justify text-blue-950 text-xl"> In the busy work schedule, we frequently drop out on the health quotient, but not anymore. Homeal will provide your healthy home-cooked food by delivering them from Homeal Chefs to you. Now you can eat your home-cooked food.</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:w-[1000px] xl:w-[1200px] sm:w-[100%] w-full h-auto border-2 p-4 m-3 md:m-16 pt-2 rounded-[85px] justify-normal shadow-blue-950 drop-shadow xl:h-auto xl:text-3xl 2xl:text-6xl">
            <img src={a6} alt="a6" className="h-20 w-20" />
            <div className="text-justify text-blue-950 text-3xl ps-4">
                Freshly Cooked Food <br />
              <p className="text-justify text-blue-950 text-xl">A significant concern of eating home food during work is the freshness of the food. We have a way for you. Order with Homeal and have your home-cooked meals by delivering at your place and enjoy 100% freshly cooked food at your service.</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:w-[1000px] xl:w-[1200px] sm:w-[100%] w-full h-auto border-2 p-4 m-3 md:m-16 pt-2 rounded-[85px] justify-normal shadow-blue-950 drop-shadow xl:h-auto xl:text-3xl 2xl:text-6xl">
            <img src={a3} alt="a3" className="h-20 w-20" />
            <div className="text-justify text-blue-950 text-3xl ps-4">
                Diet Choices <br />
              <p className="text-justify text-blue-950 text-xl">Are you on a vegan diet, or are you a pure vegetarian? Do not worry. We got you!! According to your diet, we deliver your home meal to your place.</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:w-[1000px] xl:w-[1200px] sm:w-[100%] w-full h-auto border-2 p-4 m-3 md:m-16 pt-2 rounded-[85px] justify-normal shadow-blue-950 drop-shadow xl:h-auto xl:text-3xl 2xl:text-6xl">
            <img src={a1}alt="a1" className="h-20 w-20" />
            <div className="text-justify text-blue-950 text-3xl ps-4">
                Balanced nutrition food <br />
              <p className="text-justify text-blue-950 text-xl">Usually, restaurants prepare food items high in fat, salt, and sugar. When we prepare food at home, we know which ingredients and how much each is going into our food, which helps to keep stress levels low for our health. When we cook at home, it will be healthy with good tasty food.</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:w-[1000px] xl:w-[1200px] sm:w-[100%] w-full h-auto border-2 p-4 m-3 md:m-16 pt-2 rounded-[85px] justify-normal shadow-blue-950 drop-shadow xl:h-auto xl:text-3xl 2xl:text-6xl">
            <img src={a2} alt="a2" className="h-20 w-20" />
            <div className="text-justify text-blue-950 text-3xl">
                Our Daily Delivery Services<br />
              <p className="text-justify text-blue-950 text-xl ps-4">can guarantee you the ultimate co-operation you need, especially when you are occupied in any work. We try to make it convenient for you. Whether it is a breakfast, lunch, or dinner, even snacks and ready to eat savory are also included.</p>
            </div>
          </div>
          <div className="flex md:flex-row flex-col md:w-[1000px] xl:w-[1200px] sm:w-[100%] w-full h-auto border-2 p-4 m-3 md:m-16 pt-2 rounded-[85px] justify-normal shadow-blue-950 drop-shadow xl:h-auto xl:text-3xl 2xl:text-6xl">
            <img src={a4} alt="a4" className="h-20 w-20" />
            <div className="text-justify text-blue-950 text-3xl">
                Our Team<br />
              <p className="text-justify text-blue-950 text-xl ps-4">Serving together as teams provide people more opportunities to release their creative ideas and increases their sense of belonging. Our team will develop a sense of fellowship as you work toward making healthy food our goal. Teamwork builds morale for    Family Flavour.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
 
  )
}

export default About