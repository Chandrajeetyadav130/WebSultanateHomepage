import { useState } from 'react';

const Rupees = () => {
        const [selectedRupees, setSelectedRupees] = useState('');
        const rupees = [  "dollar","rupee"];
  return (
                <div className="lang-dropdown">
            <label htmlFor="languages"></label>
            <select
                id="selectedRupees"
                value={selectedRupees}
                onChange={(e) => setSelectedRupees(e.target.value)}
            >
                {rupees.map((rupee) => (
                    <option key={rupee} value={rupee}>
                        {rupee}
                    </option>
                ))}
            </select>

        </div>
  )
}

export default Rupees