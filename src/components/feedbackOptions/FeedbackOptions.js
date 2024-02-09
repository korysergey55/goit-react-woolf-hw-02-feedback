import React from 'react'
import styles from './styles.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.btnWripper}>
      {
        options?.map((item, index) => (
          <button
            key={index}
            className={styles.button}
            type='button'
            name={item}
            onClick={onLeaveFeedback}>
            {item.toUpperCase()}
          </button>
        ))
      }
    </div>
  );
}

export default FeedbackOptions;