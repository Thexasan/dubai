import React from 'react'

const Card2 = ({img,title,foot,btn}) => {
  return (
    <div>
        <div className='p-[18px_42px] flex flex-col items-center justify-center gap-y-3 shadow-xl '>
                <img src={img} className='' alt="" />
                <p className='text-[20px] text-[#304560]'>{title}</p>
                <p className='text-[18px] text-[#728399]'>{foot}</p>
                <p className='text-[18px] text-[#2389FF]'>{btn}</p>
            </div>
    </div>
  )
}

export default Card2 