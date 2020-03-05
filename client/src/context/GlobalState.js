import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer"


// initial state
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create context 
export const GlobalContext = createContext(initialState)

// other components to access globalstate - requires provider
// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions - calls to reducer
    function deleteTransaction(id){
        // dispatch an object to our reducer
        dispatch({
            type: 'DELETE_TRANSACTION',
            // sends our ID
            payload: id
        });
    }

    // actions - calls to reducer
    function addTransaction(transaction){
        // dispatch an object to our reducer
        dispatch({
            type: 'ADD_TRANSACTION',
            // sends our ID
            payload: transaction
        });
    }

    // provides states, actions to components to its wrapped around
    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        // Pass function down into provider
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}