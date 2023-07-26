import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "./img/logo.svg";

import { Drawer } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Switcher from "../Dark/Switcher";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Layot = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="dark:bg-black bg-[#272727]">
      <header className="p-[15px]">
        <div className="container1">
          <div className="sm:w-[98%] m-[0_auto]">
            <nav className="flex items-center justify-between ">
              <div className="flex gap-10 items-center">
                <img src={logo} alt="" />
                <ul className="sm:hidden lg:flex gap-[25px]">
                  <Link to="/">
                    <li className="dark:text-white text-[20px] text-white active:after:text-black">{t("nav.t1")}</li>
                  </Link>
                  <Link to="/customers">
                    <li className="dark:text-white text-[20px] text-white"> {t("nav.t2")}</li>
                  </Link>
                  <Link to="/pricing">
                    <li className="dark:text-white text-[20px] text-white"> {t("nav.t3")}</li>
                  </Link>
                  <Link to="/recource">
                    <li className="dark:text-white text-[20px] text-white"> {t("nav.t4")}</li>
                  </Link>
                </ul>
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-transparent dark:text-white sm:hidden lg:block text-[white] border p-[5px_35px] text-[20px] rounded-[8px] ">
                 {t("nav.btn")}
                </button>
               <div className="sm:hidden md:block">
               <Switcher />
               </div>
                <select
                  name=""
                  id=""
                  onChange={(event) => changeLanguage(event.target.value)}
                  className="bg-transparent p-[10px_25px] border-transparent outline-none rounded-xl dark:bg-white sm:hidden lg:flex"
                >
                  <option value="ru">Ru</option>
                  <option value="en">En</option>
                </select>
              </div>
              <div
                className="sm:flex lg:hidden   flex-col gap-y-1"
                onClick={showDrawer}
              >
                <div className="w-[30px] h-[3px] dark:bg-[white] bg-black"></div>
                <div className="w-[25px] h-[3px] dark:bg-[white] bg-black"></div>
                <div className="w-[30px] h-[3px] dark:bg-[white] bg-black"></div>
              </div>
           <div className="dark:bg-black sm:block md:hidden ">
           <Drawer
                title="Basic Drawer"
                placement="right"
                onClose={onClose}
                open={open}
              >
                    <select
                  name=""
                  id=""
                  onChange={(event) => changeLanguage(event.target.value)}
                  className="bg-transparent p-[10px_45px] mb-6 border-black border  outline-none rounded-xl dark:bg-white"
                >
                  <option value="ru">Ru</option>
                  <option value="en">En</option>
                </select>
                <ul className=" flex flex-col gap-[25px]">
                  <Link to="/">
                    <li className="dark:text-black">Product</li>
                  </Link>
                  <Link to="/customers">
                    <li className="dark:text-black"> Customer</li>
                  </Link>
                  <Link to="/pricing">
                    <li className="dark:text-black"> Pricing</li>
                  </Link>
                  <Link to="/recource">
                    <li className="dark:text-black"> Resources</li>
                  </Link>
                </ul>
               <div className="dark:bg-black">
               <Switcher />
               </div>
              </Drawer>
           </div>
            </nav>
          </div>
        </div>
      </header>

      <Outlet />
      
      <footer className="p-[15px_0]">
        <div className="container1">
          <div className="sm:w-[90%] md:w-[90%] lg:w-[80%] m-[45px_auto] gap-y-5 flex flex-col ">
          <div className="flex items-center justify-center ">
                  <img src={logo} alt="" />
                </div>
            <div className="grid sm:grid-cols-1 sm:items-center md:grid-col-2 md2:grid-cols-5 grid-cols-4 gap-6">
           <div  >
           <ul className="flex flex-col gap-5">
           <Link to="/">
                  <li className="dark:text-white text-[22px]">Product</li>
                </Link>
                <div className="flex flex-col gap-y-3">
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">House in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Loft in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                
                </div>
           </ul>
           </div>
           <div  >
           <ul className="flex flex-col gap-5">
           <Link to="/customers">
                  <li className="dark:text-white text-[22px]">Customer</li>
                </Link>
                <div className="flex flex-col gap-y-3">
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">House in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Loft in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                
                </div>
           </ul>
           </div>
           <div  >
           <ul className="flex flex-col gap-5">
           <Link to="/recource">
                  <li className="dark:text-white text-[22px]">Resource</li>
                </Link>
                <div className="flex flex-col gap-y-3">
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">House in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Loft in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                
                </div>
           </ul>
           </div>
           <div  >
           <ul className="flex flex-col gap-5">
           <Link to="/pricing">
                  <li className="dark:text-white text-[22px]">Pricing</li>
                </Link>
                <div className="flex flex-col gap-y-3">
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">House in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Loft in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">Apartment in Dubai</li>
                  </Link>
                
                </div>
           </ul>
           </div>
           <div  >
           <ul className="flex flex-col gap-5">
           <Link to="/">
                  <li className="dark:text-white text-[22px]">Product</li>
                </Link>
                <div className="flex flex-col gap-y-3">
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">
                  964 Worthington Drive
Dubai, UAE
                  </li>
                  </Link>
                  <Link>
                  <li className="text-[18px] text-[#E8E8E8] ">
                  dubairealty@mail.com
                  </li>
                  </Link>
                         <button className="bg-[#FCD54C] text-black p-[5px] text-[18px]" >Book a consultation</button>         
                </div>
           </ul>
           </div>

             
             
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layot;
