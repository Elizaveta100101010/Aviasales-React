import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Ticket from '../Ticket'
import { fetchTickets } from '../../store/dataTicketSlice'

import styles from './TicketList.module.scss'

function TicketList() {
  const tickets = useSelector((state) => state.dataTicket.tickets)
  console.log(tickets)
  const elements = tickets.map((item) => {
    const { id, ...itemProps } = item
    return <Ticket {...item} key={id} />
  })
  return <ul>{elements}</ul>
}

export default TicketList
