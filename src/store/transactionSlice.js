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
    expense: (state, action) => {
        state.balance -= action.payload;
    },
    deposit: (state, action) => {
        state.balance += action.payload;
    },
    resetBalance: state => {
        state.balance = 0;
    }
  },
});

export const { addTransaction, expense, deposit, resetBalance } = transactionSlice.actions;
export default transactionSlice.reducer;