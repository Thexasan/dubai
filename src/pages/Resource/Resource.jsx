import React from 'react'
import './resor.css'
import  img1 from './img/inside.png'
const Resource = () => {
  return (
    <div>
     <div className='w-[98%] m-[45px_auto]'>
     <section className='sec1 flex items-center '>
        <div className="container1">
            <img src={img1} alt="" className='w-[350px]'/>
        </div>
      </section>
      <div className="container1">
        <div className='w-[80%] m-[45px_auto]'>
          <h1 className='text-[32px] text-[#FCD54C]'>Be in touch </h1>
          <p className='text-[32px] text-white'>with us</p>
          <form action="" className='flex flex-col gap-y-5'>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6'>
            <input type="text" className='border border-[#C9C9C9] bg-transparent p-[10px_12px] outline-none' placeholder='input Name' />
            <input type="text" className='border border-[#C9C9C9] bg-transparent p-[10px_12px] outline-none' placeholder='input Name' />
            <input type="text" className='border border-[#C9C9C9] bg-transparent p-[10px_12px] outline-none' placeholder='input Name' />
            </div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Message *' className='border border-[#C9C9C9] outline-none p-[10px_15px]'></textarea>
            <button className='bg-[#FCD54C] text-white p-[8px] w-[150px]'>SUBMIT</button>
          </form>

        </div>
      </div>
     </div>
    </div>
  )
}

export default Resource 