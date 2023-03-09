import React from 'react'

import icon from '../../assets/S7 Logo.svg'

import styles from './Ticket.module.scss'

function Ticket() {
  return (
    <li className={styles.ticket}>
      <div className={styles.ticket__header}>
        <p className={styles.ticket__price}>13 400 Р</p>
        <img className={styles.ticket__image} src={icon}></img>
      </div>
      <div className={styles.ticket__information}>
        <span>
          <p className={styles.ticket__information__name}>MOW - HKT</p>
          <p className={styles.ticket__information__value}>10:45-08:00</p>
        </span>
        <span>
          <p className={styles.ticket__information__name}>В ПУТИ</p>
          <p className={styles.ticket__information__value}>21ч 15м</p>
        </span>
        <span>
          <p className={styles.ticket__information__name}>2 ПЕРЕСАДКИ</p>
          <p className={styles.ticket__information__value}>HKG, JNB</p>
        </span>
      </div>
      <div className={styles.ticket__information}>
        <span>
          <p className={styles.ticket__information__name}>MOW - HKT</p>
          <p className={styles.ticket__information__value}>10:45-08:00</p>
        </span>
        <span>
          <p className={styles.ticket__information__name}>В ПУТИ</p>
          <p className={styles.ticket__information__value}>21ч 15м</p>
        </span>
        <span>
          <p className={styles.ticket__information__name}>2 ПЕРЕСАДКИ</p>
          <p className={styles.ticket__information__value}>HKG, JNB</p>
        </span>
      </div>
      <div></div>
    </li>
  )
}

export default Ticket
