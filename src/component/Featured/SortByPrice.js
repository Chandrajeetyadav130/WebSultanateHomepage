import { useState } from 'react'

const SortByPrice = () => {
    const [sortByPrice, setSortByPrice] = useState('');
    const price = [1000, 2000, 2300,400];
    return (
        <div className="price-dropdown">
            <label htmlFor="sortByPrice"></label>
            <select
                id="sortByPrice"
                value={sortByPrice}
                onChange={(e) => setSortByPrice(e.target.value)}
            >
                <option value="" disabled hidden>
                    Sort by Price
                </option>
                {price.map((rupee) => (
                    <option key={rupee} value={rupee}>
                        {rupee}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default SortByPrice