import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

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
