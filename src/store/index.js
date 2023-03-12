import { configureStore } from '@reduxjs/toolkit'

import filterTransferReducer from './filterTransferSlice'
import filterTicketReducer from './filterTicketSlice'
export default configureStore({
  reducer: {
    filterTransfer: filterTransferReducer,
    filterTicket: filterTicketReducer,
  },
})
