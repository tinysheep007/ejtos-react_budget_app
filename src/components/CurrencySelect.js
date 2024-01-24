import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelect = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const [selectedCurrency, setSelectedCurrency] = useState('pound');

    const handleCurrencyChange = (e) => {
        setSelectedCurrency(e.target.value);
    };

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className="alert alert-success">
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="dollars">Dollars</option>
                <option value="pound">Pound</option>
                <option value="euro">Euro</option>
                <option value="rupee">Rupee</option>
            </select>

            {/* Display the selected currency */}
            <div>Currency: {selectedCurrency}</div>

            {/* Other components or logic based on the selected currency */}
        </div>
    );
};

export default CurrencySelect;
