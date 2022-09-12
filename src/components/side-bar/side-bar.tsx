import React from "react";
import elephant from "../../assets/images/elephant.png";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const pathName = useLocation();
  const navigate = useNavigate();

  return (
    <div className=" hidden lg:flex justify-start overflow-y-auto flex-col h-full  bg-[#DDDDFE] w-full ">
      <div className="w-[191px] h-[191px] bg-white flex  items-center justify-center rounded-full self-center mt-[56px] mb-[60px]">
        <img src={elephant} alt="elephant-img" />
      </div>
      <div className="w-full">
        <p
          className={` cursor-pointer mb-[10px] ${
            pathName.pathname !== "/elephant"
              ? "w-full h-[62px] pl-[20px] font-overpass lg:pl-[56px] flex items-center bg-[#B9B9FF] text-white"
              : "font-overpass pl-[20px] lg:pl-[56px] text-[18px] leading-[23px] text-[#30425A] "
          }`}
          onClick={() => navigate("/")}
        >
          Home
        </p>
        <p
          className={`cursor-pointer ${
            pathName.pathname === "/elephant"
              ? "w-full h-[62px] pl-[20px] font-overpass lg:pl-[56px] flex items-center bg-[#B9B9FF] text-white"
              : "font-overpass pl-[20px] lg:pl-[56px] text-[18px] leading-[23px] text-[#30425A] "
          }`}
        >
          Elephant
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
