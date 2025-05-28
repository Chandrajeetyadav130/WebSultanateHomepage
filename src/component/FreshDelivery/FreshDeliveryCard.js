import "./FreshDeliveryCard.css";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
const FreshDeliveryCard = () => {
  const freshcardarray = [
    { user: "Andrew Grown", id: "users9384", time: "3 hours", head: "Best serivce I ever used" },
    { user: "Shewi Grown", id: "users9384", time: "3 hours", head: "Best serivce I ever used" },
    { user: "marco Grown", id: "users9384", time: "3 hours", head: "Best serivce I ever used" },
    { user: "Andrew Grown", id: "users9384", time: "3 hours", head: "Best serivce I ever used" },
  ]
  return (
    <div className='freshDeliveryContainer'>
      <header className='freshDeliveryHeader'>
        <div className="leftDelivery_Part">
          <img src="/images/Rectangle6.png" alt="Rectangle6" /><span className="freshDeliveryHead">Fresh Delivery</span>

        </div>
        <div className="FreshDelivery_rightPart">
          <p>Check out some of the hottest unboxings from our community! To appear on our page,tag us on Twitter when your item arrives.</p>
        </div>
      </header>
      <div className="freshDeliveryCardContainer">
        {freshcardarray.map((val, idx) => {
          return (
            <React.Fragment>
              <div className="freshDeliveryCard">
                <header className="freshDeliveryCardHeader">
                  <div className="freshDeliveryCardLeft">
                    <div className="imgcontainer">
                      <img src="/images/Rectangle9.png" alt="Rectimg" />

                    </div>
                    <div className="contentcontainer">
                      <span className="freshDeliveryUser">{val.user}</span>
                      <span className="freshDeliveryUser">{val.id}</span>
                    </div>
                  </div>
                  <span className="freshDeliveryTime">{val.time}</span>
                </header>
                <div className="cardbody">
                  <h1>{val.head}</h1>
                  <p>It finally arrived. TY @HypeDrop Lemme know which case I should open to honor this moment</p>
                  <div className="freshDelivryImgScroller">
                    <img src="/images/Rectangle6.png" alt="rectangleimg" />
                    <img src="/images/Rectangle6.png" alt="rectangleimg" />
                    <img src="/images/Rectangle6.png" alt="rectangleimg" />
                    <img src="/images/Rectangle6.png" alt="rectangleimg" />


                  </div>
                  <div className="freshDeliveryRating">
                    <IoStarSharp size={25} color="green" />
                    <IoStarSharp size={25} color="green" />
                    <IoStarSharp size={25} color="green" />
                    <IoStarSharp size={25} color="green" />
                  </div>


                </div>
              </div>
            </React.Fragment>
          )
        })}

      </div>


    </div>
  )
}

export default FreshDeliveryCard