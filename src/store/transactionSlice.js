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
            state.balance += parseFloat(transactionToBeRemoved.transactionAmount, 10);
        } else if (transactionToBeRemoved.transactionType === 'Deposit') {
            state.balance -= parseFloat(transactionToBeRemoved.transactionAmount, 10);
        }

        state.transactionsList = state.transactionsList.filter(transaction => transaction.transactionId !== action.payload)
    },
    expense: (state, action) => {
        state.balance -= parseInt(action.payload, 10);
    },
    deposit: (state, action) => {
        state.balance += parseInt(action.payload, 10);
    },
    sortPriceHighToLow: state => {
        state.transactionsList = state.transactionsList.sort((a, b) => a.transactionAmount - b.transactionAmount)
    },
    sortPriceLowToHigh: state => {
        state.transactionsList = state.transactionsList.sort((a, b) => b.transactionAmount - a.transactionAmount)
    },
    resetBalance: state => {
        state.balance = 0;
    }
  },
});

export const { addTransaction, deleteTransaction, expense, deposit, sortPriceHighToLow, sortPriceLowToHigh, resetBalance } = transactionSlice.actions;
export default transactionSlice.reducer;