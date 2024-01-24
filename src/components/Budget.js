import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    let totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
    }, 0);

    const handleBudgetChange = (event) => {
        const inputValue = parseFloat(event.target.value);

        if (inputValue > 20000) {
            alert("Please enter a valid budget number not exceeding 20000");
        } else if (inputValue < totalExpenses) {
            console.log(totalExpenses)
            alert("Please enter a valid budget number bigger than the total spending. Current total spending: "+ totalExpenses);
        } else {
            // Update the state only if it's a valid number and within the limit
            setNewBudget(inputValue);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" max="20000" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;