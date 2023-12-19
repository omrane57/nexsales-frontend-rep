import React from 'react'

const Card = ({tam,text}) => {
  return (


    <>
<div className=' cursor-pointer flex w-[286px] active:w-[300px]  shadow-lg px-8 pt-8 flex-col gap-3 rounded-lg border-[1px] border-solid bg-neutralwhite items-center' >
<div className='text-center font-[16px] leading-6 text-neutralGray600'>{text}</div>
<div className='T-number  text-center text-[16px] font-normal'>
   {tam} 
</div>
<div  className=' mt-[40px]  w-[286px] h-[10px] mb-0 rounded bg-neutralBlue '>
    
</div>
</div>
    </>
  )
}

export default Card