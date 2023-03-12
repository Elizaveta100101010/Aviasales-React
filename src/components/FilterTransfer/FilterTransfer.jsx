import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleFilter, toggleAllFilter } from '../../store/filterTransferSlice'

import styles from './FilterTransfer.module.scss'

function FilterTransfer() {
  const dispatch = useDispatch()
  const filtersStatus = useSelector((state) => state.filterTransfer)
  const types = Object.keys(filtersStatus)
  const AddFilter = (event) => dispatch(toggleFilter(event.target.id))
  const AddAllFilter = (event) => dispatch(toggleAllFilter(event.target.id))
  return (
    <div className={styles.filter}>
      <p className={styles.filter__name}>Количество пересадок</p>
      <ul>
        <li className={styles.filter__transfer}>
          <input
            className={styles.filter__checkbox}
            type="checkbox"
            checked={filtersStatus.allTransfers}
            id={types[0]}
            onChange={AddAllFilter}
          ></input>
          <label htmlFor={types[0]} className={styles.filter__label}>
            Все
          </label>
        </li>
        <li className={styles.filter__transfer}>
          <input
            className={styles.filter__checkbox}
            type="checkbox"
            checked={filtersStatus.zeroTransfers}
            id={types[1]}
            onChange={AddFilter}
          ></input>
          <label htmlFor={types[1]} className={styles.filter__label}>
            Без пересадок
          </label>
        </li>
        <li className={styles.filter__transfer}>
          <input
            className={styles.filter__checkbox}
            type="checkbox"
            checked={filtersStatus.oneTransfer}
            id={types[2]}
            onChange={AddFilter}
          ></input>
          <label htmlFor={types[2]} className={styles.filter__label}>
            1 пересадка
          </label>
        </li>
        <li className={styles.filter__transfer}>
          <input
            className={styles.filter__checkbox}
            type="checkbox"
            checked={filtersStatus.twoTransfers}
            id={types[3]}
            onChange={AddFilter}
          ></input>
          <label htmlFor={types[3]} className={styles.filter__label}>
            2 пересадки
          </label>
        </li>
        <li className={styles.filter__transfer}>
          <input
            className={styles.filter__checkbox}
            type="checkbox"
            checked={filtersStatus.threeTransfers}
            id={types[4]}
            onChange={AddFilter}
          ></input>
          <label htmlFor={types[4]} className={styles.filter__label}>
            3 пересадки
          </label>
        </li>
      </ul>
    </div>
  )
}

export default FilterTransfer
