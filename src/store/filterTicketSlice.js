import { createSlice } from '@reduxjs/toolkit'

const filterTicketSlice = createSlice({
  name: 'filterTicket',
  initialState: {
    cheapestTicket: true,
    fasterTicket: false,
  },
  reducers: {
    toggleType: (state, action) => {
      state[action.payload] = !state[action.payload]
      Object.keys(state).forEach((el) => (el !== action.payload ? (state[el] = !state[action.payload]) : null))
    },
  },
})

export const { toggleType } = filterTicketSlice.actions

export default filterTicketSlice.reducer
