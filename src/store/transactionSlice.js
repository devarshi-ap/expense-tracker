import { createSlice } from '@reduxjs/toolkit';

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactionsList: [],
    balance: 0,
  },
  reducers: {
    addTransaction: (state, action) => {
        state.transactionsList.push(action.payload);
    },
    deleteTransaction: (state, action) => {
        let transactionToBeRemoved = state.transactionsList.filter(transaction => transaction.transactionId == action.payload)[0]
        
        if (transactionToBeRemoved.transactionType === 'Expense') {
            state.balance += parseInt(transactionToBeRemoved.transactionAmount, 10);
        } else if (transactionToBeRemoved.transactionType === 'Deposit') {
            state.balance -= parseInt(transactionToBeRemoved.transactionAmount, 10);
        }

        state.transactionsList = state.transactionsList.filter(transaction => transaction.transactionId !== action.payload)
    },
    expense: (state, action) => {
        state.balance -= parseInt(action.payload, 10);
    },
    deposit: (state, action) => {
        state.balance += parseInt(action.payload, 10);
    },
    resetBalance: state => {
        state.balance = 0;
    }
  },
});

export const { addTransaction, expense, deposit, resetBalance, deleteTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;