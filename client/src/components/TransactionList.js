import React, {useContext} from 'react'
// pull global state
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
    // pull from global context
    // destructuring array from object
    const {transactions} = useContext(GlobalContext);
    console.log(transactions)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {/* map through object */}
                {transactions.map(transaction => (
                    // render transaction component passed as prop
                    <Transaction key={transaction.text} transaction={transaction} />
                ))}
                
            </ul>
        </>
    )
}
