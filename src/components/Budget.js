import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <input
        required='required'
        type='number'
        id='cost'
        value={quantity}
        style={{size: 10}}
        onChange={(event) => setQuantity(event.target.value)}>
        </input>
    );
};

export default Budget;
