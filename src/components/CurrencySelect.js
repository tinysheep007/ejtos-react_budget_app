import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
    const { expenses, budget, changeCurrency, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
        const firstChar = e.target.value[0];
        changeCurrency(firstChar)
    };

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    // Inline styles for the CurrencySelect component
    const dropdownStyle = {
        backgroundColor: '#008000',  // Set the background color of the dropdown
        color: '#000',               // Set the text color of the dropdown options
    };

    return (
        <div className={`alert ${alertType}`} >
            {/* Apply styles to the select element for the dropdown */}
            <select value={selectedCurrency} onChange={handleCurrencyChange} style={{ backgroundColor: '#5dfe00', color: '#000' }}>
                <option value="£ pound">£ Pound</option>
                <option value="$ dollars">$ Dollar</option>
                
                <option value="€ euro">€ Euro</option>
                <option value="₹ rupee">₹ Ruppee</option>
            </select>


            {/* Display the selected currency in the desired format */}
            <div>Currency: ({selectedCurrency})</div>

            {/* Other components or logic based on the selected currency */}
        </div>
    );
};

export default CurrencySelect;
