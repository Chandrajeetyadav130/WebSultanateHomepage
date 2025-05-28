import React from 'react'
import "./Battlecard.css"
const BattleCard = () => {
    return (
        <div className='battleContainer'>

            <header className="latestbattle">
                <img src="./images/Vectors.png" alt="vectors" />
                <span className='all_latestBattle'>Latest battle</span><button className='veiwLattest_btn'>view all</button>
            </header>
            <div className="battleCardContainer">
                <div className="individualBattleCard">
                    <div className="leftBattleCard">
                        <img src="./images/Rectangle12.png" alt="rect" />
                        <img src="./images/Rectangle13.png" alt="rect" />
                        <img src="./images/Vectors.png" alt="vectors" />
                        <img src="./images/Rectangle14.png" alt="rect" />
                        <img src="./images/Rectangle15.png" alt="rect" />



                    </div>
                    <div className="middleBattleCard">
                        <img src="./images/image61.png" alt="" />
                        <img src="./images/image61.png" alt="" />
                        <img src="./images/image61.png" alt="" />
                        <img src="./images/image61.png" alt="" />
                        <img src="./images/image61.png" alt="" />
                        <img src="./images/image61.png" alt="" />
                        <img src="./images/image61.png" alt="" />
                        <img src="./images/image61.png" alt="" />

                    </div>
                    <div className="rightBattleCard">
                      <p className="battlePrice">$1000</p><button>Open case</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default BattleCard