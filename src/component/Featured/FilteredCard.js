import React from 'react'
import "./filteredCard.css"
const FilteredCard = () => {
  const cardArray = [{ card: "Crazy designer", imgss: "/images/traders.png", price: 390 },
  { card: "Crazy designer", imgss: "/images/filterCardImg.png", price: 390 },
  { card: "Crazy traders", imgss: "/images/traders.png", price: 90 },
  { card: "Crazy designer", imgss: "/images/filterCardImg.png", price: 390 },
  { card: "Crazy designer", imgss: "/images/filterCardImg.png", price: 30 },
  { card: "Crazy designer", imgss: "/images/filterCardImg.png", price: 90 },
  ]
  return (
    <div className='filteredCard_container'>
      {cardArray.map((val) => {
        return (
          <React.Fragment>
            <div className='filteredIndividualCard'>
              <div className='filteredimageDiv'>
                <img src={val.imgss} alt="" />
              </div>
              <div className="filterContent">
                <p>{val.card}</p>
                <div className='filterBtn'>
                  <button>street watch</button>
                  <button>street watch</button>
                </div>

                <p>price $ {val.price}</p>
                <div className="opencase_info">
                  <button className='openCase'>Open case</button>
                  <button className='infoBtn'>Info</button>
                </div>
              </div>

            </div>
          </React.Fragment>
        )
      })}

    </div>
  )
}

export default FilteredCard