import SortByPrice from './SortByPrice'
import "./featuredCard.css"
const FeaturedCard = () => {
  return (
    <div className='FeaturedContainer'>
      <header className='featuredHeader'>
        <div className='featuredHead'>Featured Boxes</div>
        <div className="featuredBtnGroup">
            <button>Featured</button>
            <button>New Boxes</button>
            <button>Top Boxes</button>

        </div>
        <div className="sortByPrice">
           <SortByPrice/>
        </div>
      </header>
        
    </div>
  )
}

export default FeaturedCard