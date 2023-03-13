import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTickets = createAsyncThunk('dataTicket/fetchTickets', async function (_, { rejectWithValue }) {
  try {
    const searchID = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!searchID.ok) {
      return new Error('Wrong search quest for search ID!')
    }
    const bodyId = await searchID.json()
    const id = bodyId.searchId
    const res = id && (await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`))
    if (!res.ok) {
      return new Error('Server is unavailable')
    }
    const body = await res.json()
    const tickets = body.tickets
    return tickets
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

const dataTicketSlice = createSlice({
  name: 'dataTicket',
  initialState: {
    tickets: [],
    status: null,
    error: null,
    progress: 10,
  },

  extraReducers: {
    [fetchTickets.pending]: (state) => {
      state.status = 'loading'
      state.error = null
      state.progress = setInterval(() => {
        state.progress = state.progress + 10
      }, 100)
      clearInterval(state.progress)
    },
    [fetchTickets.fulfilled]: (state, action) => {
      state.tickets = action.payload
      state.progress = 100
      clearInterval(state.progress)
      state.status = 'resolved'
    },
    [fetchTickets.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
  },
})

export default dataTicketSlice.reducer
