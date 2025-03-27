import React from "react";
import Cash from "../assets/images/Cash.png";
import Green from "../assets/images/Green.png";
import Daun from "../assets/images/Daun.png";
import ScrollDown from "../assets/images/ScrollDown.png";
import Waste from "../assets/images/Waste.png"



export const Hero = () => {
  return (
    <>
  <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white max-w-[1440px] max-h-[905px]">
        <div className="relative w-[1233px] h-[735px] top-[134px] left-[43px]">
          <div className="absolute w-[1223px] h-[735px] top-0 left-2">
            <div className="absolute w-[1223px] h-[542px] top-0 left-0">
              <div className="absolute top-[86px] left-[375px] font-bold text-[#3f322c] text-[113px] whitespace-nowrap">
                Plastic Waste
              </div>

              <div className="absolute top-[401px] left-[354px] font-bold text-[#3f322c] text-[118px] whitespace-nowrap">
                Cash
              </div>

              <img className="absolute w-[381px] h-[411px] top-[14px] left-0" alt="The blowup" src={Waste} />
              <img className="absolute w-[184px] h-[192px] top-[222px] left-[415px]" alt="Green" src={Green} />
              <img className="absolute w-[194px] h-[159px] top-0 left-[1030px]" alt="Daun" src={Daun} />
            </div>

            <div className="absolute w-[549px] h-[127px] top-[254px] left-[622px]">
              <div className="absolute w-[549px] h-[125px] top-0.5 left-0 bg-[#00c81e] rounded-[20px]" />
              <div className="absolute top-0 left-11 font-bold text-white text-[97px] whitespace-nowrap">
                Recycle to
              </div>
            </div>

            <img className="absolute w-[421px] h-[325px] top-[410px] left-[793px] object-cover" alt="Cash" src={Cash} />
          </div>

          <p className="absolute w-[685px] top-[561px] left-0 text-black text-[26px] text-center">
            Don’t throw it away turn it into cash! Recycle your plastic, paper, and metal with us and get awarded. Join the movement for a cleaner, greener future.
          </p>

          <img className="absolute w-[73px] h-[73px] top-[677px] left-[550px]" alt="Scroll down" src={ScrollDown} />
        </div>
      </div>
    </div>
    </>
  );
};
