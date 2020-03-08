import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";
import axios from 'axios';

// 1. setup initial state as empty
// 2. function getTransaction gets called in TransactionsList from the backend
// 3. dispatch GET_TRANSACTIONS in our provider/reducer, send data as payload
// 4. in reducer, changes the state to the latest global state


// fetch from backend, get transactions state and send down to provider, then grab from component
const initialState = {
    // { id: 1, text: 'Flower', amount: -20 }
    transactions: [],
    error: null,
    loading: true
}

// Create context 
export const GlobalContext = createContext(initialState)

// This is provider component - allows other components to access global state 
// we will do all our requests through actions
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');
            // console.log(res.data.data)

            // dispatch to our reducer - make request, send results to state
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }
    }

    // actions - calls to reducer
    async function deleteTransaction(id) {
        try {
            // deletes from database first , then UI
            await axios.delete(`/api/v1/transactions/${id}`)
            // dispatch an object to our reducer
            dispatch({
                type: 'DELETE_TRANSACTION',
                // sends our ID
                payload: id
            });
        } catch (err){
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: err.response.data.error
            })
        }

    }

    // actions - calls to reducer
    function addTransaction(transaction) {
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
        error: state.error,
        loading: state.loading,
        // Pass functions down into provider
        getTransactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}