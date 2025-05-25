import React from 'react'
import "./LiveDropCard.css"
import { MdCircle } from "react-icons/md";
const LiveDropCard = () => {
  const cardArr=[{imgs:"/images/xerox.png",price:100,content:"MsGreedy"},{imgs:"/images/hd.png",price:100,content:"MsGreedy"},
    {imgs:"/images/hd.png",price:100,content:"MsGreedy"},{imgs:"/images/hd.png",price:100,content:"MsGreedy"},{imgs:"/images/hd.png",price:100,content:"MsGreedy"},
    {imgs:"/images/hd.png",price:100,content:"MsGreedy"},{imgs:"/images/hd.png",price:100,content:"MsGreedy"},


  ]
  return (
    <div className='liveDropMainContaier'>
      <div className='livedrpHead'>
        <MdCircle size={15} color='green'/>
        <span className='livedrop'>Live drop</span>
      </div>
      <div className='Live_card_contaier'>
         {cardArr.map((item)=>{
          return(
            <React.Fragment>
            <div className='Live_IndividualCard'>
              <div className='ImgDiv'>
                <img src={item.imgs} alt="cardImgs" />
              </div>
              <div className='content_div'>
               <p className='price'>$ {item.price}</p>
               <p className='cardDetail'>{item.content}</p>
              </div>

            </div>
            </React.Fragment>

          )
         })}

      </div>

      
    </div>
  )
}

export default LiveDropCard