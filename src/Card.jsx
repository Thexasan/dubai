import React from 'react'

const Card = ({img,title,body}) => {
  return (
    <div>
        <div className='flex flex-col gap-y-5 items-center text-center'>
            <img src={img} alt="" className='w-[65px]' />
            <p className='text-[#212B31] text-[20px] font-bold'>{title}</p>
            <p className='text-[#72787D]'>{body}</p>
        </div>
    </div>
  )
}

export default Card