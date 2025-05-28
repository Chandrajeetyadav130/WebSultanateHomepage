import React from 'react'
import Header from './component/layout/Header'
import LiveDropCard from './component/LiveDrop/LiveDropCard'
import Sidebar from './component/sidebar/Sidebar'
import Chats from './component/chat/Chats'
import SignupCliam from './component/Claim/SignupCliam'
import FeaturedCard from './component/Featured/FeaturedCard'
import FilteredCard from './component/Featured/FilteredCard'
import BattleCard from './component/battle/BattleCard'
import FreshDeliveryCard from './component/FreshDelivery/FreshDeliveryCard'
import Footer from './component/Footer/Footer'
const HomePage = () => {
  return (
    <div className='homepageBackground'>
    <Header/>
    <div className='sidebar_Main_sidebar'>
    <Sidebar/>
    <main className='mainCentral'>
    <LiveDropCard/>
    <SignupCliam/>
    <FeaturedCard/>
    <FilteredCard/>
    <BattleCard/>
    <FreshDeliveryCard/>
    <Footer/>
    </main>
    <Chats/>
    </div>

    </div>

    
  )
}

export default HomePage