import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    // loop through entire object and add to the amounts array
    const amounts = transactions.map(transaction => transaction.amount);
    console.log(amounts)
    // use reduce to add them all together and 2 decimal places
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
