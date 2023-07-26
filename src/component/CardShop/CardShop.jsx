import React from 'react'

const CardShop = ({img,star,title,price,kor,bys}) => {
  return (
    <div className='flex flex-col gap-y-4 text-center bg-[#F4F7FE80] items-center shadow-xl'>
            <img src={img} alt="" />
            <div className='flex '>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                </div>
                <p className='text-[18px] text-[#304560]'>{title}</p>
                <p className='text-[20px] text-[#2389FF]'>{price}</p>
                <div className='flex gap-5'>  
                    <button className='my-5 text-white p-[5px_15px] text-[18px] bg-[#2389FF]'>{kor}</button>
                    <button className='my-5 text-[#304560] p-[5px_15px] text-[18px] bg-[#F4F7FE]'>{bys}</button>
            </div>
    </div>
  )
}

export default CardShop