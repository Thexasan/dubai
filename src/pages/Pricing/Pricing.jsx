import React, { useEffect } from "react";
import imgPr from "./img/imgPric.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Pricing = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-[#272727] dark:bg-black">
      <div className="w-[95%] m-[0_auto] ">
        <div className="flex sm:flex-col md:flex-row justify-between items-center">
          <h1
            className="text-[60px] text-[#FFFFFF]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            Blog
          </h1>

          <input
            type="text"
            className="sm:w-[100%] md:w-[40%]  p-[10px_15px] outline-none border border-[#323030] text-[18px] text-white"
          />
        </div>
        <div className=" w-[80%] m-[45px_auto] grid sm:grid-cols-1 md:grid-cols-2 md3:grid-cols-3 gap-5">
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
            />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="fade-up"
                data-aos-anchor-placement="top-center"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="fade-up"
                data-aos-anchor-placement="center-center"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="fade-up"
              data-aos-duration="3000"
            />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={imgPr} className="w[100%]" alt="" />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p
                className="text-[16px] text-[white]"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Learn more
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            <div className="flex flex-col gap-y-3">
              <h1
                className="text-[white] text-[33px]"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src={imgPr}
              className="w[100%]"
              alt=""
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            <div className="flex flex-col gap-y-3">
              <h1 className="text-[white] text-[33px]">
                Commercial property in Abu Dhabi
              </h1>
              <p
                className="text-[18px] text-[#929292]"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={imgPr} className="w[100%]" alt="" />
            <div className="flex flex-col gap-y-3">
              <h1 className="text-[white] text-[33px]">
                Commercial property in Abu Dhabi
              </h1>
              <p className="text-[18px] text-[#929292]">
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={imgPr} className="w[100%]" alt=""data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" />
            <div className="flex flex-col gap-y-3">
              <h1 className="text-[white] text-[33px]">
                Commercial property in Abu Dhabi
              </h1>
              <p className="text-[18px] text-[#929292]" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
                In Dubai, the final statistics of all transactions related to
                real estate for the first quarter has been confirmed ...
              </p>
              <p className="text-[16px] text-[white]">Learn more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
