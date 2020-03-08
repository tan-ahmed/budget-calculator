// specify app state changes in response to certain actions/context
// way to change your state and send down to component
export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return { 
                // return whats in our state
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                // uses spread operator to send current state
                ...state,
                // filter out anything with that ID
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // ...state.transaction - this takes out entire array
                // action.payload is the new transaction
                // the new one comes in the payload and is added after the rest of them
                transactions: [...state.transactions, action.payload]
            }
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}