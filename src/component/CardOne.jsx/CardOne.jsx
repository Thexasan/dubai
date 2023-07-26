import React from 'react'

const CArdOne = ({img,title,foot}) => {
    
  return (
    <div>
            <div className='p-[18px_42px] flex flex-col gap-y-3 shadow-xl '>
                <img src={img} className='w-[85px]' alt="" />
                <p className='text-[20px] text-[#304560]'>{title}</p>
                <p className='text-[18px] text-[#728399]'>{foot}</p>
            </div>
    </div>
  )
}

export default CArdOne