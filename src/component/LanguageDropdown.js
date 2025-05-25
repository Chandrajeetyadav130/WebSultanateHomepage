import { useState } from 'react';
const LanguageDropdown = () => {
    const [selectedLang, setSelectedLang] = useState('');
    const languages = [  'En','Hindi',"German","French"];

    return (

        <div className="lang-dropdown">
            <label htmlFor="languages"></label>
            <select
                id="languages"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
            >
                {languages.map((lang) => (
                    <option key={lang} value={lang}>
                        {lang}
                    </option>
                ))}
            </select>

        </div>
    )
}

export default LanguageDropdown