import React, { useEffect, useRef } from 'react'
import dp from "../assets/dp.webp"
function ReceiverMessage({image,message}) { // passing props to the child function
    let scroll = useRef()
    useEffect(() => {
        scroll.current.scrollIntoView({behaviour : "smooth"})
    },[message,image])

    const handleImageScroll = () => {
        scroll.current.scrollIntoView({behaviour : "smooth"})
    }
  return (
    <div>
      <div className='w-fit max-w-[500px] bg-[#20c7ff] px-[20px] py-[10px] text-white text-[19px] rounded-tl-none rounded-2xl relative left-0 shadow-gray-400 shadow-lg gap-[10px] flex flex-col'>
        <div ref= {scroll}>
      {image && <img src={image} alt="" className='w-[150px] rounded-lg' onLoad={handleImageScroll}/>}
      {message && <span>{message}</span>}
      </div>
        </div>
    </div>
  )
}

export default ReceiverMessage
