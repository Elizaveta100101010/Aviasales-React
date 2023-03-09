import Button from '../Button'
import FilterTicket from '../FilterTicket'
import FilterTransfer from '../FilterTransfer'
import TicketList from '../TicketList'
import icon from '../../assets/Logo.svg'

import styles from './App.module.scss'

function App() {
  return (
    <div>
      <img className={styles.image} src={icon}></img>
      <div className={styles.content}>
        <FilterTransfer />
        <div className={styles.tickets}>
          <FilterTicket />
          <TicketList />
          <button className={styles.tickets__show}>Показать еще 5 билетов!</button>
        </div>
      </div>
    </div>
  )
}

export default App
