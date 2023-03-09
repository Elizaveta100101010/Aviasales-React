import React from 'react'

import styles from './FilterTicket.module.scss'

function FilterTicket() {
  return (
    <div className={styles.filter}>
      <div className={`${styles['filter__button']} ${styles['filter__button--active']}`}>Самый дешевый</div>
      <div className={styles.filter__button}>Самый быстрый</div>
    </div>
  )
}

export default FilterTicket
