import React from 'react'
import { add, format } from 'date-fns'

import icon from '../../assets/S7 Logo.svg'

import styles from './Ticket.module.scss'

function Ticket({ price, segments, carrier }) {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60)
    let minutes = mins % 60
    return hours + 'ч ' + minutes + 'м'
  }

  function getTransfers(somefly) {
    if (somefly.stops.length === 1) return '1 ПЕРЕСАДКА'
    else if (somefly.stops.length === 0) return 'ПЕРЕСАДОК НЕТ'
    else return somefly.stops.length + ' ПЕРЕСАДКИ'
  }
  function getTime(somefly) {
    const result = format(new Date(somefly.date), 'HH:mm')
    const result2 = format(add(new Date(somefly.date), { minutes: somefly.duration }), 'HH:mm')
    return result + ' - ' + result2
  }
  const firstfly = segments[0]
  const secondfly = segments[1]
  return (
    <li className={styles.ticket}>
      <div className={styles.ticket__header}>
        <p className={styles.ticket__price}>{price} P</p>
        <img className={styles.ticket__image} src={`https://pics.avs.io/99/36/${carrier}.png`}></img>
      </div>
      <div className={styles.ticket__information}>
        <span>
          <p className={styles.ticket__information__name}>
            {firstfly.origin} - {firstfly.destination}
          </p>
          <p className={styles.ticket__information__value}>{getTime(firstfly)}</p>
        </span>
        <span>
          <p className={styles.ticket__information__name}>В ПУТИ</p>
          <p className={styles.ticket__information__value}>{getTimeFromMins(firstfly.duration)}</p>
        </span>
        <span>
          <p className={styles.ticket__information__name}>{getTransfers(firstfly)}</p>
          <p className={styles.ticket__information__value}>{firstfly.stops.join(', ')}</p>
        </span>
      </div>
      <div className={styles.ticket__information}>
        <span>
          <p className={styles.ticket__information__name}>
            {secondfly.origin} - {secondfly.destination}
          </p>
          <p className={styles.ticket__information__value}>{getTime(secondfly)}</p>
        </span>
        <span>
          <p className={styles.ticket__information__name}>В ПУТИ</p>
          <p className={styles.ticket__information__value}>{getTimeFromMins(secondfly.duration)}</p>
        </span>
        <span>
          <p className={styles.ticket__information__name}>{getTransfers(secondfly)}</p>
          <p className={styles.ticket__information__value}>{secondfly.stops.join(', ')}</p>
        </span>
      </div>
      <div></div>
    </li>
  )
}

export default Ticket
