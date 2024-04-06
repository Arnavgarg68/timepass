import React, { useState } from 'react'
import './carousel.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
// import img1 from './images/img1.png'
// import img2 from './images/img2.png'
// import img3 from './images/img3.png'
// import img4 from './images/img4.png'

export default function Carousel({ data }) {
  const [imgnumber, setImgnumber] = useState(0);
  // document.addEventListener('keydown')
  // const imagess = [img1,img2,img3,img4];
  const handlenext = () => {
    const value = imgnumber == data.length - 1 ? 0 : imgnumber + 1;

    setImgnumber(value);
  }
  const handleprev = () => {
    const value = imgnumber == 0 ? data.length - 1 : imgnumber - 1;
    setImgnumber(value);
  }
  return (
    <div className='carousel-main'>
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={handleprev} />
      {
        data.map((e, i) => (
          <div className="carousel-main-inside">
            <img src={e.src} alt={e.alt} className='slide-image' style={{ "transform": `scale(${i === imgnumber ? 1 : 0.9})`,"":i===imgnumber?"block":"none", "zIndex": i === imgnumber ? 2 : -1 }} key={i} />
            <div className="carousel-about" style={{display:i===imgnumber?'block':"none"}}>
              {e.line}
            </div>
          </div>

        ))
      }
      <BsArrowRightCircleFill onClick={handlenext} className='arrow arrow-right' />
    </div>
  )
}
