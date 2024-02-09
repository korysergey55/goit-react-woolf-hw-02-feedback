import React from 'react'
import styles from './styles.module.css'
import Notification from 'components/notification/Notification'

const Statistic = ({ state, countTotalFeedback, positivePercentage }) => {
  return (
    countTotalFeedback() ?
      (< ul className={styles.list} >
        <li className={styles.item}>
          <p className={styles.text}>Good: {state.good}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>Neutral: {state.neutral}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>Bad: {state.bad}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.title}>Total: {countTotalFeedback()}</p>
        </li>
        <li className={styles.item}>
          <p className={styles.title}>Positive feedback: {positivePercentage()} % </p>
        </li>
      </ul>
      ) : <Notification message={'There is no feedback'} />
  )
}

export default Statistic;