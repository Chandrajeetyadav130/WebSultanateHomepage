import React from 'react'
import Header from './component/layout/Header'
import LiveDropCard from './component/LiveDrop/LiveDropCard'
import Sidebar from './component/sidebar/Sidebar'
import Chats from './component/chat/Chats'
import SignupCliam from './component/Claim/SignupCliam'
import FeaturedCard from './component/Featured/FeaturedCard'
import FilteredCard from './component/Featured/FilteredCard'
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
    </main>
    <Chats/>
    </div>

    </div>

    
  )
}

export default HomePage