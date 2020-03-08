import React, {useContext, useEffect} from 'react'
// pull global state
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'



export const TransactionList = () => {
    // pull from global context
    // destructuring array from object
    const {transactions, getTransactions } = useContext(GlobalContext);
    // console.log(transactions)

    //use useEffect for any HTTP Request
    useEffect(() => {
        getTransactions();
        // use empty array [] to prevent infinite loop
        // prevent console errors
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
