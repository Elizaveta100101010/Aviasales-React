import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styles from './LoadingBar.module.scss'

function LoadingBar() {
  const progress = useSelector((state) => state.dataTicket.progress)

  return (
    <div className={styles.loadingbar}>
      <div
        className={`${styles['loadingbar']} ${styles['loadingbar__progress']}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default LoadingBar
