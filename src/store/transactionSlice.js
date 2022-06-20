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
            state.balance = (state.balance*100 + transactionToBeRemoved.transactionAmount*100)/100;
        } else if (transactionToBeRemoved.transactionType === 'Deposit') {
            state.balance = (state.balance*100 - transactionToBeRemoved.transactionAmount*100)/100;
        }

        state.transactionsList = state.transactionsList.filter(transaction => transaction.transactionId !== action.payload)
    },
    expense: (state, action) => {
        state.balance = ((state.balance * 100) - (action.payload * 100))/100;
    },
    deposit: (state, action) => {
        state.balance = ((state.balance * 100) + (action.payload * 100))/100;
    },
    sortPriceHighToLow: state => {
        state.transactionsList = state.transactionsList.sort((a, b) => a.transactionAmount - b.transactionAmount)
    },
    sortPriceLowToHigh: state => {
        state.transactionsList = state.transactionsList.sort((a, b) => b.transactionAmount - a.transactionAmount)
    },
    sortDateHighToLow: state => {
        state.transactionsList = state.transactionsList.sort((a, b) => new Date(a.transactionDate) - new Date(b.transactionDate))
    },
    sortDateLowToHigh: state => {
        state.transactionsList = state.transactionsList.sort((a, b) => new Date(b.transactionDate) - new Date(a.transactionDate))
    },
    resetBalance: state => {
        state.balance = 0;
    }
  },
});

export const { addTransaction, deleteTransaction, expense, deposit, sortPriceHighToLow, sortPriceLowToHigh, sortDateHighToLow, sortDateLowToHigh, resetBalance } = transactionSlice.actions;
export default transactionSlice.reducer;