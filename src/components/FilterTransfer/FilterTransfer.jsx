import React from 'react'

import styles from './FilterTransfer.module.scss'

function FilterTransfer() {
  return (
    <div className={styles.filter}>
      <p className={styles.filter__name}>Количество пересадок</p>
      <ul>
        <li className={styles.filter__transfer}>
          <input className={styles.filter__checkbox} type="checkbox"></input>
          <label className={styles.filter__label}>Все</label>
        </li>
        <li className={styles.filter__transfer}>
          <input className={styles.filter__checkbox} type="checkbox" checked="checked"></input>
          <label className={styles.filter__label}>Без пересадок</label>
        </li>
        <li className={styles.filter__transfer}>
          <input className={styles.filter__checkbox} type="checkbox" checked="checked"></input>
          <label className={styles.filter__label}>1 пересадка</label>
        </li>
        <li className={styles.filter__transfer}>
          <input className={styles.filter__checkbox} type="checkbox" checked="checked"></input>
          <label className={styles.filter__label}>2 пересадки</label>
        </li>
        <li className={styles.filter__transfer}>
          <input className={styles.filter__checkbox} type="checkbox"></input>
          <label className={styles.filter__label}>3 пересадки</label>
        </li>
      </ul>
    </div>
  )
}

export default FilterTransfer
