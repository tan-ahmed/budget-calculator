// specify app state changes in response to certain actions/context
// way to change your state and send down to component
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                // uses spread operator to send current state
                // change transactions value
                ...state,
                // filter out anything with tat ID
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // ...state.transaction - this takes out entire array
                // action.payload is the new transaction
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}