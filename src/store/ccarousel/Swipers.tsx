import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
const Swiper =()=>{
  const Slides =[
      {
        url:'http://localhost:5173/2.jpg'
      },
      {
        url:'http://localhost:5173/1.jpg'
      }
      
    ]
    const [currentIndex,setCurentIdex] = useState(0)
    const preslide = () =>{
      const isfirstslide = currentIndex ===0;
      const newIdex = isfirstslide ? Slides.length -1 :currentIndex-1;
      setCurentIdex(newIdex);
    }
    const nexslide = ()=>{
      const islastslide = currentIndex === Slides.length -1;
      const newIndex = islastslide? 0 :currentIndex +1;
      setCurentIdex(newIndex);
    }
return(
      <div className="swiper-slider-div">
        <div className="">
            <main className="">
              <div className="top-warp">
                <div className="simple-slier1">
                  <div className="simple-slider-holder">
                  <div className="slider-img">
                        <img className="slider-img" src={Slides[currentIndex].url} alt="" />
                        <BsChevronCompactLeft onClick={preslide} className= "btn-back"  size={35}></BsChevronCompactLeft>
                        <span className="span-img" aria-hidden='true'></span>
                        <BsChevronCompactRight onClick={nexslide} className="btn-next" size={35}></BsChevronCompactRight>
                      </div>
                  </div>
                </div>
              </div>
            </main>
        </div>
      </div>
    )
}
export default Swiper