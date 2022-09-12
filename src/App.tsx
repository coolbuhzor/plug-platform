import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "./components/side-bar/side-bar";
import hamburger from "../src/assets/svg/hamburger.svg";
import close from "../src/assets/svg/close.svg";
import { Outlet } from "react-router-dom";

function App() {
  const [mobileNav, setMobileNav] = useState(false);
  const pathName = useLocation();
  const navigate = useNavigate();

  return (
    <div className="min-h-full relative overflow-y-scroll justify-start h-full w-full max-w-[1440px]  flex overflow-hidden">
      <section className="flex w-full h-screen min-h-[800px] items-center justify-start overflow-hidden">
        <div className="hidden lg:block lg:h-full w-[361px] overflow-hidden">
          <Sidebar />
        </div>
        <main className="flex h-full w-full mt-[200px] flex-col bg-[#f5f8fe] flex-1 justify-start overflow-y-scroll ">
          <div className="w-full absolute top-0  h-[93px] flex items-center bg-white z-10 justify-between">
            <p className=" w-[60%] lg-w-[unset] text-[#30425A] font-overpass font-normal text-[18px] leading-[23px] pl-[35px]">
              Acumen Digital Interview Task / Elephantom
            </p>
            <button
              className="lg:hidden border-none outline-none  flex justify-center mr-[35px] "
              onClick={() => setMobileNav(!mobileNav)}
            >
              {mobileNav ? (
                <img src={close} alt=" hamburger-menu" />
              ) : (
                <img src={hamburger} alt=" hamburger-menu" />
              )}
            </button>
          </div>
          <Outlet />
        </main>
      </section>
      {mobileNav && (
        <div className="fixed lg:hidden w-[200px]  py-[20px] text-left flex items-center flex-col  top-[110px] right-[35px] bg-white z-20 rounded-[5px] shadow-xl">
          <p
            className={`text-left font-overpass  w-full pl-5 text-[16px] mb-[10px] ${
              pathName.pathname !== "/elephant" ? "bg-[#B9B9FF]" : "bg-white"
            }`}
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <p
            className={`text-left font-overpass  w-full pl-5 text-[16px] ${
              pathName.pathname === "/elephant" ? "bg-[#B9B9FF]" : "bg-white"
            }`}
          >
            Elephant
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
