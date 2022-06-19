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
            state.balance += Number(Number(transactionToBeRemoved.transactionAmount.toFixed(2)));
        } else if (transactionToBeRemoved.transactionType === 'Deposit') {
            state.balance -= Number(Number(transactionToBeRemoved.transactionAmount.toFixed(2)));
        }

        state.transactionsList = state.transactionsList.filter(transaction => transaction.transactionId !== action.payload)
    },
    expense: (state, action) => {
        state.balance = Number(Number(state.balance).toFixed(2)) - Number(Number(action.payload).toFixed(2));
    },
    deposit: (state, action) => {
        state.balance = Number(Number(state.balance).toFixed(2)) + Number(Number(action.payload).toFixed(2));
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