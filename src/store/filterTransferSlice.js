import { createSlice } from '@reduxjs/toolkit'

const filterTransferSlice = createSlice({
  name: 'filterTransfer',
  initialState: {
    allTransfers: false,
    zeroTransfers: true,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  },
  reducers: {
    toggleAllFilter: (state, action) => {
      state[action.payload] = !state[action.payload]
      Object.keys(state).forEach((el) => (state[el] = state[action.payload]))
    },
    toggleFilter: (state, action) => {
      state[action.payload] = !state[action.payload]
      Object.values(state)
        .slice(1)
        .filter((x) => x === true).length == 4
        ? (state.allTransfers = true)
        : (state.allTransfers = false)
    },
  },
})

export const { toggleFilter, toggleAllFilter } = filterTransferSlice.actions

export default filterTransferSlice.reducer
