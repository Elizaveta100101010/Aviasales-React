import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleType } from '../../store/filterTicketSlice'

import styles from './FilterTicket.module.scss'

function FilterTicket() {
  const dispatch = useDispatch()
  const filtersStatus = useSelector((state) => state.filterTicket)
  return (
    <div className={styles.filter}>
      <button
        className={`${styles['filter__button']} ${
          filtersStatus.cheapestTicket ? styles['filter__button--active'] : ''
        }`}
        onClick={() => dispatch(toggleType('cheapestTicket'))}
      >
        Самый дешевый
      </button>
      <button
        className={`${styles['filter__button']} ${filtersStatus.fasterTicket ? styles['filter__button--active'] : ''}`}
        onClick={() => dispatch(toggleType('fasterTicket'))}
      >
        Самый быстрый
      </button>
    </div>
  )
}

export default FilterTicket
