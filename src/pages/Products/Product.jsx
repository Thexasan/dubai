import React, { useEffect } from "react";
import "./Product.css";

import { useTranslation } from "react-i18next";
import Acordion from "./components/Acordion";
import Slider from "./components/Slider";
import img from "./img/cardImg.png";
import img2 from "./img/img2.png";
import img3 from "./img/img3.png";
import img4 from "./img/img4.png";
import img6 from "./img/img6.png";
import img7 from "./img/img7.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Product = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className=" dark:bg-black bg-[#272727]">
      <section
        className="secone flex flex-col items-center justify-center relative "
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
      >
        <div className="gap-15 w-[80%] m-[45px_auto]">
          <h1 className="md:text-[96px] text-white sm:w-[95%] my-[150px] mb-[150px] md:w-[70%] sm:text-[40px] ">
            {t("nav2.t1")}
          </h1>
        </div>
        <div
          className="grid grid-cols-3 gap-6 sm:w-[100%] md2:w-[60%] absolute bottom-0 right-0 bg-black p-[25px_35px]"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="flex items-center sm:flex-col md:flex-row gap   gap-5">
            <h1
              className="text-[#FCD54C] text-[60px]  font-bold"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              01
            </h1>
            <p className="text-white text-[16px]">{t("nav2.t2")}</p>
          </div>
          <div className="flex items-center sm:flex-col md:flex-row gap-5">
            <h1
              className="text-[#FCD54C] text-[60px]   font-bold"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              01
            </h1>
            <p className="text-white text-[16px]">{t("nav2.t2")}</p>
          </div>
          <div className="flex items-center sm:flex-col md:flex-row gap  gap-5">
            <h1
              className="text-[#FCD54C] text-[60px]  font-bold"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              01
            </h1>
            <p className="text-white text-[16px]">{t("nav2.t2")}</p>
          </div>
        </div>
      </section>

      <section className="">
        <div className="w-[80%] m-[0_auto] p-[45px_0] ">
          <div className="flex sm:flex-wrap md:flex-nowrap sm:justify-center md:justify-between">
            <h1 className="text-[48px] text-white">{t("nav2.t3")}</h1>
            <div
              className="flex gap-4 items-center"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <p className="text-white hover:text-[#FCD54C] cursor-pointer">
                {t("nav2.t7")}
              </p>
              <p
                className="text-white hover:text-[#FCD54C] cursor-pointer"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                {t("nav2.t4")}
              </p>
              <p
                className="text-white hover:text-[#FCD54C] cursor-pointer"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                {t("nav2.t5")}
              </p>
              <p
                className="text-white hover:text-[#FCD54C] cursor-pointer"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                {t("nav2.t6")}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className=" w-[98%] m-[0_auto] grid sm:grid-cols-1 sm2:grid-cols-2 md3:grid-cols-4 gap-4 ">
          <div className="container2">
            <img src={img} alt="" className="image" />
            <div className="overlay">
              <div className="text flex flex-col gap-y-14">
                <p
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  Dubai
                </p>
                <div>
                  <p
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    Lorem ipsum, dolor sit{" "}
                  </p>{" "}
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    {" "}
                    amet consectetur adipisicing elit.
                  </p>{" "}
                  <p data-aos="fade-up" data-aos-anchor-placement="top-center">
                    {" "}
                    Id quod expedita nulla{" "}
                  </p>{" "}
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                  >
                    {" "}
                    excepturi at eaque odio officiis{" "}
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                  >
                    {" "}
                    soluta assumenda voluptate. orum!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container2">
            <img
              src={img}
              alt=""
              className="image"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            <div className="overlay">
              <div className="text flex flex-col gap-y-14">
                <p>Dubai</p>
                <div>
                  {" "}
                  <p>Lorem ipsum, dolor sit </p>{" "}
                  <p> amet consectetur adipisicing elit.</p>{" "}
                  <p> Id quod expedita nulla </p>{" "}
                  <p> excepturi at eaque odio officiis </p>
                  <p> soluta assumenda voluptate. orum!</p>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="container2">
            <img
              src={img}
              alt=""
              className="image"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            />
            <div className="overlay">
              <div className="text flex flex-col gap-y-14">
                <p>Dubai</p>
                <div>
                  <p
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    Lorem ipsum, dolor sit{" "}
                  </p>{" "}
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                  >
                    {" "}
                    amet consectetur adipisicing elit.
                  </p>{" "}
                  <p data-aos="fade-up" data-aos-anchor-placement="top-center">
                    {" "}
                    Id quod expedita nulla{" "}
                  </p>{" "}
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                  >
                    {" "}
                    excepturi at eaque odio officiis{" "}
                  </p>
                  <p
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-center"
                  >
                    {" "}
                    soluta assumenda voluptate. orum!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container2">
            <img
              src={img}
              alt=""
              className="image"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            />
            <div className="overlay">
              <div className="text flex flex-col gap-y-14">
                <p>Dubai</p>
                <div>
                  {" "}
                  <p>Lorem ipsum, dolor sit </p>{" "}
                  <p> amet consectetur adipisicing elit.</p>{" "}
                  <p> Id quod expedita nulla </p>{" "}
                  <p> excepturi at eaque odio officiis </p>
                  <p> soluta assumenda voluptate. orum!</p>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="sm:w-[94%]  md:w-[92%] md3:w-[50%] m-[95px_auto] flex flex-col gap-y-8 items-center">
          <p className="text-[18px] text-[#FCD54C] ">{t("sec1.t1")}</p>
          <p className="text-[#E8E8E8] sm:text-[40px] md:text-[70px]">
            {t("sec1.t2")}
          </p>
          <p className="text-[#E8E8E8] sm:text-[16px] md:text-[18px]">
            {t("sec1.t3")}
          </p>
        </div>
      </section>
      <section className="">
        <div className="w-[98%] m-[55px_auto]">
          <img src={img2} alt="" className="max-w-[100%] max-h-[100%]" />
        </div>
      </section>

      <section className="my-5 hidden">
        <div className="container1">
          <div className="w-[70%] m-[65px_auto] flex flex-col gap-y-10">
            <div className="w-[95%] m-[0_auto] border border-[#FCD54C] p-[45px]">
              <p
                className="text-[30px] text-[#FFFFFF]"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                “Don’t limit yourself. Many people limit themselves to what they
                think they can do. You can go as far as your mind lets you. What
                you believe, remember, you can achieve.” —{" "}
                <span className="text-[#FCD54C]">Mary Kay Ash</span>{" "}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-y-5">
                <img src={img3} alt="" className="w-[100%]" />
                <p
                  className="text-[18px] text-[#E8E8E8] text-justify"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  Sed in sem pellentesque, eleifend erat vitae, tincidunt
                  turpis. Pellentesque augue elit, rutrum sit amet commodo vel,
                  porta quis purus. Nullam faucibus, odio eu bibendum auctor,
                  eros dolor aliquet purus, sit amet pellentesque neque est id
                  tortor. In egestas, erat a dapibus dapibus, mi augue ornare
                  lorem, nec pretium ligula purus nec tellus. Aenean a
                  scelerisque nisi. Nullam pretium fermentum nunc, feugiat
                  placerat urna rutrum eget. Nullam mattis justo consequat
                  risus. Donec imperdiet enim id efficitur pharetra. Nam
                  sollicitudin at est eget auctor. Ut sed ante quis nulla
                  tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam
                  viverra ultrices est vitae suscipit. Pellentesque elementum
                  purus non nisl pharetra consequat. Nunc in venenatis orci.
                </p>
              </div>
              <div className="flex flex-col gap-y-5">
                <img src={img4} alt="" className="w-[100%]" />
                <p className="text-[18px] text-[#E8E8E8] text-justify"data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
                  Vivamus non diam vel lorem efficitur mattis in gravida ante.
                  Ut ullamcorper dapibus ante, eu tincidunt orci feugiat vel.
                  Curabitur eget lectus lectus. Pellentesque malesuada, felis at
                  accumsan interdum, nisl mi fermentum est, eu suscipit dui
                  lorem a dui. Aliquam rhoncus risus in leo vestibulum
                  efficitur. Suspendisse tortor quam, faucibus a lacinia a,
                  bibendum vitae quam. Suspen disse et metus et orci rutrum
                  dictum eu eu nibh. Suspendisse blandit in diam in rhoncus. Nam
                  volutpat hendrerit enim, sed aliquet quam gravida at. Nullam
                  dictum sagittis nisi, eu porta sem mollis eu. Nulla faucibus
                  sed ipsum sed sodales. Curabitur varius iaculis felis, in
                  aliquet sem suscipit quis. Ut vulputate, magna ac bibendum
                  elementum, nulla magna tincidunt urna, a venenatis dolor arcu
                  sed leo.{" "}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-3 sec4 flex flex-col gap-y-4 items-center p-[45px_0] ">
        <div className="flex flex-col gap-y-4 items-center p-[45px_0]">
          <p className="text-[#272727] text-[20px]  font-bold">
            {t("sec2.t1")}
          </p>
          <p className=" sm:text-[40px] md:text-[120px] text-[#272727] font-bold">
            {t("sec2.t2")}
          </p>
          <form action="" className="flex">
            <input
              type="text"
              placeholder="Enter your mail"
              className="w-[100%] p-[15px_45px] outline-none bg-white text-black"
            />

            <button className="bg-black text-white p-[0_35px]">
              {t("sec2.t3")}
            </button>
          </form>
        </div>
      </section>

      <section className="">
        <div className=" sm:w-[95%] md:w-[70%] m-[0px_auto] p-[45px_0]">
          <div className="flex sm:flex-col md:flex-row justify-between items-center">
            <h1 className="text-white text-[70px] font-[700] ">
              {t("sec2.t5")}
            </h1>
            <p className="text-[#929292] text-[18px]">{t("nav2.t6")}</p>
          </div>
          <div className="grid  sm:grid-cols-1 md::grid-cols-2 p-[25px_0] md3:grid-cols-3 gap-8">
            <div className="container2">
              <img src={img6} alt="" className="image" />
              <div className="overlay2">
                <div className="text flex flex-col gap-y-14">
                  <p className="text-[#FFFFFF] text-[16px]">Jule 03, 2022</p>
                  <p className="text-[25px] text-[#FFFFFF]">
                    Discover Architecture
                  </p>
                  <div>
                    <p className="text-[#929292] text-[16px]">
                      Lorem ipsum, dolor sit{" "}
                    </p>
                    <p className="text-[#929292] text-[16px]">
                      {" "}
                      amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <p className="text-[24p] text-[#FCD54C]"> Learn more</p>
                </div>
              </div>
            </div>
            <div className="container2">
              <img src={img7} alt="" className="image" />
              <div className="overlay2">
                <div className="text flex flex-col gap-y-14">
                  <p className="text-[#FFFFFF] text-[16px]">Jule 03, 2022</p>
                  <p className="text-[25px] text-[#FFFFFF]">
                    Discover Architecture
                  </p>
                  <div>
                    <p className="text-[#929292] text-[16px]">
                      Lorem ipsum, dolor sit{" "}
                    </p>
                    <p className="text-[#929292] text-[16px]">
                      {" "}
                      amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <p className="text-[24p] text-[#FCD54C]"> Learn more</p>
                </div>
              </div>
            </div>
            <div className="container2">
              <img src={img6} alt="" className="image" />
              <div className="overlay2">
                <div className="text flex flex-col gap-y-14">
                  <p className="text-[#FFFFFF] text-[16px]">Jule 03, 2022</p>
                  <p className="text-[25px] text-[#FFFFFF]">
                    Discover Architecture
                  </p>
                  <div>
                    <p className="text-[#929292] text-[16px]">
                      Lorem ipsum, dolor sit{" "}
                    </p>
                    <p className="text-[#929292] text-[16px]">
                      {" "}
                      amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <p className="text-[24p] text-[#FCD54C]"> Learn more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container1">
          <div className="w-[98%] m-[0auto]">
            <Slider />
          </div>
        </div>
      </section>

      <section className="my-10 ">
        <div className="container1">
          <div className=" sm:w-[98%] md:w-[70%] m-[45px_auto]">
            <h1 className="text-[60px] text-[white] font-bold">FAQ</h1>
            <div className="pb-7">
              <Acordion />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
