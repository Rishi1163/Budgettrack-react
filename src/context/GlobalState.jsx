import React, { createContext, useReducer } from "react";

// Initial state
const initialState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Reducer function
const AppReducer = (state, action) => {
    switch (action.type) {
        // Define your action cases here
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions : state.transactions.filter(transaction => transaction.id !== action.payload)
            }
           case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions : [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
};

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    return (
        <GlobalContext.Provider value={{ transactions: state.transactions , deleteTransaction , addTransaction }}>
            {children}
        </GlobalContext.Provider>
    );
};