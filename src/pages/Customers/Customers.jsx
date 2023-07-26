import React, { useEffect } from "react";
import "./customers.css";
import img1 from "./img/img2.png";
import img3 from "./img/img3.png";
import grid1 from "./img/grid1.png";
import grid2 from "./img/grid2.png";
import grid3 from "./img/grid3.png";
import img6 from "./img/img6.png";
import TableOne from "./TableOne";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Customers = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="bg-[#272727]">
      <div className="container1 " data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <section className="sec1O flex flex-col items-center justify-end">
          <h1 className=" md:text-[85px] sm:text-[60px] text-white sm:w-[90%] md:w-[60%]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            Furnished Apartments{" "}
            <span className="text-[#FCD54C]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">in Dubai</span>
          </h1>
        </section>
        <section className=" p-[45px_auto] ">
          <div className=" sm:w-[92%] md2:w-[45%] m-[45px_auto] cursor-all-scroll flex flex-col gap-y-7 p-[45px_auto]">
            <div className="flex flex-col gap-y-5">
              <p className="text-[#929292] text-[16px]" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
                This response is important for our ability to learn from
                mistakes, but it alsogives rise to self-criticism, because it is
                part of the threat-protection system. In other words, what keeps
                us safe can go too far, and keep us too safe. In fact it can
                trigger self-censoring.{" "}
              </p>
              <p className="text-[#929292] text-[16px]" data-aos="flip-right">
                One touch of a red-hot stove is usually all we need to avoid
                that kind of discomfort in the future. The same is true as we
                experience the emotional sensation of stress from our first
                instances of social rejection or ridicule. We quickly learn to
                fear and thus automatically avoid potentially stressful
                situations of all kinds, including the most common of all:
              </p>
            </div>

            <div className="flex flex-col gap-y-5 ">
              <p className="text-[#929292] text-[16px]">
                This response is important for our ability to learn from
                mistakes, but it alsogives rise to self-criticism, because it is
                part of the threat-protection system. In other words, what keeps
                us safe can go too far, and keep us too safe. In fact it can
                trigger self-censoring.{" "}
              </p>
              <p className="text-[#929292] text-[16px]" data-aos="zoom-out-up">
                One touch of a red-hot stove is usually all we need to avoid
                that kind of discomfort in the future. The same is true as we
                experience the emotional sensation of stress from our first
                instances of social rejection or ridicule. We quickly learn to
                fear and thus automatically avoid potentially stressful
                situations of all kinds, including the most common of all:
              </p>
            </div>
          </div>
        </section>
        <section className="">
          <div className="sm:w-[92%]  md:w-[80%] m-[65px_auto]">
            <img src={img1} alt="" className="w-[100%]" />
          </div>
        </section>
        <section className="p-[45px_auto] ">
          <div className="sm:w-[90%] sm2:w-[88%] md:w-[75%] md2:w-[45%] m-[45px_auto] cursor-all-scroll flex flex-col gap-y-7 p-[45px_auto]">
            <div className="flex flex-col gap-y-5">
              <p className="text-[#929292] text-[16px]" data-aos="flip-up">
                This response is important for our ability to learn from
                mistakes, but it alsogives rise to self-criticism, because it is
                part of the threat-protection system. In other words, what keeps
                us safe can go too far, and keep us too safe. In fact it can
                trigger self-censoring.{" "}
              </p>
              <p className="text-[#929292] text-[16px]" data-aos="flip-up">
                One touch of a red-hot stove is usually all we need to avoid
                that kind of discomfort in the future. The same is true as we
                experience the emotional sensation of stress from our first
                instances of social rejection or ridicule. We quickly learn to
                fear and thus automatically avoid potentially stressful
                situations of all kinds, including the most common of all:
              </p>
            </div>

            <img src={img3} alt="" data-aos="zoom-out-right"/>
          </div>
        </section>

        <section className="">
          <div className=" sm:w-[92%]  md:w-[80%] m-[45px_auto] grid sm:grid-cols-1 sm2:grid-cols-2 gap-5">
            <div>
              {" "}
              <img className="w-[100%] h-[100%]" src={grid1} alt="" data-aos="zoom-in" />
            </div>
            <div className="row-span-2">
              {" "}
              <img className="w-[100%] h-[100%]" src={grid3} alt="" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" />
            </div>
            <div>
              {" "}
              <img className="w-[100%] h-[100%]" src={grid2} alt="" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
            </div>
          </div>
        </section>
        <section className="">
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:w-[100%] md3:w-[60%]  m-[45px_auto] sm:p-[25px_5px] p-[25px_35px]">
            <div className="flex sm:flex-col md3:flex-row items-center  gap-5">
              <h1 className="text-[#FCD54C] text-[60px]  font-bold">20</h1>
              <p className="text-white text-[16px]" data-aos="zoom-out-left">
                Lorem Ipsum Dolorem apset
              </p>
            </div>
            <div className="flex sm:flex-col md3:flex-row items-center  gap-5">
              <h1 className="text-[#FCD54C] text-[60px]   font-bold">7</h1>
              <p className="text-white text-[16px]">
                Lorem Ipsum Dolorem apset
              </p>
            </div>
            <div className="flex sm:flex-col md3:flex-row items-center  gap-5">
              <h1 className="text-[#FCD54C] text-[60px]  font-bold">100</h1>
              <p className="text-white text-[16px]">
                Lorem Ipsum Dolorem apset
              </p>
            </div>
          </div>
        </section>

        <section className="p-[45px_auto] ">
          <div className=" sm:w-[98%] md2:w-[45%] m-[45px_auto] cursor-all-scroll flex flex-col gap-y-7 p-[45px_auto]">
            <div className="flex flex-col gap-y-5">
              <p className="text-[#929292] text-[16px]" data-aos="fade-up"
     data-aos-duration="3000">
                This response is important for our ability to learn from
                mistakes, but it alsogives rise to self-criticism, because it is
                part of the threat-protection system. In other words, what keeps
                us safe can go too far, and keep us too safe. In fact it can
                trigger self-censoring.{" "}
              </p>
              <p className="text-[#929292] text-[16px]" data-aos="fade-up"
     data-aos-duration="3000">
                One touch of a red-hot stove is usually all we need to avoid
                that kind of discomfort in the future. The same is true as we
                experience the emotional sensation of stress from our first
                instances of social rejection or ridicule. We quickly learn to
                fear and thus automatically avoid potentially stressful
                situations of all kinds, including the most common of all:
              </p>
            </div>

            <div className="flex flex-col gap-y-5 ">
              <p className="text-[#929292] text-[16px]"data-aos="fade-up"
     data-aos-duration="3000">
                This response is important for our ability to learn from
                mistakes, but it alsogives rise to self-criticism, because it is
                part of the threat-protection system. In other words, what keeps
                us safe can go too far, and keep us too safe. In fact it can
                trigger self-censoring.{" "}
              </p>
              <p className="text-[#929292] text-[16px]">
                One touch of a red-hot stove is usually all we need to avoid
                that kind of discomfort in the future. The same is true as we
                experience the emotional sensation of stress from our first
                instances of social rejection or ridicule. We quickly learn to
                fear and thus automatically avoid potentially stressful
                situations of all kinds, including the most common of all:
              </p>
            </div>
          </div>
        </section>

        <section className="my-3  sec4 flex flex-col gap-y-4 items-center p-[45px_0]">
    <div className="flex flex-col gap-y-4 items-center p-[45px_0]">
    <p className="text-[#272727] text-[20px]  font-bold">Do you have any questions?</p>
    <p className="sm:text-[45px] md:text-[70px] md3:text-[120px] text-[#272727] font-bold">Contact Us</p>
        <form action="" className="flex">
          <input type="text" placeholder="Enter your mail" className="w-[100%] p-[15px_45px] outline-none bg-white text-black"/>
          <button className="bg-black text-white p-[0_35px]">Send</button>
        </form>
      
    </div>
      </section>
        <section className="">
          <div className="sm:w-[99%] md2:w-[80%] m-[45px_auto]">
            <TableOne  />
          </div>
        </section>
        <section className="">
        <div className=" sm:w-[98%] md3:w-[70%] m-[0px_auto] p-[45px_0]">
          <div className="flex sm:flex-col md:flex-row sm:justify-center md:justify-between items-center">
            <h1 className="text-white text-[70px] font-[700] " data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Useful articles</h1>
            <p className="text-[#929292] text-[18px]" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">View all articles</p>
          </div>
          <div className="grid sm:grid-cols-1 sm2:grid-cols-2 md3:grid-cols-3 gap-8">
          <div className="container2">
            <img src={img6} alt="" className="image" />
            <div className="overlay2">
              <div className="text flex flex-col gap-y-14">
               
               
                  <p className="text-[#FFFFFF] text-[16px]" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Jule 03, 2022</p>
                  <p className="text-[25px] text-[#FFFFFF]" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Discover Architecture</p>
                <div>
                <p className="text-[#929292] text-[16px]" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">Lorem ipsum, dolor sit </p>
                <p className="text-[#929292] text-[16px]"> amet consectetur adipisicing elit.</p>
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
                  <p className="text-[25px] text-[#FFFFFF]">Discover Architecture</p>
                <div>
                <p className="text-[#929292] text-[16px]">Lorem ipsum, dolor sit </p>
                <p className="text-[#929292] text-[16px]"> amet consectetur adipisicing elit.</p>
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
                  <p className="text-[25px] text-[#FFFFFF]">Discover Architecture</p>
                <div>
                <p className="text-[#929292] text-[16px]">Lorem ipsum, dolor sit </p>
                <p className="text-[#929292] text-[16px]"> amet consectetur adipisicing elit.</p>
                </div>
                 <p className="text-[24p] text-[#FCD54C]"> Learn more</p>
               
              </div>
            </div>
          </div>

          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Customers;
