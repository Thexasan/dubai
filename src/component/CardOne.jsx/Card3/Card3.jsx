import React from 'react'

const Card3 = ({img,name,job,star,title,body,foot}) => {
  return (
    <div className='p-[12px_15px] bb-white shadow-xl bg-white rounded-xl  flex flex-col gap-y-4'>
        <div className='flex items-center gap-9' >
            <img src={img} alt="" className='rounded-[100%]' />
            <div className='flex flex-col gap-y-1'>
            <p className='text-[18px] text-[#728399]'>{name}</p>
            <p className='text-[20px] text-[#304560]'>{job}</p>
            <div className='flex '>
                <img  src={star} alt="" />
                <img  src={star} alt="" />
                <img  src={star} alt="" />
                <img  src={star} alt="" />
                <img  src={star} alt="" />
            </div>
            </div>
        </div>
        <p className='text-[20px] text-[#304560]'>{title}</p>
        <p className='text-[18px] text-[#728399]'>{body}</p>
        <p className='text-[20px] text-[#2389FF]'>{foot}</p>
    </div>
  )
}

export default Card3