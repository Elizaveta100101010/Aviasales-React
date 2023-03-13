import { configureStore } from '@reduxjs/toolkit'

import filterTransferReducer from './filterTransferSlice'
import filterTicketReducer from './filterTicketSlice'
import dataTicketReducer from './dataTicketSlice'
export default configureStore({
  reducer: {
    filterTransfer: filterTransferReducer,
    filterTicket: filterTicketReducer,
    dataTicket: dataTicketReducer,
  },
})
