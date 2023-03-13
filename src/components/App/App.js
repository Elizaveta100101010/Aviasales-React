import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LoadingBar from '../LoadingBar'
import FilterTicket from '../FilterTicket'
import FilterTransfer from '../FilterTransfer'
import TicketList from '../TicketList'
import icon from '../../assets/Logo.svg'
import { fetchTickets } from '../../store/dataTicketSlice'

import styles from './App.module.scss'

function App() {
  const dispatch = useDispatch()
  const { status, error } = useSelector((state) => state.dataTicket)
  useEffect(() => {
    dispatch(fetchTickets())
  }, [dispatch])

  return (
    <div>
      <img className={styles.image} src={icon}></img>
      <div className={styles.content}>
        <FilterTransfer />
        <div className={styles.tickets}>
          <FilterTicket />
          {status === 'loading' && <LoadingBar />}
          {error && <h2> An erorr </h2>}
          <TicketList />
          <button className={styles.tickets__show}>Показать еще 5 билетов!</button>
        </div>
      </div>
    </div>
  )
}

export default App
